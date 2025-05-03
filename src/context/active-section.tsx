"use client";

import { createContext, useContext, useState } from "react";

type ActiveSectionContextType = {
  activeSection: string | null;
  setActiveSection: (section: string | null) => void;
};

// Provide default values to avoid null context
const ActiveSectionContext = createContext<ActiveSectionContextType>({
  activeSection: "about",
  setActiveSection: () => {},
});

export function ActiveSectionProvider({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState<string | null>("about");

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

// Simplified hook without null check
export function useActiveSection() {
  return useContext(ActiveSectionContext);
}
