import { Link } from 'react-router-dom';
import { type Project } from '../data/projects';

interface ProjectSectionProps {
    visibleElements: Set<string>;
    projects: Project[];
}

const ProjectSection = ({ visibleElements, projects }: ProjectSectionProps) => {
  return (
    <section
        id="projects"
        data-animate
        className={`py-20 px-6 transition-all duration-700 ${
            visibleElements.has("projects")
            ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
    >
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">Projects</h2>
        <div className="grid grid-col-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
                <Link
                    to={`/project/${project.slug}`}
                    key={index}
                    className={`group p-6 rounded-2xl bg-gradient-to-br ${project.gradient} text-white shadow-lg hover:scale-105 transition-all duration-300 hover:shadow-2xl cursor-pointer`}
                    style={{ animationDelay: project.delay }}
                >
                    <h3 className="text-2xl font-semibold mb-3 group-hover:underline">{project.title}</h3>
                    <p className="text-gray-100 mb-4 line-clamp-3">{project.desc}</p>
                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((t, j) => (
                            <span
                                key={j}
                                className="text-sm bg-white/20 px-3 py-1 rounded-full"
                            >{t}</span>
                        ))}
                    </div>
                    <div className="mt-4 text-white/80 text-sm group-hover:text-white transition-colors">
                        Click to view details →
                    </div>
                </Link>
            ))}
        </div>
    </section>
  )
}

export default ProjectSection