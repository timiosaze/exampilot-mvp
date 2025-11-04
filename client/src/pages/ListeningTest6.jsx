import DashNavbar2 from "./layout/DashNavbar2";
import { Button } from "flowbite-react";
import { CircleAlert } from "lucide-react";
import { useState, useEffect } from "react";
import React from "react";
import customFetch from "../../../utils/customFetch";
import { useLoaderData } from "react-router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export async function loader() {
  return await customFetch
    .get("/section/listening")
    .then((data) => data.data.listeningQuestions[0].question_array);
}

const ListeningTest6 = () => {
  const [key, setKey] = useState(0);
  let all_questions = useLoaderData();
  let user_option = [];
  const [questions, setQuestions] = useState(all_questions);
  console.log(questions);
  const number = key + 1;

  async function submit(formData) {
    let answer_array = [];
    let correct_options = [];
    let score = 0;
    for (let index = 0; index < questions.length; index++) {
      correct_options.push("option".concat(questions[index].answer));
    }
    for (let index = 1; index <= 8; index++) {
      answer_array.push(formData.get(`answer[${index}]`));
    }
    for (let index = 0; index < correct_options.length; index++) {
      if (correct_options[index] == answer_array[index]) {
        score++;
      }
    }
    console.log(answer_array);
    console.log(correct_options);
    console.log(score);
    try {
      await customFetch.post("/section/listening_score", {
        score: score,
      });
      nextLocation("/reading");
    } catch (error) {
      console.log(error);
    }
  }

  const nextLocation = (location) => {
    if (sessionStorage.getItem("fullTest")) {
      window.location.href = location;
    } else {
      window.location.href = "/dashboard";
    }
  };

  const nextQuestion = () => {
    if (key >= 0 && key < 7) {
      setKey(key + 1);
    } else {
      document.getElementById("submit").click();
      // window.location.href = "/listening-7";
    }
  };
  const prevQuestion = () => {
    if (key > 0 && key < 8) {
      setKey(key - 1);
    } else {
      window.location.href = "/listening-4";
    }
  };
  const saveAnswer = (e) => {
    user_option[key] = e.target.value;
    console.log(user_option);
  };
  return (
    <div className="relative">
      <DashNavbar2 />

      <div class="bg-[url(./public/pictures/listening1.png)] bg-no-repeat bg-fixed h-screen w-full absolute top-0 left-0 -z-10">
        <div className=" max-w-[1086px] w-full z-10 m-auto mt-25">
          <div className="h-[67px] bg-[#200943] shadow-md flex items-center justify-between shadow-black mt-10 xl:mt-0">
            <p className="text-white text-lg  font-bold leading-17 ml-8">
              Practice Test A - Listening Test
            </p>
            <p className="text-white text-sm leading-17 ml-8"></p>
          </div>
          <div className="h-[600px]  bg-[#EDEDED] flex flex-col overflow-y-scroll ">
            <div className="mt-6 mb-4 mr-10">
              <Button
                onClick={nextQuestion}
                className="float-right rounded-none hover:bg-[#200943]/50 bg-[#200943] text-sm p-2"
              >
                NEXT
              </Button>
            </div>
            <div className="flex items-center justify-center flex-wrap">
              <div className="flex flex-col justify-center items-center xl:px-10 px-2 ">
                <div class="inline-flex flex-1 items-center mb-4">
                  <CircleAlert className="w-5 h-5 mr-2 ml-6" />
                  <p className="text-sm text-[#525866]">
                    Listen to the question. You will hear it once.
                  </p>
                </div>
                <div>
                  <audio controls src={questions[key].audio}></audio>
                </div>
              </div>
              <form action={submit}>
                {questions.map((question) => (
                  <div
                    className={`flex flex-col xl:px-10 px-2 mx-2 text-[#525866] ${
                      key == questions.indexOf(question) ? "" : "hidden"
                    }`}
                    key={question._id}
                  >
                    <p className="text-sm text-[#525866] mb-2 ml-6">
                      Question {questions.indexOf(question) + 1} of 8
                    </p>

                    <div class="flex items-center mb-2 ">
                      <input
                        id="default-radio-1"
                        type="radio"
                        value="optionA"
                        name={`answer[${questions.indexOf(question) + 1}]`}
                        class="w-4 h-4 mr-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        for="default-radio-1"
                        class="ms-2 text-sm font-medium "
                      >
                        {question.optionA}
                      </label>
                    </div>
                    <div class="flex items-center mb-2">
                      <input
                        id="default-radio-2"
                        type="radio"
                        value="optionB"
                        name={`answer[${questions.indexOf(question) + 1}]`}
                        class="w-4 h-4 mr-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        for="default-radio-2"
                        class="ms-2 text-sm font-medium "
                      >
                        {question.optionB}
                      </label>
                    </div>
                    <div class="flex items-center mb-2">
                      <input
                        id="default-radio-3"
                        type="radio"
                        value="optionC"
                        name={`answer[${questions.indexOf(question) + 1}]`}
                        class="w-4 h-4 mr-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        for="default-radio-3"
                        class="ms-2 text-sm font-medium "
                      >
                        {question.optionC}
                      </label>
                    </div>
                    <div class="flex items-center mb-2">
                      <input
                        id="default-radio-4"
                        type="radio"
                        value="optionD"
                        name={`answer[${questions.indexOf(question) + 1}]`}
                        class="w-4 h-4 mr-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label class="ms-2 text-sm font-medium ">
                        {question.optionD}
                      </label>
                    </div>
                  </div>
                ))}
                <button
                  id="submit"
                  type="submit"
                  class="text-white hidden bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Submit
                </button>
              </form>
            </div>

            <div className="mt-10 mx-10">
              <Button className="float-left text-gray-900 rounded-none bg-slate-200 hover:bg-slate-300 text-sm p-2">
                ANSWER KEY
              </Button>
              <Button
                onClick={prevQuestion}
                className="float-right rounded-none bg-red-600 hover:bg-red-800 text-sm p-2"
              >
                BACK
              </Button>
              <div className="clear-both"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ListeningTest6;
