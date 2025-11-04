import { useState } from "react";
import customFetch from "../../../utils/customFetch.js";

export default function Test() {
  // async function upload(formData) {
  //   const sound = formData.get("sound");
  //   console.log(sound, sound.name);
  //   await customFetch.post(
  //     "/upload/addsound",
  //     {
  //       file: sound,
  //       name: sound.name,
  //     },
  //     {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     }
  //   );

  //   // console.log(sound);
  // }
  return (
    <>
      <form
        action="/api/upload/addsound"
        method="post"
        enctype="multipart/form-data"
      >
        <div className="flex flex-col items-center justify-center h-screen w-full mx-4">
          <div className="mb-4">
            <label
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              for="file_input"
            >
              Upload file
            </label>
            <input
              class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="file_input"
              name="sound"
              type="file"
            />
          </div>
          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
