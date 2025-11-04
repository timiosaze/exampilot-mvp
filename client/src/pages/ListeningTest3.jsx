import DashNavbar2 from "./layout/DashNavbar2";
import { Button } from "flowbite-react";
import { CircleAlert } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

const ListeningTest3 = () => {
  return (
    <div className="relative">
      <DashNavbar2 />

      <div class="bg-[url(./public/pictures/listening1.png)] bg-no-repeat bg-fixed h-screen w-full absolute top-0 left-0 -z-10">
        <div className=" max-w-[1086px] w-full z-10 m-auto mt-25">
          <div className="h-[67px] bg-[#200943] shadow-md  shadow-black mt-10 xl:mt-0">
            <p className="text-white text-lg  font-bold leading-17 ml-8">
              Practice Test A - Listening Test
            </p>
          </div>
          <div className="h-[600px]  bg-[#EDEDED] flex flex-col overflow-y-scroll ">
            <div className="mt-10 mr-10">
              <Link
                to="/listening-3a"
                className="float-right text-white rounded-none hover:bg-[#200943]/50 bg-[#200943] text-sm p-2"
              >
                NEXT
              </Link>
            </div>
            <div className="flex flex-col xl:px-10 px-2 mb-6">
              <div class="inline-flex items-center mb-4">
                <CircleAlert className="w-5 h-5 mr-2 ml-6" />
                <p className="text-[15px] font-extrabold text-[#525866]">
                  Listening to Problem Solving
                </p>
              </div>
              <ol class="list-[lower-alpha] mx-10 text-[15px]  text-[#525866]">
                <li className="mb-4">
                  You will hear a conversation in 3 sections. You will hear each
                  section only once.
                </li>
                <li className="mb-4">
                  After each section, you will hear 2 or 3 questions. You will
                  hear the questions only once.
                </li>
                <li className="mb-4">
                  Choose the best answer to each question.
                </li>
              </ol>
            </div>
            <div className="mt-10 mr-10">
              <Link
                to="/listening-2"
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
export default ListeningTest3;
