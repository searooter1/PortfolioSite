export type Project = {
  id: number;
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
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
    fullDescription:
      "desc",
    repoLink: "https://github.com/searooter1/Capstone_TCG_Deck",
    image: "/images/deckai1.png",
    images: ["/images/deckai1.png", "/images/deckai2.png", "/images/deckai3.png"],
    technologies: ["React", "TypeScript", "Next.js", "MongoDB", "Auth.js"],
  },
];