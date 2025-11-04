import React, { useState } from "react";
import { Link } from "react-router";
import customFetch from "../../../utils/customFetch";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const resetPassword = () => {
  const action = async (formData) => {
    try {
      const email = formData.get("email");
      await customFetch.post("/auth/forgot-password", { email: email });
      toast.success("Successful, Check your mail");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <section class="bg-slate-100 font-sans">
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
            <div class="lg:mb-16 mb-10 mt-8 lg:w-[466px] max-w-full w-[300px]">
              <div class="flex justify-between items-center lg:hidden">
                <div class="h-10 w-10 bg-slate-200"></div>
                <div class="font-light text-sm">
                  <Link
                    to="/register"
                    class="text-[#149DFF] font-medium hover:text-blue-800 hover:underline"
                  >
                    Sign up here
                  </Link>
                </div>
              </div>
              <div class="font-light text-sm hidden lg:block">
                <span class="text-slate-500">Already have an account? </span>
                <Link
                  to="/login"
                  class="text-[#149DFF] font-medium hover:text-blue-800 hover:underline"
                >
                  Login here
                </Link>
              </div>
            </div>
            <div>
              <div class="mb-6">
                <p class="mb-1 font-bold text-2xl text-[#181B25]">
                  Forgot password
                </p>
                <div class="font-light text-sm text-slate-500">
                  We’ll send a reset email to your associated email address.
                </div>
              </div>
              <form action={action}>
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
                    name="email"
                    class="bg-white border border-[#E1E4EA]  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-3.5 px-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="e.g john.doe@company.com"
                    required
                  />
                </div>
                <div class="mb-6">
                  <button
                    type="submit"
                    class="text-white w-full transition-all ease-in-out bg-[#032250] hover:bg-[rgb(2,27,64)] focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-6 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Reset password
                  </button>
                </div>
              </form>
              <div className="flex justify-center items-center text-center hover:scale-105 transition-transform ease-in-out">
                <Link
                  to="/login"
                  class="text-[#032250]  font-medium text-sm px-5 py-2.5 text-center inline-flex items-center me-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="3.5"
                    stroke="#032250"
                    class="w-3.5 h-3.5 me-2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                    />
                  </svg>
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default resetPassword;
