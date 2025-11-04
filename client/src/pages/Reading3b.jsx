import DashNavbar2 from "./layout/DashNavbar2";
import { Button } from "flowbite-react";
import { CircleAlert } from "lucide-react";
import { useState } from "react";
import { useLoaderData } from "react-router";
import customFetch from "../../../utils/customFetch";

export async function loader() {
  return await customFetch
    .get("/section/reading")
    .then((data) => data.data.readingQuestions[0].sectionC);
}

const Reading3 = () => {
  const questions = useLoaderData();
  const formatLetterOptions = (array, index) => {
    const doc = `<select
      name="passage_answer[${index}]"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 my-1"
    >
      <option value="">__________</option>
      ${array.map((each) => `<option value=${each}>${each}</option>`)}
    </select>`;
    return doc;
  };
  async function submit(formData) {
    const index = 2;
    let answer_array = [];
    let correct_options = [];
    let score = 0;
    for (let index = 1; index <= questions.passage_questions.length; index++) {
      correct_options.push(questions.passage_questions[index - 1].answer);
      answer_array.push(formData.get(`passage_answer[${index}]`));
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
    window.location.href = "/reading-3c";
  }
  return (
    <div className="relative">
      <DashNavbar2 />

      <div class="bg-[url(./public/pictures/listening1.png)] bg-no-repeat bg-fixed h-screen w-full absolute top-0 left-0 -z-10 ">
        <div className=" max-w-[1086px] w-full z-10 m-auto mt-25">
          <div className="h-[67px] bg-[#200943] shadow-md flex items-center justify-between text-lg shadow-black mt-10 xl:mt-0">
            <p className="text-white text-lg font-bold leading-17 ml-8">
              Practice Test A - Reading Part 3: Reading for Information
            </p>
            <p className="text-white text-sm leading-17 mr-8">
              Time remaining:{" "}
              <span className="text-[15px] font-bold text-red-700">00:30</span>
            </p>
          </div>
          <div className="h-[600px] w-full  bg-[#EDEDED] overflow-scroll">
            <div className="max-h-[600px] grid grid-cols-2 gap-6">
              <div className="h-[500px] overflow-auto my-10 py-4 mx-4 xl:mx-8">
                <div class="inline-flex justify-center items-center mb-4">
                  <CircleAlert className="w-5 h-5 mr-6 ml-6" />
                  <p className="text-sm text-gray-900">
                    Read the following message.
                  </p>
                </div>

                <p
                  style={{ whiteSpace: "pre-line" }}
                  className="indent-4 text-[13px] text-[#525866]"
                >
                  {questions.passage}
                </p>
              </div>
              <div className="h-[500px] overflow-auto my-10 py-4 mx-4 xl:mx-8">
                <div className="mr-10 mb-2">
                  <Button
                    onClick={submitSession}
                    className="float-right rounded-none hover:bg-[#200943]/50 bg-[#200943] text-sm p-2"
                  >
                    NEXT
                  </Button>
                </div>
                <form action={submit}>
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
                        <li
                          key={item.id}
                          className=" mb-2 mt-1"
                          dangerouslySetInnerHTML={{
                            __html: item.question.replace(
                              "___________",
                              formatLetterOptions(questions.options, item.index)
                            ),
                          }}
                        ></li>
                      ))}
                    </ol>
                  </div>
                  <button
                    id="submit"
                    type="submit"
                    class="text-white hidden bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
export default Reading3;
