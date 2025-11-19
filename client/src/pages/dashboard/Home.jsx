import {
  Clock4,
  HeadphonesIcon,
  BookOpenText,
  PenLineIcon,
  Mic,
} from "lucide-react";
import { useState } from "react";
import { redirect } from "react-router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [practiceTime, setPracticeTime] = useState("30");
  const directToTestSection = (formData) => {
    const test_section = formData.get("test_section");
    if (test_section == null) {
      toast.error("No section chosen");
    }
    // alert(test_section);
    switch (test_section) {
      case "listening":
        window.location.href = "/listening";
        break;
      case "reading":
        window.location.href = "/reading";
        break;
      case "writing":
        window.location.href = "/writing";
        break;
      case "speaking":
        window.location.href = "/speaking";
        break;
      // default:
      //   window.location.reload();
    }
  };
  const changePracticeTime = (e) => {
    setPracticeTime(e.target.value);
  };
  const startFullTest = () => {
    sessionStorage.setItem("fullTest", true);
    window.location.href = "/listening";
  };
  return (
    <div className="w-full min-w-xs  overflow-y-auto">
      <div className="text-center text-gray-900 mb-12">
        <p className="font-bold text-2xl mb-2 mt-6">Choose your practice</p>
        <p className="text-sm">
          Select a mode to prepare for your{" "}
          <span className="font-bold">CELPIP Academy</span> test.
        </p>
      </div>
      <div class="grid grid-flow-col grid-cols-2  gap-4 mx-20 ">
        <div class="col-span-1">
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 p-6">
            <div className="flex flex-col">
              <form action={directToTestSection}>
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
                  <div>
                    <input
                      type="radio"
                      id="listening"
                      name="test_section"
                      value="listening"
                      class="hidden peer"
                    />
                    <label
                      for="listening"
                      class="cursor-pointer peer-checked:border-blue-600 dark:peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100"
                    >
                      <div className="rounded-2xl border border-slate-200/50 p-4 bg-white/80 backdrop-blur-xl hover:border-gray-900 hover:shadow-lg shadow-md">
                        <div className="flex items-center">
                          <HeadphonesIcon className="w-5 h-5 mr-4" />
                          <p className="text-xs">Listening</p>
                        </div>
                      </div>
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="writing"
                      name="test_section"
                      value="writing"
                      class="hidden peer"
                    />
                    <label
                      for="writing"
                      class="cursor-pointer peer-checked:border-blue-600 dark:peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100"
                    >
                      <div className="rounded-2xl border border-slate-200/50 p-4 bg-white/80 backdrop-blur-xl hover:border-gray-900 hover:shadow-lg shadow-md">
                        <div className="flex items-center">
                          <BookOpenText className="w-5 h-5 mr-4" />
                          <p className="text-xs">Writing</p>
                        </div>
                      </div>
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="reading"
                      name="test_section"
                      value="reading"
                      class="hidden peer"
                    />
                    <label
                      for="reading"
                      class="cursor-pointer peer-checked:border-blue-600 dark:peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100"
                    >
                      <div className="rounded-2xl border border-slate-200/50 p-4 bg-white/80 backdrop-blur-xl hover:border-gray-900 hover:shadow-lg shadow-md">
                        <div className="flex items-center">
                          <PenLineIcon className="w-5 h-5 mr-4" />
                          <p className="text-xs">Reading</p>
                        </div>
                      </div>
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="speaking"
                      name="test_section"
                      value="speaking"
                      class="hidden peer"
                    />
                    <label
                      for="speaking"
                      class="cursor-pointer peer-checked:border-blue-600 dark:peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100"
                    >
                      <div className="rounded-2xl border border-slate-200/50 p-4 bg-white/80 backdrop-blur-xl hover:border-gray-900 hover:shadow-lg shadow-md">
                        <div className="flex items-center">
                          <Mic className="w-5 h-5 mr-4" />
                          <p className="text-xs">Speaking</p>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    for="practice-time"
                    class="block mb-1 text-[15px] text-gray-900 dark:text-white"
                  >
                    Practice time -{" "}
                    <span className="text-sm font-bold">{practiceTime}min</span>
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
                  type="submit"
                  class="text-white w-full bg-[#200943] hover:bg-[#200943]/80 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                  Start Focused Practice
                </button>
              </form>
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
                    Take a complete, timed simulation of the official exam to
                    gauge your readiness
                  </p>
                </div>
                <div className="my-8">
                  <p className="text-gray-900 font-bold">~ 2 hours 45 mins</p>
                </div>
                <button
                  type="button"
                  onClick={startFullTest}
                  class="text-white bg-[#200943] hover:bg-[#200943]/80 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-full"
                >
                  Start Full Test
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
