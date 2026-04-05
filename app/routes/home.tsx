import type { Route } from "./+types/home";
import ProjectList from "../components/ProjectList";
import {
  FaGithub,
  FaLinkedin,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaGitAlt,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiPostgresql,
  SiMongodb,
  SiSalesforce,
  SiDotnet ,
} from "react-icons/si";
import { TbBrandHtml5, TbBrandCss3 } from "react-icons/tb";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Cole de Ruiter" },
    {
      name: "description",
      content: "My portfolio site",
    },
  ];
}

export default function Home() {

  //proj list
  const projects = [
    {
      id: 1,
      title: "TCG Deck Builder",
      description:
        "A full-stack deck builder built with React, TypeScript, Next.js, Auth.js, and MongoDB.",
      link: "/project1",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description:
        "A responsive personal portfolio built with React Router, TypeScript, and Tailwind CSS.",
      link: "/project2",
    },
  ];

  // mapping skill names to icons
  const skills = [
    { name: "React", icon: <FaReact /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "HTML", icon: <TbBrandHtml5 /> },
    { name: "CSS", icon: <TbBrandCss3 /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Python", icon: <FaPython /> },
    { name: "Java", icon: <FaJava /> },
    { name: "C#", icon: <SiDotnet  /> },
    { name: "SQL", icon: <FaDatabase /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Salesforce", icon: <SiSalesforce /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "OOP", icon: <FaDatabase /> },
  ];

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-4xl flex-col justify-center px-6 py-20">
        <section className="flex flex-col gap-6 text-center sm:text-left">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-violet-400/80">
              Developer
            </p>

            <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              Cole de Ruiter
            </h1>

            {/* social links */}
            <div className="mt-4 flex items-center justify-center gap-6 sm:justify-start">
              <a
                href="https://github.com/searooter1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/80"
              >
                <FaGithub className="text-lg" />
                <span className="text-sm">GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/colederuiter/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/80"
              >
                <FaLinkedin className="text-lg" />
                <span className="text-sm">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* skills */}
          <section className="mt-2">
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill.name}
                  className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white/80"
                >
                  <span className="text-base text-violet-400">
                    {skill.icon}
                  </span>
                  {skill.name}
                </span>
              ))}
            </div>
          </section>

          {/* about seciton */}
          <div className="max-w-3xl">
            <h2 className="mb-3 text-2xl font-semibold text-white">
              About Me
            </h2>
            <p className="leading-8 text-white/80">
              I am a Computer Programming and Analysis student at Durham College with a
              interest in building modern websites with React and
              TypeScript. I enjoy creating projects utilizing my skills in web development, databases, and
              object-oriented programming. During my co-op as a CRM Assistant, I worked
              with Salesforce to build internal web pages, connect form data to records,
              while adhearing to business requirements. In my free time, I enjoy experimenting
              with new technologies and modding games to continue improving as a developer.
            </p>
          </div>
        </section>

        {/* projs */}
        <section className="mt-14">
          <h2 className="mb-5 text-2xl font-semibold text-white">
            Projects
          </h2>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <ProjectList projects={projects} />
          </div>
        </section>
      </div>
    </main>
  );
}