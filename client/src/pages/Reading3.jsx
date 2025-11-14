import DashNavbar2 from "./layout/DashNavbar2";
import { Button } from "flowbite-react";
import { CircleAlert } from "lucide-react";
import { useState, useEffect } from "react";
import { useLoaderData } from "react-router";
import customFetch from "../../../utils/customFetch";
import Timer from "./components/timer";
import imgUrl from "./listening1.png";

export async function loader() {
  return await customFetch
    .get("/section/reading")
    .then((data) => data.data.readingQuestions[0].sectionA);
}
const Reading3 = () => {
  // const minutes = 1;
  const questions = useLoaderData();
  const formatLetterOptions = (array, index) => {
    return `<select key=${index}
      name="letter_answer[${index}]"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 my-1"
    >
      <option value="">__________</option>
      ${array.options.map((each) => `<option value=${each}>${each}</option>`)}
    </select>`;
  };
  async function submit(formData) {
    let index = 0;
    let answer_array = [];
    let answer_array_b = [];
    let correct_options = [];
    let correct_options_b = [];
    let score = 0;
    for (let index = 0; index < questions.passage_questions.length; index++) {
      correct_options.push(questions.passage_questions[index].answerText);
      answer_array.push(formData.get(`passage_answer[${index}]`));
    }
    for (let index = 0; index < correct_options.length; index++) {
      if (correct_options[index] == answer_array[index]) {
        score++;
      }
    }
    for (let index = 0; index < questions.letter_questions.length; index++) {
      correct_options_b.push(questions.letter_questions[index].answerText);
      answer_array_b.push(formData.get(`letter_answer[${index}]`));
    }
    for (let index = 0; index < correct_options_b.length; index++) {
      if (correct_options_b[index] == answer_array_b[index]) {
        score++;
      }
    }
    console.log(answer_array);
    console.log(correct_options);
    console.log(answer_array_b);
    console.log(correct_options_b);
    console.log(score);

    try {
      await customFetch.post("/section/reading_score", {
        score: score,
        index: index,
      });
    } catch (error) {
      console.log(error);
    }
  }

  function submitSession() {
    document.getElementById("submit").click();
    window.location.href = "/reading-3a";
  }
  function prev() {
    window.location.href = "/reading-2";
  }
  return (
    <div className="relative">
      <DashNavbar2 />

      <div
        style={{ backgroundImage: `url("${imgUrl}")` }}
        class=" bg-no-repeat bg-fixed h-screen w-full absolute top-0 left-0 -z-10 "
      >
        <div className=" max-w-[1086px] w-full z-10 m-auto mt-25">
          <div className="h-[67px] bg-[#200943] shadow-md flex items-center justify-between text-lg shadow-black mt-10 xl:mt-0">
            <p className="text-white text-lg font-bold leading-17 ml-8">
              Practice Test A-Reading Task 1: Reading Correspondence
            </p>
            <p className="text-white text-sm leading-17 mr-8">
              Time: <Timer minute={14} />
            </p>
            <Button
              onClick={submitSession}
              className="float-right rounded-none mr-8 hover:bg-[#200943]/50 bg-gray-600 text-sm p-2"
            >
              NEXT
            </Button>
          </div>

          <div className="clear-right"></div>
          <div className="h-[600px] w-full  bg-[#EDEDED] overflow-scroll">
            <div className="max-h-[550px] grid grid-cols-2 gap-6">
              <div className="h-[500px] overflow-auto my-10 py-4 mx-4 xl:mx-8">
                <div class="inline-flex justify-center items-center mb-4">
                  <CircleAlert className="w-5 h-5 mr-6 ml-6" />
                  <p className="text-sm text-gray-900">
                    Read the following message.
                  </p>
                </div>

                <p className="indent-4 text-[13px] text-[#525866]">
                  {questions.passage}
                </p>
              </div>

              <div className="h-[500px] overflow-auto my-10 py-4 mx-4 xl:mx-8">
                <form action={submit} className="">
                  <div class="inline-flex items-center mb-4">
                    <CircleAlert className="w-5 h-5 mr-6 ml-6" />
                    <p className="text-sm text-gray-900 max-w-[390px]">
                      Using the drop-down menu (  ), choose the best option
                      according to the information given in the message.
                    </p>
                  </div>
                  <div className="border  ml-10 rounded-lg p-4 max-w-[400px] mb-4">
                    <ol class="list-decimal px-4 text-[13px] text-[#525866]">
                      {questions.passage_questions.map((item) => (
                        <li key={item.id} className=" mb-2 mt-1">
                          {item.question}{" "}
                          <select
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 my-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            name={`passage_answer[${questions.passage_questions.indexOf(
                              item
                            )}]`}
                            onChange={(e) => onChange(e.target.value)}
                          >
                            <option value="">____________</option>
                            {item.options.map((option) => (
                              <option value={option}>{option}</option>
                            ))}
                          </select>
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div class="inline-flex items-center mb-4">
                    <CircleAlert className="w-5 h-5 mr-6 ml-6" />
                    <p className="text-sm text-gray-900 max-w-[390px]">
                      Here is a response to the message. Complete the response
                      by filling in the blanks. Select the best choice for each
                      blank from the drop-down menu (  ).
                    </p>
                  </div>
                  <div className="border  ml-10 rounded-lg p-4 max-w-[400px] mb-4">
                    <div
                      className="px-2 leading-9 text-[13px] text-[#525866]"
                      style={{ whiteSpace: "pre-line" }}
                      dangerouslySetInnerHTML={{
                        __html: questions.letter
                          .replace(
                            "[1] __________",
                            formatLetterOptions(
                              questions.letter_questions[0],
                              0
                            )
                          )
                          .replace(
                            "[2] __________",
                            formatLetterOptions(
                              questions.letter_questions[1],
                              1
                            )
                          )
                          .replace(
                            "[3] __________",
                            formatLetterOptions(
                              questions.letter_questions[2],
                              2
                            )
                          )
                          .replace(
                            "[4] __________",
                            formatLetterOptions(
                              questions.letter_questions[3],
                              3
                            )
                          )
                          .replace(
                            "[5] __________",
                            formatLetterOptions(
                              questions.letter_questions[4],
                              4
                            )
                          ),
                      }}
                    ></div>
                  </div>
                  <button
                    id="submit"
                    type="submit"
                    class="text-white hidden bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
export default Reading3;
