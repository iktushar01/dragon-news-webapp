import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-5 bg-base-200 p-3">
      <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>
      <Marquee speed={30} gradient={false} pauseOnHover={true}>
       React is awesome! | Stay tuned for updates | Your daily
        tech news here.
      </Marquee>
    </div>
  );
};

export default LatestNews;
