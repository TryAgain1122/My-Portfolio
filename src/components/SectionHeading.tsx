import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

const SectionHeading = ({ eyebrow, title, description }: SectionHeadingProps) => (
  <Reveal className="mb-14 max-w-2xl">
    <span className="eyebrow">{eyebrow}</span>
    <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
      {title}
    </h2>
    {description && (
      <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
        {description}
      </p>
    )}
  </Reveal>
);

export default SectionHeading;
