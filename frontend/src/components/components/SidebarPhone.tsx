"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SideBarOptions } from "./SidebarOptions";

export default function SideBarPhone() {
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
      <SheetTrigger className="md:hidden" asChild>
        <Button
          className="h-8 hover:bg-transparent"
          variant="ghost"
          size="icon"
        >
          <MenuIcon size={20} />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="left"
        className="sm:w-72 px-3 h-full flex flex-col"
        title=""
      >
        <SheetTitle>
          <SheetHeader className="mt-8">
            <Button
              className="flex justify-center items-center pb-2 pt-1"
              variant="none"
              asChild
              onClick={setSheetOpen ? () => setSheetOpen(false) : () => {}}
            >
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/logo.svg"
                  width="0"
                  height="0"
                  alt="Logo de investiga"
                  className="w-10 h-auto"
                />
                <span className="sr-only">Sumador Binario</span>

                <h1 className="text-xl font-bold ">Sumador Binario</h1>
              </Link>
            </Button>
          </SheetHeader>
        </SheetTitle>

        <SideBarOptions setOpen={setSheetOpen} />
      </SheetContent>
    </Sheet>
  );
}
