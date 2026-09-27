import React from "react";

const MyPlansLoading = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center min-h-[50vh] space-y-6 sm:space-y-8 bg-transparent">
        <div className="flex items-center justify-center animate-bounce">
          <div className="flex items-center space-x-0.5 sm:space-x-1">
            <div className="w-1.5 sm:w-2 md:w-2.5 h-6 sm:h-8 md:h-10 bg-[#C2F800] opacity-40 rounded-sm shadow-[0_0_8px_#C2F800]"></div>
            <div className="w-2 sm:w-3 md:w-3.5 h-10 sm:h-12 md:h-16 bg-[#C2F800] opacity-70 rounded-sm shadow-[0_0_12px_#C2F800]"></div>
            <div className="w-3 sm:w-4 md:w-5 h-12 sm:h-16 md:h-20 bg-[#C2F800] rounded-md shadow-[0_0_15px_#C2F800]"></div>
          </div>
          <div className="w-12 sm:w-16 md:w-24 h-2 sm:h-3 bg-[#C2F800] shadow-[0_0_5px_#C2F800] rounded-sm"></div>
          <div className="flex items-center space-x-0.5 sm:space-x-1">
            <div className="w-3 sm:w-4 md:w-5 h-12 sm:h-16 md:h-20 bg-[#C2F800] rounded-md shadow-[0_0_15px_#C2F800]"></div>
            <div className="w-2 sm:w-3 md:w-3.5 h-10 sm:h-12 md:h-16 bg-[#C2F800] opacity-70 rounded-sm shadow-[0_0_12px_#C2F800]"></div>
            <div className="w-1.5 sm:w-2 md:w-2.5 h-6 sm:h-8 md:h-10 bg-[#C2F800] opacity-40 rounded-sm shadow-[0_0_8px_#C2F800]"></div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-1 px-4 text-center">
          <p className="text-[#C2F800] text-xs sm:text-sm md:text-base font-oswald font-bold tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.3em] animate-pulse uppercase">
            Loading workouts…
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyPlansLoading;