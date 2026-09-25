import React from "react";
import Image from "next/image";
import IWork from "@/types/workType";
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";

interface CardProps {
  work: IWork;
}

const SavedWorksCard = ({ work }: CardProps) => {
  const { image, name, equipment, duration, caloriesBurned, rating } = work;
  return (
    <div className="bg-[#15171E] p-4 rounded-xl border border-gray-800 flex flex-col md:flex-row md:items-center justify-between gap-4 w-full">
      <div className="flex items-start md:items-center gap-3 w-full md:w-auto min-w-0">
        <div className="w-24 h-20 sm:w-28 sm:h-20 relative rounded-lg overflow-hidden shrink-0 bg-gray-800">
          <Image
            src={image}
            alt={name}
            sizes="(max-width: 768px) 100vw, 33vw"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col flex-1 min-w-0">
          <h3 className="font-bold text-base sm:text-lg text-white uppercase font-oswald tracking-wide leading-tight wrap-break-word line-clamp-2">
            {name}
          </h3>
          <p className="text-xs sm:text-sm text-gray-400 mb-1 truncate">
            {equipment}
          </p>
          <div className="text-xs sm:text-sm text-gray-400 flex flex-wrap items-center gap-x-3 gap-y-1 mt-1">
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
      <div className="flex items-center gap-3 w-full md:w-auto shrink-0 justify-between md:justify-end mt-2 md:mt-0">
        <Link href={`./works/${work.id}`} className="flex-1 md:flex-none">
          <button className="w-full md:w-auto bg-transparent border border-gray-600 hover:border-white text-white px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors cursor-pointer text-center whitespace-nowrap">
            View Details
          </button>
        </Link>
        <div className="flex items-center shrink-0">
          <RemoveBtn work={work} />
        </div>
      </div>
    </div>
  );
};

export default SavedWorksCard;
