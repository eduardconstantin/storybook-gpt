"use client";
import React from "react";
import { useTheme } from "next-themes";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";

const DarkModeSwitch = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-5 md:gap-20 mb-2">
      {theme === "light" ? (
        <BsMoonStarsFill
          size={25}
          color="#FF4785"
          style={{cursor:"pointer"}}
          onClick={() => setTheme("dark")}
          title="Switch to Dark Mode"
        />
      ) : (
        <BsSunFill
          size={25}
          color="#FF4785"
          style={{cursor:"pointer"}}
          onClick={() => setTheme("light")}
          title="Switch to Light Mode"
        />
      )}
    </div>
  );
};

export default DarkModeSwitch;
