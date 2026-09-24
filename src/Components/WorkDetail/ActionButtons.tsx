"use client";
import { WorksProvider } from "@/context/WorkProvider";
import IWork from "@/types/workType";
import React, { useContext } from "react";

interface IActionBtn {
  work: IWork;
}

const ActionButtons = ({ work }: IActionBtn) => {
  const { plans, setPlans, savedWorks, setSavedWorks } = useContext(WorksProvider);

  const handleAddPlan = () => {
    setPlans([...plans, work]);
    // toast.success(`${work.name}: Added to today's plan`);
  };

  const handleSaveLater = () => {
    setSavedWorks([...savedWorks, work]);
    // toast.success(`${work.name}: Saved for later`);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 pt-4">
      <button
        onClick={() => handleAddPlan()}
        className="flex-1 bg-[#C2F800] hover:bg-[#a6d800] text-black font-semibold py-3 px-6 rounded-2xl transition-colors duration-300 ease-in-out flex items-center justify-center gap-2 cursor-pointer"
      >
        <span className="text-lg">📅</span> Add to today&apos;s plan
      </button>

      <button
        onClick={() => handleSaveLater()}
        className="flex-1 bg-transparent text-white border border-gray-400 hover:border-[#C2F800] hover:text-[#C2F800] font-semibold py-3 px-6 rounded-2xl transition-colors duration-300 ease-in-out flex items-center justify-center gap-2 cursor-pointer"
      >
        <span className="text-lg">🔖</span> Save for later
      </button>
    </div>
  );
};

export default ActionButtons;
