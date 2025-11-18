import React from 'react';
import { EXPERIENCES, SKILLS } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative bg-dark/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Work History */}
          <div>
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Work Experience</h2>
             <div className="space-y-8 relative border-l border-white/10 ml-3 pl-8">
                {EXPERIENCES.map((exp) => (
                  <div key={exp.id} className="relative">
                    {/* Dot */}
                    <div className="absolute -left-[39px] top-1.5 w-5 h-5 rounded-full bg-dark border-2 border-primary"></div>
                    
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-primary font-medium">{exp.company}</span>
                      <span className="text-gray-500 text-sm">•</span>
                      <span className="text-gray-400 text-sm">{exp.period}</span>
                    </div>
                    <p className="text-gray-400 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                ))}
             </div>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Technical Arsenal</h2>
            <div className="bg-dark-lighter p-8 rounded-3xl border border-white/5 shadow-lg">
              <p className="text-gray-400 mb-6">
                I focus on the React ecosystem but love exploring new frontiers in WebGL and AI.
              </p>
              <div className="flex flex-wrap gap-3">
                {SKILLS.map(skill => (
                  <div key={skill} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-200 text-sm hover:bg-white/10 hover:border-primary/30 hover:text-white transition-all cursor-default">
                    {skill}
                  </div>
                ))}
              </div>

              {/* Simple proficiency visual */}
              <div className="mt-10 space-y-4">
                 <div>
                   <div className="flex justify-between text-sm mb-1">
                     <span className="text-gray-300">Frontend (React/Next)</span>
                     <span className="text-primary">95%</span>
                   </div>
                   <div className="h-2 bg-dark rounded-full overflow-hidden">
                     <div className="h-full bg-gradient-to-r from-primary to-secondary w-[95%]"></div>
                   </div>
                 </div>
                 <div>
                   <div className="flex justify-between text-sm mb-1">
                     <span className="text-gray-300">Creative Coding (Three.js)</span>
                     <span className="text-primary">85%</span>
                   </div>
                   <div className="h-2 bg-dark rounded-full overflow-hidden">
                     <div className="h-full bg-gradient-to-r from-primary to-secondary w-[85%]"></div>
                   </div>
                 </div>
                 <div>
                   <div className="flex justify-between text-sm mb-1">
                     <span className="text-gray-300">Backend (Node)</span>
                     <span className="text-primary">80%</span>
                   </div>
                   <div className="h-2 bg-dark rounded-full overflow-hidden">
                     <div className="h-full bg-gradient-to-r from-primary to-secondary w-[80%]"></div>
                   </div>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;