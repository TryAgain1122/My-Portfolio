import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Check, ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { projects } from "../data/projects";
import GradientBackdrop from "../components/GradientBackdrop";
import Footer from "../components/Footer";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <GradientBackdrop />
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Project not found
        </h1>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-800"
        >
          <ArrowLeft size={16} />
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-x-hidden">
      <GradientBackdrop />

      <main className="mx-auto max-w-4xl px-6 pt-10 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm font-medium text-slate-600 backdrop-blur-sm transition-colors hover:border-indigo-300 hover:text-indigo-700"
          >
            <ArrowLeft size={16} />
            Back to portfolio
          </Link>

          {/* Header */}
          <header className="mt-10">
            <span className="eyebrow">Case study</span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              {project.title}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
              {project.desc}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <SiGithub size={16} />
                  View source
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <ExternalLink size={16} />
                  Live demo
                </a>
              )}
            </div>
          </header>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12, ease: EASE }}
          className="mt-12 space-y-7"
        >
          {/* Overview */}
          <section className="card p-8 md:p-10">
            <h2 className="text-lg font-bold tracking-tight text-slate-900">
              About this project
            </h2>
            <p className="mt-4 leading-relaxed text-slate-600">{project.fullDesc}</p>
          </section>

          {/* Tech */}
          <section className="card p-8 md:p-10">
            <h2 className="text-lg font-bold tracking-tight text-slate-900">Tech stack</h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-indigo-100 bg-indigo-50/60 px-3.5 py-1.5 text-sm font-medium text-indigo-700"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </section>

          {/* Features */}
          <section className="card p-8 md:p-10">
            <h2 className="text-lg font-bold tracking-tight text-slate-900">
              Key features
            </h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                    <Check size={12} />
                  </span>
                  <span className="text-sm leading-relaxed text-slate-600">{feature}</span>
                </li>
              ))}
            </ul>
          </section>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
