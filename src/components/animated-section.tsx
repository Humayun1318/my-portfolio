"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSection } from "@/context/active-section";
import { cn } from "@/lib/utils";

export const AnimatedSection = ({
  id,
  children,
  className,
  delay = 0.1,
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  const { ref: inViewRef, inView } = useInView({ threshold: 0.1 });
  const { setActiveSection } = useActiveSection();

  const timerRef = useRef<number | null>(null);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);

  useEffect(() => {
    if (inView) {
      timerRef.current = window.setTimeout(() => {
        setActiveSection(id);
      }, 100);
    }
    return () => {
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, [inView, id, setActiveSection]);

  return (
    <motion.section
      id={id}
      ref={sectionRef}
      style={{ y }}
      className={cn("min-h-[50vh] py-12", className)}
    >
      <motion.div
        ref={inViewRef}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ type: "spring", stiffness: 100, damping: 20, delay }}
      >
        <section className="p-4">{children}</section>
      </motion.div>
    </motion.section>
  );
};
