"use client";

import { buttonVariants } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/sumador1bit", label: "Sumador 1 bit" },
  { href: "/sumador4bit", label: "Sumador 4 bit" },
  { href: "/sumador8bit", label: "Sumador 8 bit" },
];

export default function NavbarOptions() {
  const pathname = usePathname();

  return (
    <NavigationMenu className="hidden md:flex ml-auto">
      <NavigationMenuList>
        {links.map(({ href, label }) => (
          <Link key={href} href={href} legacyBehavior passHref prefetch={false}>
            <NavigationMenuLink
              className={cn(
                buttonVariants({ variant: "linkHover2" }),
                navigationMenuTriggerStyle(),
                pathname === href ? "font-bold" : ""
              )}
            >
              {label}
            </NavigationMenuLink>
          </Link>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
