"use client";
import { WorksProvider } from "@/context/WorkProvider";
import IWork from "@/types/workType";
import React, { useContext } from "react";
import { Flip, toast } from "react-toastify";

interface IActionBtn {
  work: IWork;
}

const ActionButtons = ({ work }: IActionBtn) => {
  const { plans, setPlans, savedWorks, setSavedWorks } =
    useContext(WorksProvider);

  const handleAddPlan = () => {
    const isPlaned = plans.find((prevwork) => prevwork.id === work.id);

    if (isPlaned) {
      toast.error(`${work.name}: is already in your plan`, {
        autoClose: 1000,
        hideProgressBar: true,
        theme: "colored",
        transition: Flip,
      });
    } else {
      setPlans([...plans, work]);
      toast.success(`${work.name}: added to today's plan`, {
        autoClose: 1000,
        hideProgressBar: true,
        theme: "colored",
        transition: Flip,
      });
    }
  };
  const handleSaveLater = () => {
    const isSaved = savedWorks.find((prevwork) => prevwork.id === work.id);

    if (isSaved) {
      toast.error(`${work.name}: is already saved`, {
        autoClose: 1000,
        hideProgressBar: true,
        theme: "colored",
        transition: Flip,
      });
    } else {
      setSavedWorks([...savedWorks, work]);
      toast.success(`${work.name}: Saved for later`, {
        autoClose: 1000,
        hideProgressBar: true,
        theme: "colored",
        transition: Flip,
      });
    }
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
