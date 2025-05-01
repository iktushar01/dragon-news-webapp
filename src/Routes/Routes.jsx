import {
    createBrowserRouter,
  } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Carrer from "../Pages/Carrer";
import CategoryNews from "../Pages/CategoryNews";


 export const router = createBrowserRouter([
    {
      path: "/",
      Component : HomeLayout,
      children : [
        {
          index : true,
          path : '/',
          Component : Home
        },
        {
          path : '/about',
          Component : About
        },
        {
          path : '/carrer',
          Component : Carrer
        },
        {
          path : '/category',
          Component : CategoryNews
        }
      ]
    },
  ]);