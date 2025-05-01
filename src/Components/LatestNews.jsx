import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-5 bg-base-200 p-3">
      <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>
      <Marquee speed={30} gradient={false} pauseOnHover={true}>
        <p>
          React 19 Beta Launches with New Compiler and Improvements | Dive into
          the future of web development with enhanced performance and developer
          experience.
        </p>
        <p>
          Google Unveils AI-Powered Search Upgrade | The new update integrates
          generative AI to deliver smarter, more personalized results across all
          devices.
        </p>
        <p>
          GitHub Copilot Now Supports Voice Commands | Developers can now code
          hands-free using natural language through the new Copilot Voice
          feature.
        </p>
        <p>
          Apple to Announce Major macOS Overhaul at WWDC 2025 | Rumors suggest
          tighter AI integration and a redesigned user interface are on the way.
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
