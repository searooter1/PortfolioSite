import { Link } from "react-router";

type ProjectCardProps = {
  title: string;
  description: string;
  slug: string;
  image: string;
  technologies: string[];
};

export default function ProjectCard({
  title,
  description,
  slug,
  image,
  technologies,
}: ProjectCardProps) {
  return (
    <Link
      to={`/projects/${slug}`}
      className="block overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:border-violet-400/40 hover:bg-white/10"
    >
      <div className="aspect-[16/7] w-full overflow-hidden border-b border-white/10 bg-neutral-900">
        <img
          src={image}
          alt={`${title} preview`}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-white">{title}</h3>

        <p className="mt-2 text-sm leading-6 text-white/70">
          {description}
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-white/70"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}