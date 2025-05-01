import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import logo from "../assets/logo.png";

const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedDate = format(currentTime, "EEEE, MMMM d, yyyy");
  const formattedTime = format(currentTime, "hh:mm:ss a");

  return (
    <div>
      <div className="flex justify-center flex-col items-center">
        <img className="w-[250px] md:w-[450px]" src={logo} alt="Logo" />
        <p className="text-accent">Journalism Without Fear or Favour</p>

        <p className="font-semibold text-accent">{formattedDate}</p>
        <p className="font-semibold text-accent">{formattedTime}</p>
      </div>
    </div>
  );
};

export default Header;
