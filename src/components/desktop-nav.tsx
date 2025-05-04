"use client";

import { cn } from "@/lib/utils";
import { useActiveSection } from "@/context/active-section";
import { NAV_ITEMS } from "@/constants";
import { Minus } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export function DesktopNav() {
  const { activeSection } = useActiveSection();

  return (
    <motion.nav
      className="relative space-y-4" // Added relative positioning here
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {NAV_ITEMS.map((item) => (
        <motion.div key={item.id} variants={itemVariants} className="relative">
          <a
            href={`#${item.id}`}
            className={cn(
              "group flex items-center text-lg transition-colors hover:pl-2",
              activeSection === item.id
                ? "text-foreground font-medium"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Minus className="mr-2 inline h-4 w-4 transition-transform group-hover:translate-x-1" />
              <span>{item.label}</span>

              {activeSection === item.id && (
                <motion.div
                  layoutId="desktop-active"
                  className="bg-primary absolute -bottom-1 left-0 h-[2px] w-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.div>
          </a>
        </motion.div>
      ))}
    </motion.nav>
  );
}
