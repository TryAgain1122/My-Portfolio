import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { ArrowLeft, Github, ExternalLink, Check } from 'lucide-react';

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/" className="text-cyan-400 hover:text-cyan-300 flex items-center justify-center gap-2">
            <ArrowLeft size={20} />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Gradient */}
      <div className={`relative h-[40vh] bg-gradient-to-br ${project.gradient}`}>
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />

        {/* Back Button */}
        <Link
          to="/"
          className="absolute top-6 left-6 flex items-center gap-2 text-white/80 hover:text-white transition-colors bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full"
        >
          <ArrowLeft size={20} />
          Back
        </Link>

        {/* Title */}
        <div className="absolute bottom-8 left-0 right-0 px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{project.title}</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Description */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-cyan-400">About This Project</h2>
          <p className="text-gray-300 text-lg leading-relaxed">{project.fullDesc}</p>
        </section>

        {/* Tech Stack */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((tech, index) => (
              <span
                key={index}
                className={`px-4 py-2 rounded-full bg-gradient-to-r ${project.gradient} text-white font-medium`}
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Key Features</h2>
          <ul className="space-y-3">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className={`mt-1 p-1 rounded-full bg-gradient-to-r ${project.gradient}`}>
                  <Check size={14} />
                </span>
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Links */}
        <section className="flex flex-wrap gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors"
            >
              <Github size={20} />
              View on GitHub
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${project.gradient} rounded-full hover:opacity-90 transition-opacity`}
            >
              <ExternalLink size={20} />
              Live Demo
            </a>
          )}
        </section>
      </div>
    </div>
  );
}
