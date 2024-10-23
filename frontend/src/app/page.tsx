import { AddersList } from "@/components/adders/AddersList";

export default function HomePage() {
  return (
    <main className="relative size-full flex-1 bg-white">
      <div className="absolute size-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="container px-4 py-16">
        <AddersList />
      </div>
    </main>
  );
}
