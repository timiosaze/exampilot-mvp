import DashNavbar2 from "./layout/DashNavbar2";
import { Button } from "flowbite-react";
import { CircleAlert } from "lucide-react";
import { useState } from "react";
import React from "react";

const ListeningTest5 = () => {
  return (
    <div className="relative">
      <DashNavbar2 />

      <div class="bg-[url(public/pictures/listening1.png)] bg-no-repeat bg-fixed h-screen w-full absolute top-0 left-0 -z-10">
        <div className=" max-w-[1086px] w-full z-10 m-auto mt-25">
          <div className="h-[67px] bg-[#200943] shadow-md flex items-center justify-between text-lg shadow-black mt-10 xl:mt-0">
            <p className="text-white text-lg font-bold leading-17 ml-8">
              Practice Test A - Listening Test
            </p>
            <p className="text-white text-sm leading-17 ml-8">
              Time remaining:{" "}
              <span className="text-[15px] font-bold text-red-700">00:30</span>
            </p>
          </div>
          <div className="h-[600px]  bg-[#EDEDED] flex flex-col overflow-y-scroll ">
            <div className="mt-6 mb-4 mr-10">
              <Button className="float-right text-slate-50 rounded-none hover:bg-[#200943]/50 bg-[#200943] text-sm p-2">
                NEXT
              </Button>
            </div>
            <div className="flex items-center justify-center flex-wrap">
              <div className="flex flex-col justify-center items-center xl:px-10 px-2 mb-4">
                <div class="inline-flex flex-1 items-center mb-4">
                  <CircleAlert className="w-5 h-5 mr-2 ml-6" />
                  <p className="text-sm text-[#525866]">
                    Listen to the question. You will hear it once.
                  </p>
                </div>
                <div>
                  <audio controls>
                    <source src="public/audios/a.mp3" type="audio/mp3"></source>
                    Playing ...
                  </audio>
                </div>
              </div>
              <div className="flex flex-col xl:px-10 px-2 mx-2">
                <p className="text-sm text-[#525866] mb-2">Question 1 of 8</p>
                <div className="grid grid-cols-2 gap-4">
                  <div class="flex items-center mb-6">
                    <input
                      id="default-radio-1"
                      type="radio"
                      value=""
                      name="default-radio"
                      class="w-4 h-4 mr-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="default-radio-1"
                      className="ms-2 bg-[url(./public/pictures/listeningImg.jpg)] h-20 w-24  bg-no-repeat"
                    ></label>
                  </div>
                  <div class="flex items-center mb-6 ">
                    <input
                      id="default-radio-1"
                      type="radio"
                      value=""
                      name="default-radio"
                      class="w-4 h-4 mr-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="default-radio-1"
                      className="ms-2 bg-[url(./public/pictures/listeningImg.jpg)] h-20 w-24  bg-no-repeat"
                    ></label>
                  </div>
                  <div class="flex items-center mb-6 ">
                    <input
                      id="default-radio-1"
                      type="radio"
                      value=""
                      name="default-radio"
                      class="w-4 h-4 mr-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="default-radio-1"
                      className="ms-2 bg-[url(./public/pictures/listeningImg.jpg)] h-20 w-24  bg-no-repeat"
                    ></label>
                  </div>
                  <div class="flex items-center mb-6 ">
                    <input
                      id="default-radio-1"
                      type="radio"
                      value=""
                      name="default-radio"
                      class="w-4 h-4 mr-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="default-radio-1"
                      className="ms-2 bg-[url(./public/pictures/listeningImg.jpg)] h-20 w-24  bg-no-repeat"
                    ></label>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 mx-10">
              <Button className="float-left text-gray-900 rounded-none bg-slate-200 hover:bg-slate-300 text-sm p-2">
                ANSWER KEY
              </Button>
              <Button className="float-right rounded-none bg-red-600 hover:bg-red-800 text-sm p-2">
                BACK
              </Button>
              <div className="clear-both"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ListeningTest5;
