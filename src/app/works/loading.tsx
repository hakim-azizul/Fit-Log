import React from "react";

const WorkDetailsLoading = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center min-h-[50vh] space-y-6 bg-transparent">
        <div className="flex items-center justify-center space-x-2 h-16">
          <div
            className="w-3 h-8 bg-[#C2F800] opacity-40 rounded-full animate-bounce shadow-[0_0_8px_#C2F800]"
            style={{ animationDelay: "-0.4s" }}
          ></div>
          <div
            className="w-3 h-12 bg-[#C2F800] opacity-70 rounded-full animate-bounce shadow-[0_0_12px_#C2F800]"
            style={{ animationDelay: "-0.2s" }}
          ></div>
          <div
            className="w-3 h-16 bg-[#C2F800] rounded-full animate-bounce shadow-[0_0_15px_#C2F800]"
            style={{ animationDelay: "0s" }}
          ></div>
          <div
            className="w-3 h-12 bg-[#C2F800] opacity-70 rounded-full animate-bounce shadow-[0_0_12px_#C2F800]"
            style={{ animationDelay: "0.2s" }}
          ></div>
          <div
            className="w-3 h-8 bg-[#C2F800] opacity-40 rounded-full animate-bounce shadow-[0_0_8px_#C2F800]"
            style={{ animationDelay: "0.4s" }}
          ></div>
        </div>
        <p className="text-[#C2F800] text-sm font-bold font-oswald tracking-[0.3em] animate-pulse uppercase">
          Workout Profile is Loading...
        </p>
      </div>
    </div>
  );
};

export default WorkDetailsLoading;
