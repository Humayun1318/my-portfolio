"use client";
import { notFound, useParams } from "next/navigation";
import ProjectPageClient from "@/components/ProjectPageClient";
import { projects } from "@/lib/data/projects";
import { useEffect } from "react";

export default function ProjectPage() {
  const params = useParams();
  const { projectId } = params;
  const project = projects.find((p) => Number(p.id) === Number(projectId));

  // ===== Fetch & Update Metadata Dynamically =====
  useEffect(() => {
    async function updateMetadata() {
      try {
        // Fetch metadata from API
        const res = await fetch(`/api/project-metadata?id=${projectId}`);
        const metadata = await res.json();

        // If error (e.g., project not found), keep default title
        if (metadata.error) return;

        // Update <title> tag
        if (metadata.title) {
          document.title = metadata.title;
        }

        // Update <meta name="description"> tag
        const descriptionTag = document.querySelector('meta[name="description"]');
        if (descriptionTag && metadata.description) {
          descriptionTag.setAttribute("content", metadata.description);
        }
      } catch (error) {
        console.error("Failed to update metadata:", error);
      }
    }

    updateMetadata();
  }, [projectId]);

  if (!project) return notFound();

  return <ProjectPageClient project={project} />;
}
