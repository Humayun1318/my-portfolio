"use client";
import { motion } from "framer-motion";
import TechnicalSkills from "./skills/TechnicalSkills";
import Services from "./skills/Services";
import SoftSkills from "./skills/SoftSkills";

export default function SkillsSection() {
  return (
    <section className="mx-auto max-w-7xl px-1 py-6 sm:px-2 lg:px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 text-center"
      >
        <h2 className="from-primary bg-gradient-to-r to-blue-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent">
          Professional Expertise
        </h2>
        <p className="text-muted-foreground mt-4 text-lg">
          Holistic combination of technical skills and collaborative capabilities
        </p>
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <TechnicalSkills />

        <div className="flex flex-col gap-4">
          <Services />
          <SoftSkills />
        </div>
      </div>
    </section>
  );
}
