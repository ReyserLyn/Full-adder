import { Button } from "@/components/ui/button";
import { getSidebarOptions } from "@/lib/data/sidebarOptions";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function SideBarOptions({
  setOpen,
}: {
  setOpen?: (value: boolean) => void;
}) {
  const pathname = usePathname();
  const sidebarOptions = getSidebarOptions();

  return (
    <nav className="h-full w-full mt-3">
      <ul className="flex flex-col items-start space-y-1 px-2">
        {sidebarOptions.map(({ groupLabel, items: menus }) => (
          <li
            className={`w-full ${groupLabel ? "pt-5" : ""}`}
            key={`${groupLabel}`}
          >
            {groupLabel && (
              <p className="text-sm font-medium text-muted-foreground px-4 pb-2 max-w-[248px] truncate">
                {groupLabel}
              </p>
            )}

            {menus.map(({ href, label, icon: Icon }) => (
              <div className="w-full" key={`${href}${label}`}>
                <Button
                  variant="none"
                  className={cn(
                    "w-full justify-start h-10 mb-1 hover:font-bold",
                    pathname === href ? "font-bold" : ""
                  )}
                  asChild
                  onClick={setOpen ? () => setOpen(false) : () => {}}
                >
                  <Link href={href}>
                    <Icon size={18} className="mr-2" />
                    {label}
                  </Link>
                </Button>
              </div>
            ))}
          </li>
        ))}
      </ul>
    </nav>
  );
}
