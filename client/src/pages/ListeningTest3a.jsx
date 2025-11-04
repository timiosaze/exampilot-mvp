import DashNavbar2 from "./layout/DashNavbar2";
import { Button } from "flowbite-react";
import { CircleAlert } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

const ListeningTest3a = () => {
  return (
    <div className="relative">
      <DashNavbar2 />

      <div class="bg-[url(./public/pictures/listening1.png)] bg-no-repeat bg-fixed h-screen w-full absolute top-0 left-0 -z-10">
        <div className=" max-w-[1086px] w-full z-10 m-auto mt-25">
          <div className="h-[67px] bg-[#200943] shadow-md  shadow-black mt-10 xl:mt-0">
            <p className="text-white lg:text-xl  font-bold leading-17 ml-8">
              Listening Test Instructional Video
            </p>
          </div>
          <div className="h-[600px]  bg-[#EDEDED] flex flex-col overflow-y-scroll ">
            <div className="mt-10 mr-10">
              <Link
                to="/listening-4"
                className="float-right text-white rounded-none hover:bg-[#200943]/50 bg-[#200943] text-sm p-2"
              >
                NEXT
              </Link>
            </div>
            <div className="flex flex-col xl:px-10 px-2 mb-6 max-w-2xl">
              <div class="inline-flex items-center mb-4">
                <CircleAlert className="!w-5 !h-5 mr-2 ml-2" />
                <p className="text-[15px] font-extrabold text-[#525866]">
                  Instruction
                </p>
              </div>
              <div className="flex flex-col justify-center items-center ">
                <p className="text-sm mb-2 ml-2">
                  You will hear a conversation between a woman and a man. The
                  man is a bus driver and the woman is a passenger trying to get
                  somewhere.
                </p>
                <img src="./public/pictures/list2.png" alt="" />
              </div>
            </div>
            <div className="mt-4 mr-10">
              <Link
                to="/listening-3"
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
export default ListeningTest3a;
