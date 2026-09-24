import React from "react";
import Image from "next/image";
import IWork from "@/types/workType";

interface CardProps {
  item: IWork;
}

const SavedWorksCard = ({ item }: CardProps) => {
    const {image, name, equipment, duration, caloriesBurned, rating} = item
  return (
    <div className="bg-[#15171E] p-4 rounded-xl border border-gray-800 flex justify-between items-center w-full">
      <div className="flex items-center gap-4">
        <div className="w-24 h-16 relative rounded-lg overflow-hidden shrink-0 bg-gray-800">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold text-lg text-white uppercase font-oswald tracking-wide">
            {name}
          </h3>
          <p className="text-sm text-gray-400 mb-1">{equipment}</p>
          <div className="text-sm text-gray-400 flex items-center gap-3">
            <span className="flex items-center gap-1"><span className="text-[#C2F800]">⏱</span> {duration} min</span>
            <span className="flex items-center gap-1"><span className="text-[#C2F800]">🔥</span> {caloriesBurned} kcal</span>
            <span className="flex items-center gap-1"><span className="text-[#C2F800]">⭐</span> {rating}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 shrink-0">
        <button className="bg-transparent border border-gray-600 hover:border-white text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
          View Details
        </button>
        <button className="text-gray-500 hover:text-white p-2">✕</button>
      </div>
    </div>
  );
};

export default SavedWorksCard;