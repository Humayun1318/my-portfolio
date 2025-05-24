// components/projects/ProjectCard.tsx
"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { IProject } from "@/types";

export default function ProjectCard({ project }: { project: IProject }) {
  return (
    <div className="group bg-card relative flex h-full flex-col overflow-hidden rounded-2xl border shadow-sm transition-shadow hover:shadow-xl">
      <div className="relative aspect-video">
        <Image src={project.image} alt={project.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <div className="flex flex-1 flex-col justify-between p-6">
        <h3 className="text-foreground group-hover:text-primary text-xl font-semibold transition-colors">
          {project.title}
          {`${project?.backendUrl ? " (Fullstack)" : ""}`}
        </h3>
        <p className="text-muted-foreground mt-2 text-sm">{project.description}</p>

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

        <div className="mt-6 flex gap-3">
          <Button asChild size="sm" className="w-full">
            <Link href={`/projects/${project.id}`}>View Details</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
