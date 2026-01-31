import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiSpringboot,
  SiCplusplus,
  SiPostgresql,
  SiMongodb,
  SiTailwindcss,
  SiRedux,
  SiMysql
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import type { IconType } from 'react-icons';

interface Skill {
  name: string;
  icon: string;
  level: number;
  color: string;
}

interface SkillsSectionProps {
  visibleElements: Set<string>;
  skills: Skill[];
}

const iconMap: Record<string, IconType> = {
  react: SiReact,
  nextjs: SiNextdotjs,
  typescript: SiTypescript,
  nodejs: SiNodedotjs,
  springboot: SiSpringboot,
  java: FaJava,
  cplusplus: SiCplusplus,
  postgresql: SiPostgresql,
  mongodb: SiMongodb,
  tailwindcss: SiTailwindcss,
  redux: SiRedux,
  mysql: SiMysql,
};

export default function SkillsSection({ visibleElements, skills }: SkillsSectionProps) {
  return (
    <section id="skills" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            id="skills-title"
            data-animate
            className={`text-5xl md:text-6xl font-bold mb-6 ${
              visibleElements.has('skills-title')
              ? 'animate-slide-up' : 'opacity-0'
            }`}
          >
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Technical Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto animate-expand"/>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              id={`skill-${index}`}
              data-animate
              className={`group bg-gradient-to-br from-gray-900 to-gray-950 p-6 rounded-2xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-500 ${
                visibleElements.has(`skill-${index}`)
                ? 'animate-slide-up' : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: `${index * 0.05}s`}}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  {(() => {
                    const IconComponent = iconMap[skill.icon];
                    return IconComponent ? <IconComponent className="text-3xl" /> : <span className="text-3xl">{skill.icon}</span>;
                  })()}
                  <span className="text-3xl font-semibold">{skill.name}</span>
                </div>
                <span className="text-cyan-400 font-bold">{skill.level}%</span>
              </div>
              <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                  style={{
                    width: visibleElements.has(`skill-${index}`) ? `${skill.level}%` : '0%',
                    transitionDelay: `${index * 0.05}s`
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
