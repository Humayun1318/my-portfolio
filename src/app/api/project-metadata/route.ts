import { projects } from "@/lib/data/projects";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // Extract project ID from query params
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  const project = projects.find((p) => Number(p.id) === Number(id));

  if (!project) {
    return NextResponse.json({ error: "Project not found" }, { status: 404 });
  }

  // Return structured metadata
  return NextResponse.json({
    title: `${project.title} | Humayun Project`,
    description: project.description,
    // openGraph: {
    //   images: [project.image], // For social sharing
    // },
  });
}
