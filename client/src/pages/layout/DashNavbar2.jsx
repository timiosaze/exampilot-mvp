import { Search, Bell, Mail, LayoutGrid } from "lucide-react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { getInitials } from "../dashboard/getInitials";
import customFetch from "../../../../utils/customFetch";
import { useEffect, useState } from "react";

const DashNavbar2 = ({ sideBarCollapsed, toggleSideBar }) => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    customFetch
      .get("/user/current-user")
      .then((user) => {
        // console.log(user.data.user._doc.fullName);
        setUsername(user.data.user._doc.fullName);
      })
      .catch((error) => setUsername(null));
  }, []);
  return (
    <div class="flex h-16 items-center justify-between w-full border-b border-slate-300 bg-white px-8">
      <div className="flex items-center">
        <a href="/" class="flex items-center">
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Celpip
          </span>
        </a>
      </div>
      <div class="flex items-center space-x-3">
        <button className="p-3 rounded-xl  text-slate-600 hover:bg-slate-100 transition-colors">
          <Bell className="w-5 h-5" />
        </button>
        <button className="p-3 rounded-xl  text-slate-600 hover:bg-slate-100 transition-colors">
          <LayoutGrid className="w-5 h-5" />
        </button>
        {/*Settings*/}

        {/*User Profile*/}
        <button
          type="button"
          class="border-2 border-primary-600 w-10 h-10 bg-gray-100 text-gray-900 flex items-center justify-center rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          id="user-menu-button"
          aria-expanded="false"
          data-dropdown-toggle="dropdown"
        >
          <p>{getInitials(username)}</p>
        </button>
      </div>
    </div>
  );
};
export default DashNavbar2;
