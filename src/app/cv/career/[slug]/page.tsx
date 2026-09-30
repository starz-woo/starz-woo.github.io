import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CvCareerDetail } from "@/components/CvCareerDetail";
import { soundmindCareer } from "@/data/soundmind";

type Params = { slug: string };

const allCareerProjects = soundmindCareer.groups.flatMap((g) =>
  g.projects.map((p) => ({ ...p, category: g.category })),
);

export function generateStaticParams(): Params[] {
  return allCareerProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = allCareerProjects.find((p) => p.slug === slug);
  if (!project) return {};
  const title = `${project.name} — 조현우`;
  const description = project.summary.slice(0, 160);
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      images: project.image ? [project.image] : undefined,
    },
  };
}

export default async function CareerProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = allCareerProjects.find((p) => p.slug === slug);
  if (!project) notFound();
  return (
    <CvCareerDetail
      project={project}
      company={soundmindCareer.company}
      role={soundmindCareer.role}
      category={project.category}
    />
  );
}
