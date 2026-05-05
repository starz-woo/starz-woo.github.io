import type { Project } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { Section } from "./Section";

type Props = {
  id: string;
  label: string;
  title: string;
  description?: string;
  projects: Project[];
  defaultExpanded?: boolean;
};

export function ProjectsSection({
  id,
  label,
  title,
  description,
  projects,
  defaultExpanded = false,
}: Props) {
  return (
    <Section id={id} label={label} title={title} description={description}>
      <div>
        {projects.map((p, i) => (
          <ProjectCard
            key={p.title}
            project={p}
            index={i}
            defaultExpanded={defaultExpanded}
          />
        ))}
      </div>
    </Section>
  );
}
