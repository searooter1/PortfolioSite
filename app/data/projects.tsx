import type { ReactNode } from "react";

export type Project = {
  id: number;
  slug: string;
  title: string;
  description: string;
  fullDescription: ReactNode;
  repoLink?: string;
  liveLink?: string;
  image: string;
  images: string[];
  technologies: string[];
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "deckai",
    title: "DeckAi",
    description:
      "A deck builder website with search, filters, and public deck sharing.",
    fullDescription: (
      <>
        <h2 className="text-2xl font-semibold text-white">Overview</h2>
        <p>
          DeckAi is a deck builder website with search, filters, and public deck
          sharing.
        </p>
      </>
    ),
    repoLink: "https://github.com/searooter1/Capstone_TCG_Deck",
    image: "/images/deckai1.png",
    images: ["/images/deckai1.png", "/images/deckai2.png", "/images/deckai3.png"],
    technologies: ["React", "TypeScript", "Next.js", "MongoDB", "Auth.js"],
  },
];