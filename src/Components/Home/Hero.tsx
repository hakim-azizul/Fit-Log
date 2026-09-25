import Image from "next/image";
import HeroImg from "@/assets/banner.png";
import BrowseButton from "./BrowseBtn";

const Hero = () => {
  return (
    <section className="container mx-auto bg-[#0f1115] text-white my-6 md:my-10 py-10 sm:py-16 lg:py-20 px-4 md:px-8 lg:px-16 rounded-3xl border-cyan-200/5 border">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-16">
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-4 sm:space-y-6 w-full">
          <span className="text-[#C2F800] text-sm sm:text-base font-bold tracking-wider">
            WORKOUT LIBRARY
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold font-oswald tracking-wide leading-tight">
            TRAIN WITH INTENT. <br className="hidden sm:block" /> LOG EVERY SET.
          </h1>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-sm sm:max-w-md lg:max-w-xl">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <div className="pt-2">
            <BrowseButton />
          </div>
        </div>
        <div className="flex-1 flex justify-center md:justify-end w-full mt-4 md:mt-0">
          <div className="relative w-full max-w-[16rem] sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg h-60 sm:h-72 md:h-80 lg:h-96 xl:h-112">
            <Image
              src={HeroImg}
              alt="Hero Illustration"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
