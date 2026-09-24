import Image from "next/image";
import HeroImg from "@/assets/banner.png";
import BrowseButton from "./BrowseBtn";

const Hero = () => {
  return (
    <section className="container mx-auto bg-[#0f1115] text-white my-10 py-16 px-4 m md:px-12 rounded-3xl border-cyan-200/5 border">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 space-y-6">
          <span className="text-[#C2F800] text-bold font-bold">
            WORKOUT LIBRARY
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold font-oswald tracking-wide leading-tight">
            TRAIN WITH INTENT. LOG EVERY SET.
          </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-xl">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>
          <div>
            <BrowseButton />
          </div>
        </div>
        <div className="flex-1 flex justify-end">
          <div className="relative w-full max-w-md h-72 md:h-96">
            <Image
              src={HeroImg}
              alt="Hero Illustration"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
