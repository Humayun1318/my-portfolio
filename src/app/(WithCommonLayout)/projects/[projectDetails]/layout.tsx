import { Metadata } from "next";
import { projects } from "@/lib/data/projects";

interface PageParams {
  params: {
    projectDetails: string;
  };
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { projectDetails } = params;
  const project = projects.find((p) => Number(p.id) === Number(projectDetails));

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found",
    };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

interface ProjectLayoutProps {
  children: React.ReactNode;
}

export default function ProjectLayout({ children }: ProjectLayoutProps) {
  return <>{children}</>;
}
