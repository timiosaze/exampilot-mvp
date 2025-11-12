import { Button } from "flowbite-react";
import DashNavbar2 from "./layout/DashNavbar2";

import { useState } from "react";

const Writing5 = () => {
  function prev() {
    window.location.href = "/writing-4";
  }
  function next() {
    nextLocation("/speaking");
  }
  const nextLocation = (location) => {
    if (sessionStorage.getItem("fullTest")) {
      window.location.href = location;
    } else {
      window.location.href = "/dashboard";
    }
  };
  return (
    <div className="relative">
      <DashNavbar2 />

      <div class="bg-[url(public/pictures/listening1.png)] bg-no-repeat bg-fixed h-screen w-full absolute top-0 left-0 -z-10 ">
        <div className=" max-w-[1086px] w-full z-10 m-auto mt-25">
          <div className="h-[67px] bg-[#200943] shadow-md  shadow-black mt-10 xl:mt-0">
            <p className="text-white text-lg text-[15px] font-bold leading-17 ml-8">
              Practice Test A-End of Writing Test
            </p>
          </div>
          <div className="h-[600px]  bg-[#EDEDED] flex flex-col overflow-y-scroll ">
            <div className="mr-10 my-4 mb-2">
              <Button
                onClick={next}
                className="float-right rounded-none hover:bg-[#200943]/50 bg-[#200943] text-sm p-2"
              >
                NEXT
              </Button>
              <div className="clear-right"></div>
            </div>
            <div className="flex justify-center w-full h-[60%] items-center mx-4">
              <div className="text-center">
                <h4 className="w-50 h-30 bg-gray-700 text-white text-xl font-bold rounded-lg flex justify-center items-center">
                  END
                </h4>
                <p>Click Next to Continue</p>
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
export default Writing5;
