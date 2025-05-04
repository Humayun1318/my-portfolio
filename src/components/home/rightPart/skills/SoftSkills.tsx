"use client";
import { softSkills } from "@/lib/data/skills";
import { motion } from "framer-motion";
import { Users } from "lucide-react";

export default function SoftSkills() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="bg-card rounded-2xl  p-4 shadow-md"
    >
      <div className="mb-6 flex items-center gap-4">
        <Users className="text-primary h-8 w-8" />
        <h3 className="text-2xl font-bold">Core Competencies</h3>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {softSkills.map((skill) => (
          <div
            key={skill.title}
            className="bg-muted/10 hover:bg-muted/20 rounded-lg p-4 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="bg-primary/10 rounded-lg p-2">{<skill.icon />}</div>
              <div>
                <h4 className="font-medium">{skill.title}</h4>
                <p className="text-muted-foreground mt-1 text-sm">{skill.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
