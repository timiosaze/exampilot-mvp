import React from "react";
import { Form, Link, redirect, useLoaderData, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import customFetch from "../../../utils/customFetch.js";
import { Button, Dropdown, DropdownItem } from "flowbite-react";
import { getInitials } from "./dashboard/getInitials.js";

import { logout } from "./logout.js";

const landing = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  // const logout = async () => {
  //   await customFetch.post("/auth/logout");
  //   window.location.reload();
  // };
  useEffect(() => {
    customFetch
      .get("/user/current-user")
      .then((user) => {
        console.log(user.data.user._doc.fullName);
        setUsername(user.data.user._doc.fullName);
        setEmail(user.data.user._doc.email);
      })
      .catch((error) => setUsername(null));
  }, []);
  return (
    <section className="font-sans">
      <header>
        <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
          <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="/" class="flex items-center">
              <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Celpip
              </span>
            </a>
            <div class="flex items-center lg:order-2">
              {username === null ? (
                <div>
                  <Link
                    to="/login"
                    class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                  >
                    Log in
                  </Link>
                  <Link
                    to="/register"
                    class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                  >
                    Register
                  </Link>
                  <button
                    data-collapse-toggle="mobile-menu-2"
                    type="button"
                    class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="mobile-menu-2"
                    aria-expanded="false"
                  >
                    <span class="sr-only">Open main menu</span>
                    <svg
                      class="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <svg
                      class="hidden w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
              ) : (
                <div>
                  <button
                    type="button"
                    class="border-2 border-primary-600 w-10 h-10 bg-gray-100 text-gray-900 flex items-center justify-center rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    id="user-menu-button"
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown"
                  >
                    <p>{getInitials(username)}</p>
                  </button>

                  <div
                    class="hidden z-50 my-4 w-56 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                    id="dropdown"
                  >
                    <div class="py-3 px-4">
                      <span class="block text-sm font-semibold text-gray-900 dark:text-white">
                        {username}
                      </span>
                      <span class="block text-sm font-light text-gray-500 truncate dark:text-gray-400">
                        {email}
                      </span>
                    </div>
                    <ul
                      class="py-1 font-light text-gray-500 dark:text-gray-400"
                      aria-labelledby="dropdown"
                    >
                      <li>
                        <Link
                          to="/dashboard"
                          class="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                        >
                          Dashboard
                        </Link>
                      </li>
                    </ul>
                    <ul
                      class="py-1 font-light text-gray-500 dark:text-gray-400"
                      aria-labelledby="dropdown"
                    >
                      <li>
                        <form
                          action={logout}
                          class="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          <button type="submit">Sign out</button>
                        </form>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
            <div
              class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <a
                    href="#"
                    class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Take Celpip
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    About Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div className="flex h-screen justify-center text-center items-center">
        <section class="bg-white dark:bg-gray-900">
          <div class="">
            <div class="">
              <h1 class="max-w-2xl mb-4 font-extrabold tracking-tight leading-none text-6xl dark:text-white">
                <span className="text-primary-700">CELPIP</span> Now Accepted
                for Australian Visa Purposes
              </h1>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
export default landing;
