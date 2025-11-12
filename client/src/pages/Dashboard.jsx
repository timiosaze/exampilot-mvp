import {
  Clock4,
  HeadphonesIcon,
  BookOpenText,
  PenLineIcon,
  Mic,
} from "lucide-react";
import { useEffect, useState } from "react";
import {
  Cog8ToothIcon,
  HomeIcon,
  PaperAirplaneIcon,
  SwatchIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { LogOut, Sidebar } from "lucide-react";
// import SideBar from "./layout/Sidebar";
import StatsGrid from "./dashboard/StatsGrid";
import GradeChart from "./dashboard/GradeChart";
import DetailedSkill from "./dashboard/DetailedSkill";
import DashNavbar from "./layout/DashNavbar";
import Home from "./dashboard/Home";
import Profile from "./dashboard/Profile";
import Performance from "./dashboard/Performance";
import { redirect, useLoaderData, Link } from "react-router";
import customFetch from "../../../utils/customFetch.js";
import { logout } from "./logout.js";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Dashboard = () => {
  const userdata = useLoaderData();
  const testResults = userdata.data.user._doc.testResults;
  const [sideBarCollapsed, setSideBarCollapsed] = useState(false);
  const [currentPage, setCurrentPage] = useState("performance");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    customFetch.get("/user/current-user").then((user) => {
      console.log(user.data.user._doc.fullName);
      setUsername(user.data.user._doc.fullName);
      setEmail(user.data.user._doc.email);
    });
  }, [username, email]);

  const switchPage = (currentPage) => {
    if (currentPage === "home") {
      return <Home />;
    } else if (currentPage === "performance") {
      return <Performance username={username} testResults={testResults} />;
    } else if (currentPage === "profile") {
      return <Profile username={username} email={email} />;
    }
  };
  return (
    <div className="min-h-screen transition-all duration-500">
      <div class="flex h-screen overflow-hidden">
        {/* { Sidebar } */}
        <div
          className={`flex flex-col relative justify-between space-y-6 ${
            sideBarCollapsed ? "w-0 hidden" : "w-64"
          } bg-[#ECF5FF] h-screen `}
        >
          <div className="">
            <div class="h-16 flex items-center border-slate-300">
              <div className="pl-4">
                <a href="/">
                  <img src="./public/pictures/Original.png" alt="" />
                </a>
              </div>
              <div>
                <a href="/" className="text-[#200943] font-bold text-xl">
                  Brand
                </a>
              </div>
            </div>
            <div className="mb-2 mx-4 text-gray-900">
              <button
                onClick={() => setCurrentPage("home")}
                className={`inline-flex items-center font-medium text-[13px] hover:bg-[#200943] hover:text-white w-full py-3 px-4 rounded-md 
              ${currentPage === "home" ? "bg-[#200943] text-white" : ""}`}
              >
                <HomeIcon className="w-5 h-5 mr-2 " />
                Home
              </button>
            </div>
            <div className="mb-2 mx-4 text-gray-900">
              <button
                onClick={() => setCurrentPage("profile")}
                className={`inline-flex items-center font-medium text-[13px] hover:bg-[#200943] hover:text-white w-full py-3 px-4 rounded-md 
              ${currentPage === "profile" ? "bg-[#200943] text-white" : ""}`}
              >
                <UserIcon className="w-5 h-5 mr-2 " />
                Profile
              </button>
            </div>
            <div className="mb-2 mx-4 text-gray-900">
              <button
                onClick={() => setCurrentPage("performance")}
                className={`inline-flex items-center font-medium text-[13px] hover:bg-[#200943] hover:text-white w-full py-3 px-4 rounded-md 
              ${
                currentPage === "performance" ? "bg-[#200943] text-white" : ""
              }`}
              >
                {/* <p className="inline-flex"> */}
                <SwatchIcon className="w-5 h-5 mr-2 " />
                Performance
                {/* </p> */}
              </button>
            </div>
            {/* <div className="mb-2 mx-4 text-gray-900">
          <a
            href="#"
            className="inline-flex items-center font-medium text-[13px] hover:bg-[#200943] hover:text-white w-full py-3 px-4 rounded-md"
          >
            <PaperAirplaneIcon className="w-5 h-5 mr-2 " />
            Tests
          </a>
        </div> */}
          </div>
          <div className="flex flex-col">
            <div className="mb-2 mx-4 text-gray-900">
              <a
                href="#"
                className="inline-flex items-center font-medium text-[13px] hover:bg-[#200943] hover:text-white w-full py-3 px-4 rounded-md"
              >
                <Cog8ToothIcon className="w-5 h-5 mr-2 " />
                Settings
              </a>
            </div>{" "}
            <div className="mb-2 mx-4 text-gray-900">
              <form action={logout}>
                <button
                  type="submit"
                  className="inline-flex items-center font-medium text-[13px] hover:bg-[#200943] hover:text-white w-full py-3 px-4  rounded-md"
                >
                  <LogOut className="w-5 h-5 mr-2 " />
                  Logout
                </button>
              </form>
            </div>{" "}
          </div>
        </div>
        {/* <SideBar
          sideBarCollapsed={sideBarCollapsed}
          onToggle={() => setSideBarCollapsed(!sideBarCollapsed)}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        /> */}
        {/* {End of Side Bar} */}
        <div className="flex flex-col overflow-hidden w-full">
          {/* { Header } */}
          <DashNavbar
            sideBarCollapsed={sideBarCollapsed}
            toggleSideBar={() => setSideBarCollapsed(!sideBarCollapsed)}
            username={username}
          />
          {/* { End of Header} */}
          {switchPage(currentPage)}
          {/* {switch (currentPage) {
              case "home":
                return <Home />;
              case "performance":
                return <Performance />;
              case "profile":
                return <Profile />;
              default:
                return null;
            }
          } */}
          {/* <div className="flex flex-1 overflow-y-auto flex-col w-full">
            <div className="flex  items-center justify-between  lg:mx-12 mx-4 mt-6 mb-4">
              <div className="flex items-center">
                <div className="mr-4">
                  <img
                    src="./public/pictures/user.png"
                    alt=""
                    className="w-8 h-8 rounded-full "
                  />
                </div>
                <p className="text-[16px] hidden lg:block">
                  <span className="font-bold  text-gray-900">Hey John -</span>
                  <span className="text-gray-500">
                    {" "}
                    here’s what’s happening with your store today
                  </span>
                </p>
              </div>
              <div className="inline-flex space-x-2 py-2 px-3 rounded-full shadow-lg ">
                <button className="text-sm font-semibold rounded-full py-1 px-2 bg-gray-900 text-white">
                  IELTS
                </button>
                <button className="text-sm font-semibold rounded-full py-1 px-2 hover:bg-gray-900 hover:text-white">
                  CELPIP
                </button>
              </div>
            </div>
            <div className="flex mb-4">
              <div className="rounded-xl p-4 border-[3px] border-[#FF7008] w-full lg:mx-12 mx-4">
                <div className="flex items-center justify-between mx-4 xl:flex-row flex-col xl:text-left text-center">
                  <div className="flex xl:h-18 flex-col xl:flex-row">
                    <Clock4 className="w-14 h-14 text-[#FF7008] self-center" />
                    <div className="flex flex-col justify-between max-w-sm ml-6">
                      <p className="text-[#21005D] text-xl font-extrabold">
                        Your Kickoff Practice
                      </p>
                      <p className="text-sm/4 font-medium text-[#7E7E7E]">
                        Your lowest area is Writing Task 2 (Essay). Let's focus
                        here to see the biggest improvement.
                      </p>
                    </div>
                  </div>
                  <div>
                    <button className="bg-[#FF7008] text-[#21005D] font-medium text-sm lg:text-xl p-3 hover:bg-[#FF7008]/50 rounded-lg">
                      Start Practice (1 hour)
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <StatsGrid />
            </div>
            <div>
              <div className="grid grid-cols-3 gap-4 mx-12 ">
                <div className="col-span-2">
                  <GradeChart />
                </div>
                <div className="space-y-6">
                  <DetailedSkill />
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
// box-shadow: 0px 0px 2px 2px #00000040;
