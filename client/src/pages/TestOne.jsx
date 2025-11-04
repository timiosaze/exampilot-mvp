import DashNavbar2 from "./layout/DashNavbar2";

const TestOne = () => {
  return (
    <div className="relative">
      <DashNavbar2 />

      <div class="bg-[url(./public/pictures/test1.jpg)] bg-no-repeat bg-fixed h-screen w-full absolute top-0 left-0 -z-10">
        <div className=" max-w-[1086px] w-full z-10 m-auto mt-25">
          <div className="h-[67px] bg-[#200943] shadow-md  shadow-black"></div>
          <div className="flex flex-col items-center h-[420px] justify-center text-center bg-[#EDEDED] p-2">
            <div>
              <p className="text-gray-900 font-bold text-lg">
                Welcome to Your XYZ Language Online Study Materials! 
              </p>
            </div>
            <div className="text-sm text-[#525866] p-2">
              <p>
                This is your homepage for any XYP web-based materials that you
                have purchased.
              </p>
              <p>
                You can access each product you own by clicking on it below.
              </p>
              <p className="my-8">
                Make the most of your time with your official XYP Online study
                materials – there is a lot to learn in each of these products!
              </p>
            </div>
            <div className="flex items-center">
              <button
                type="button"
                class="text-white bg-[#200943] me-8 hover:bg-[#200943]/80 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-2xl text-sm px-5 py-2.5 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                START A SIMPLE TEST
              </button>
              <button
                type="button"
                class="text-white bg-[#200943] hover:bg-[#200943]/80 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-2xl text-sm px-5 py-2.5 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                YOUR SCORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TestOne;
