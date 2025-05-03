import {
  createBrowserRouter,
} from "react-router-dom"; // ✅ Correct import

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
import PrivateRoute from "../Provider/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />, // ✅ changed Component to element
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/carrer",
        element: <Carrer />
      },
      {
        path: "/terms",
        element: <Terms />
      },
      {
        path: "/category/:id",
        element: <CategoryNews />,
        loader: () => fetch("/news.json")
      },
    ]
  },
  {
    path: "/news-details/:id",
    element: (
      <PrivateRoute>
        <NewsDetails />
      </PrivateRoute>
    ),
    loader: () => fetch("/news.json")
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login />
      },
      {
        path: "/auth/register",
        element: <Register />
      }
    ]
  }
]);
