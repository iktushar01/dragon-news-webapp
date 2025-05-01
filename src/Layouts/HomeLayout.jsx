import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";
import LeftAside from "../Components/HomeLayout/LeftAside";
import RightAside from "../Components/HomeLayout/RightAside";
import SocialLogin from "../Components/HomeLayout/SocialLogin";

const HomeLayout = () => {
  return (
    <div className="container mx-auto my-3">
      <Header />
      <section>
        <LatestNews />
      </section>
      <nav>
        <Navbar />
      </nav>
      <main className="grid grid-cols-12 gap-5">
        <aside className="col-span-3">
          <LeftAside />
        </aside>
        <section className="main col-span-6">
          <Outlet />
        </section>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
