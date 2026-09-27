"use client";
import { WorksProvider } from "@/context/WorkProvider";
import IWork from "@/types/workType";
import { Bookmark, CalendarPlus } from "lucide-react";
import React, { useContext } from "react";
import { Flip, toast } from "react-toastify";

interface IActionBtn {
  work: IWork;
}

const ActionButtons = ({ work }: IActionBtn) => {
  const { plans, setPlans, savedWorks, setSavedWorks } = useContext(WorksProvider);

  const isPlanFull = plans.length >= 5;
  
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
        disabled={isPlanFull}
        className={`flex-1 font-semibold py-3 px-6 rounded-2xl transition-all duration-300 ease-in-out flex items-center justify-center gap-2 
          ${
            isPlanFull
              ? "bg-gray-800 text-gray-500 cursor-not-allowed opacity-80"
              : "bg-[#C2F800] hover:bg-[#a6d800] text-black cursor-pointer"
          }`}
      >
        <CalendarPlus />
        {isPlanFull ? "Plan Full (Max 5)" : "Add to today's plan"}
      </button>

      <button
        onClick={() => handleSaveLater()}
        className="flex-1 bg-transparent text-white border border-gray-400 hover:border-[#C2F800] hover:text-[#C2F800] font-semibold py-3 px-6 rounded-2xl transition-colors duration-300 ease-in-out flex items-center justify-center gap-2 cursor-pointer"
      >
        <Bookmark /> Save for later
      </button>
    </div>
  );
};

export default ActionButtons;
