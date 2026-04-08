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
            DeckAi is a full-stack trading card game deck builder that allows users to search for cards, build and manage custom decks, and share them with others.
            The website uses a React frontend with a Next.js and MongoDB backend, allowing features like authentication, deck editing, and visibility settings.
            By integrating external card APIs and implementing smart data handling, this project shows a complete development workflow,
            focusing on both user experience and solid backend architecture with heavy reliance on APIs.
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
            This project is a product showcase website built to display and manage content through Contentful CMS.
            It allows for displaying and modifying product information, making it easy to update and maintain content without changing any code.
            Using React and Next.js, the site has efficient routing, and content delivery through the CMS
            This project simulates a workflow for scalable website.
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
            <li>Using a CMS for data with scheduled posting</li>
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
            This project is an implementation of the Hearts card game built using C# and WindowsForms.
            It heavily utilizes an OOP design to model game logic, player interactions, and a scoring system while using an MVC design pattern.
            This project includes events to notify other parts of the system when something happens in the game, this project also uses unit testing to ensure reliability of core mechanics.
            This project demonstrates good skills in software design, game logic, and building interactive applications in an OOP language like C#.
          </p>
        </div>

        <div className="my-7">
          <h2 className="text-2xl font-semibold text-white m">What I did Learn?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>C# with Windows Forms</li>
            <li>OOP</li>
            <li>Unit testing</li>
            <li>MVC</li>
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
            This project is a full-stack web application designed to simulate hotel operations through a PostgreSQL database,
            allowing users to interact with reservations, guests, and room management.
            The system emphasizes strong database design, following normalization principles up to 3NF to ensure data integrity and efficiency,
            while providing a React and Next.js frontend for user interaction.
            Docker was used to manage the development environment, enabling consistent database setup and deployment.
            This project highlights the integration of a well-structured relational database with a React website,
            reflecting a real-world use case.
          </p>
        </div>

        <div className="my-7">
          <h2 className="text-2xl font-semibold text-white m">What I did Learn?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Postgresql</li>
            <li>Database normalization process from 0NF to 3NF</li>
            <li>Docker</li>
            <li>React Router</li>
          </ul>
        </div>

        <div className="my-7">
          <h2 className="text-2xl font-semibold text-white">
            How did this project make me a better developer?
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Experience using Postgresql for a large database</li>
            <li>More Experience developing a schema with 3NF and visualizing it with a ERD</li>
          </ul>
        </div>

        <div className="my-7">
          <h2 className="text-2xl font-semibold text-white">
            What can I improve on for future projects?
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Better organization of design documents</li>
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
        <div className="my-7">
          <h2 className="text-2xl font-semibold text-white">Overview</h2>
            <p>
              This project is an internal Salesforce-based website designed to allow users to securely view and interact with their cases.
              It leverages Apex for backend logic and data access, along with AMPScript and Salesforce tools to handle dynamic content and user interactions.
              This project focuses on securely exposing relevant case information while having proper access control and data handling practices.
            </p>
        </div>

        <div className="my-7">
          <h2 className="text-2xl font-semibold text-white m">What I did Learn?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Salesforce</li>
            <li>Apex</li>
            <li>AMPScript</li>
          </ul>
        </div>

        <div className="my-7">
          <h2 className="text-2xl font-semibold text-white">
            How did this project make me a better developer?
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Im now more comfortable in a professional work environment</li>
            <li>Experience working in the Salesforce eco system</li>
            <li>More comfortable working on a project with a tech stack im unfamiliar with</li>
            <li>Improving at handling documentation</li>
          </ul>
        </div>

        <div className="my-7">
          <h2 className="text-2xl font-semibold text-white">
            What can I improve on for future projects?
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>In future projects I should read the documentation more thoroughly to improve my development speed</li>
          </ul>
        </div>
      </>
    ),
    repoLink: "",
    image: "/images/case1.png",
    images: ["/images/case1.png"],
    technologies: ["Salesforce", "AMPScript", "Apex", "SQL"],
  },
];