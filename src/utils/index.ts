import { projects } from "@/lib/data/projects";

export async function getProductById(id: string) {
  const project = projects.find((p) => Number(p.id) === Number(id));
  return project ?? null;
}
