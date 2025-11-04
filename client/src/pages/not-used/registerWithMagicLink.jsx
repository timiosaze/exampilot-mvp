import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const registerWithMagicLink = () => {
  const [showMagicLink, setShowMagicLink] = useState(false);

  return (
    <section class="bg-slate-200 font-sans">
      <div class="flex h-screen">
        <div class="lg:w-1/3 hidden lg:block border bg-[#200943] rounded-r-4xl p-10">
          <div class="h-12 w-12 bg-[#D9D9D9]"></div>
          <div class="my-12">
            <p class="text-slate-100 font-medium text-[40px] mb-4">
              Sign up to
            </p>
            <ul class="list-disc text-sm text-[#AAAAAA]">
              <li className="mb-2">Access 2 FREE practice tests</li>
              <li className="mb-2">Register for a test</li>
              <li className="mb-2">View information about upcoming tests</li>
            </ul>
          </div>
        </div>
        <div class="w-2/3 p-3 flex justify-center flex-1 bg-white xl:rounded-l-4xl rounded-none">
          <div>
            <div class="lg:mb-16 mb-10 mt-8 lg:w-[466px] max-w-full w-[300px]">
              <div class="flex justify-between items-center lg:hidden">
                <div class="h-10 w-10 bg-slate-200"></div>
                <div class="font-light text-sm">
                  <a
                    href="#"
                    class="text-[#149DFF] font-medium hover:text-blue-800 hover:underline"
                  >
                    Sign up here
                  </a>
                </div>
              </div>
              <div class="font-light text-sm hidden lg:block">
                <span class="text-slate-500">Already have an account? </span>
                <a
                  href="#"
                  class="text-[#149DFF] font-medium hover:text-blue-800 hover:underline"
                >
                  Login here
                </a>
              </div>
            </div>
            <div>
              <div class="mb-6">
                <p class="mb-1 font-bold text-2xl text-[#181B25]">
                  Create an account
                </p>
                <div class="font-light text-sm text-slate-500">
                  Sign up for a new account to get started.
                </div>
              </div>
              <div class="mb-6">
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm text-gray-900 dark:text-white"
                  >
                    Email address
                  </label>
                </div>
                <input
                  type="email"
                  id="email"
                  class="bg-white border border-[#E1E4EA]  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-3.5 px-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="e.g john.doe@company.com"
                  required
                />
              </div>
              <div class="mb-6">
                <div>
                  <label
                    for="magicLink"
                    class="block mb-2 text-sm text-gray-900 dark:text-white"
                  >
                    Magic Link
                  </label>
                </div>
                <div className="relative">
                  <input
                    type={showMagicLink ? "text" : "password"}
                    placeholder=""
                    className="bg-white border placeholder:text-[#717784] border-gray-300 text-gray-900 text-sm rounded-lg w-full py-3.5 px-4 font-light  focus:outline-none focus:ring-2 focus:ring-blue-500
                    dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowMagicLink((prev) => !prev)}
                    className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-600"
                  >
                    {showMagicLink ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
                <div>
                  <p className="text-[#535362] text-xs mt-2">
                    Check your email for a Login link (Expires in 15minutes)
                  </p>
                </div>
              </div>
              <div class="mb-6">
                <button
                  type="submit"
                  class="text-white w-full transition-all ease-in-out bg-[#032250] hover:bg-[rgb(2,27,64)] focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-6 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Send magic link
                </button>
              </div>
              <div className="flex justify-center items-center text-center mt-10">
                <p className="text-sm">
                  <span className="text-[#525866]">
                    By signing up, you are agreeing to our{" "}
                  </span>
                  <a href="#" className="underline text-[#181B25]">
                    Terms of Service
                  </a>{" "}
                  <span className="text-[#525866]">and </span>
                  <a href="#" className="underline text-[#181B25]">
                    Privacy Policy
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default registerWithMagicLink;
