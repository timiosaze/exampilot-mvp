import { redirect } from "react-router";
import customFetch from "../../../utils/customFetch.js";

export const logout = async () => {
  await customFetch.post("/auth/logout");
  window.location.reload();
};
