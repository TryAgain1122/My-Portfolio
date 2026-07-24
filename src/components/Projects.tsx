import { Link } from "react-router-dom";
import { ArrowUpRight, BookOpen, Globe } from "lucide-react";
import { SiGithub } from "react-icons/si";
import type { Project } from "../data/projects";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const domainOf = (url?: string) => {
  if (!url) return "localhost:3000";
  try {
    return new URL(url).hostname;
  } catch {
    return "localhost:3000";
  }
};

/** Browser-frame preview used until a real screenshot is added via `project.image`. */
const ProjectPreview = ({ project }: { project: Project }) => (
  <div className="relative overflow-hidden rounded-t-2xl border-b border-slate-200/70">
    <div className="flex items-center gap-2 bg-slate-50/90 px-4 py-2.5">
      <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
      <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
      <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
      <span className="ml-2 min-w-0 truncate rounded-md bg-white px-2.5 py-0.5 text-[11px] font-medium text-slate-400">
        {domainOf(project.live || project.github)}
      </span>
    </div>
    {project.image ? (
      <img
        src={project.image}
        alt={`${project.title} screenshot`}
        className="aspect-[16/9] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
      />
    ) : (
      <div
        className={`relative aspect-[16/9] w-full bg-gradient-to-br ${project.gradient} opacity-[0.85] transition-transform duration-500 group-hover:scale-[1.03]`}
      >
        <div className="absolute inset-0 bg-white/55" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold tracking-tight text-slate-700/80">
            {project.title}
          </span>
        </div>
      </div>
    )}
  </div>
);

const Projects = ({ projects }: { projects: Project[] }) => {
  return (
    <section id="projects" className="px-6 py-14 sm:py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="Production platforms, team builds and experiments — each with source code and, where available, a live deployment."
        />

        <div className="grid gap-5 sm:gap-7 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 2) * 0.08} className="min-w-0">
              <article className="card card-hover group flex h-full flex-col overflow-hidden">
                <ProjectPreview project={project} />

                <div className="flex flex-1 flex-col p-5 sm:p-7">
                  <h3 className="text-lg font-bold tracking-tight text-slate-900">
                    {project.title}
                  </h3>
                  <p className="mt-2.5 line-clamp-3 text-sm leading-relaxed text-slate-600">
                    {project.desc}
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full border border-indigo-100 bg-indigo-50/60 px-3 py-1 text-xs font-medium text-indigo-700"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2.5 pt-6 text-sm font-semibold">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-slate-600 transition-colors hover:text-slate-900"
                      >
                        <SiGithub size={15} />
                        GitHub
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-slate-600 transition-colors hover:text-slate-900"
                      >
                        <Globe size={15} />
                        Live demo
                      </a>
                    )}
                    <Link
                      to={`/project/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-indigo-600 transition-colors hover:text-indigo-800"
                    >
                      <BookOpen size={15} />
                      Case study
                      <ArrowUpRight
                        size={14}
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
