import Statistics from "@/Components/My-Plan/Statistics";
import Tabs from "@/Components/My-Plan/Tabs";
import React from "react";

const MyPlanPage = () => {
  return (
    <div className="bg-black">
      <section className="container mx-auto">
        <h1 className="text-3xl md:text-3xl font-extrabold font-oswald pt-8">
          MY PLAN
        </h1>
        <p className="text-gray-400 text-sm mt-2 leading-relaxed">
          Cap of five lifts for today. Finish them, then load more.
        </p>
        <Statistics />
        <Tabs />
      </section>
    </div>
  );
};

export default MyPlanPage;
