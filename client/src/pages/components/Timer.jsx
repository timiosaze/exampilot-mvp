import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Timer = ({ minute = 10 }) => {
  let minutes = minute;
  let count = 60;
  let seconds = minutes * count;
  const [sec, setSec] = useState(seconds);
  const [minuteHand, setMinuteHand] = useState(Math.floor(seconds / 60));
  let intervalId;
  function startInterval() {
    intervalId ??= setInterval(startTiming, 1000);
  }

  function startTiming() {
    if (seconds > 0) {
      seconds--;
      let min = Math.floor(seconds / 60);
      setSec(seconds);
      setMinuteHand(min);
    } else {
      stopTimer();
    }
  }

  function stopTimer() {
    clearInterval(intervalId);
    // release our intervalId from the variable
    intervalId = null;
    window.location.href = "/dashboard";
  }

  useEffect(() => {
    startInterval();
  }, []);
  return (
    <span className="text-[15px] font-bold text-red-700 ml-3">
      {minuteHand} minutes
    </span>
  );
};
export default Timer;
