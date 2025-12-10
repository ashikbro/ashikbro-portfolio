import React from 'react';
import { FaCode, FaLaptopCode, FaRocket, FaUsers } from 'react-icons/fa';

const About = () => {
  const highlights = [
    {
      icon: <FaCode size={32} />,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code following best practices',
    },
    {
      icon: <FaLaptopCode size={32} />,
      title: 'Modern Tech',
      description: 'Utilizing the latest technologies and frameworks',
    },
    {
      icon: <FaRocket size={32} />,
      title: 'Fast Delivery',
      description: 'Delivering high-quality projects on time',
    },
    {
      icon: <FaUsers size={32} />,
      title: 'Team Player',
      description: 'Excellent collaboration and communication skills',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I'm a passionate full-stack developer with expertise in building modern web applications.
            I love turning complex problems into simple, beautiful, and intuitive solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-primary-600 dark:text-primary-400 flex justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                My Journey
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                With years of experience in software development, I've worked on diverse projects
                ranging from small startups to large enterprise applications. My journey has equipped
                me with a strong foundation in both frontend and backend technologies.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                I'm constantly learning and staying up-to-date with the latest industry trends
                and best practices to deliver cutting-edge solutions.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                What I Do
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">▹</span>
                  <span>Design and develop responsive web applications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">▹</span>
                  <span>Build RESTful APIs and backend services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">▹</span>
                  <span>Optimize application performance and user experience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">▹</span>
                  <span>Collaborate with teams to deliver quality solutions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
