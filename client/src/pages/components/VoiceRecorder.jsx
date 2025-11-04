import React, { useRef, useState, useEffect } from "react";

export default function VoiceRecorder() {
  const [recording, setRecording] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [audioURL, setAudioURL] = useState(null);
  const [mimeType, setMimeType] = useState(null);
  const [error, setError] = useState("");

  const mediaRecorderRef = useRef(null);
  const streamRef = useRef(null);
  const chunksRef = useRef([]);
  const tickRef = useRef(null);
  const stopTimeoutRef = useRef(null);

  const chooseMimeType = () => {
    const types = [
      "audio/webm;codecs=opus",
      "audio/ogg;codecs=opus",
      "audio/mp4",
      "audio/webm",
      "audio/ogg",
    ];
    for (const t of types) {
      if (window.MediaRecorder && MediaRecorder.isTypeSupported?.(t)) return t;
    }
    return undefined; // let MediaRecorder decide
  };

  const getExt = (mt) => {
    const map = {
      "audio/webm;codecs=opus": "webm",
      "audio/webm": "webm",
      "audio/ogg;codecs=opus": "ogg",
      "audio/ogg": "ogg",
      "audio/mp4": "m4a",
    };
    return map[mt] || "webm";
  };

  const start = async () => {
    try {
      setError("");
      setAudioURL((old) => {
        if (old) URL.revokeObjectURL(old);
        return null;
      });

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      const mt = chooseMimeType();
      setMimeType(mt || "audio/webm");

      const mr = new MediaRecorder(stream, mt ? { mimeType: mt } : undefined);
      mediaRecorderRef.current = mr;
      chunksRef.current = [];

      mr.ondataavailable = (e) => {
        if (e.data && e.data.size > 0) chunksRef.current.push(e.data);
      };

      mr.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: mt || "audio/webm" });
        const url = URL.createObjectURL(blob);
        setAudioURL(url);
        cleanupStream();
      };

      // Start recording
      mr.start(); // timeslice not needed; ondataavailable fires on stop
      setRecording(true);
      setTimeLeft(60);

      // Countdown & auto-stop at 60s
      tickRef.current = setInterval(() => {
        setTimeLeft((t) => {
          if (t <= 1) {
            stop(); // will clear interval too
            return 0;
          }
          return t - 1;
        });
      }, 1000);
      stopTimeoutRef.current = setTimeout(stop, 60000);
    } catch (err) {
      setError(err?.message || "Microphone access failed");
      cleanupStream();
    }
  };

  const stop = () => {
    try {
      if (tickRef.current) clearInterval(tickRef.current);
      if (stopTimeoutRef.current) clearTimeout(stopTimeoutRef.current);
      tickRef.current = null;
      stopTimeoutRef.current = null;

      if (
        mediaRecorderRef.current &&
        mediaRecorderRef.current.state !== "inactive"
      ) {
        mediaRecorderRef.current.stop();
      }
      setRecording(false);
    } catch (e) {
      // ignore
    }
  };

  const cleanupStream = () => {
    streamRef.current?.getTracks()?.forEach((t) => t.stop());
    streamRef.current = null;
  };

  useEffect(() => {
    return () => {
      // unmount cleanup
      if (tickRef.current) clearInterval(tickRef.current);
      if (stopTimeoutRef.current) clearTimeout(stopTimeoutRef.current);
      cleanupStream();
      if (audioURL) URL.revokeObjectURL(audioURL);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const upload = async () => {
    if (!audioURL) return;
    const res = await fetch(audioURL);
    const buf = await res.arrayBuffer();
    const blob = new Blob([buf], { type: mimeType || "audio/webm" });
    const ext = getExt(mimeType);
    const file = new File([blob], `recording.${ext}`, { type: blob.type });

    const fd = new FormData();
    fd.append("file", file);

    const r = await fetch("http://localhost:4000/api/upload", {
      method: "POST",
      body: fd,
    });
    const json = await r.json();
    alert(r.ok ? `Uploaded: ${json.filename}` : `Upload failed: ${json.error}`);
  };

  const percent = ((60 - timeLeft) / 60) * 100;

  return (
    <div style={{ maxWidth: 520, fontFamily: "system-ui, sans-serif" }}>
      <h3>60-Second Voice Recorder</h3>
      {error && <div style={{ color: "crimson" }}>{error}</div>}

      <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
        <button onClick={start} disabled={recording}>
          Start (60s)
        </button>
        <button onClick={stop} disabled={!recording}>
          Stop
        </button>
      </div>

      <div style={{ margin: "8px 0" }}>
        <div style={{ height: 8, background: "#eee", borderRadius: 4 }}>
          <div
            style={{
              width: `${percent}%`,
              height: 8,
              background: recording ? "#3b82f6" : "#16a34a",
              borderRadius: 4,
            }}
          />
        </div>
        <div style={{ fontSize: 12, marginTop: 4 }}>
          Time left: {timeLeft}s {mimeType ? `• ${mimeType}` : ""}
        </div>
      </div>

      {audioURL && (
        <div style={{ marginTop: 10 }}>
          <audio controls src={audioURL} />
          <div style={{ marginTop: 6, display: "flex", gap: 8 }}>
            <a href={audioURL} download>
              Download
            </a>
            <button onClick={upload}>Upload to server</button>
          </div>
        </div>
      )}
    </div>
  );
}
