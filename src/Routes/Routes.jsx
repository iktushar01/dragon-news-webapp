import {
    createBrowserRouter,
  } from "react-router";
import Home from "../Pages/Home/Home";
import HomeLayout from "../Layouts/HomeLayout";


 export const router = createBrowserRouter([
    {
      path: "/",
      Component : HomeLayout
    },
  ]);