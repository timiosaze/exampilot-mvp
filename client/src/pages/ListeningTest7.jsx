import DashNavbar2 from "./layout/DashNavbar2";
import { Button } from "flowbite-react";
import { CircleAlert } from "lucide-react";

const ListeningTest7 = () => {
  return (
    <div className="relative">
      <DashNavbar2 />

      <div class="bg-[url(./public/pictures/listening1.png)] bg-no-repeat bg-fixed h-screen w-full absolute top-0 left-0 -z-10">
        <div className=" max-w-[1086px] w-full z-10 m-auto mt-25">
          <div className="h-[67px] bg-[#200943] shadow-md  shadow-black mt-10 xl:mt-0">
            <p className="text-white text-lg  font-bold leading-17 ml-8">
              Practice Test A - Listening Test
            </p>
          </div>
          <div className="h-[600px]  bg-[#EDEDED] flex flex-col overflow-y-scroll ">
            <div className="mt-10 mr-10">
              <Button className="float-right rounded-none hover:bg-[#200943]/50 bg-[#200943] text-sm p-2">
                NEXT
              </Button>
            </div>
            <div className="flex flex-col xl:px-10 px-2 mb-6">
              <div class="inline-flex items-center mb-4">
                <CircleAlert className="w-5 h-5 mr-2 ml-6 " />
                <p className="text-[15px] font-extrabold text-[#525866]">
                  Choose the best way to complete each statement from the
                  drop-down menu (  ).
                </p>
              </div>
              <ol class="list-decimal mx-10 text-[15px]  text-[#525866]">
                <li className=" mb-4">
                  The news item is about{" "}
                  <select onChange={(e) => onChange(e.target.value)}>
                    <option value="______">_____</option>
                    <option value="doing">Doing</option>
                    <option value="done">Done</option>
                  </select>
                </li>
                <li className=" mb-4">
                  The news item is about{" "}
                  <select onChange={(e) => onChange(e.target.value)}>
                    <option value="______">_____</option>
                    <option value="doing">Doing</option>
                    <option value="done">Done</option>
                  </select>
                </li>
                <li className=" mb-4">
                  The news item is about{" "}
                  <select onChange={(e) => onChange(e.target.value)}>
                    <option value="______">_____</option>
                    <option value="doing">Doing</option>
                    <option value="done">Done</option>
                  </select>
                </li>
                <li className=" mb-4">
                  The news item is about{" "}
                  <select onChange={(e) => onChange(e.target.value)}>
                    <option value="______">_____</option>
                    <option value="doing">Doing</option>
                    <option value="done">Done</option>
                  </select>
                </li>
              </ol>
            </div>
            <div className="mt-10 mx-10">
              <Button className="float-left text-gray-900 rounded-none bg-slate-200 hover:bg-slate-300 text-sm p-2">
                ANSWER KEY
              </Button>
              <Button className="float-right rounded-none bg-red-600 hover:bg-red-800 text-sm p-2">
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
export default ListeningTest7;
