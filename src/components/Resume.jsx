import React from 'react';
import { FaDownload, FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const Resume = () => {
  const experience = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Company',
      period: '2022 - Present',
      description: [
        'Led development of scalable web applications using React and Node.js',
        'Mentored junior developers and conducted code reviews',
        'Improved application performance by 40% through optimization',
      ],
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Agency',
      period: '2020 - 2022',
      description: [
        'Developed and maintained multiple client projects',
        'Implemented RESTful APIs and database designs',
        'Collaborated with designers and product managers',
      ],
    },
    {
      title: 'Junior Developer',
      company: 'Startup Inc.',
      period: '2018 - 2020',
      description: [
        'Built responsive web applications with modern frameworks',
        'Participated in agile development processes',
        'Learned best practices and coding standards',
      ],
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'University Name',
      period: '2014 - 2018',
      description: 'Focused on software engineering, algorithms, and data structures',
    },
    {
      degree: 'Full Stack Web Development Certification',
      school: 'Online Learning Platform',
      period: '2018',
      description: 'Completed comprehensive bootcamp covering modern web technologies',
    },
  ];

  const handleDownload = () => {
    // In a real application, this would link to an actual resume PDF file
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Ashik_Resume.pdf';
    link.click();
  };

  return (
    <section id="resume" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Resume
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            My professional journey and qualifications.
          </p>
          <button
            onClick={handleDownload}
            className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200"
          >
            <FaDownload className="mr-2" />
            Download Resume
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Experience */}
          <div className="animate-slide-in">
            <div className="flex items-center mb-6">
              <FaBriefcase className="text-primary-600 text-3xl mr-3" />
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                Experience
              </h3>
            </div>
            <div className="space-y-6">
              {experience.map((job, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {job.title}
                  </h4>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-primary-600 dark:text-primary-400 font-medium">
                      {job.company}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      {job.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {job.description.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="text-gray-600 dark:text-gray-400 flex items-start"
                      >
                        <span className="text-primary-600 mr-2">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="animate-slide-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center mb-6">
              <FaGraduationCap className="text-primary-600 text-3xl mr-3" />
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                Education
              </h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {edu.degree}
                  </h4>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-primary-600 dark:text-primary-400 font-medium">
                      {edu.school}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
