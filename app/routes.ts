import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("project1", "routes/project1.tsx")
] satisfies RouteConfig;
