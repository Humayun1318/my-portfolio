"use client";
import { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { projects } from "@/lib/data/projects";
import { useRouter } from "next/navigation";

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const router = useRouter();

  const handleNavItem = (navItem: string) => {
    router.push(`/#${navItem}`);
  };
  return (
    <div className={cn("fixed inset-x-0 top-4 z-30 mx-auto max-w-[30%]", className)}>
      {/* Desktop Menu */}
      <div className={cn("hidden md:block")}>
        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} active={active} item="Home">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink onClick={() => handleNavItem("about")}>About</HoveredLink>
              <HoveredLink onClick={() => handleNavItem("experience")}>Experience</HoveredLink>
              <HoveredLink onClick={() => handleNavItem("projects")}>Projects</HoveredLink>
              <HoveredLink onClick={() => handleNavItem("contact")}>Contact</HoveredLink>
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Selected Works">
            <div className="grid grid-cols-2 gap-10 p-4 text-sm">
              {projects
                ?.slice(-4)
                .reverse()
                .map((p) => (
                  <ProductItem
                    key={p.id}
                    title={p?.title}
                    href={p?.liveUrl}
                    src={p?.image}
                    description={p?.description}
                    fullstack={p?.backendUrl}
                  />
                ))}
            </div>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}
