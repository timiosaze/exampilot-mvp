const DetailedSkill = () => {
  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 p-6">
      <div className="flex flex-col h-96">
        <div className="flex text-gray-900 items-center justify-between my-6">
          <p className="font-bold ">Detailed Skill Breakdown</p>
          <p className="text-xs">Last 7 days</p>
        </div>
        <div className="mb-6">
          <div className="flex text-[13px] items-center text-gray-900 justify-between mb-2">
            <p>Section 1: Conversation</p>
            <p>0%</p>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              class="bg-[#200943] h-2.5 rounded-full"
              style={{ width: "10%" }}
            ></div>
          </div>
        </div>
        <div className="mb-6">
          <div className="flex text-[13px] items-center text-gray-900 justify-between mb-2">
            <p>Section 2: Monologue</p>
            <p>0%</p>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              class="bg-[#200943] h-2.5 rounded-full"
              style={{ width: "10%" }}
            ></div>
          </div>
        </div>
        <div className="mb-6">
          <div className="flex text-[13px] items-center text-gray-900 justify-between mb-2">
            <p>Section 3: Academic Discussion </p>
            <p>0%</p>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              class="bg-[#200943] h-2.5 rounded-full"
              style={{ width: "10%" }}
            ></div>
          </div>
        </div>
        <div className="mb-6">
          <div className="flex text-[13px] items-center text-gray-900 justify-between mb-2">
            <p>Section 4: Academic Lecture </p>
            <p>0%</p>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              class="bg-[#200943] h-2.5 rounded-full"
              style={{ width: "10%" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailedSkill;
