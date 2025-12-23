import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaShoppingCart, FaTasks, FaCloudSunRain, FaUserCircle, FaChartLine, FaBlog } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with user authentication, payment processing, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com',
      demo: 'https://example.com',
      gradient: 'from-sky-400 via-blue-500 to-indigo-600',
      icon: FaShoppingCart,
      pattern: 'dots',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      technologies: ['React', 'Firebase', 'TailwindCSS'],
      github: 'https://github.com',
      demo: 'https://example.com',
      gradient: 'from-purple-400 via-violet-500 to-purple-600',
      icon: FaTasks,
      pattern: 'squares',
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard that displays real-time weather data with beautiful visualizations.',
      technologies: ['React', 'OpenWeather API', 'Chart.js'],
      github: 'https://github.com',
      demo: 'https://example.com',
      gradient: 'from-emerald-400 via-teal-500 to-cyan-600',
      icon: FaCloudSunRain,
      pattern: 'circles',
    },
    {
      title: 'Portfolio Generator',
      description: 'An automated portfolio generator that creates customizable portfolio websites from user data.',
      technologies: ['React', 'Node.js', 'Express', 'PostgreSQL'],
      github: 'https://github.com',
      demo: 'https://example.com',
      gradient: 'from-amber-400 via-orange-500 to-red-600',
      icon: FaUserCircle,
      pattern: 'waves',
    },
    {
      title: 'Social Media Dashboard',
      description: 'A unified dashboard for managing multiple social media accounts with analytics and scheduling.',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'TailwindCSS'],
      github: 'https://github.com',
      demo: 'https://example.com',
      gradient: 'from-rose-400 via-pink-500 to-fuchsia-600',
      icon: FaChartLine,
      pattern: 'grid',
    },
    {
      title: 'Blog Platform',
      description: 'A modern blogging platform with markdown support, comments, and user profiles.',
      technologies: ['React', 'GraphQL', 'Apollo', 'MongoDB'],
      github: 'https://github.com',
      demo: 'https://example.com',
      gradient: 'from-indigo-400 via-blue-500 to-purple-600',
      icon: FaBlog,
      pattern: 'hexagons',
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
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden group h-48">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}>
                    {/* Pattern Overlay */}
                    <div className="absolute inset-0 opacity-10">
                      {project.pattern === 'dots' && (
                        <svg width="100%" height="100%">
                          <defs>
                            <pattern id={`dots-${index}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                              <circle cx="2" cy="2" r="2" fill="white" />
                            </pattern>
                          </defs>
                          <rect width="100%" height="100%" fill={`url(#dots-${index})`} />
                        </svg>
                      )}
                      {project.pattern === 'squares' && (
                        <svg width="100%" height="100%">
                          <defs>
                            <pattern id={`squares-${index}`} x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                              <rect x="0" y="0" width="15" height="15" fill="white" />
                            </pattern>
                          </defs>
                          <rect width="100%" height="100%" fill={`url(#squares-${index})`} />
                        </svg>
                      )}
                      {project.pattern === 'circles' && (
                        <svg width="100%" height="100%">
                          <defs>
                            <pattern id={`circles-${index}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                              <circle cx="20" cy="20" r="10" fill="none" stroke="white" strokeWidth="2" />
                            </pattern>
                          </defs>
                          <rect width="100%" height="100%" fill={`url(#circles-${index})`} />
                        </svg>
                      )}
                      {project.pattern === 'waves' && (
                        <svg width="100%" height="100%">
                          <defs>
                            <pattern id={`waves-${index}`} x="0" y="0" width="40" height="20" patternUnits="userSpaceOnUse">
                              <path d="M 0 10 Q 10 0, 20 10 Q 30 20, 40 10" fill="none" stroke="white" strokeWidth="2" />
                            </pattern>
                          </defs>
                          <rect width="100%" height="100%" fill={`url(#waves-${index})`} />
                        </svg>
                      )}
                      {project.pattern === 'grid' && (
                        <svg width="100%" height="100%">
                          <defs>
                            <pattern id={`grid-${index}`} x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="white" strokeWidth="1" />
                            </pattern>
                          </defs>
                          <rect width="100%" height="100%" fill={`url(#grid-${index})`} />
                        </svg>
                      )}
                      {project.pattern === 'hexagons' && (
                        <svg width="100%" height="100%">
                          <defs>
                            <pattern id={`hexagons-${index}`} x="0" y="0" width="56" height="100" patternUnits="userSpaceOnUse">
                              <path d="M28 0 L56 25 L56 75 L28 100 L0 75 L0 25 Z" fill="none" stroke="white" strokeWidth="2" />
                            </pattern>
                          </defs>
                          <rect width="100%" height="100%" fill={`url(#hexagons-${index})`} />
                        </svg>
                      )}
                    </div>
                    
                    {/* Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <IconComponent className="text-white text-7xl opacity-90 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
                    </div>
                  </div>
                  
                  {/* Hover Overlay with Links */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors transform hover:scale-110"
                      aria-label="View GitHub"
                    >
                      <FaGithub size={24} className="text-gray-900" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors transform hover:scale-110"
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
