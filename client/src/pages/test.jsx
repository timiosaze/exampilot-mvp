import { useEffect, useState } from "react";
import customFetch from "../../../utils/customFetch.js";

export default function Test() {
  let minutes = 2;
  let count = 60;
  let seconds = minutes * count;
  const [sec, setSec] = useState(seconds);
  const [minuteHand, setMinuteHand] = useState(Math.floor(seconds / 60));
  const [secondHand, setSecondHand] = useState(
    String(seconds % 60).padStart(2, "0")
  );
  let intervalId;
  function startInterval() {
    intervalId ??= setInterval(startTiming, 1000);
  }

  function startTiming() {
    if (seconds > 0) {
      seconds--;
      let min = Math.floor(seconds / 60);
      let sec = String(seconds % 60).padStart(2, "0");
      setSec(seconds);
      setMinuteHand(min);
      setSecondHand(sec);
    }
  }

  function stopTimer() {
    clearInterval(intervalId);
    // release our intervalId from the variable
    intervalId = null;
  }
  useEffect(() => {
    startInterval(); // Call your function inside useEffect
  }, []); //

  return (
    <>
      {/* <button id="button" className="hidden" onClick={showTimer} type="button">
        click
      </button> */}
      <div>{minuteHand + " : " + secondHand}</div>
      <div>{sec}</div>
    </>
  );
}
