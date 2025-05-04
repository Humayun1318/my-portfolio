"use client";

import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/lib/data/projects";
import ProjectsBanner from "@/components/projects/ProjectsBanner";
import Footer from "@/components/footer/Footer";

export default function ProjectsPage() {
  return (
    <main className="">
      <ProjectsBanner />
      <div className="mx-auto mt-4 w-11/12 max-w-6xl">
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight">All Projects</h1>
          <p className="text-muted-foreground mt-4 text-lg">
            Explore my technical capabilities through these implementations
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
      <div className="from-primary/5 relative mt-24 bg-gradient-to-br to-blue-500/0 py-32">
        <Footer />
      </div>
    </main>
  );
}
