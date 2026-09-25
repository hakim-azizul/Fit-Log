import Statistics from "@/Components/My-Plan/Statistics";
import Tabs from "@/Components/My-Plan/Tabs";
import React from "react";

const MyPlanPage = () => {
  return (
    <div className="bg-black min-h-screen text-white pb-12">
      <section className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-oswald pt-8 md:pt-12 tracking-wide">
          MY PLAN
        </h1>
        <p className="text-gray-400 text-sm sm:text-base mt-2 md:mt-3 leading-relaxed max-w-lg lg:max-w-xl">
          Cap of five lifts for today. Finish them, then load more.
        </p>
        <div className="mt-8 md:mt-10">
          <Statistics />
        </div>
        <div className="mt-8 md:mt-10">
          <Tabs />
        </div>
      </section>
    </div>
  );
};

export default MyPlanPage;
