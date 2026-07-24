import { techCategories } from "../data/techStack";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const TechStack = () => {
  return (
    <section id="tech" className="px-6 py-14 sm:py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Tech stack"
          title="Tools I build with"
          description="No percentages, no self-ratings — just the technologies I use to design, build and run software in production."
        />

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {techCategories.map((category, i) => (
            <Reveal key={category.title} delay={(i % 3) * 0.08} className="min-w-0">
              <div className="card card-hover h-full p-5 sm:p-7">
                <h3 className="text-base font-bold tracking-tight text-slate-900">
                  {category.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                  {category.description}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2.5">
                  {category.items.map((item) => (
                    <li
                      key={item.name}
                      className="inline-flex items-center gap-2 rounded-xl border border-slate-200/80 bg-white px-3 py-2 text-sm font-medium text-slate-700"
                    >
                      <span className="flex h-5 w-5 items-center justify-center">
                        {item.icon}
                      </span>
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
