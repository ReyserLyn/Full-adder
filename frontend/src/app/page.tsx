import Adders from "@/components/pages/home/Adders";
import Cta from "@/components/pages/home/Cta";
import Features from "@/components/pages/home/Features";
import Hero from "@/components/pages/home/Hero";

export default function HomePage() {
  return (
    <main className="relative size-full flex flex-col flex-1 bg-white">
      <div className="relative z-10 ">
        <Hero />
        <Adders />
        <Features />
        <Cta />
      </div>
    </main>
  );
}
