import Navbar from "@/components/layout/Navbar";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./styles/globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Sumador Binario",
  description: "Sumador Binario web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${poppins.className}  wf-loaded-stage2 motion-on`}
    >
      <body
        className="flex flex-col min-h-svh w-full avif"
        suppressHydrationWarning
      >
        <Navbar />
        {children}
        <div className="absolute size-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </body>
    </html>
  );
}
