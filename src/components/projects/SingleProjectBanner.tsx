"use client";
import { IProject } from "@/types";
import { motion } from "framer-motion";

export default function SingleProjectBanner({ project }: { project: IProject }) {
  return (
    <section className="from-primary/5 relative bg-gradient-to-br to-blue-500/10 py-32">
      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary text-sm font-semibold">Featured Case Study</span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">{project.title}</h1>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg md:text-xl">
            Exploring the technical excellence behind this implementation
          </p>
        </motion.div>
      </div>
    </section>
  );
}
