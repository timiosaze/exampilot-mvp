import { Search, Bell, Mail } from "lucide-react";
import { Bars3Icon } from "@heroicons/react/24/outline";
const DashNavbar = ({ sideBarCollapsed, toggleSideBar, username }) => {
  const getInitials = (name) => {
    let arrayNames = name.split(" ");
    if (arrayNames.length == 1) {
      return name.substr(0, 1).toUpperCase();
    } else {
      return arrayNames[0]
        .substr(0, 1)
        .toUpperCase()
        .concat("", arrayNames[1].substr(0, 1).toUpperCase());
    }
  };
  return (
    <div class="flex h-16 items-center justify-between w-full border-b border-slate-300">
      <div className="flex items-center">
        <button
          className="inline-flex justify-center items-center p-2 hover:bg-slate-300 transition-colors ease-in-out ml-4 rounded-lg"
          onClick={toggleSideBar}
        >
          <Bars3Icon className="w-7 h-7" />
        </button>
        {/* <div className="flex-1 lg:block w-2xl ml-4 hidden">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Type to search"
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-100 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>
        </div> */}
      </div>
      <div class="flex items-center mr-6">
        {/*User Profile*/}
        <button class="border-2 border-primary-600 w-10 h-10 bg-gray-100 text-gray-900 flex items-center justify-center rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 mx-2 ">
          <p>{getInitials(username)}</p>
        </button>
      </div>
    </div>
  );
};
export default DashNavbar;
