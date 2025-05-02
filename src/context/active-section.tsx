// "use client";

// import { createContext, useContext, useState } from "react";

// type ActiveSectionContextType = {
//   activeSection: string | null;
//   setActiveSection: (section: string | null) => void;
// };

// const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

// export function ActiveSectionProvider({ children }: { children: React.ReactNode }) {
//   const [activeSection, setActiveSection] = useState<string | null>("about");

//   return (
//     <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
//       {children}
//     </ActiveSectionContext.Provider>
//   );
// }

// export function useActiveSection() {
//   const context = useContext(ActiveSectionContext);
//   if (!context) {
//     throw new Error("useActiveSection must be used within an ActiveSectionProvider");
//   }
//   return context;
// }

// context/active-section.tsx
"use client";

import { createContext, useContext, useState } from "react";

type ActiveSectionContextType = {
  activeSection: string | null;
  setActiveSection: (section: string | null) => void;
};

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

export function ActiveSectionProvider({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState<string | null>("about");

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSection() {
  const context = useContext(ActiveSectionContext);
  if (!context) {
    throw new Error("useActiveSection must be used within an ActiveSectionProvider");
  }
  return context;
}
