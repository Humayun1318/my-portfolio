// Experience.tsx
"use client";

import { experiences } from "@/lib/data";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Introductory Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center"
      >
        <p className="text-muted-foreground text-lg leading-relaxed">
          My academic and personal projects form the foundation of my experience, and having
          recently graduated, I am eager to gain professional experience in a{" "}
          <span className="text-foreground font-semibold">dynamic environment</span>.
        </p>
      </motion.div>

      {/* Experience List */}
      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="w-full"
          >
            {/* Experience Card */}
            <div className="bg-card w-full rounded-xl border p-4 shadow-sm transition-all hover:shadow-md">
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 mt-1 flex h-10 w-10 items-center justify-center rounded-lg p-2">
                  <Briefcase className="text-primary h-5 w-5" />
                </div>

                <div className="flex-1">
                  <h3 className="text-foreground text-lg font-semibold">{experience.title}</h3>
                  <p className="text-muted-foreground text-sm font-medium">{experience.company}</p>
                  <p className="text-muted-foreground mt-0.5 text-sm">{experience.duration}</p>
                </div>
              </div>

              <ul className="mt-3 space-y-1.5 pl-1">
                {experience.description.map((point, i) => (
                  <li
                    key={i}
                    className="text-muted-foreground before:bg-primary relative pl-4 before:absolute before:top-2 before:left-0 before:h-1.5 before:w-1.5 before:rounded-full"
                  >
                    {point}
                  </li>
                ))}
              </ul>

              {/* Skills Tags */}
              <div className="mt-3 grid w-full grid-cols-2 gap-2">
                {experience.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-primary/10 text-primary rounded-md px-2.5 py-1 text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
