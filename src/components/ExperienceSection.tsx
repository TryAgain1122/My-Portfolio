import { CheckCircle2 } from "lucide-react";
import { experience } from "../data/experience";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const ExperienceSection = () => {
  return (
    <section id="experience" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've built things"
          description="Responsibility and outcomes over titles — shipped systems, real users, team workflows."
        />

        <div className="space-y-7">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.08}>
              <article className="card card-hover p-8 md:p-10">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-slate-900">
                      {job.role}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-indigo-600">
                      {job.company}
                      <span className="ml-2 rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-500">
                        {job.type}
                      </span>
                    </p>
                  </div>
                  <span className="rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-600">
                    {job.period}
                  </span>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-slate-600 md:text-base">
                  {job.summary}
                </p>

                <ul className="mt-5 space-y-2.5">
                  {job.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2.5">
                      <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-indigo-500" />
                      <span className="text-sm leading-relaxed text-slate-600">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {job.tech.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
