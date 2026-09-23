import Hero from "@/Components/Home/Hero"
import WorksPage from "./works/page";


export default function Home() {
  return (
    <div className="bg-black">
      <Hero />
      <WorksPage />
    </div>
  );
}
