"use client";
import React from "react";
import { useTheme } from "next-themes";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";

const DarkModeSwitch = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-5 mb-2">
      {theme === "light" ? (
        <BsMoonStarsFill
          size={25}
          color="#f43f5e"
          style={{cursor:"pointer"}}
          onClick={() => setTheme("dark")}
        />
      ) : (
        <BsSunFill
          size={25}
          color="#f43f5e"
          style={{cursor:"pointer"}}
          onClick={() => setTheme("light")}
        />
      )}
    </div>
  );
};

export default DarkModeSwitch;