"use client";
import React, { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Saved");

  return (
    <div className="w-full mx-auto my-8 font-sans">
      <div className="flex justify-between items-center mb-6">
        {/* Left: Tab */}
        <div className="flex items-center bg-[#15171e] border border-gray-800 rounded-xl p-1 shadow-sm">
          <button
            onClick={() => setActiveTab("Today's Plan")}
            className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
              activeTab === "Today's Plan"
                ? "bg-[#252830] text-white shadow"
                : "text-gray-400 hover:text-gray-200"
            }`}
          >
            Today&apos;s Plan
          </button>

          <button
            onClick={() => setActiveTab("Saved")}
            className={`px-8 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
              activeTab === "Saved"
                ? "bg-[#252830] text-white shadow"
                : "text-gray-400 hover:text-gray-200"
            }`}
          >
            Saved
          </button>
        </div>

        {/* Right: Sort*/}
        <div className="flex items-center gap-3">
          <span className="text-gray-400 text-sm">Sort By</span>
          <select defaultValue="Pick a font" className="select select-ghost">
            <option disabled={true}>Pick a font</option>
            <option>Inter</option>
            <option>Poppins</option>
            <option>Raleway</option>
          </select>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="w-full min-h-112.5 border border-gray-800 border-dashed rounded-3xl flex flex-col items-center justify-center p-8 bg-[#0b0c10]/50">
        {activeTab === "Saved" ? (
          <div className="flex flex-col items-center text-center space-y-3">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white uppercase tracking-wider font-oswald">
              Nothing Here Yet
            </h2>
            <p className="text-gray-400 text-sm md:text-base max-w-md">
              Browse the library and add a lift to get today moving.
            </p>
            <button className="mt-5 bg-[#C2F800] hover:bg-[#addd00] text-black font-bold py-2.5 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Go to workouts
            </button>
          </div>
        ) : (
          <div className="text-gray-500 flex flex-col items-center">
            <p>Today&apos;s plan is currently empty.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
