import type { ProjectItem } from "../data/content";
import { Card } from "./ui";

interface ProjectCardProps {
  project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card>
      <img src={project.image} alt={`${project.title} project preview`} className="h-47.5 w-full object-cover bg-gray-100" />
      <div className="p-6">
        <p className="mb-3.5 text-xs font-extrabold uppercase tracking-[0.12em] text-accent">{project.type}</p>
        <h3 className="m-0 mb-2.5 text-[1.35rem] font-bold tracking-[-0.03em]">{project.title}</h3>
        <p className="m-0 mb-4.5 text-muted">{project.description}</p>
        <a className="font-extrabold no-underline hover:underline" href={project.href} target="_blank" rel="noopener noreferrer">{project.cta}</a>
      </div>
    </Card>
  );
}
