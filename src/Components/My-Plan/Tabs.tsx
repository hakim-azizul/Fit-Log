"use client";
import React, { useContext } from "react";
import { WorksProvider } from "@/context/WorkProvider";
import PlansWorkCard from "@/Components/My-Plan/PlansWorkCard";
import SavedWorksCard from "@/Components/My-Plan/SavedWorksCard";
import Link from "next/link";

const Tabs = () => {
  const { activeTab, setActiveTab, plans, savedWorks } =
    useContext(WorksProvider);
  const currentData = activeTab === "saved" ? savedWorks : plans;

  return (
    <div className="w-full mx-auto my-8">
      <div className="flex justify-between items-center mb-6">
        {/* Left: Tab */}
        <div className="flex items-center bg-[#15171e] border border-gray-800 rounded-2xl p-1 shadow-sm">
          <button
            onClick={() => setActiveTab("plan")}
            className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer ${
              activeTab === "plan"
                ? "bg-black text-[#C2F800] shadow"
                : "text-gray-400 hover:text-gray-200"
            }`}
          >
            Today&apos;s Plan
          </button>

          <button
            onClick={() => setActiveTab("saved")}
            className={`px-10 py-2 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer ${
              activeTab === "saved"
                ? "bg-black text-[#C2F800] shadow"
                : "text-gray-400 hover:text-gray-200"
            }`}
          >
            Saved
          </button>
        </div>

{/* Right: Sort*/}
        <div className="flex items-center gap-3 shrink-0">
          <span className="text-gray-400 text-sm whitespace-nowrap">Sort By</span>
          <select 
            defaultValue="Duration" 
            className="select select-ghost bg-transparent border border-gray-700 text-white rounded-lg pl-3 pr-8 py-1.5 text-sm outline-none w-auto focus:border-[#C2F800] transition-colors cursor-pointer appearance-none"
          >
            <option disabled={true} className="bg-[#15171e] text-gray-400">Sort By</option>
            <option value="Duration" className="bg-[#15171e] text-white">Duration</option>
            <option value="Calories" className="bg-[#15171e] text-white">Calories</option>
            <option value="Name" className="bg-[#15171e] text-white">Name</option>
          </select>
        </div>
      </div>

      <div className="w-full rounded-3xl flex flex-col items-center justify-center bg-transparent">
        {currentData && currentData.length > 0 ? (
          <div className="w-full h-full flex flex-col gap-4">
            {currentData.map((item, index) =>
              activeTab === "today" ? (
                <PlansWorkCard key={index} item={item} />
              ) : (
                <SavedWorksCard key={index} item={item} />
              ),
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center text-center space-y-3 p-8 py-30 border border-gray-800 border-dashed rounded-3xl w-full">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white uppercase tracking-wider font-oswald">
              Nothing Here Yet
            </h2>
            <p className="text-gray-400 text-sm md:text-base max-w-md">
              Visit the library and add a lift{" "}
              {activeTab === "plan"
                ? "to your today's workout plan"
                : "for next workout"}
              .
            </p>
            <Link href="/#workout-library">
              <button className="mt-5 bg-[#C2F800] hover:bg-[#addd00] text-black font-bold py-2.5 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
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
