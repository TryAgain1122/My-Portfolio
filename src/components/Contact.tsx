import { useState } from "react";
import { Check, Copy, FileText, Mail } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import Reveal from "./Reveal";

const EMAIL = "rafhaelfernandoluis@gmail.com";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — the mailto link still works */
    }
  };

  return (
    <section id="contact" className="px-6 py-14 sm:py-20 md:py-28">
      <div className="mx-auto max-w-4xl">
        <div className="card overflow-hidden p-6 text-center sm:p-10 md:p-16">
          <SectionHeadingCentered />

          <Reveal delay={0.1}>
            <div className="mx-auto mt-8 flex max-w-md flex-col gap-2 rounded-2xl border border-slate-200 bg-slate-50/80 p-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3 sm:py-2 sm:pr-2 sm:pl-5">
              <span className="truncate px-3 pt-1.5 text-sm font-medium text-slate-700 sm:p-0 md:text-base">
                {EMAIL}
              </span>
              <button
                onClick={copyEmail}
                className={`inline-flex shrink-0 items-center justify-center gap-1.5 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all ${
                  copied
                    ? "bg-emerald-100 text-emerald-700"
                    : "bg-slate-900 text-white hover:bg-indigo-600"
                }`}
              >
                {copied ? <Check size={15} /> : <Copy size={15} />}
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href={`mailto:${EMAIL}`} className="btn-primary">
                <Mail size={16} />
                Send an email
              </a>
              <a
                href="https://github.com/TryAgain1122"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <SiGithub size={16} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/rafhael-luis-25ba0525b/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <SiLinkedin size={16} />
                LinkedIn
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <FileText size={16} />
                Resume
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

const SectionHeadingCentered = () => (
  <Reveal>
    <span className="eyebrow">Contact</span>
    <h2 className="mt-5 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-5xl">
      Let&apos;s build something{" "}
      <span className="gradient-ink">great together.</span>
    </h2>
    <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
      I&apos;m open to full-time roles, freelance projects and collaborations.
      The fastest way to reach me is email — I usually reply within a day.
    </p>
  </Reveal>
);

export default Contact;
