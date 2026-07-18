import type { ReactNode } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiReactquery,
  SiLaravel,
  SiSpringboot,
  SiHono,
  SiNodedotjs,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiPrisma,
  SiAmazonwebservices,
  SiDocker,
  SiLinux,
  SiGithubactions,
  SiCloudinary,
  SiPusher,
  SiNginx,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { Boxes, Braces, Ship } from "lucide-react";

export interface TechItem {
  name: string;
  /** Official brand SVG where one exists; neutral glyph for concepts/brands without one. */
  icon: ReactNode;
}

export interface TechCategory {
  title: string;
  description: string;
  items: TechItem[];
}

const size = 22;

/*
 * Zustand, Dokploy and "REST API" have no official mark in the Simple Icons
 * set, so they intentionally use neutral glyphs instead of fake logos.
 */
export const techCategories: TechCategory[] = [
  {
    title: "Frontend",
    description: "Interfaces that feel fast and stay maintainable.",
    items: [
      { name: "React", icon: <SiReact size={size} color="#61DAFB" /> },
      { name: "Next.js", icon: <SiNextdotjs size={size} color="#000000" /> },
      { name: "TypeScript", icon: <SiTypescript size={size} color="#3178C6" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss size={size} color="#06B6D4" /> },
      { name: "TanStack Query", icon: <SiReactquery size={size} color="#FF4154" /> },
      { name: "Zustand", icon: <Boxes size={size} className="text-slate-500" /> },
    ],
  },
  {
    title: "Backend",
    description: "APIs and services built for correctness and scale.",
    items: [
      { name: "Laravel", icon: <SiLaravel size={size} color="#FF2D20" /> },
      { name: "Spring Boot", icon: <SiSpringboot size={size} color="#6DB33F" /> },
      { name: "Hono.js", icon: <SiHono size={size} color="#E36002" /> },
      { name: "Node.js", icon: <SiNodedotjs size={size} color="#5FA04E" /> },
      { name: "Java", icon: <FaJava size={size} color="#E76F00" /> },
    ],
  },
  {
    title: "Database",
    description: "Modeling data that outlives the first version.",
    items: [
      { name: "PostgreSQL", icon: <SiPostgresql size={size} color="#4169E1" /> },
      { name: "MySQL", icon: <SiMysql size={size} color="#4479A1" /> },
      { name: "MongoDB", icon: <SiMongodb size={size} color="#47A248" /> },
      { name: "Prisma ORM", icon: <SiPrisma size={size} color="#2D3748" /> },
    ],
  },
  {
    title: "Cloud & DevOps",
    description: "Shipping, observing and scaling in production.",
    items: [
      { name: "AWS", icon: <SiAmazonwebservices size={size} color="#232F3E" /> },
      { name: "Docker", icon: <SiDocker size={size} color="#2496ED" /> },
      { name: "Docker Compose", icon: <SiDocker size={size} color="#2496ED" /> },
      { name: "Linux", icon: <SiLinux size={size} color="#FCC624" /> },
      { name: "GitHub Actions", icon: <SiGithubactions size={size} color="#2088FF" /> },
    ],
  },
  {
    title: "Infrastructure",
    description: "The glue that keeps real products online.",
    items: [
      { name: "Cloudinary", icon: <SiCloudinary size={size} color="#3448C5" /> },
      { name: "REST API", icon: <Braces size={size} className="text-slate-500" /> },
      { name: "Laravel Reverb", icon: <SiLaravel size={size} color="#FF2D20" /> },
      { name: "Pusher", icon: <SiPusher size={size} color="#300D4F" /> },
      { name: "Dokploy", icon: <Ship size={size} className="text-slate-500" /> },
      { name: "Nginx", icon: <SiNginx size={size} color="#009639" /> },
    ],
  },
  {
    title: "Tooling",
    description: "Version control and collaboration, done properly.",
    items: [
      { name: "Git", icon: <SiGit size={size} color="#F05032" /> },
      { name: "GitHub", icon: <SiGithub size={size} color="#181717" /> },
    ],
  },
];
