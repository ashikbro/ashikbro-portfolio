import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with user authentication, payment processing, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com',
      demo: 'https://example.com',
      image: 'https://via.placeholder.com/600x400/0ea5e9/ffffff?text=E-Commerce',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      technologies: ['React', 'Firebase', 'TailwindCSS'],
      github: 'https://github.com',
      demo: 'https://example.com',
      image: 'https://via.placeholder.com/600x400/8b5cf6/ffffff?text=Task+Manager',
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard that displays real-time weather data with beautiful visualizations.',
      technologies: ['React', 'OpenWeather API', 'Chart.js'],
      github: 'https://github.com',
      demo: 'https://example.com',
      image: 'https://via.placeholder.com/600x400/10b981/ffffff?text=Weather+App',
    },
    {
      title: 'Portfolio Generator',
      description: 'An automated portfolio generator that creates customizable portfolio websites from user data.',
      technologies: ['React', 'Node.js', 'Express', 'PostgreSQL'],
      github: 'https://github.com',
      demo: 'https://example.com',
      image: 'https://via.placeholder.com/600x400/f59e0b/ffffff?text=Portfolio+Gen',
    },
    {
      title: 'Social Media Dashboard',
      description: 'A unified dashboard for managing multiple social media accounts with analytics and scheduling.',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'TailwindCSS'],
      github: 'https://github.com',
      demo: 'https://example.com',
      image: 'https://via.placeholder.com/600x400/ef4444/ffffff?text=Social+Dashboard',
    },
    {
      title: 'Blog Platform',
      description: 'A modern blogging platform with markdown support, comments, and user profiles.',
      technologies: ['React', 'GraphQL', 'Apollo', 'MongoDB'],
      github: 'https://github.com',
      demo: 'https://example.com',
      image: 'https://via.placeholder.com/600x400/6366f1/ffffff?text=Blog+Platform',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Projects
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="View GitHub"
                  >
                    <FaGithub size={24} className="text-gray-900" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="View Demo"
                  >
                    <FaExternalLinkAlt size={20} className="text-gray-900" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
