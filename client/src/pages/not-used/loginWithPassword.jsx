import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const loginWithPassword = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section class="bg-slate-200 font-sans">
      <div class="flex">
        <div class="lg:w-1/3 hidden lg:block">
          <div className="flex justify-between h-screen flex-col">
            <div class="h-16 w-10 bg-[#032250] m-10"></div>
            <div class="m-10">
              <p class="text-[#032250] font-medium text-[40px]">
                Welcome to...
              </p>
            </div>
            <div className="m-10 max-w-full max-h-full h-full bg-blue-100 rounded-2xl"></div>
          </div>
        </div>
        <div class="w-2/3 p-3 flex justify-center flex-1 bg-white xl:rounded-l-4xl rounded-none">
          <div>
            <div class="lg:mb-40 mb-10 mt-8 lg:w-[466px] max-w-full w-[300px]">
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
                <span class="text-slate-500">Don't have an account? </span>
                <a
                  href="#"
                  class="text-teal-500 font-medium hover:text-blue-800 hover:underline"
                >
                  Sign up here
                </a>
              </div>
            </div>
            <div>
              <div class="mb-6">
                <p class="mb-1 font-bold text-2xl text-[#181B25]">
                  Welcome back
                </p>
                <div class="font-light text-sm text-slate-500">
                  Let's get you back into your account,{" "}
                  <span class="text-[#181B25]">johndoe@gmail.com!</span>
                </div>
              </div>
              <a
                href="#"
                class="text-black w-full block bg-white transition-all ease-in-out border border-[#E1E4EA] hover:border-[#032250] focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-6 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Request code
              </a>
              <div class="flex items-center my-3">
                <hr class="flex-grow border-t border-gray-300" />
                <span class="mx-4 text-xs font-light text-gray-500">
                  OR CONTINUE WITH
                </span>
                <hr class="flex-grow border-t border-gray-300" />
              </div>

              <div class="mb-6">
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="bg-white border placeholder:text-[#717784] border-gray-300 text-gray-900 text-sm rounded-lg w-full py-3.5 px-4 font-light focus:outline-none focus:ring-2 focus:ring-blue-500
        "
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-600"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>
              <div className="mb-6">
                <p class="text-sm">
                  <a href="#">Forgot Password?</a>
                </p>
              </div>
              <div class="mb-6">
                <button
                  type="submit"
                  class="text-white w-full bg-[#032250] transition-all hover:bg-[rgb(2,27,64)] ease-in-out focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Login
                </button>
              </div>
              <div className="flex justify-center items-center">
                <p class="text-sm">
                  <a href="#">Not You?</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default loginWithPassword;
