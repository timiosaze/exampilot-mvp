import DashNavbar2 from "./layout/DashNavbar2";
import { Button } from "flowbite-react";
import { CircleAlert } from "lucide-react";
import { useState, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { useLoaderData } from "react-router";
import customFetch from "../../../utils/customFetch";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export async function loader() {
  return await customFetch
    .get("/section/writing")
    .then((data) => data.data.writingQuestions[0]);
}

const Writing4 = () => {
  const writing = useLoaderData();
  let minutes = 10;
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
  const index = 1;
  const question =
    "The question is " +
    writing.survey_essay_body +
    " " +
    writing.survey_question;

  async function submit(formData) {
    let essay = formData.get("essay");
    const writing_option = formData.get("writing_option");
    if (essay == "" || writing_option == "") {
      toast.error("The fields are not filled");
    }
    essay =
      question + ". " + writing_option + ". " + essay.replace(/"/g, '\\"');
    await customFetch.post("/section/writing_score", {
      index: index,
      essay: essay,
    });
    next();
  }

  function submitEssay() {
    document.getElementById("submit").click();
  }
  function prev() {
    window.location.href = "/writing-3";
  }
  function next() {
    window.location.href = "/writing-5";
  }
  // console.log(writing);
  return (
    <div className="relative">
      <DashNavbar2 />

      <div class="bg-[url(./public/pictures/listening1.png)] bg-no-repeat bg-fixed h-screen w-full absolute top-0 left-0 -z-10 ">
        <div className=" max-w-[1086px] w-full z-10 m-auto mt-25">
          <div className="h-[67px] bg-[#200943] shadow-md flex items-center justify-between text-lg shadow-black mt-10 xl:mt-0">
            <p className="text-white text-lg font-bold leading-17 ml-8">
              Practice Test A-Writing Task 2-Responding to Survey Questions.
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
                <p className="text-gray-900 mb-2 text-center font-extrabold text-sm">
                  {writing.survey_essay_title}
                </p>
                <p className="indent-4 text-[13px] text-[#525866]">
                  {writing.survey_essay_body}
                </p>
              </div>
              <div className="h-[500px] overflow-auto my-10 py-4 mx-4 xl:mx-8">
                <p className="text-sm text-[#525866] mb-4">Question 1 of 8</p>
                <div class="inline-flex  mb-4">
                  <CircleAlert className="w-5 h-5 mr-2" />
                  <p className="text-sm text-gray-900 max-w-[390px]">
                    {writing.survey_question}
                  </p>
                </div>
                <form action={submit} className="mb-4">
                  <div className="px-4 mb-4 max-w-[400px]">
                    {writing.survey_options.map((option) => (
                      <div class="flex items-center mb-4">
                        <input
                          required
                          id="default-radio-1"
                          type="radio"
                          value={option.option_text}
                          name="writing_option"
                          class="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 focus:ring-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 "
                        />
                        <label
                          for="default-radio-1"
                          class="ms-2 text-sm text-[#525866]"
                        >
                          <span className="font-medium">
                            {option.option_value}:
                          </span>{" "}
                          <span>{option.option_text}</span> 
                        </label>
                      </div>
                    ))}
                  </div>
                  <textarea
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write your essay here..."
                    name="essay"
                    id=""
                    cols="45"
                    rows="15"
                    required
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

                <Button className="float-right rounded-none bg-red-600 hover:bg-red-800 mr-10 text-sm p-2">
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
export default Writing4;
