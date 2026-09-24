'use client'
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
}
export const WorksProvider = createContext<IWorkProvider>({
  plans: [],
  setPlans: () => {},
  savedWorks: [],
  setSavedWorks: () => {},
});

const WorkProvider = ({ children }: { children: ReactNode }) => {
  const [plans, setPlans] = useState<IWork[]>([]);
  const [savedWorks, setSavedWorks] = useState<IWork[]>([]);
  const contextData = {
    plans,
    setPlans,
    savedWorks,
    setSavedWorks,
  };
  return (
    <WorksProvider.Provider value={contextData}>
      {children}
    </WorksProvider.Provider>
  );
};

export default WorkProvider;
