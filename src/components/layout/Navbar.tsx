import Image from "next/image";
import Link from "next/link";
import NavbarOptions from "../components/NavbarOptions";
import SideBarPhone from "../components/SidebarPhone";

export default function Navbar() {
  return (
    <header className="w-full bg-white drop-shadow-sm z-50 mt-1">
      <div className="container md:container flex h-14 md:h-16 items-center px-4 md:px-6">
        <SideBarPhone />

        <Link
          href="/"
          className="flex items-center gap-3 md:px-0 px-3 mx-auto md:ml-0 transition-all duration-300 hover:scale-105 hover:rotate-1"
          prefetch={false}
        >
          <Image
            src="/logo.svg"
            width="0"
            height="0"
            alt="Logo de sumador binario"
            className="w-10 h-auto lg:ml-3"
            priority
          />
          <span className="sr-only">Sumador Binario</span>

          <h1 className="text-xl lg:text-2xl font-extrabold whitespace-nowrap">
            Sumador Binario
          </h1>
        </Link>

        <NavbarOptions />
      </div>
    </header>
  );
}
