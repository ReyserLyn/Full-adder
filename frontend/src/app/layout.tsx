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
        {children}
      </body>
    </html>
  );
}
