"use client";
import { motion } from "framer-motion";

export default function ProjectsBanner() {
  return (
    <section className="from-primary/5 relative bg-gradient-to-br to-purple-500/10 py-24">
      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Innovation in Action</h1>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg md:text-xl">
            Discover how technical expertise transforms ideas into impactful solutions
          </p>

          {/* Unique Visual Element */}
          <div className="mt-8 flex justify-center space-x-4">
            <div className="bg-primary/10 animate-float h-12 w-12 rounded-full" />
            <div className="animate-float-delay h-12 w-12 rounded-full bg-purple-500/10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
