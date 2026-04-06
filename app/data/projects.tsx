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
        <div className="my-7">
          <h2 className="text-2xl font-semibold text-white">Overview</h2>
          <p>
            DeckAi is a deck builder website with search, filters, and public deck
            sharing.
          </p>
        </div>

        <div className="my-7">
          <h2 className="text-2xl font-semibold text-white m">What I did Learn?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Building a complete full stack website from start to finish</li>
            <li>TypeScript + React together</li>
            <li>Auth.js</li>
            <li>Vercel</li>
          </ul>
        </div>

        <div className="my-7">
          <h2 className="text-2xl font-semibold text-white">
            How did this project make me a better developer?
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>More experience working in a team</li>
            <li>Group project over an entire semester</li>
            <li>Getting more familiar with the React framework</li>
            <li>Meeting deliverables throughout the semester</li>
            <li>Good experience managing time and expectations for a open-ended project</li>
            <li>Proper GitHub usage with branches</li>
          </ul>
        </div>

        <div className="my-7">
          <h2 className="text-2xl font-semibold text-white">
            What can I improve on for future projects?
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Following project planning more closely</li>
            <li>Making sure my group members are on track for their contributions</li>
          </ul>
        </div>
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
        <div className="my-7">
          <h2 className="text-2xl font-semibold text-white">Overview</h2>
          <p>
            DeckAi is a deck builder website with search, filters, and public deck
            sharing.
          </p>
        </div>

        <div className="my-7">
          <h2 className="text-2xl font-semibold text-white m">What I did Learn?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Using a CMS to manage data</li>
            <li>React</li>
            <li>Routing</li>
            <li>Gitlab</li>
            <li>NextJs</li>
            <li>README & Documentation</li>
          </ul>
        </div>

        <div className="my-7">
          <h2 className="text-2xl font-semibold text-white">
            How did this project make me a better developer?
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>More experience working in a team</li>
            <li>Working in short sprints throughout semester, using proper documentation to facilitate this</li>
            <li>Using a CRM for data with scheduled posting</li>
          </ul>
        </div>

        <div className="my-7">
          <h2 className="text-2xl font-semibold text-white">
            What can I improve on for future projects?
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Staying on track</li>
            <li>Communication with my group</li>
          </ul>
        </div>
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
        <div className="my-7">
          <h2 className="text-2xl font-semibold text-white">Overview</h2>
          <p>
            DeckAi is a deck builder website with search, filters, and public deck
            sharing.
          </p>
        </div>

        <div className="my-7">
          <h2 className="text-2xl font-semibold text-white m">What I did Learn?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>C# with Windows Forms</li>
            <li>OOP</li>
            <li>Unit testing</li>
            <li>Using the MVC model for a game</li>
            <li>Events</li>
          </ul>
        </div>

        <div className="my-7">
          <h2 className="text-2xl font-semibold text-white">
            How did this project make me a better developer?
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Experience developing using test driven development</li>
            <li>Improved meeting communication</li>
            <li>Using a CRM for data with scheduled posting</li>
          </ul>
        </div>

        <div className="my-7">
          <h2 className="text-2xl font-semibold text-white">
            What can I improve on for future projects?
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Better UX and instructions for users</li>
          </ul>
        </div>
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
        <div className="my-7">
          <h2 className="text-2xl font-semibold text-white">Overview</h2>
          <p>
            DeckAi is a deck builder website with search, filters, and public deck
            sharing.
          </p>
        </div>

        <div className="my-7">
          <h2 className="text-2xl font-semibold text-white m">What I did Learn?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Big Postgresql database project</li>
          </ul>
        </div>

        <div className="my-7">
          <h2 className="text-2xl font-semibold text-white">
            How did this project make me a better developer?
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Experience developing using test driven development</li>
            <li>Improved meeting communication</li>
            <li>Using a CRM for data with scheduled posting</li>
          </ul>
        </div>

        <div className="my-7">
          <h2 className="text-2xl font-semibold text-white">
            What can I improve on for future projects?
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Better UX and instructions for users</li>
          </ul>
        </div>
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