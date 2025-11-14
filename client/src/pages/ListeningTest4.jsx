import DashNavbar2 from "./layout/DashNavbar2";
import { Button } from "flowbite-react";
import { CircleAlert } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import React from "react";
import { Link } from "react-router";
import customFetch from "../../../utils/customFetch.js";
import imgUrl from "./listening1.png";
import audioUrl from "./listening_question.mp3";

const ListeningTest4 = () => {
  const [audioLink, setAudioLink] = useState(null);
  useEffect(() => {
    let ignore = false;
    customFetch.get("/section/listening").then((data) => {
      console.log(data.data.listeningQuestions[0].question_audio);
      setAudioLink(data.data.listeningQuestions[0].question_audio);
    });
    return () => {
      ignore = true;
    };
  }, [audioLink]);
  return (
    <div className="relative">
      <DashNavbar2 />

      <div
        style={{ backgroundImage: `url("${imgUrl}")` }}
        class=" bg-no-repeat bg-fixed h-screen w-full absolute top-0 left-0 -z-10"
      >
        <div className=" max-w-[1086px] w-full z-10 m-auto mt-25">
          <div className="h-[67px] bg-[#200943] shadow-md flex items-center justify-between text-lg shadow-black mt-10 xl:mt-0">
            <p className="text-white text-lg font-bold leading-17 ml-8">
              Practice Test A - Listening Test
            </p>
            <p className="text-white text-sm leading-17 ml-8"></p>
          </div>
          <div className="h-[600px]  bg-[#EDEDED] flex flex-col overflow-y-scroll ">
            <div className="mt-10 mr-10">
              <Link
                to="/listening-6"
                className="float-right text-white rounded-none hover:bg-[#200943]/50 bg-[#200943] text-sm p-2"
              >
                NEXT
              </Link>
            </div>
            <div className="flex flex-col justify-center items-center xl:px-10 px-2 mb-6">
              <div class="inline-flex flex-1 items-center mb-4">
                <CircleAlert className="w-5 h-5 mr-2 ml-6" />
                <p className="text-sm text-[#525866]">
                  Listen to the conversation. You will hear the conversation
                  only once. It is about 1 to 1.5 minutes long
                </p>
              </div>
              <div>
                <audio controls src={audioUrl}></audio>
              </div>
            </div>
            <div className="mt-10 mr-10">
              <Link
                to="/listening-3a"
                className="float-right rounded-none bg-red-600 hover:bg-red-800 text-sm p-2"
              >
                BACK
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ListeningTest4;
