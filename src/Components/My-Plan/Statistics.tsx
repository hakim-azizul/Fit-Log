import React from "react";

const Statistics = () => {
  return (
    <div className="w-full mx-auto my-8">
      <div className="bg-[#15171E] border border-gray-800 rounded-2xl py-6 px-8 flex flex-col sm:flex-row justify-between sm:divide-x divide-gray-800 shadow-lg">
        <div className="flex flex-col flex-1 px-4 mb-6 sm:mb-0">
          <span className="text-gray-400 text-sm font-medium mb-2">
            Exercises
          </span>
          <span className="text-[#C2F800] text-5xl md:text-6xl font-extrabold tracking-tight">
            2
          </span>
        </div>
        <div className="flex flex-col flex-1 px-4 sm:px-12 mb-6 sm:mb-0">
          <span className="text-gray-400 text-sm font-medium mb-2">
            Minutes
          </span>
          <span className="text-white text-5xl md:text-6xl font-extrabold tracking-tight">
            23
          </span>
        </div>
        <div className="flex flex-col flex-1 px-4 sm:px-12">
          <span className="text-gray-400 text-sm font-medium mb-2">
            Calories
          </span>
          <span className="text-white text-5xl md:text-6xl font-extrabold tracking-tight">
            190
          </span>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
