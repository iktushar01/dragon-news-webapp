import {
    createBrowserRouter,
  } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Carrer from "../Pages/Carrer";
import CategoryNews from "../Pages/CategoryNews";
import Login from "../Pages/Login";
import Register from "../Pages/Register";


 export const router = createBrowserRouter([
    {
      path: "/",
      Component : HomeLayout,
      children : [
        {
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
          path : '/category/:id',
          Component : CategoryNews,
          loader : () => fetch("/news.json")
        }
      ]
    },
        {
          path : "/auth",
          element : <p> sei to</p>,
          children : [
            {
              path : "/auth/login",
              Component : Login
            },
            {
              path : "/auth/register",
              Component : Register
            }
          ]
        }
  ]);