import { Form, Link, redirect } from "react-router";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import customFetch from "../../../utils/customFetch.js";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/auth/login", data);
    toast.success("Login Successful");
    window.location.href = "/";
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <section class="bg-slate-200 font-sans">
      <div class="flex h-screen">
        <div class="lg:w-1/3 hidden lg:block border bg-[#200943] rounded-r-4xl p-10">
          <div class="h-12 w-12 bg-[#D9D9D9]"></div>
          <div class="font-medium text-[40px] my-12">
            <p class="text-slate-100">Welcome back to ....</p>
          </div>
        </div>
        <div class="w-2/3 p-3 flex justify-center flex-1 bg-white xl:rounded-l-4xl rounded-none">
          <div>
            <div class="lg:mb-40 mb-10 mt-8 lg:w-[466px] max-w-full w-[300px]">
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
                <span class="text-slate-500">Don't have an account? </span>
                <Link
                  to="/register"
                  class="text-teal-500 font-medium hover:text-blue-800 hover:underline"
                >
                  Sign up here
                </Link>
              </div>
            </div>
            <div>
              <div class="mb-6">
                <p class="mb-1 font-bold text-2xl text-[#181B25]">
                  Welcome back
                </p>
                <div class="font-light text-sm text-slate-500">
                  Let's get back into your account
                </div>
              </div>
              <button
                type="button"
                class="text-black bg-white w-full hover:bg-slate-100 focus:ring-4 focus:outline-none focus:ring-slate-300 border-slate-200 border-2 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
              >
                <svg
                  class="w-5 h-5 mr-8"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#FFC107"
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                  <path
                    fill="#FF3D00"
                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                  ></path>
                  <path
                    fill="#4CAF50"
                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                  ></path>
                  <path
                    fill="#1976D2"
                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                </svg>
                Continue with Google
              </button>
              <div class="flex items-center my-4">
                <hr class="flex-grow border-t border-gray-300" />
                <span class="mx-4 text-xs font-light text-gray-500">
                  OR CONTINUE WITH
                </span>
                <hr class="flex-grow border-t border-gray-300" />
              </div>
              <Form method="post">
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
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-3.5 px-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="john.doe@company.com"
                    required
                  />
                </div>
                <div class="mb-2">
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
                      name="password"
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
                    <Link
                      to="/reset-password"
                      className="hover:underline hover:text-blue-600 transition-colors ease-in-out"
                    >
                      Forgot Password?
                    </Link>
                  </p>
                </div>
                <div class="">
                  <button
                    type="submit"
                    class="text-white w-full transition-all ease-in-out bg-[#032250] hover:bg-[rgb(2,27,64)] focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-6 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Login
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default login;
