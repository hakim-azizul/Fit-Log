import Image from "next/image";
import IWork from "@/types/workType";
import ActionButtons from "./ActionButtons";

interface WorkDetailCardProps {
  work: IWork;
}

const WorkDetailCard = ({ work }: WorkDetailCardProps) => {
  const {
    name,
    image,
    muscleGroups,
    description,
    equipment,
    difficulty,
    sets,
    reps,
    duration,
    caloriesBurned,
    rating,
    instructions,
  } = work;

  return (
    <div className="bg-[#0f1115] text-white min-h-screen p-6 md:p-12 flex justify-center items-center">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <div className="relative w-full h-100 md:h-200 rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold font-oswald tracking-wide uppercase">
              {name}
            </h1>
            <p className="text-gray-400 text-sm mt-2 leading-relaxed">
              {description}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {muscleGroups?.map((group, index) => (
              <span
                key={index}
                className="bg-[#C2F800] text-black text-xs font-bold px-3 py-1 rounded-full uppercase"
              >
                {group}
              </span>
            ))}
          </div>
          <div className="bg-[#161922] rounded-xl border border-gray-800 divide-y divide-gray-800 text-sm">
            <div className="flex justify-between p-4">
              <span className="text-gray-400 uppercase tracking-wider text-xs font-semibold">
                Equipment
              </span>
              <span className="font-medium text-right">{equipment}</span>
            </div>
            <div className="flex justify-between p-4">
              <span className="text-gray-400 uppercase tracking-wider text-xs font-semibold">
                Difficulty
              </span>
              <span className="font-medium text-right">{difficulty}</span>
            </div>
            <div className="flex justify-between p-4">
              <span className="text-gray-400 uppercase tracking-wider text-xs font-semibold">
                Sets
              </span>
              <span className="font-medium text-right">{sets}</span>
            </div>
            <div className="flex justify-between p-4">
              <span className="text-gray-400 uppercase tracking-wider text-xs font-semibold">
                Reps
              </span>
              <span className="font-medium text-right">{reps}</span>
            </div>
            <div className="flex justify-between p-4">
              <span className="text-gray-400 uppercase tracking-wider text-xs font-semibold">
                Duration
              </span>
              <span className="font-medium text-right">{duration} min</span>
            </div>
            <div className="flex justify-between p-4">
              <span className="text-gray-400 uppercase tracking-wider text-xs font-semibold">
                Calories
              </span>
              <span className="font-medium text-right">
                {caloriesBurned} kcal
              </span>
            </div>
            <div className="flex justify-between p-4">
              <span className="text-gray-400 uppercase tracking-wider text-xs font-semibold">
                Rating
              </span>
              <span className="font-medium text-right">{rating} ⭐</span>
            </div>
          </div>
          <div className="space-y-3 pt-2">
            <h3 className="text-lg font-bold font-oswald tracking-wide uppercase text-white">
              Instructions
            </h3>
            <ol className="space-y-2 text-sm text-gray-300">
              {instructions?.map((step, index) => (
                <li key={index} className="flex gap-3">
                  <span className="text-[#C2F800] font-semibold">
                    {index + 1}.
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
          <ActionButtons work={work} />
        </div>
      </div>
    </div>
  );
};

export default WorkDetailCard;
