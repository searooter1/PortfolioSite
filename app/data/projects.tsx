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
    liveLink: "https://decktcg.vercel.app",
    image: "/images/deckai1.png",
    images: ["/images/deckai1.png", "/images/deckai2.png", "/images/deckai3.png"],
    technologies: ["React", "TypeScript", "Next.js", "MongoDB", "Auth.js", "Gemini"],
  },
  {
    id: 2,
    slug: "showcase",
    title: "Product Showcase Site",
    description:
      "A website for showcasing products, utilizing a CMS.",
    fullDescription: (
      <>
        <h2 className="text-2xl font-semibold text-white">Overview</h2>
        <p>
          desc
        </p>
      </>
    ),
    repoLink: "https://github.com/searooter1/showcasesite",
    image: "/images/showcase1.png",
    images: ["/images/showcase1.png", "/images/showcase2.png", "/images/showcase3.png"],
    technologies: ["React", "JavaScript", "Next.js", "Contentful"],
  },
  {
    id: 3,
    slug: "hearts",
    title: "Hearts Card Game",
    description:
      "The hearts card game implemented in C#",
    fullDescription: (
      <>
        <h2 className="text-2xl font-semibold text-white">Overview</h2>
        <p>
          desc
        </p>
      </>
    ),
    repoLink: "",
    image: "/images/hearts1.png",
    images: ["/images/hearts1.png", "/images/hearts2.png"],
    technologies: ["C#", "WinForms", "Unit Testing", "OOP"],
  },
  {
    id: 4,
    slug: "kingwilliamshoteldb",
    title: "King Williams Hotel Database",
    description:
      "A website for interacting with a postgresql database simulating hotel services.",
    fullDescription: (
      <>
        <h2 className="text-2xl font-semibold text-white">Overview</h2>
        <p>
          desc
        </p>
      </>
    ),
    repoLink: "",
    image: "/images/hotel1.png",
    images: ["/images/hotel1.png", "/images/hotel2.png", "/images/hotel3.png", "/images/hotel4.png"],
    technologies: ["React", "TypeScript", "Next.js", "Postgresql", "Neon"],
  },
  {
    id: 5,
    slug: "caseviewer",
    title: "Salesforce Case Viewer",
    description:
      "A small internal site for viewing cases.",
    fullDescription: (
      <>
        <h2 className="text-2xl font-semibold text-white">Overview</h2>
        <p>
          desc
        </p>
      </>
    ),
    repoLink: "",
    image: "/images/hotel1.png",
    images: ["/images/hotel1.png", "/images/hotel2.png", "/images/hotel3.png"],
    technologies: ["Salesforce", "AMPScript", "Apex", "SQL"],
  },
];