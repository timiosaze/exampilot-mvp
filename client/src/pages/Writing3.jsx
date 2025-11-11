import DashNavbar2 from "./layout/DashNavbar2";
import { Button } from "flowbite-react";
import { CircleAlert } from "lucide-react";
import { useState, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { useLoaderData } from "react-router";
import customFetch from "../../../utils/customFetch";

export async function loader() {
  return await customFetch
    .get("/section/writing")
    .then((data) => data.data.writingQuestions[0]);
}

const Writing3 = () => {
  const writing = useLoaderData();
  let minutes = 25;
  let count = 60;
  let seconds = minutes * count;
  const [sec, setSec] = useState(seconds);
  const [minuteHand, setMinuteHand] = useState(Math.floor(seconds / 60));
  let intervalId;
  function startInterval() {
    intervalId ??= setInterval(startTiming, 1000);
  }

  function startTiming() {
    if (seconds > 0) {
      seconds--;
      let min = Math.floor(seconds / 60);
      setSec(seconds);
      setMinuteHand(min);
    } else {
      stopTimer();
    }
  }

  function stopTimer() {
    clearInterval(intervalId);
    // release our intervalId from the variable
    intervalId = null;
  }
  useEffect(() => {
    startInterval(); // Call your function inside useEffect
  }, []); //
  const index = 0;
  const question =
    "The question is " +
    writing.email_essay +
    " " +
    writing.email_question +
    writing.email_info.join(",");

  async function submit(formData) {
    let essay = formData.get("essay");
    essay = question + ". " + essay.replace(/"/g, '\\"');
    if (essay == "") {
      toast.error("The fields are not filled");
    }
    await customFetch.post("/section/writing_score", {
      index: index,
      essay: essay,
    });
    next();
  }

  function submitEssay() {
    document.getElementById("submit").click();
    // await next();
  }
  function prev() {
    window.location.href = "/writing-2";
  }
  function next() {
    window.location.href = "/writing-4";
  }
  // console.log(writing);
  return (
    <div className="relative">
      <DashNavbar2 />

      <div class="bg-[url(./public/pictures/listening1.png)] bg-no-repeat bg-fixed h-screen w-full absolute top-0 left-0 -z-10 ">
        <div className=" max-w-[1086px] w-full z-10 m-auto mt-25">
          <div className="h-[67px] bg-[#200943] shadow-md flex items-center justify-between text-lg shadow-black mt-10 xl:mt-0">
            <p className="text-white text-lg font-bold leading-17 ml-8">
              Practice Test A-Writing Task 1-Writting an E-mail
            </p>
            <p className="text-white text-sm leading-17 mr-8">
              Time:{" "}
              <span className="text-[15px] font-bold text-red-700 ml-3">
                {minuteHand} minutes
              </span>
            </p>
            <Button
              onClick={submitEssay}
              className="float-right rounded-none mr-8 hover:bg-[#200943]/50 bg-gray-600 text-sm p-2"
            >
              NEXT
            </Button>
          </div>
          <div className="h-[600px] w-full  bg-[#EDEDED] overflow-scroll">
            <div className="max-h-[600px] grid grid-cols-2 gap-6">
              <div className="h-[500px] overflow-auto my-10 py-4 mx-4 xl:mx-8">
                <div class="inline-flex justify-center items-center mb-4">
                  <CircleAlert className="w-5 h-5 mr-6 ml-6" />
                  <p className="text-sm text-gray-900">
                    Read the Following Instructions
                  </p>
                </div>

                <p className="indent-4 text-[13px] text-[#525866]">
                  {writing.email_essay}
                </p>
              </div>
              <div className="h-[500px] overflow-auto my-10 py-4 mx-4 xl:mx-8">
                <p className="text-sm text-[#525866] mb-4">Question 1 of 2</p>
                <div class="inline-flex  mb-4">
                  <CircleAlert className="w-5 h-5 mr-2" />
                  <p className="text-sm text-gray-900 max-w-[390px]">
                    {writing.email_question}
                  </p>
                </div>
                <div className="px-4 mb-4 max-w-[400px]">
                  <ol class="list-disc px-4 text-[13px] text-[#525866] font-medium">
                    {writing.email_info.map((item) => (
                      <li className="mb-2">{item}</li>
                    ))}
                  </ol>
                </div>
                <form action={submit} className="mb-4">
                  <textarea
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write your answer here..."
                    name="essay"
                    id=""
                    cols="45"
                    rows="15"
                  ></textarea>
                  {/* <Editor
                    apiKey="r1bh65yckxcg92ny6rcgtoc7wirrlshksq6279agmziz46bc"
                    init={{
                      plugins:
                        "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount",
                      toolbar:
                        "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat",
                    }}
                    textareaName="essay"
                  /> */}
                  <button
                    type="submit"
                    id="submit"
                    class="text-white mt-4 hidden bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Submit
                  </button>
                </form>
                <Button
                  onClick={prev}
                  className="float-right rounded-none bg-red-600 hover:bg-red-800 mr-10 text-sm p-2"
                >
                  BACK
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Writing3;
