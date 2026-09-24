"use client";
import React from "react";

const BrowseButton = () => {
  const handleScroll = () => {
    document
      .getElementById("workout-library")
      ?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <button
      onClick={handleScroll}
      className="bg-[#C2F800] hover:bg-[#addd00] text-black font-bold px-6 py-3 rounded-md transition-all"
    >
      BROWSE WORKOUTS
    </button>
  );
};

export default BrowseButton;
