import Adders from "@/components/pages/home/Adders";
import Cta from "@/components/pages/home/Cta";
import Features from "@/components/pages/home/Features";
import Hero from "@/components/pages/home/Hero";

export default function HomePage() {
  return (
    <main className="relative size-full flex flex-col flex-1 bg-white">
      <div className="absolute size-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="relative z-10 ">
        <Hero />
        <Adders />
        <Features />
        <Cta />
      </div>
    </main>
  );
}
