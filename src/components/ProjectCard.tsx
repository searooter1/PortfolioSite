type ProjectCardProps = {
    title: string;
    description: string;
    link: string;
}

export default function ProjectCard({ title, description, link }: ProjectCardProps) {
    return(
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer">
                View Project
            </a>
        </div>
    )
}