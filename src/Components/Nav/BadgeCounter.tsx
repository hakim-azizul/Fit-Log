'use client'
import React, { useContext } from "react";
import Link from "next/link";
import {WorksProvider} from "@/context/WorkProvider";

const BadgeCounter = () => {
    const {plans, savedWorks} =useContext(WorksProvider); 
  return (
    <div className="navbar-end flex items-center gap-10">
      <Link href="/my-plan" className="flex items-center gap-3 group">
        <span className="text-gray-100 text-xl font-medium transition-colors group-hover:text-white">
          Plan
        </span>
        <div className="w-9 h-9 flex items-center justify-center bg-[#C2F800] text-black text-lg font-bold rounded-full shrink-0">
          {plans.length}
        </div>
      </Link>

      <Link href="/my-plan" className="flex items-center gap-3 group">
        <span className="text-gray-400 text-xl font-medium transition-colors group-hover:text-gray-300">
          Saved
        </span>
        <div className="w-9 h-9 flex items-center justify-center bg-transparent text-gray-300 text-lg font-medium rounded-full border-2 border-gray-700 shrink-0 transition-colors group-hover:border-gray-500">
          {savedWorks.length}
        </div>
      </Link>
    </div>
  );
};

export default BadgeCounter;
 