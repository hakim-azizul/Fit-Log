"use client";
import IWork from "@/types/workType";
import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface IWorkProvider {
  plans: IWork[];
  setPlans: Dispatch<SetStateAction<IWork[]>>;
  savedWorks: IWork[];
  setSavedWorks: Dispatch<SetStateAction<IWork[]>>;
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
}

export const WorksProvider = createContext<IWorkProvider>({
  plans: [],
  setPlans: () => {},
  savedWorks: [],
  setSavedWorks: () => {},
  activeTab: "plan",
  setActiveTab: () => {},
});

const WorkProvider = ({ children }: { children: ReactNode }) => {
  const [plans, setPlans] = useState<IWork[]>([]);
  const [savedWorks, setSavedWorks] = useState<IWork[]>([]);
  const [activeTab, setActiveTab] = useState<string>("plan");

  const contextData = {
    plans,
    setPlans,
    savedWorks,
    setSavedWorks,
    activeTab,
    setActiveTab,
  };

  return (
    <WorksProvider.Provider value={contextData}>
      {children}
    </WorksProvider.Provider>
  );
};

export default WorkProvider;
