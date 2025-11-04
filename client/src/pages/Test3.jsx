import DashNavbar2 from "./layout/DashNavbar2";

const Test3 = () => {
  return (
    <div className="relative">
      <DashNavbar2 />

      <div class="bg-[url(./public/pictures/test3.jpg)] bg-no-repeat bg-fixed h-screen w-full absolute top-0 left-0 -z-10 flex items-center justify-center">
        <div className=" max-w-[1086px] w-full z-10 m-auto mt-25">
          <div className="h-[67px] bg-[#200943] shadow-md  shadow-black">
            <p className="text-white text-lg font-bold leading-17 ml-8">
              Practice Test A
            </p>
          </div>
          <div className="h-[420px]  bg-[#EDEDED] flex flex-col overflow-y-scroll">
            <ol class="list-decimal mx-10 text-[#525866] text-sm mt-6 ">
              <li>
                You should give yourself 2 hours and 39 minutes to complete
                XYZ-General Practice Test A. Press Start and select Complete
                Test from the drop-down menu to do the whole test, or click on
                one of the individual tests underneath it to try one component.
              </li>
              <li>
                Once you have completed the test, you can consult the 
                <a href="#" className="underline">
                  {" "}
                  Performance Standards for Writing{" "}
                </a>
                 and 
                <a href="#" className="underline">
                  {" "}
                  Performance Standards for Speaking{" "}
                </a>
                 to understand how your responses would be evaluated by XYZ
                Raters. Please be sure to save your Writing responses and record
                your Speaking responses so you can review them later using the
                Performance Standards.
              </li>
              <li>
                You will need a headset or speakers for the Listening and
                Speaking components of the test. The practice test will not
                record your Speaking responses. If you wish to record your
                Speaking responses, we advise you to set up your recording
                device (cellphone, digital recorder, etc.) prior to starting the
                speaking section. For optimal performance, your computer should
                have a minimum resolution of 1024 x 768. Paper and pencils will
                be provided at the official test for note-taking, so before you
                begin this sample test make sure that you have paper and a pen
                or pencil, since you may want to take notes.
              </li>
            </ol>
            <div className="flex justify-center items-center">
              <button
                type="button"
                class="text-white bg-[#200943] me-8 hover:bg-[#200943]/80 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-2xl text-sm px-20 py-4 my-4 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                START
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Test3;
