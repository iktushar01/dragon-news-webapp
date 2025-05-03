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
import AuthLayout from "../Layouts/AuthLayout";
import Terms from "../Pages/Terms";
import NewsDetails from "../Pages/NewsDetails";


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
          path : '/terms',
          Component : Terms
        },
        {
          path : '/category/:id',
          Component : CategoryNews,
          loader : () => fetch("/news.json")
        },
       
      ]
    },
    {
      path : '/news-details/:id',
      Component : NewsDetails,
      loader : () => fetch('/news.json')
    },
        {
          path : "/auth",
          element : <AuthLayout/>,
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