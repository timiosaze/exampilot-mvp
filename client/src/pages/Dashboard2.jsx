import {
  Clock4,
  HeadphonesIcon,
  BookOpenText,
  PenLineIcon,
  Mic,
} from "lucide-react";
import { useState } from "react";

import SideBar from "./layout/Sidebar";
import DashNavbar from "./layout/DashNavbar";

const Dashboard2 = () => {
  const [sideBarCollapsed, setSideBarCollapsed] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");
  const [practiceTime, setPracticeTime] = useState("30");

  const changePracticeTime = (e) => {
    setPracticeTime(e.target.value);
  };
  return (
    <div className="min-h-screen transition-all duration-500">
      <div class="flex h-screen overflow-hidden">
        {/* { Sidebar } */}
        <SideBar
          sideBarCollapsed={sideBarCollapsed}
          onToggle={() => setSideBarCollapsed(!sideBarCollapsed)}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
        {/* {End of Side Bar} */}
        <div className="flex flex-col overflow-hidden  w-full">
          {/* { Header } */}
          <DashNavbar
            sideBarCollapsed={sideBarCollapsed}
            toggleSideBar={() => setSideBarCollapsed(!sideBarCollapsed)}
          />
          {/* { End of Header} */}
          {/* <div className="w-full min-w-xs  overflow-y-auto">
            <div className="text-center text-gray-900 mb-12">
              <p className="font-bold text-2xl mb-2 mt-6">
                Choose your practice
              </p>
              <p className="text-sm">
                Select a mode to prepare for your{" "}
                <span className="font-bold">IELTS Academy</span> test.
              </p>
            </div>
            <div class="grid grid-flow-col grid-cols-2  gap-4 mx-20 ">
              <div class="col-span-1">
                <div className="bg-white/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 p-6">
                  <div className="flex flex-col">
                    <div className="flex space-x-4 mb-4">
                      <img src="./public/pictures/FOCUS.png" alt="" />
                      <div className="flex flex-col xl:space-y-2 text-gray-900">
                        <p className="font-bold">Focused Practice </p>
                        <p className="text-sm text-[#525866]">
                          AI target your weak areas. Unselect subject to exclude
                          them.
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-flow-col grid-rows-2 grid-cols-2 gap-4 mb-4">
                      <div className="rounded-2xl border border-slate-200/50 p-4 bg-white/80 backdrop-blur-xl hover:border-gray-900 hover:shadow-lg shadow-md">
                        <div className="flex items-center">
                          <HeadphonesIcon className="w-5 h-5 mr-4" />
                          <p className="text-xs">Listening</p>
                        </div>
                      </div>
                      <div className="rounded-2xl border border-slate-200/50 p-4 bg-white/80 backdrop-blur-xl hover:border-gray-900 hover:shadow-lg shadow-md">
                        <div className="flex items-center">
                          <BookOpenText className="w-5 h-5 mr-4" />
                          <p className="text-xs">Writing</p>
                        </div>
                      </div>
                      <div className="rounded-2xl border border-slate-200/50 p-4 bg-white/80 backdrop-blur-xl hover:border-gray-900 hover:shadow-lg shadow-md">
                        <div className="flex items-center">
                          <PenLineIcon className="w-5 h-5 mr-4" />
                          <p className="text-xs">Reading</p>
                        </div>
                      </div>
                      <div className="rounded-2xl border border-slate-200/50 p-4 bg-white/80 backdrop-blur-xl hover:border-gray-900 hover:shadow-lg shadow-md">
                        <div className="flex items-center">
                          <Mic className="w-5 h-5 mr-4" />
                          <p className="text-xs">Speaking</p>
                        </div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <label
                        for="practice-time"
                        class="block mb-1 text-[15px] text-gray-900 dark:text-white"
                      >
                        Practice time -{" "}
                        <span className="text-sm font-bold">
                          {practiceTime}min
                        </span>
                      </label>
                      <input
                        id="practice-time"
                        type="range"
                        min="0"
                        max="60"
                        value={practiceTime}
                        step="5"
                        onChange={changePracticeTime}
                        class="w-full h-2 bg-gray-200 accent-gray-900 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                      />
                    </div>
                    <button
                      type="button"
                      class="text-white bg-[#200943] hover:bg-[#200943]/80 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                    >
                      Start Focused Practice
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-span-1">
                <div className="bg-white/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 p-6">
                  <div className="text-[#200943] font-bold mb-4">
                    <p>Specific Subject Practice </p>
                  </div>
                  <div className="flex items-center justify-between py-1 px-4 bg-[#F9FAFC] rounded-lg mb-2">
                    <div className="flex items-center">
                      <BookOpenText className="w-5 h-5 text-gray-900 mr-3" />
                      <p className="text-xs">Reading</p>
                    </div>
                    <p className="text-xs">~ 40 mins</p>
                  </div>
                  <div className="flex items-center justify-between py-1 px-4 bg-[#F9FAFC] rounded-lg mb-2">
                    <div className="flex items-center">
                      <HeadphonesIcon className="w-5 h-5 text-gray-900 mr-3" />
                      <p className="text-xs">Listening</p>
                    </div>
                    <p className="text-xs">~ 40 mins</p>
                  </div>
                  <div className="flex items-center justify-between py-1 px-4 bg-[#F9FAFC] rounded-lg mb-2">
                    <div className="flex items-center">
                      <PenLineIcon className="w-5 h-5 text-gray-900 mr-3" />
                      <p className="text-xs">Writing</p>
                    </div>
                    <p className="text-xs">~ 40 mins</p>
                  </div>
                  <div className="flex items-center justify-between py-1 px-4 bg-[#F9FAFC] rounded-lg">
                    <div className="flex items-center">
                      <Mic className="w-5 h-5 text-gray-900 mr-3" />
                      <p className="text-xs">Speaking</p>
                    </div>
                    <p className="text-xs">~ 40 mins</p>
                  </div>
                </div>
              </div>
              <div class="row-span-2">
                <div className="bg-white/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 p-6">
                  <div className="h-144 flex items-center justify-around">
                    <div className="flex items-center flex-col">
                      <div className="mb-2">
                        <img src="./public/pictures/full.png" alt="" />
                      </div>
                      <div>
                        <p className="text-gray-900 text-2xl font-bold">
                          Full Mock Test
                        </p>
                      </div>
                      <div>
                        <p className="text-[14px]/6 text-[#525866] text-center">
                          Take a complete, timed simulation of the official exam
                          to gauge your readiness
                        </p>
                      </div>
                      <div className="my-8">
                        <p className="text-gray-900 font-bold">
                          ~ 2 hours 45 mins
                        </p>
                      </div>
                      <button
                        type="button"
                        class="text-white bg-[#200943] hover:bg-[#200943]/80 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-full"
                      >
                        Start Full Test
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default Dashboard2;
// box-shadow: 0px 0px 2px 2px #00000040;
