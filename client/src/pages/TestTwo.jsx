import DashNavbar2 from "./layout/DashNavbar2";
import {
  Dropdown,
  DropdownDivider,
  DropdownItem,
  Button,
} from "flowbite-react";

const TestTwo = () => {
  return (
    <div className="relative">
      <DashNavbar2 />

      <div class="bg-[url(./public/pictures/test2.jpg)] bg-no-repeat bg-fixed h-screen w-full absolute top-0 left-0 -z-10">
        <div className=" max-w-[1086px] w-full z-10 m-auto mt-25">
          <div className="flex flex-col items-center h-[687px] text-center bg-[#EDEDED] p-2">
            <div className="h-14 w-14 rounded-full bg-[#000000] my-8"></div>
            <div>
              <p className="text-gray-900 font-bold text-lg">
                Free XYZ General Practice Tests{" "}
              </p>
            </div>
            <div className="text-sm text-[#525866] p-2">
              <p>
                This practice test package contains two complete XYZ-General
                Tests.
              </p>
              <p>
                The package also includes answer keys for the Listening and
                Reading Tests and Performance Standards
              </p>
              <p className="">
                showing the key factors that XYZ Raters consider when they
                assess Writing and Speaking responses.
              </p>
            </div>
            <div className="my-2 text-sm text-[#525866] p-2">
              <p>
                Click here to complete a survey on this product. We appreciate
                your feedback!
              </p>
            </div>
            <div className="flex flex-col lg:flex-row lg:space-x-4 lg:space-y-0 space-y-2 items-center lg:justify-center text-center mb-20">
              <Dropdown
                label="START"
                className="text-white bg-[#200943] font-medium rounded-none text-sm"
              >
                <DropdownItem className="text-slate-500">
                  Practice Test A
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem className="text-slate-500">
                  Practice Test B
                </DropdownItem>
              </Dropdown>
              <div className="flex items-center">
                <Button color="light" className="rounded-none">
                  YOUR SCORE
                </Button>
                <Dropdown
                  label=""
                  className="text-[#200943] border border-gray-300 hover:bg-white bg-white rounded-none font-medium  text-sm"
                >
                  <DropdownItem className="text-slate-500">
                    Practice Test A
                  </DropdownItem>
                  <DropdownDivider />
                  <DropdownItem className="text-slate-500">
                    Practice Test B
                  </DropdownItem>
                </Dropdown>
              </div>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 my-2 text-sm text-[#525866] ">
              <div>
                <a
                  href="#"
                  className="hover:underline hover:text-gray-900 transition-all duration-300"
                >
                  Test Format
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="hover:underline hover:text-gray-900 transition-all duration-300"
                >
                  Performance Standard General Writing Test
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="hover:underline hover:text-gray-900 transition-all duration-300"
                >
                  Performance Standard General Speaking Test
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="hover:underline hover:text-gray-900 transition-all duration-300"
                >
                  Practice Test - A Listening Transcript
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="hover:underline hover:text-gray-900 transition-all duration-300"
                >
                  Practice Test -B Listening Transcript
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="hover:underline hover:text-gray-900 transition-all duration-300"
                >
                  Study Materials Bookstore{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TestTwo;
