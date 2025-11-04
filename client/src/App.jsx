import { createBrowserRouter, redirect } from "react-router";
import { RouterProvider } from "react-router/dom";

import {
  Login,
  ResetPassword,
  ResetPasswordCode,
  RegisterWithData,
  Test,
  Landing,
  ResetPasswordCodeConfirm,
  Dashboard,
  Dashboard2,
  Listening,
  Reading,
  Writing,
  Writing2,
  Writing3,
  Writing4,
  Speaking,
  Listening2,
  Listening3,
  Listening3a,
  Listening4,
  Reading2,
  Reading3,
  Reading3a,
  Reading4,
  Reading3b,
  Reading3c,
  Speaking2,
  Speaking3,
  Writing5,
} from "./pages";
import { action as RegisterAction } from "./pages/registerWithData";
import { action as LoginAction } from "./pages/login";
import { action as ResetPasswordAction } from "./pages/resetPasswordCode";
import customFetch from "../../utils/customFetch";
import ListeningTest2 from "./pages/ListeningTest2";
import ListeningTest3 from "./pages/ListeningTest3";
import ListeningTest4 from "./pages/ListeningTest4";
import ListeningTest5 from "./pages/ListeningTest5";
import ListeningTest3a from "./pages/ListeningTest3a";
import ListeningTest6, { loader } from "./pages/ListeningTest6";
import ListeningTest7 from "./pages/ListeningTest7";
import { loader as reading3Loader } from "./pages/Reading3";
import { loader as reading3aLoader } from "./pages/Reading3a";
import { loader as reading3bLoader } from "./pages/Reading3b";
import { loader as reading3cLoader } from "./pages/Reading3c";
import { loader as writing3loader } from "./pages/Writing3";
import { loader as writing4loader } from "./pages/Writing4";
import { loader as speakingLoader } from "./pages/Speaking3";
// import { loader as LandingLoader } from "./pages/landing";

const router = createBrowserRouter(
  [
    // {
    //   path: "/",
    //   element: <HomeLayout />,
    //   errorElement: <ErrorLayout />,
    //   children: [
    //     {
    //       index: true,
    //       element: <Landing />,
    //     },
    //   ],
    // },
    {
      path: "/",
      element: <Landing />,
      loader: async () => {
        // return data from here
        window.onload = function () {
          document.getElementById("user-menu-button").click();
        };
        // Check if the page has already been reloaded in the current session
        if (!sessionStorage.getItem("reloaded")) {
          // If not, set a flag in sessionStorage to indicate that it has been reloaded
          sessionStorage.setItem("reloaded", "true");
          // Reload the page
          location.reload();
        }
        // Optional: Clear the flag when the user navigates away from the page
        // This ensures that the page will reload again if the user revisits it later
        window.addEventListener("beforeunload", function () {
          sessionStorage.removeItem("reloaded");
        });
      },
    },
    // {
    //   path: "/register",
    //   element: <Register />,
    // },
    {
      path: "/register",
      element: <RegisterWithData />,
      action: RegisterAction,
    },
    {
      path: "/login",
      element: <Login />,
      action: LoginAction,
    },
    {
      path: "/reset-password",
      element: <ResetPassword />,
    },
    {
      path: "/reset-password-code-confirm/:code",
      element: <ResetPasswordCodeConfirm />,
    },
    {
      path: "/reset-password-code/:code",
      element: <ResetPasswordCode />,
      action: ResetPasswordCode,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
      loader: async () => {
        // return data from here
        try {
          return await customFetch.get("/user/current-user");
        } catch (error) {
          return redirect("/");
        }
      },
    },
    {
      path: "/listening",
      element: <Listening />,
    },
    {
      path: "/listening-2",
      element: <Listening2 />,
    },
    {
      path: "/listening-3",
      element: <Listening3 />,
    },
    {
      path: "/listening-3a",
      element: <Listening3a />,
    },
    {
      path: "/listening-4",
      element: <Listening4 />,
    },
    {
      path: "/listening-5",
      element: <ListeningTest5 />,
    },
    {
      path: "/listening-6",
      element: <ListeningTest6 />,
      loader: loader,
    },
    {
      path: "/listening-7",
      element: <ListeningTest7 />,
    },
    {
      path: "/reading",
      element: <Reading />,
    },
    {
      path: "/reading-2",
      element: <Reading2 />,
    },
    {
      path: "/reading-3",
      element: <Reading3 />,
      loader: reading3Loader,
    },
    {
      path: "/reading-3a",
      element: <Reading3a />,
      loader: reading3aLoader,
    },
    {
      path: "/reading-3b",
      element: <Reading3b />,
      loader: reading3bLoader,
    },
    {
      path: "/reading-3c",
      element: <Reading3c />,
      loader: reading3cLoader,
    },
    {
      path: "/reading-4",
      element: <Reading4 />,
    },
    {
      path: "/writing",
      element: <Writing />,
    },
    {
      path: "/writing-2",
      element: <Writing2 />,
    },
    {
      path: "/writing-3",
      element: <Writing3 />,
      loader: writing3loader,
    },
    {
      path: "/writing-4",
      element: <Writing4 />,
      loader: writing4loader,
    },
    {
      path: "/writing-5",
      element: <Writing5 />,
    },
    {
      path: "/speaking",
      element: <Speaking />,
    },
    {
      path: "/speaking-2",
      element: <Speaking2 />,
    },
    {
      path: "/speaking-3",
      element: <Speaking3 />,
      loader: speakingLoader,
    },
    {
      path: "/dashboard-two",
      element: <Dashboard2 />,
    },
    {
      path: "/test",
      element: <Test />,
    },
  ],
  {
    future: {
      v7_partialHydration: true,
    },
  }
);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
