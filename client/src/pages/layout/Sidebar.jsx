import {
  Cog8ToothIcon,
  HomeIcon,
  PaperAirplaneIcon,
  SwatchIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { LogOut, Sidebar } from "lucide-react";
import { useState } from "react";
import React from "react";

const SideBar = ({ sideBarCollapsed, onToggle, currentPage, onPageChange }) => {
  return (
    <div
      className={`flex flex-col relative justify-between space-y-6 ${
        sideBarCollapsed ? "w-0 hidden" : "w-64"
      } bg-[#ECF5FF] h-screen `}
    >
      <div className="">
        <div class="h-16 flex items-center border-slate-300">
          <div className="pl-4">
            <img src="./public/pictures/Original.png" alt="" />
          </div>
          <div>
            <p className="text-[#200943] font-bold text-xl">Brand</p>
          </div>
          <div></div>
        </div>
        <div className="mb-2 mx-4 text-gray-900">
          <button
            onClick={onPageChange("home")}
            className={`inline-flex items-center font-medium text-[13px] hover:bg-[#200943] hover:text-white w-full py-3 px-4 rounded-md 
              ${currentPage === "home" ? "bg-[#200943] text-white" : ""}`}
          >
            <HomeIcon className="w-5 h-5 mr-2 " />
            Home
          </button>
        </div>
        <div className="mb-2 mx-4 text-gray-900">
          <button
            onClick={onPageChange("profile")}
            className={`inline-flex items-center font-medium text-[13px] hover:bg-[#200943] hover:text-white w-full py-3 px-4 rounded-md 
              ${currentPage === "profile" ? "bg-[#200943] text-white" : ""}`}
          >
            <UserIcon className="w-5 h-5 mr-2 " />
            Profile
          </button>
        </div>
        <div className="mb-2 mx-4 text-gray-900">
          <button
            onClick={onPageChange("performance")}
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
          <a
            href="#"
            className="inline-flex items-center font-medium text-[13px] hover:bg-[#200943] hover:text-white w-full py-3 px-4  rounded-md"
          >
            <LogOut className="w-5 h-5 mr-2 " />
            Logout
          </a>
        </div>{" "}
      </div>
    </div>
  );
};
export default SideBar;
