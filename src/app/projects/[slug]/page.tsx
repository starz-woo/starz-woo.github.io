import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetail } from "@/components/ProjectDetail";
import { aiProjects } from "@/data/projects";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return aiProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = aiProjects.find((p) => p.slug === slug);
  if (!project) return {};
  const title = `${project.title} — 조현우`;
  const description = project.description.slice(0, 160);
  const ogImage = project.image ?? project.images?.[0];
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      images: ogImage ? [ogImage] : undefined,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = aiProjects.find((p) => p.slug === slug);
  if (!project) notFound();
  return <ProjectDetail project={project} />;
}
