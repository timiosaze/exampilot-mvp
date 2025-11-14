import DashNavbar2 from "./layout/DashNavbar2";
import { Button } from "flowbite-react";
import { CircleAlert } from "lucide-react";
import { useState } from "react";
import imgUrl from "./listening1.png";

const Reading4 = () => {
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
                <p className="indent-4 text-[13px] text-[#525866]">
                  Another important factor to consider is the impact of
                  technology on language itself. Abbreviations, emojis, and
                  informal expressions are now common in online conversations.
                  While these tools make communication fun and efficient, some
                  educators worry that young people may struggle with formal
                  writing or proper grammar in the future. On the other hand,
                  supporters argue that language is always changing and a
                  dapting, and these new styles simply represent the latest
                  stage of its evolution. In conclusion, communication today is
                  faster and more convenient than ever before, but it also
                  raises questions about depth, formality, and long-term
                  cultural impact. Whether positive or negative, it is clear
                  that technology has permanently transformed the way people
                  connect with one another.
                </p>
              </div>
              <div className="h-[500px] overflow-auto my-10 py-4 mx-4 xl:mx-8">
                <div className="mr-10 mb-2">
                  <Button className="float-right rounded-none hover:bg-[#200943]/50 bg-[#200943] text-sm p-2">
                    NEXT
                  </Button>
                </div>
                <div class="inline-flex items-center mb-4">
                  <CircleAlert className="w-5 h-5 mr-6 ml-6" />
                  <p className="text-sm text-gray-900 max-w-[390px]">
                    Using the drop-down menu (  ), choose the best option
                    according to the information given in the message.
                  </p>
                </div>
                <div className="border  ml-10 rounded-lg p-4 max-w-[400px] mb-4">
                  <p className="px-4 indent-4 text-[13px] text-[#525866]">
                    In many parts of the world, the way people communicate has
                    changed{" "}
                    <select onChange={(e) => onChange(e.target.value)}>
                      <option value="______">_____</option>
                      <option value="doing">Doing</option>
                      <option value="done">Done</option>
                    </select>{" "}
                    over the last few decades. In the past, letters were the
                    main form of long-distance communication. Writing a letter
                    often{" "}
                    <select onChange={(e) => onChange(e.target.value)}>
                      <option value="______">_____</option>
                      <option value="doing">Doing</option>
                      <option value="done">Done</option>
                    </select>{" "}
                    thought, patience, and{" "}
                    <select onChange={(e) => onChange(e.target.value)}>
                      <option value="______">_____</option>
                      <option value="doing">Doing</option>
                      <option value="done">Done</option>
                    </select>{" "}
                    before a reply arrived. Today, technology has replaced much
                    of that process with faster, more immediate tools{" "}
                    <select onChange={(e) => onChange(e.target.value)}>
                      <option value="______">_____</option>
                      <option value="doing">Doing</option>
                      <option value="done">Done</option>
                    </select>{" "}
                    . text messages, and social media platforms allow people to
                    share information in seconds, no matter where they are in
                    the world. However, this{" "}
                    <select onChange={(e) => onChange(e.target.value)}>
                      <option value="______">_____</option>
                      <option value="doing">Doing</option>
                      <option value="done">Done</option>
                    </select>{" "}
                    has also introduced new challenges. While digital
                    communication is fast, it is often less personal. A short
                    message sent through a phone may not carry the same
                    emotional weight as a handwritten note. Some people argue
                    that modern communication has become too quick and shallow,
                    reducing the quality of human connection.{" "}
                  </p>
                </div>
                <Button className="float-right rounded-none bg-red-600 hover:bg-red-800 mr-10  text-sm p-2">
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
export default Reading4;
