"use client";
import React, { useContext, useState } from "react";
import { WorksProvider } from "@/context/WorkProvider";
import PlansWorkCard from "./PlansWorkCard";
import SavedWorksCard from "./SavedWorksCard";
import Link from "next/link";

const Tabs = () => {
  const { activeTab, setActiveTab, plans, savedWorks } =
    useContext(WorksProvider);

  const [sortBy, setSortBy] = useState("Duration");

  const currentWorks = activeTab === "plan" ? plans : savedWorks;

  const sortedWorks = [...currentWorks].sort((a, b) => {
    if (sortBy === "Duration") {
      return (b.duration || 0) - (a.duration || 0);
    } else if (sortBy === "Calories") {
      return (b.caloriesBurned || 0) - (a.caloriesBurned || 0);
    } else if (sortBy === "Name") {
      return (a.name || "").localeCompare(b.name || "");
    }
    return 0;
  });

  return (
    <div className="w-full mx-auto my-8 font-sans">
      <div className="flex justify-between items-center mb-6 w-full">
        {/* Left: Tab */}
        <div className="flex items-center bg-[#15171e] border border-gray-800 rounded-xl p-1 shadow-sm">
          <button
            onClick={() => setActiveTab("plan")}
            className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
              activeTab === "plan"
                ? "bg-[#C2F800] text-black"
                : "text-gray-400 hover:text-gray-200"
            }`}
          >
            Today&apos;s Plan
          </button>

          <button
            onClick={() => setActiveTab("saved")}
            className={`px-8 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
              activeTab === "saved"
                ? "bg-[#C2F800] text-black"
                : "text-gray-400 hover:text-gray-200"
            }`}
          >
            Saved
          </button>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <span className="text-gray-400 text-sm whitespace-nowrap">
            Sort By
          </span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="select select-ghost bg-transparent border border-gray-700 text-white rounded-lg pl-3 pr-8 py-1.5 text-sm outline-none w-auto focus:border-[#C2F800] transition-colors cursor-pointer appearance-none"
          >
            <option disabled={true} className="bg-[#15171e] text-gray-400">
              Sort By
            </option>
            <option value="Duration" className="bg-[#15171e] text-white">
              Duration
            </option>
            <option value="Calories" className="bg-[#15171e] text-white">
              Calories
            </option>
            <option value="Name" className="bg-[#15171e] text-white">
              Name
            </option>
          </select>
        </div>
      </div>

      <div className="w-full min-h-112.5 border-dashed rounded-3xl flex flex-col items-center justify-center bg-transparent">
        {sortedWorks && sortedWorks.length > 0 ? (
          <div className="w-full h-full flex flex-col gap-4">
            {sortedWorks.map((work, index) =>
              activeTab === "plan" ? (
                <PlansWorkCard key={index} work={work} />
              ) : (
                <SavedWorksCard key={index} work={work} />
              ),
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center text-center space-y-3 p-8 border border-gray-800 border-dashed rounded-3xl w-full">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white uppercase tracking-wider font-oswald">
              Nothing Here Yet
            </h2>
            <p className="text-gray-400 text-sm md:text-base max-w-md">
              Visit the library and add a lift{" "}
              {activeTab === "plan" ? "for today's" : "for later"} workout.
            </p>
            <Link href="/">
              <button className="mt-5 bg-[#C2F800] hover:bg-[#addd00] text-black font-bold py-2.5 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer">
                Go to workouts
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
