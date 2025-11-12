import DashNavbar2 from "./layout/DashNavbar2";
import { Button } from "flowbite-react";
import { CircleAlert } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import VoiceRecorder2 from "./components/VoiceRecorder2";
import customFetch from "../../../utils/customFetch.js";
import { useLoaderData } from "react-router";

export const loader = async () => {
  return await customFetch
    .get("/section/speaking")
    .then((data) => data.data.speakingQuestions[0].questions);
};

const Speaking3 = () => {
  const questions = useLoaderData();
  let minutes = 12;
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
  }
  useEffect(() => {
    startInterval(); // Call your function inside useEffect
  }, []); //
  // let count = 1;
  const [questionNo, setQuestionNo] = useState(1);
  const [isDisabled, setIsDisabled] = useState(true);
  const question = "The question is " + questions[questionNo - 1].prompt;
  const next = () => {
    if (questionNo >= 1 && questionNo < 8) {
      setQuestionNo(questionNo + 1);
      // console.log(count);
      console.log(questionNo);
    } else {
      nextLocation();
    }
  };

  const prev = () => {
    if (questionNo > 1 && questionNo <= 8) {
      setQuestionNo(questionNo - 1);
    }
  };
  const nextLocation = () => {
    if (sessionStorage.getItem("fullTest")) {
      sessionStorage.removeItem("fullTest");
      window.location.href = "/dashboard";
    }
  };
  // console.log(questions);
  return (
    <div className="relative">
      <DashNavbar2 />

      <div class="bg-[url(public/pictures/listening1.png)] bg-no-repeat bg-fixed h-screen w-full absolute top-0 left-0 -z-10 ">
        <div className=" max-w-[1086px] w-full z-10 m-auto mt-25">
          <div className="h-[67px] bg-[#200943] shadow-md flex items-center justify-between shadow-black mt-10 xl:mt-0">
            <p className="text-white text-lg font-bold leading-17 ml-8">
              Practice Test A - Speaking Task {questionNo}:{" "}
              {questions[questionNo - 1].title}
            </p>
            <p className="text-white text-sm leading-17 mr-8">
              Time:{" "}
              <span className="text-[15px] font-bold text-red-700">
                {minuteHand} minutes
              </span>
            </p>
          </div>
          <div className="h-[600px]  bg-[#EDEDED] flex flex-col overflow-y-scroll ">
            <div className="mt-10 mr-10">
              <Button
                onClick={next}
                className="float-right rounded-none hover:bg-[#200943]/50 bg-[#200943] text-sm p-2"
              >
                NEXT
              </Button>
            </div>
            <div
              className={`flex flex-col w-full justify-center items-center px-2 my-6`}
            >
              <div class="inline-flex flex-1 items-center mb-4">
                <CircleAlert className="w-15 h-15 mr-2 ml-6" />
                <p className="text-md text-[#525866]">
                  {questions[questionNo - 1].prompt}
                </p>
              </div>
              <div>
                <VoiceRecorder2 index={questionNo - 1} question={question} />
              </div>
            </div>
            <div className="mt-10 mr-10">
              <Button
                onClick={prev}
                className="float-right rounded-none bg-red-600 hover:bg-red-800 text-sm p-2"
              >
                BACK
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Speaking3;
