import Image from "next/image";
import IWork from "@/types/workType";

interface WorkoutCardProps {
  work: IWork;
}

const WorkoutCard = ({ work }: WorkoutCardProps) => {
  const {image, name, muscleGroups, equipment, duration, caloriesBurned, rating} = work;

  return (
    <div className="bg-[#12141c] text-white rounded-2xl overflow-hidden shadow-lg border border-gray-800 w-auto h-auto hover:border-gray-600 transition-all">
      <div className="relative w-full h-48">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
      <div className="p-5 space-y-4">
        <div className="flex flex-wrap gap-2">
          {muscleGroups?.map((cat, index) => (
            <span
              key={index}
              className="bg-[#C2F800] text-black text-xs font-bold px-3 py-1 rounded-full uppercase"
            >
              {cat}
            </span>
          ))}
        </div>
        <div>
          <h2 className="text-2xl font-bold font-oswald tracking-wide">
            {name}
          </h2>
          <p className="text-gray-400 text-sm mt-1">{equipment}</p>
        </div>
        <hr className="border-gray-800" />
        <div className="flex items-center justify-between text-xs text-gray-300">
          <div className="flex items-center gap-1">
            <span>⏱</span>
            <span>{duration} min</span>
          </div>
          <div className="flex items-center gap-1">
            <span>🔥</span>
            <span>{caloriesBurned} kcal</span>
          </div>
          <div className="flex items-center gap-1 text-white font-medium">
            <span>⭐</span>
            <span>{rating}</span>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default WorkoutCard;
