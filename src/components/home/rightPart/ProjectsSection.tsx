"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/data/projects";

export default function ProjectsSection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="from-primary bg-gradient-to-r to-purple-600 bg-clip-text text-4xl font-bold text-transparent">
            Featured Projects
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Explore my technical capabilities through these selected works
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects
            .slice(-4)
            .reverse()
            .map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Link href={`/projects/${project.id}`} className="group block h-full">
                  <div className="bg-card relative flex h-full flex-col overflow-hidden rounded-2xl shadow-sm transition-shadow duration-300 hover:shadow-lg">
                    {/* Project Image */}
                    <div className="relative aspect-video">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>

                    {/* Project Content */}
                    <div className="flex flex-1 flex-col justify-between p-6">
                      <div>
                        <h3 className="text-foreground group-hover:text-primary text-xl font-semibold transition-colors">
                          {project.title}
                          {`${project?.backendUrl ? " (Fullstack)" : ""}`}
                        </h3>
                        <p className="text-muted-foreground mt-2 text-sm">{project.description}</p>
                      </div>

                      {/* Tags */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-primary/10 text-primary rounded-full px-3 py-1 text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <Link
            href="/projects"
            className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center gap-2 rounded-full px-8 py-3 text-sm font-medium transition-colors"
          >
            View All Projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
