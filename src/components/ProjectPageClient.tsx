"use client";

import { Button } from "@/components/ui/button";
import ImageGallery from "@/components/projects/ImageGallery";
import TechStack from "@/components/projects/TechStack";
import Link from "next/link";
import Footer from "@/components/footer/Footer";
import SingleProjectBanner from "@/components/projects/SingleProjectBanner";
import { IProject } from "@/types";

type Props = {
  project: IProject;
};

export default function ProjectPageClient({ project }: Props) {
  return (
    <main>
      <SingleProjectBanner project={project} />
      <div className="mx-auto mt-4 w-11/12 max-w-4xl">
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/projects">← All Projects</Link>
        </Button>

        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight">{project.title}</h1>
          <p className="text-muted-foreground mt-4 text-lg">{project.description}</p>
        </div>

        <div className="grid gap-12 lg:grid-cols-3">
          <div className="space-y-12 lg:col-span-2">
            <ImageGallery images={[project.image]} />

            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-semibold">Project Overview</h2>
              <p className="mt-4">{project.content}</p>

              <h2 className="mt-12 text-2xl font-semibold">Key Features</h2>
              <ul className="mt-4 space-y-2">
                {project.features.map((feature: string) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="text-primary">▹</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <TechStack items={project.techStack} />
            <div className="space-y-4 rounded-xl border p-6">
              <h3 className="text-lg font-semibold">Live Links</h3>
              <div className="space-y-2">
                <Button asChild className="w-full">
                  <Link href={project.liveUrl} target="_blank">
                    Live Demo
                  </Link>
                </Button>
                {project.githubUrl && (
                  <Button variant="outline" asChild className="w-full">
                    <Link href={project.githubUrl} target="_blank">
                      Client Code
                    </Link>
                  </Button>
                )}
                {project?.liveApi && (
                  <Button variant="outline" asChild className="w-full">
                    <Link href={project.liveApi} target="_blank">
                      Live API
                    </Link>
                  </Button>
                )}
                {project.backendUrl && (
                  <Button variant="outline" asChild className="w-full">
                    <Link href={project.backendUrl} target="_blank">
                      Backend Server
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="from-primary/5 relative mt-24 bg-gradient-to-br to-blue-500/0 pt-32 pb-12">
        <Footer />
      </div>
    </main>
  );
}
