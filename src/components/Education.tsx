import { GraduationCap } from "lucide-react";

interface EducationProps {
  visibleElements: Set<string>;
}

const Education = ({ visibleElements }: EducationProps) => {
  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2
            id="education-title"
            data-animate
            className={`text-5xl md:text-6xl font-bold mb-6 ${
              visibleElements.has("education-title")
                ? "animate-slide-up"
                : "opacity-0"
            }`}
          >
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto animate-expand" />
        </div>

        <div className="space-y-7">
          {/* one */}
          <div
            id="education-card"
            data-animate
            className={`relative bg-gradient-to-br from-gray-900 to-gray-950 p-10 rounded-3xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 ${
              visibleElements.has("education-card")
                ? "animate-slide-up"
                : "opacity-0"
            }`}
          >
            <div className="absolute -top-6 left-10 p-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl shadow-2xl animate-bounce-slow">
              <GraduationCap size={32} />
            </div>

            <div className="mt-8">
              <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Bachelor of Science in Information Technology
              </h3>
              <p className="text-xl text-cyan-400 font-semibold mb-2">
                AMA University
              </p>
              <p className="text-gray-500 mb-3">2019 - 2025</p>
               <p className="text-gray-500 mb-6 font-semibold text-2xl">Certificates & Achievements</p>
              
              <div className="space-y-3">
                {[
                  "Dean's Lister",
                  "Programming Essentials in C++",
                  "Advanced Programming in C++",
                  "Introduction to Networks", 
                  "Switching Routings and Wireless Esseintials",
                  "Enterprise Networking, Security and Automation"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 group">
                    <div className="mt-1.5 w-2 h-2 bg-cyan-500 rounded-full group-hover:scale-150 transition-transform duration-300" />
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* two */}
          <div
            id="education-card"
            data-animate
            className={`relative bg-gradient-to-br from-gray-900 to-gray-950 p-10 rounded-3xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 ${
              visibleElements.has("education-card")
                ? "animate-slide-up"
                : "opacity-0"
            }`}
          >
            <div></div>
            <div className="absolute -top-6 left-10 p-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl shadow-2xl animate-bounce-slow">
              <GraduationCap size={32} />
            </div>

            <div className="mt-8">
              <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">  
                High School & Senior High School       
              </h3>
              <p className="text-xl text-cyan-400 font-semibold mb-2">
                STA LUCIA HS / STI NOVALICHES 
              </p>
              <p className="text-gray-500 mb-6">2013 - 2019</p>
            </div>
          </div>
          {/* Three */}
           <div
            id="education-card"
            data-animate
            className={`relative bg-gradient-to-br from-gray-900 to-gray-950 p-10 rounded-3xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 ${
              visibleElements.has("education-card")
                ? "animate-slide-up"
                : "opacity-0"
            }`}
          >
            <div className="absolute -top-6 left-10 p-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl shadow-2xl animate-bounce-slow">
              <GraduationCap size={32} />
            </div>

            <div className="mt-8">
              <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Elementary
              </h3>
              <p className="text-xl text-cyan-400 font-semibold mb-2">
                New Era University
              </p>
              <p className="text-gray-500 mb-6">2005 - 2013</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
