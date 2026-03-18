import { Link } from "react-router";

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
            <Link to={link} rel="noopener noreferrer">
                View Project
            </Link>
        </div>
    )
}