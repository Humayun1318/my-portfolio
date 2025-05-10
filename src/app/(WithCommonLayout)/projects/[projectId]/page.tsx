import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getProductById } from "@/utils";
import ProjectPageClient from "@/components/ProjectPageClient";

type Props = {
  params: {
    projectId: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { projectId } = await params;
  const product = await getProductById(projectId);

  if (!product) {
    return {
      title: "Project Not Found",
      description: "Project not available.",
    };
  }

  return {
    title: product.title,
    description: product.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { projectId } = await params;
  const project = await getProductById(projectId);
  if (!project) return notFound();

  return <ProjectPageClient project={project} />;
}
