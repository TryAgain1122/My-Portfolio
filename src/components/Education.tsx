import { GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

interface EducationEntry {
  degree: string;
  school: string;
  period: string;
  certificates?: string[];
}

const education: EducationEntry[] = [
  {
    degree: "BS in Information Technology",
    school: "AMA University",
    period: "2019 — 2025",
    certificates: ["Dean's Lister"],
  },
  {
    degree: "High School & Senior High School",
    school: "Sta. Lucia HS / STI Novaliches",
    period: "2013 — 2019",
  },
  {
    degree: "Elementary",
    school: "New Era University",
    period: "2005 — 2013",
  },
];

const Education = () => {
  return (
    <section id="education" className="px-6 py-14 sm:py-20 md:py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="Education" title="Academic background" />

        <ol className="relative ml-3 space-y-10 border-l border-slate-200">
          {education.map((entry, i) => (
            <li key={entry.degree} className="pl-8">
              <Reveal delay={i * 0.08}>
                <span className="absolute -left-[13px] flex h-[26px] w-[26px] items-center justify-center rounded-full border border-indigo-200 bg-white text-indigo-600">
                  <GraduationCap size={13} />
                </span>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base font-bold tracking-tight text-slate-900">
                    {entry.degree}
                  </h3>
                  <span className="text-xs font-semibold text-slate-400">{entry.period}</span>
                </div>
                <p className="mt-1 text-sm font-medium text-slate-500">{entry.school}</p>
                {entry.certificates && (
                  <ul className="mt-4 flex flex-wrap items-center gap-2">
                    {entry.certificates.map((cert) => (
                      <li
                        key={cert}
                        className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700"
                      >
                        {cert}
                      </li>
                    ))}
                    <li>
                      <a
                        href="#certifications"
                        className="rounded-full border border-indigo-200 bg-indigo-50/60 px-3 py-1 text-xs font-semibold text-indigo-700 transition-colors hover:bg-indigo-100"
                      >
                        11 Cisco certifications ↓
                      </a>
                    </li>
                  </ul>
                )}
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Education;
