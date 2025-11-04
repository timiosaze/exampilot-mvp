import DashNavbar2 from "./layout/DashNavbar2";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "flowbite-react";
import { TriangleAlertIcon } from "lucide-react";
import { useState } from "react";

const Test4 = () => {
  const [openModal, setOpenModal] = useState(true);

  return (
    <div className="relative">
      <DashNavbar2 />

      <div class="bg-[url(./public/pictures/test3.jpg)] bg-no-repeat bg-fixed h-screen w-full absolute top-0 left-0 -z-10">
        <div className=" max-w-[1086px] w-full z-10 m-auto mt-25">
          <div className="h-[67px] bg-[#200943] shadow-md  shadow-black">
            <p className="text-white text-lg font-bold leading-17 ml-8">
              Practice Test A
            </p>
          </div>
          <div className="h-[600px]  bg-[#EDEDED] flex flex-col overflow-y-scroll">
            <ol class="list-decimal mx-10 text-[#525866] text-sm mt-10 ">
              <li>
                You should give yourself 2 hours and 39 minutes to complete
                XYZ-General Practice Test A. Press Start and select Complete
                Test from the drop-down menu to do the whole test, or click on
                one of the individual tests underneath it to try one component.
              </li>
              <li>
                Once you have completed the test, you can consult the {" "}
                <a href="#" className="underline hover:text-gray-900">
                  Performance Standards for Writing
                </a>{" "}
                 and {" "}
                <a href="#" className="underline hover:text-gray-900">
                  Performance Standards for Speaking
                </a>{" "}
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
            <div className="flex flex-col justify-center items-center">
              <button
                type="button"
                class="text-white bg-[#200943]  hover:bg-[#200943]/50 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-2xl text-sm  px-24 py-2.5 mt-8 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                START
              </button>
              <button
                type="button"
                class="text-white bg-[#B1A2C8]  hover:bg-[#B1A2C8]/50 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-2xl text-sm px-16 py-2.5 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                COMPLETE TEST
              </button>
              <button
                type="button"
                class="text-white bg-[#B1A2C8]  hover:bg-[#B1A2C8]/50 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-2xl text-sm px-20 py-2.5 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                LISTENING
              </button>
              <button
                type="button"
                class="text-white bg-[#B1A2C8]  hover:bg-[#B1A2C8]/50 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-2xl text-sm px-20 py-2.5 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                READING
              </button>
              <button
                type="button"
                class="text-white bg-[#B1A2C8]  hover:bg-[#B1A2C8]/50 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-2xl text-sm px-20 py-2.5 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                WRITING
              </button>
              <button
                type="button"
                class="text-white bg-[#B1A2C8]  hover:bg-[#B1A2C8]/50 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-2xl text-sm px-20 py-2.5 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                SPEAKING
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal
        className="rounded-md"
        show={openModal}
        onClose={() => setOpenModal(false)}
      >
        <ModalHeader className="bg-[#200943] text-white">
          <span className="text-white inline-flex items-center">
            <TriangleAlertIcon className="w-7 h-7 text-red-800 mr-2" />
            Important Notice
          </span>
        </ModalHeader>
        <ModalBody className="bg-[#FFF9F9]">
          <div className="space-y-6 ">
            <p className="text-lg font-bold leading-relaxed text-[#7B7474] dark:text-gray-400">
              In this practice test, users have the ability to go back and
              review or change their answers at any time. In the official test,
              once you have completed a section and moved to the next one, it is
              not possible to return to it.
            </p>
            <p className="text-lg font-bold leading-relaxed text-[#7B7474] dark:text-gray-400">
              In this practice test, users have the ability to control audio and
              video tracks with a playbar. In the official test, audio and video
              tracks will only play once and users will not have access to a
              playbar.
            </p>
          </div>
        </ModalBody>
        <ModalFooter className="flex items-center justify-around">
          <Button
            className="bg-[#200943] uppercase text-[10px]"
            onClick={() => setOpenModal(false)}
          >
            Okay
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
export default Test4;
