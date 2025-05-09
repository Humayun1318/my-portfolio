"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export function HashTitleHandler() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const updateTitle = () => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        document.title = `${hash.charAt(0).toUpperCase() + hash.slice(1)} | Humayun Kabir`;
      } else {
        document.title = "Humayun Kabir | Front End Engineer";
      }
    };

    // Initial update
    updateTitle();

    // Standard hashchange listener
    window.addEventListener("hashchange", updateTitle);

    // Cleanup function
    return () => {
      window.removeEventListener("hashchange", updateTitle);
    };
  }, [pathname, searchParams]);

  return null;
}
