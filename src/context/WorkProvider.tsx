"use client";
import IWork from "@/types/workType";
import React, { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface IWorkProvider {
  plans: IWork[];
  setPlans: Dispatch<SetStateAction<IWork[]>>;
  savedWorks: IWork[];
  setSavedWorks: Dispatch<SetStateAction<IWork[]>>;
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
}

export const WorksProvider = createContext<IWorkProvider>({} as IWorkProvider);

const WorkProvider = ({ children }: { children: ReactNode }) => {
  const [plans, setPlans, isPlansMounted] = useLocalStorage<IWork[]>("fitlog_plans", []);
  const [savedWorks, setSavedWorks, isSavedMounted] = useLocalStorage<IWork[]>("fitlog_savedWorks", []);
  const [activeTab, setActiveTab] = useState<string>("plan");

  const contextData = {
    plans,
    setPlans,
    savedWorks,
    setSavedWorks,
    activeTab,
    setActiveTab,
  };
  if (!isPlansMounted || !isSavedMounted) return null;

  return (
    <WorksProvider.Provider value={contextData}>
      {children}
    </WorksProvider.Provider>
  );
};

export default WorkProvider;