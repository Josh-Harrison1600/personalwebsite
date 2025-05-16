import { forwardRef } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projectData';

interface ProjectsProps {
  projectsText: string;
}

const Projects = forwardRef<HTMLDivElement, ProjectsProps>(({ projectsText }, ref) => (
  <div ref={ref} className="min-h-screen bg-gray-950 text-white p-8 pt-16 overflow-hidden">
    <div data-aos="fade-up">
      <h2 className="text-4xl text-center mb-8">{projectsText}</h2>
      {projects.map((project, index) => (
        <ProjectCard key={project.title} {...project} reverse={index % 2 === 1} />
      ))}
    </div>
  </div>
));

export default Projects;
