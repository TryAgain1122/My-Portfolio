/*
 * Seeded from shipped, verifiable work (Staycation runs in production at
 * staycationhavenph.com). Edit roles, dates and bullets as your career grows.
 */
export interface Experience {
  role: string;
  company: string;
  period: string;
  type: string;
  summary: string;
  highlights: string[];
  tech: string[];
}

export const experience: Experience[] = [
  {
    role: "Full Stack Engineer",
    company: "DreamNext Technologies",
    period: "2026 — Present",
    type: "Team · Production",
    summary:
      "Built and maintained a production-scale commerce ecosystem consisting of a multi-portal e-commerce platform, affiliate system, supplier and partner portals, a real-time community platform, and supporting cloud infrastructure.",
    highlights: [
      "Developed full-stack features across Next.js, Node.js (Hono.js), and Laravel applications",
      "Built and maintained business modules including checkout, shipping, payments, KYC verification, encashment, supplier management, notifications, and affiliate workflows",
      "Developed a real-time community platform with social feeds, messaging, notifications, events, and user presence using Socket.IO, Redis, Prisma, and PostgreSQL",
      "Integrated third-party services including PayMongo, XDE Courier, ZQ (1688 Product Sourcing API), Cloudinary, Google Gemini AI, and Meilisearch — enabling payment processing, logistics, product synchronization, media management, AI-powered support, and search capabilities",
      "Contributed to Dockerized deployments, CI/CD pipelines, production infrastructure, debugging, testing, and system maintenance using GitHub Actions, GHCR, and Dokploy",
    ],
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Hono.js",
      "Laravel",
      "PHP",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "Socket.IO",
      "Docker",
      "GitHub Actions",
      "Tailwind CSS",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Staycation Haven PH",
    period: "2024 — 2025",
    type: "Team · Production",
    summary:
      "Built and shipped a multi-role hotel management platform now serving guests in production at staycationhavenph.com.",
    highlights: [
      "Designed a role-based architecture serving four user types — CSR, Property Owners, Partners and Cleaners — each with a dedicated dashboard",
      "Implemented booking management, property listings and housekeeping task assignment end-to-end",
      "Added real-time notifications and comprehensive admin controls",
      "Collaborated in a team workflow with Git, code review and shared deployments",
    ],
    tech: ["Next.js", "Node.js", "Redux", "PostgreSQL", "Tailwind CSS"],
  },
  {
    role: "Project-Based Full Stack Developer",
    company: "Independent",
    period: "2022 — Present",
    type: "Freelance & personal",
    summary:
      "Delivered 12+ web applications end-to-end — from database design and API development to deployment.",
    highlights: [
      "Built Urban Deca Tower, a hotel booking system with NextAuth authentication, payment integration and an admin panel",
      "Developed a full-stack social media platform with profiles, posts, likes, comments and real-time chat",
      "Deployed and maintained apps on Vercel with containerized workflows using Docker",
      "Practiced modern state management across Redux, Context API and useReducer patterns",
    ],
    tech: ["React", "Next.js", "TypeScript", "Laravel", "Docker", "PostgreSQL"],
  },
];
