"use client";
import IWork from "@/types/workType";
import React, { useContext } from "react";
import { WorksProvider } from "@/context/WorkProvider";
import { toast, Flip } from "react-toastify";

interface IRemoveBtn {
  work: IWork;
}

const RemoveBtn = ({ work }: IRemoveBtn) => {
  const { activeTab, plans, setPlans, savedWorks, setSavedWorks } =
    useContext(WorksProvider);

  const handleRemove = () => {
    if (activeTab === "today") {
      const restPlans = plans.filter((planedWork) => planedWork.id !== work.id);
      setPlans(restPlans);
      toast.error(`${work.name} plan is canceled`, {
        autoClose: 1000,
        hideProgressBar: true,
        theme: "colored",
        transition: Flip,
      });
    } else if (activeTab === "saved") {
      const restSavedWorks = savedWorks.filter(
        (savedWork) => savedWork.id !== work.id,
      );
      setSavedWorks(restSavedWorks);
      toast.error(`${work.name}: is removed`, {
        autoClose: 1000,
        hideProgressBar: true,
        theme: "colored",
        transition: Flip,
      });
    }
  };

  return (
    <button
      onClick={handleRemove}
      className="text-gray-500 text-xl hover:text-red-600 hover:text-2xl hover:font-extrabold p-2 transition-colors cursor-pointer"
    >
      ✕
    </button>
  );
};

export default RemoveBtn;
