"use client";
import { useState, useEffect } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { MenuIcon, X } from "lucide-react";
import { Button } from "../ui/button";
export default function NavbarDemo() {
  return (
    <div className="relative flex w-full items-center justify-center">
      <Navbar className="top-2" />
      {/* <p className="mt-24 text-black sm:mt-0 dark:text-white">
        The Navbar will show on top of the page
      </p> */}
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <div className={cn("fixed inset-x-0 top-4 z-50 mx-auto max-w-2xl", className)}>
      {/* Mobile Menu Button */}
      <div className="absolute top-4 right-4 z-50 md:hidden">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="rounded-full"
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMobile && isMobileMenuOpen && (
        <div className="fixed inset-0 overflow-y-auto bg-white p-4 dark:bg-black">
          <div className="flex flex-col space-y-6 pt-12 text-lg font-medium">
            <div className="border-b pb-4">
              <p className="mb-2 font-bold">Services</p>
              <div className="flex flex-col space-y-3 pl-2">
                <a href="/web-dev" className="text-neutral-700 dark:text-neutral-300">
                  Web Development
                </a>
                <a href="/interface-design" className="text-neutral-700 dark:text-neutral-300">
                  Interface Design
                </a>
                <a href="/seo" className="text-neutral-700 dark:text-neutral-300">
                  Search Engine Optimization
                </a>
                <a href="/branding" className="text-neutral-700 dark:text-neutral-300">
                  Branding
                </a>
              </div>
            </div>

            <div className="border-b pb-4">
              <p className="mb-2 font-bold">Products</p>
              <div className="grid grid-cols-1 gap-4 pl-2">
                <a href="https://algochurn.com" className="flex flex-col space-y-1">
                  <span className="font-bold">Algochurn</span>
                  <span className="text-sm text-neutral-700 dark:text-neutral-300">
                    Prepare for tech interviews like never before.
                  </span>
                </a>
                <a href="https://tailwindmasterkit.com" className="flex flex-col space-y-1">
                  <span className="font-bold">Tailwind Master Kit</span>
                  <span className="text-sm text-neutral-700 dark:text-neutral-300">
                    Production ready Tailwind css components for your next project
                  </span>
                </a>
                <a href="https://gomoonbeam.com" className="flex flex-col space-y-1">
                  <span className="font-bold">Moonbeam</span>
                  <span className="text-sm text-neutral-700 dark:text-neutral-300">
                    Never write from scratch again. Go from idea to blog in minutes.
                  </span>
                </a>
                <a href="https://userogue.com" className="flex flex-col space-y-1">
                  <span className="font-bold">Rogue</span>
                  <span className="text-sm text-neutral-700 dark:text-neutral-300">
                    Respond to government RFPs, RFIs and RFQs 10x faster using AI
                  </span>
                </a>
              </div>
            </div>

            <div className="border-b pb-4">
              <p className="mb-2 font-bold">Pricing</p>
              <div className="flex flex-col space-y-3 pl-2">
                <a href="/hobby" className="text-neutral-700 dark:text-neutral-300">
                  Hobby
                </a>
                <a href="/individual" className="text-neutral-700 dark:text-neutral-300">
                  Individual
                </a>
                <a href="/team" className="text-neutral-700 dark:text-neutral-300">
                  Team
                </a>
                <a href="/enterprise" className="text-neutral-700 dark:text-neutral-300">
                  Enterprise
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Menu */}
      <div className={cn("hidden md:block")}>
        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} active={active} item="Services">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/web-dev">Web Development</HoveredLink>
              <HoveredLink href="/interface-design">Interface Design</HoveredLink>
              <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
              <HoveredLink href="/branding">Branding</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Products">
            <div className="grid grid-cols-2 gap-10 p-4 text-sm">
              <ProductItem
                title="Algochurn"
                href="https://algochurn.com"
                src="https://assets.aceternity.com/demos/algochurn.webp"
                description="Prepare for tech interviews like never before."
              />
              <ProductItem
                title="Tailwind Master Kit"
                href="https://tailwindmasterkit.com"
                src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                description="Production ready Tailwind css components for your next project"
              />
              <ProductItem
                title="Moonbeam"
                href="https://gomoonbeam.com"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                description="Never write from scratch again. Go from idea to blog in minutes."
              />
              <ProductItem
                title="Rogue"
                href="https://userogue.com"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
              />
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Pricing">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/hobby">Hobby</HoveredLink>
              <HoveredLink href="/individual">Individual</HoveredLink>
              <HoveredLink href="/team">Team</HoveredLink>
              <HoveredLink href="/enterprise">Enterprise</HoveredLink>
            </div>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}
