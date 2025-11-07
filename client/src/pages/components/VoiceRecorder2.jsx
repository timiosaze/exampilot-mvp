import React, { useState } from "react";
import customFetch from "../../../../utils/customFetch";
import { data } from "react-router";
import fs from "fs";
// import { AudioContext } from "web-audio-api";

const VoiceRecorder2 = ({ index, question, audioSaved }) => {
  // Assuming 'audioBuffer' is your AudioBuffer object
  const [recordingTime, setRecordingTime] = useState(0);

  async function saveFile(blob) {
    // create a new handle
    try {
      const array = await blob.arrayBuffer();
      const buffer = Buffer.from(array);
      await customFetch.post("/section/speech", {
        data: buffer,
        index: index,
        question: question,
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  if (navigator.mediaDevices) {
    const constraints = { audio: true };
    let chunks = [];
    //
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((stream) => {
        const mediaRecorder = new MediaRecorder(stream);
        const record = document.getElementById("start");
        const stop = document.getElementById("stop");
        const time = 60;
        let count = 0;

        let intervalId;

        function startInterval() {
          intervalId ??= setInterval(incrementRecordingTime, 1000);
        }

        function incrementRecordingTime() {
          if (count < time) {
            count++;
            setRecordingTime(count);
          } else {
            stopIncrementingTime();
          }
        }

        function stopIncrementingTime() {
          mediaRecorder.stop();
          console.log(mediaRecorder.state);
          console.log("recorder stopped");
          record.style.background = "";
          record.style.color = "";
          clearInterval(intervalId);
          intervalId = null;
          setRecordingTime(0);
        }

        record.onclick = () => {
          mediaRecorder.start();
          startInterval();
          console.log(mediaRecorder.state);
          console.log("recorder started");
          record.style.background = "red";
          record.style.color = "black";
        };

        // stop.onclick = () => {
        //   mediaRecorder.stop();
        //   console.log(mediaRecorder.state);
        //   console.log("recorder stopped");
        //   record.style.background = "";
        //   record.style.color = "";
        // };

        mediaRecorder.onstop = (e) => {
          console.log("data available after MediaRecorder.stop() called.");
          const blob = new Blob(chunks, { type: "audio/ogg; codecs=opus" });
          chunks = [];
          // const audioURL = URL.createObjectURL(blob);
          // audio.src = audioURL;
          console.log("recorder stopped");
        };

        mediaRecorder.ondataavailable = (e) => {
          chunks.push(e.data);
          const blob = new Blob(chunks, { type: "audio/ogg; codecs=opus" });
          saveFile(blob);
        };
      })
      .catch((err) => {
        console.error(`The following error occurred: ${err}`);
      });
  }
  return (
    <div className="">
      <div className="flex justify-center items-center">
        <button
          type="button"
          id="start"
          class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5 mr-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
            />
          </svg>
          Start
        </button>
      </div>
      {/* <button
        type="button"
        id="stop"
        class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      >
        Submit
      </button> */}
      <div className="w-70 p-6 flex items-center border-2 border-gray-500 rounded-xl">
        <div
          className="h-5 bg-primary-600"
          style={{ width: `${recordingTime * 4}px` }}
        ></div>
      </div>
      <p>{recordingTime == 60 ? "Saved" : ""}</p>
      <div id="div"></div>
    </div>
  );
};
export default VoiceRecorder2;
