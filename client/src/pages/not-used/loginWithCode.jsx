const loginWithCode = () => {
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
              <div class="mb-6">
                <div>
                  <label
                    for="code"
                    class="block mb-2 text-sm text-gray-900 dark:text-white"
                  >
                    Code
                  </label>
                </div>
                <input
                  type="text"
                  id="code"
                  class="bg-gray-50 border border-[#E1E4EA] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-3.5 px-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="123-456"
                  required
                />
                <p className="text-sm mt-2">
                  Didn't get the code?{" "}
                  <span className="text-[#149DFF]">Resend code 60s</span>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default loginWithCode;
