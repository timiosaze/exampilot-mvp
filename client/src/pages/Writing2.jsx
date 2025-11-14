import { Button } from "flowbite-react";
import DashNavbar2 from "./layout/DashNavbar2";

import { useState } from "react";
import imgUrl from "./listening1.png";

const Writing2 = () => {
  function next() {
    window.location.href = "/writing-3";
  }
  function prev() {
    window.location.href = "/writing";
  }
  return (
    <div className="relative">
      <DashNavbar2 />

      <div
        style={{ backgroundImage: `url("${imgUrl}")` }}
        class=" bg-no-repeat bg-fixed h-screen w-full absolute top-0 left-0 -z-10 "
      >
        <div className=" max-w-[1086px] w-full z-10 m-auto mt-25">
          <div className="h-[67px] bg-[#200943] shadow-md  shadow-black mt-10 xl:mt-0">
            <p className="text-white text-lg font-bold leading-17 ml-8">
              Writing Test Instructional Video
            </p>
          </div>
          <div className="h-[600px]  bg-[#EDEDED] flex flex-col overflow-y-scroll ">
            <div className="flex flex-col justify-center items-center mx-4">
              <div className="w-full h-full overflow-hidden flex items-center justify-center">
                <iframe
                  width="560"
                  height="315"
                  className="mt-16"
                  src="https://www.youtube.com/embed/VIDEO_ID"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <Button
                onClick={next}
                className="float-right rounded-none bg-blue-400 hover:bg-blue-600 mt-2 text-sm p-2"
              >
                SKIP VIDEO
              </Button>
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
export default Writing2;
