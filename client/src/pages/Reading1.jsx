import DashNavbar2 from "./layout/DashNavbar2";
import { Button } from "flowbite-react";
import { CircleAlert } from "lucide-react";
import { useState } from "react";

const Reading1 = () => {
  function next() {
    window.location.href = "/reading-2";
  }
  return (
    <div className="relative">
      <DashNavbar2 />

      <div class="bg-[url(./public/pictures/listening1.png)] bg-no-repeat bg-fixed h-screen w-full absolute top-0 left-0 -z-10 ">
        <div className=" max-w-[1086px] w-full z-10 m-auto mt-25">
          <div className="h-[67px] bg-[#200943] shadow-md  shadow-black mt-10 xl:mt-0">
            <p className="text-white text-xl   font-bold leading-17 ml-8">
              Practice Test A -Reading Test
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
            <div className="flex flex-col xl:px-10 px-2 mb-6">
              <div class="inline-flex items-center mb-4">
                <CircleAlert className="w-5 h-5 mr-2 ml-6 " />
                <p className="text-[15px] font-extrabold text-[#525866]">
                  Speaking Test Instructions
                </p>
              </div>
              <ol class="list-[lower-alpha] mx-10 text-[15px]  text-[#525866]">
                <li className="mb-4">
                  On the official test, once you leave a page, you cannot go
                  back to it to change your answers. However, in this sample
                  test, you can.
                </li>
                <li className="mb-4">
                  Watch the timer in the top right corner to make sure that you
                  complete the Reading Test before the time is up. For more
                  information on test format, click {" "}
                  <a href="#" className="underline">
                    here
                  </a>
                  .
                </li>
                <li className="mb-4">
                  This Reading Test is identical in format to the official test
                  except that the Reading section of the official test may be
                  slightly longer as it might contain additional questions
                  included for research and development purposes.
                </li>
              </ol>
            </div>
            <div className="mt-10 mr-10">
              <Button className="float-right rounded-none bg-red-600 hover:bg-red-800 text-sm p-2">
                BACK
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Reading1;
