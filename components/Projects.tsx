import React from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="group relative rounded-2xl overflow-hidden bg-dark-lighter border border-white/5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 shadow-xl">
      <div className="aspect-video overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
        />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-md bg-primary/10 text-primary-300 border border-primary/20">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          {project.description}
        </p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-60 pointer-events-none"></div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-gray-400 max-w-lg">
              A selection of my recent work, ranging from high-performance web apps to experimental 3D visualizations.
            </p>
          </div>
          <a href="#" className="hidden md:block text-primary hover:text-white transition-colors font-medium mt-4 md:mt-0">
            View all projects &rarr;
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
           <a href="#" className="text-primary hover:text-white transition-colors font-medium">
            View all projects &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;