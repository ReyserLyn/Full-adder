"use client";

import { AddersList } from "@/components/adders/AddersList";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <div className="container mx-auto px-4 py-16">
        <AddersList />
      </div>
    </div>
  );
}
