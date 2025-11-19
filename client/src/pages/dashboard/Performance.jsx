import { Clock4 } from "lucide-react";
import { useState } from "react";

import StatsGrid from "./StatsGrid";
import GradeChart from "./GradeChart";
import DetailedSkill from "./DetailedSkill";
import { getInitials } from "./getInitials.js";
import { redirect } from "react-router";
const Performance = ({ username, testResults, onHome }) => {
  return (
    <div className="flex flex-1 overflow-y-auto flex-col w-full">
      <div className="flex  items-center justify-between  lg:mx-12 mx-4 mt-6 mb-4">
        <div className="flex items-center">
          <div className="mr-4">
            <p className="border-2 border-primary-600 w-10 h-10 bg-gray-100 text-gray-900 flex items-center justify-center rounded-full">
              {getInitials(username)}
            </p>
          </div>
          <p className="text-[16px] hidden lg:block">
            <span className="font-bold  text-gray-900">Hey {username} -</span>
            <span className="text-gray-500">
              {" "}
              here’s what’s happening with your store today
            </span>
          </p>
        </div>
        <div className="inline-flex space-x-2 py-2 px-3 rounded-full shadow-lg ">
          <button className="text-sm font-semibold rounded-full py-1 px-2 bg-gray-900 text-white">
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
                  Let's focus here to see the biggest improvement.
                </p>
              </div>
            </div>
            <div>
              <button
                onClick={onHome}
                className="bg-[#FF7008] text-[#21005D] font-medium text-sm lg:text-xl p-3 hover:bg-[#FF7008]/50 rounded-lg"
              >
                Start Practice
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <StatsGrid testResults={testResults} />
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
    </div>
  );
};
export default Performance;
