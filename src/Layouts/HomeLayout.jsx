import React from "react";
import { Outlet, useNavigation } from "react-router";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";
import LeftAside from "../Components/HomeLayout/LeftAside";
import RightAside from "../Components/HomeLayout/RightAside";
import Loading from "../Pages/Loading";

const HomeLayout = () => {
  const { state } = useNavigation();
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
        <aside className="col-span-3 sticky top-0 max-h-fit">
          <LeftAside />
        </aside>
        <section className="main col-span-6">
          {state === "loading" ? <Loading /> : <Outlet />}
        </section>
        <aside className="col-span-3 sticky top-0 max-h-fit">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
