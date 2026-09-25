"use client";
import React, { useContext } from "react";
import { WorksProvider } from "@/context/WorkProvider";

const Statistics = () => {
  const { plans, savedWorks, activeTab } = useContext(WorksProvider);
  
  const currentData = (activeTab === "saved" ? savedWorks : plans) || [];

  const totalMinutes = currentData.reduce((sum, item) => sum + (item.duration || 0),0,);
  const totalCalories = currentData.reduce((sum, item) => sum + (item.caloriesBurned || 0),0,);
  const totalExercises = currentData.length;

  return (
    <div className="w-full mx-auto my-8">
      <div className="bg-[#15171E] border border-gray-800 rounded-2xl py-6 px-8 flex flex-col sm:flex-row justify-between sm:divide-x divide-gray-800 shadow-lg">
        <div className="flex flex-col flex-1 px-4 mb-6 sm:mb-0 text-center sm:text-left">
          <span className="text-gray-400 text-sm font-medium mb-2">
            Exercises
          </span>
          <span className="text-[#C2F800] text-5xl md:text-6xl font-extrabold tracking-tight">
            {totalExercises}
          </span>
        </div>
        <div className="flex flex-col flex-1 px-4 sm:px-12 mb-6 sm:mb-0 text-center sm:text-left">
          <span className="text-gray-400 text-sm font-medium mb-2">
            Minutes
          </span>
          <span className="text-white text-5xl md:text-6xl font-extrabold tracking-tight">
            {totalMinutes}
          </span>
        </div>
        <div className="flex flex-col flex-1 px-4 sm:px-12 text-center sm:text-left">
          <span className="text-gray-400 text-sm font-medium mb-2">
            Calories
          </span>
          <span className="text-white text-5xl md:text-6xl font-extrabold tracking-tight">
            {totalCalories}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Statistics;