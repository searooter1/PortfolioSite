import type { Route } from "./+types/projects.$slug";
import { Link } from "react-router";
import { projects } from "../data/projects";
import ImageCarousel from "../components/ImageCarousel";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export function meta({ params }: Route.MetaArgs) {
  return [
    { title: "Cole de Ruiter" },
    {
      name: "Project",
      content: "Project",
    },
  ];
}

export default function ProjectDetails({ params }: Route.ComponentProps) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    return (
      <main className="min-h-screen bg-neutral-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-4xl">
          <h1>Project not found</h1>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-neutral-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-3xl">
        <Link
          to="/"
          className="mb-10 inline-block text-sm"
        >
          Home
        </Link>

        <h1 className="text-4xl font-semibold tracking-tight text-white">
          {project.title}
        </h1>

        <div className="flex items-center gap-2 text-sm text-white/80">
          {project.repoLink && (
            <span className="hover:text-violet-400">
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 mr-3 flex items-center gap-2"
              >
                <FaGithub className="text-lg" />
                <span className="text-sm">GitHub Repo</span>
              </a>
            </span>
          )}

          {project.liveLink && (
            <span className="hover:text-violet-400">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center gap-2"
              >
                <FaExternalLinkAlt className="text-lg" />
                <span className="text-sm">Visit Site</span>
              </a>
            </span>
          )}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/70"
            >
              {technology}
            </span>
          ))}
        </div>

        <ImageCarousel images={project.images} title={project.title} />

        <div className="mt-8 space-y-6 leading-8 text-white/80">
          <p>{project.fullDescription}</p>
        </div>
      </div>
    </main>
  );
}