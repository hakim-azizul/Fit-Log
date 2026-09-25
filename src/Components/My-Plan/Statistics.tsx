"use client";
import React, { useContext } from "react";
import { WorksProvider } from "@/context/WorkProvider";

const Statistics = () => {
  const { plans, savedWorks, activeTab } = useContext(WorksProvider);
  
  const currentData = (activeTab === "saved" ? savedWorks : plans) || [];

  const totalMinutes = currentData.reduce((sum, item) => sum + (item.duration || 0), 0);
  const totalCalories = currentData.reduce((sum, item) => sum + (item.caloriesBurned || 0), 0);
  const totalExercises = currentData.length;

  return (
    <div className="w-full mx-auto my-6 md:my-8">
      <div className="bg-[#15171E] border border-gray-800 rounded-2xl p-5 sm:p-8 flex flex-col sm:flex-row justify-between divide-y sm:divide-y-0 sm:divide-x divide-gray-800 shadow-lg w-full">
        <div className="flex flex-col flex-1 items-center sm:items-start py-4 sm:py-0 sm:pr-8">
          <span className="text-gray-400 text-xs sm:text-sm font-medium mb-1 md:mb-2 uppercase tracking-wider">
            Exercises
          </span>
          <span className="text-[#C2F800] text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            {totalExercises}
          </span>
        </div>
        <div className="flex flex-col flex-1 items-center sm:items-start py-4 sm:py-0 sm:px-8">
          <span className="text-gray-400 text-xs sm:text-sm font-medium mb-1 md:mb-2 uppercase tracking-wider">
            Minutes
          </span>
          <span className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            {totalMinutes}
          </span>
        </div>
        <div className="flex flex-col flex-1 items-center sm:items-start pt-4 sm:pt-0 pb-2 sm:pb-0 sm:pl-8">
          <span className="text-gray-400 text-xs sm:text-sm font-medium mb-1 md:mb-2 uppercase tracking-wider">
            Calories
          </span>
          <span className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            {totalCalories}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Statistics;