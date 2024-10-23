import { House, LucideIcon, Plus } from "lucide-react";

type SidebarItem = {
  href: string;
  label: string;
  icon: LucideIcon;
};

type Section = {
  groupLabel: string;
  menus: SidebarItem[];
};

export function getSidebarOptions(pathname: string): Section[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/",
          label: "Inicio",
          icon: House,
        },
        {
          href: "/sumador1bit",
          label: "Sumador 1 bit",
          icon: Plus,
        },
        {
          href: "/sumador4bit",
          label: "Sumador 4 bit",
          icon: Plus,
        },
        {
          href: "/sumador8bit",
          label: "Sumador 8 bit",
          icon: Plus,
        },
      ],
    },
  ];
}
