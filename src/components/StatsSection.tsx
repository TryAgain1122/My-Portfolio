import React from "react";

interface stat {
  number: string;
  label: string;
  icon: React.ReactNode;
}

interface StatsSectionProps {
  visibleElements: Set<string>;
  stats: stat[];
}

const StatsSection = ({ visibleElements, stats }: StatsSectionProps) => {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              id={`stat-${index}`}
              data-animate
              className={`text-center p-8 bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-500 hover:scale-110 hover:rotate-2 ${
                visibleElements.has(`stat-${index}`)
                  ? "animate-scale-in"
                  : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-cyan-400 flex justify-center mb-4 animate-bounce-slow">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              stat.label
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default StatsSection;
