'use client'
import { WorksProvider } from "@/context/WorkProvider";
import IWork from "@/types/workType";
import React, { useContext } from "react";

interface IActionBtn {
  work: IWork;
}

const ActionButtons = ({ work }: IActionBtn) => {

    const {plans, setPlans, savedWorks, setSavedWorks} = useContext(WorksProvider)
    
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
      <button onClick={()=>handleAddPlan()} className="flex-1 bg-[#C2F800] hover:bg-[#9ec903] text-black font-bold py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2">
        <span>📅</span> Add to today&apos;s plan
      </button>
      <button onClick={()=>handleSaveLater()} className="flex-1 bg-[#161922] hover:bg-[#202433] text-white border border-gray-700 font-semibold py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2">
        <span>🔖</span> Save for later
      </button>
    </div>
  );
};

export default ActionButtons;
