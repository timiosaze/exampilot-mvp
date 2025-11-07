import { Form, Link, redirect, useParams } from "react-router";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { GoDotFill } from "react-icons/go";
import { IoCheckmark } from "react-icons/io5";
import customFetch from "../../../utils/customFetch";
import { toast } from "react-toastify";
// import { use } from "react";

export const action = async ({ request }) => {
  document.getElementById("button").disabled = true;
  const formData = await request.formData();
  const { token } = useParams();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post(`/auth/reset-password-code/${token}`, data);
    toast.success("Password changed successful");
    redirect("/login");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const resetPasswordCode = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [name, setName] = useState("");
  const [checkLength, setCheckLength] = useState(false);
  const [checkUppercase, setCheckUppercase] = useState(false);
  const [checkNumber, setCheckNumber] = useState(false);

  const validateName = async (name) => {
    if (name.length >= 8) setCheckLength(true);
    else setCheckLength(false);
    if (/[A-Z]/.test(name)) setCheckUppercase(true);
    else setCheckUppercase(false);
    if (/[0-9]/.test(name)) setCheckNumber(true);
    else setCheckNumber(false);
  };

  const checkPassword = [
    {
      label: "At least 8 characters long",
      value: checkLength,
    },
    {
      label: "Contains 1 uppercase character",
      value: checkUppercase,
    },
    {
      label: "Contains 1 number",
      value: checkNumber,
    },
  ];

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
                  Reset password
                </p>
                <div class="font-light text-sm text-slate-500">
                  Protect your account with a strong password
                </div>
              </div>
              <Form method="post">
                <div class="mb-1">
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
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        validateName(e.target.value);
                      }}
                      name="password"
                      className="bg-white border placeholder:text-[#717784] border-gray-300 text-gray-900 text-sm rounded-lg w-full py-3.5 px-4 font-light focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  {name && (
                    <div className="text-xs mt-2">
                      {checkPassword.map((item, index) => (
                        <p key={index} className={`mb-1 font-medium`}>
                          {item.value ? (
                            <IoCheckmark className="inline  text-[#027A48]" />
                          ) : (
                            <GoDotFill className="inline" />
                          )}{" "}
                          <span
                            className={`${item.value ? "text-[#027A48]" : ""}`}
                          >
                            {item.label}
                          </span>
                        </p>
                      ))}
                    </div>
                  )}
                </div>
                <div class="my-6">
                  <div>
                    <label
                      for="confirmPassword"
                      class="block mb-2 text-sm text-gray-900 dark:text-white"
                    >
                      Confirm Password
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      name="confirm_password"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Password"
                      className="bg-white border placeholder:text-[#717784] border-gray-300 text-gray-900 text-sm rounded-lg w-full py-3.5 px-4 font-light focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword((prev) => !prev)}
                      className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-600"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>
                <div class="my-6">
                  <button
                    type="submit"
                    disabled={false}
                    id="button"
                    class="text-white w-full transition-all ease-in-out bg-[#032250] hover:bg-[rgb(2,27,64)] focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-6 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Update password
                  </button>
                </div>
              </Form>
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
export default resetPasswordCode;
