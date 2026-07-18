import { Mail } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";

const Footer = () => (
  <footer className="border-t border-slate-200/70 px-6 py-10">
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
      <p className="text-sm text-slate-500">
        © {new Date().getFullYear()} Rafhael Luis. Built with React, TypeScript &
        Tailwind CSS.
      </p>
      <div className="flex items-center gap-4 text-slate-400">
        <a
          href="https://github.com/TryAgain1122"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="transition-colors hover:text-slate-700"
        >
          <SiGithub size={18} />
        </a>
        <a
          href="https://www.linkedin.com/in/rafhael-luis-25ba0525b/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="transition-colors hover:text-slate-700"
        >
          <SiLinkedin size={18} />
        </a>
        <a
          href="mailto:rafhaelfernandoluis@gmail.com"
          aria-label="Email"
          className="transition-colors hover:text-slate-700"
        >
          <Mail size={18} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
