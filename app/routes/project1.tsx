import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Project 1" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Project1() {
  return <h1>Project 1</h1>;
}
