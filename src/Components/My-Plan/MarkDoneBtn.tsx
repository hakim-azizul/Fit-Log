'use client'
import { WorksProvider } from '@/context/WorkProvider';
import IWork from '@/types/workType';
import React, { useContext } from 'react';
import { toast, Flip } from 'react-toastify';

interface IMarkDoneBtn{
    work: IWork,
}
const MarkDoneBtn = ({work}: IMarkDoneBtn) => {

    const {plans, setPlans}= useContext(WorksProvider);
    const handleMarkDone = () =>{
        const restInPlans= plans.filter(workplan => workplan.id !== work.id);
        setPlans(restInPlans);
        toast.success(`${work.name} is complited`, {
        autoClose: 1000,
        hideProgressBar: true,
        theme: "colored",
        transition: Flip,
      });
    }
    return (
        <button 
        onClick={handleMarkDone}
        className="bg-[#C2F800] hover:bg-[#a6d800] text-black px-4 py-2 rounded-full text-sm font-bold flex items-center gap-1 transition-colors cursor-pointer">
          ✓ Mark as Done
        </button>
    );
};

export default MarkDoneBtn;