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
