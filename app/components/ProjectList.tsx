import ProjectCard from "./ProjectCard";

type cardData = {
    id: number;
    title: string;
    description: string;
    link: string;
}

type ProjectListProps = {
    projects: cardData[];
}

export default function ProjectList({ projects }: ProjectListProps) {
    return(
        <div>
            {projects.map((project) => (
                <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    link={project.link}
                />
            ))}
        </div>
    )
}