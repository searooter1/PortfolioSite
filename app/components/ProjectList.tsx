import ProjectCard from "./ProjectCard";
import type { Project } from "../data/projects";

type ProjectListProps = {
  projects: Project[];
};

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <div className="grid grid-cols-1 gap-6">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          slug={project.slug}
          image={project.image}
          technologies={project.technologies}
        />
      ))}
    </div>
  );
}