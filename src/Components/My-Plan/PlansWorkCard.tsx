import React from "react";
import Image from "next/image";
import IWork from "@/types/workType";
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import MarkDoneBtn from "./MarkDoneBtn";

interface CardProps {
  work: IWork;
}

const PlansWorkCard = ({ work }: CardProps) => {
  const { image, name, equipment, duration, caloriesBurned, rating } = work;
  return (
    <div className="bg-[#15171E] p-3 sm:p-4 rounded-xl border border-gray-800 flex flex-col md:flex-row md:justify-between md:items-center gap-4 w-full">
      <div className="flex items-center gap-3 sm:gap-4 w-full md:w-auto">
        <div className="w-20 h-16 sm:w-24 sm:h-16 relative rounded-lg overflow-hidden shrink-0 bg-gray-800">
          <Image
            src={image}
            alt={name}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold text-base sm:text-lg text-white uppercase font-oswald tracking-wide leading-tight">
            {name}
          </h3>
          <p className="text-xs sm:text-sm text-gray-400 mb-1">{equipment}</p>
          <div className="text-xs sm:text-sm text-gray-400 flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="flex items-center gap-1 whitespace-nowrap">
              <span className="text-[#C2F800]">⏱</span> {duration} min
            </span>
            <span className="flex items-center gap-1 whitespace-nowrap">
              <span className="text-[#C2F800]">🔥</span> {caloriesBurned} kcal
            </span>
            <span className="flex items-center gap-1 whitespace-nowrap">
              <span className="text-[#C2F800]">⭐</span> {rating}
            </span>
          </div>
        </div>
      </div>
<div className="flex flex-row items-center justify-between md:justify-end gap-2 w-full md:w-auto shrink-0 mt-3 md:mt-0 pt-2 border-t border-gray-800 md:border-none md:pt-0">
        
        <Link href={`./works/${work.id}`} className="shrink-0">
          <button className="bg-transparent border border-gray-600 hover:border-white text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-sm font-medium transition-colors cursor-pointer whitespace-nowrap">
            View Details
          </button>
        </Link>
        <div className="flex flex-row items-center gap-2 shrink-0">
          <MarkDoneBtn work={work} /> 
          <RemoveBtn work={work} />
        </div>
        
      </div>
    </div>
  );
};

export default PlansWorkCard;
