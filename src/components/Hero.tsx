import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, FileText, Mail } from "lucide-react";
import {
  SiGithub,
  SiLinkedin,
  SiReact,
  SiTypescript,
  SiLaravel,
  SiDocker,
  SiPostgresql,
  SiAmazonwebservices,
} from "react-icons/si";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const stats = [
  { number: "12+", label: "Web projects built" },
  { number: "8+", label: "Frontend tools" },
  { number: "5+", label: "Backend tools" },
  { number: "3", label: "Team projects" },
];

const floatingLogos = [
  { icon: <SiReact size={20} color="#61DAFB" />, className: "-left-5 top-8", delay: 0 },
  { icon: <SiTypescript size={20} color="#3178C6" />, className: "-right-4 top-20", delay: 0.8 },
  { icon: <SiLaravel size={20} color="#FF2D20" />, className: "-left-8 top-1/2", delay: 1.6 },
  { icon: <SiDocker size={20} color="#2496ED" />, className: "-right-7 top-[62%]", delay: 0.4 },
  { icon: <SiPostgresql size={20} color="#4169E1" />, className: "-left-3 bottom-10", delay: 1.2 },
  { icon: <SiAmazonwebservices size={20} color="#232F3E" />, className: "-right-2 bottom-4", delay: 2 },
];

const socials = [
  { href: "https://github.com/TryAgain1122", label: "GitHub", icon: <SiGithub size={17} /> },
  {
    href: "https://www.linkedin.com/in/rafhael-luis-25ba0525b/",
    label: "LinkedIn",
    icon: <SiLinkedin size={17} />,
  },
  { href: "mailto:rafhaelfernandoluis@gmail.com", label: "Email", icon: <Mail size={18} /> },
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: EASE },
});

const Hero = () => {
  return (
    <section id="top" className="relative px-6 pt-28 pb-16 sm:pt-36 sm:pb-20 md:pt-44 md:pb-28">
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
        {/* Copy */}
        <div>
          <motion.div {...fadeUp(0)}>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/70 px-3.5 py-1.5 text-xs font-semibold text-emerald-700">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Available for work
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.08)}
            className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl md:leading-[1.08]"
          >
            Full Stack Engineer building products{" "}
            <span className="gradient-ink">from UI to infrastructure.</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.16)}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg"
          >
            I build modern web applications, scalable backend systems,
            and cloud infrastructure using Laravel, Next.js, TypeScript,
            PostgreSQL, Docker, and AWS.
            <br />
            <br />
            Currently exploring AI engineering, Retrieval-Augmented
            Generation (RAG), and intelligent developer tools.
          </motion.p>

          <motion.div {...fadeUp(0.24)} className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-primary">
              View projects
              <ArrowDown size={16} />
            </a>
            <a href="#contact" className="btn-secondary">
              Get in touch
              <ArrowUpRight size={16} />
            </a>
          </motion.div>

          <motion.div {...fadeUp(0.32)} className="mt-8 flex flex-wrap items-center gap-2">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={social.label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/70 text-slate-600 transition-all hover:-translate-y-0.5 hover:border-indigo-300 hover:text-indigo-600"
              >
                {social.icon}
              </a>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 text-sm font-medium text-slate-600 transition-all hover:-translate-y-0.5 hover:border-indigo-300 hover:text-indigo-600"
            >
              <FileText size={15} />
              Resume
            </a>
          </motion.div>

          <motion.dl
            {...fadeUp(0.4)}
            className="mt-10 grid max-w-xl grid-cols-2 gap-x-6 gap-y-6 border-t border-slate-200/80 pt-7 sm:grid-cols-4 sm:gap-x-8 md:mt-12 md:pt-8"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-2xl font-bold tracking-tight text-slate-900">
                  {stat.number}
                </dd>
                <dd className="mt-1 text-xs font-medium text-slate-500">{stat.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Portrait with floating logos */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          className="relative mx-auto hidden w-full max-w-xs lg:block"
        >
          <div className="card overflow-hidden rounded-[20px] p-2">
            <img
              src="/rafhael.jpg"
              alt="Portrait of Rafhael Luis"
              className="aspect-[4/5] w-full rounded-xl object-cover"
            />
          </div>

          {floatingLogos.map((logo, i) => (
            <motion.span
              key={i}
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4.5,
                delay: logo.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={`card absolute flex h-11 w-11 items-center justify-center rounded-xl ${logo.className}`}
            >
              {logo.icon}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
