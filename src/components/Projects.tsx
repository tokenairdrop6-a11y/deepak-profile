import { motion } from 'framer-motion';

interface ProjectsProps {
  isDark: boolean;
}

export function Projects({ isDark }: ProjectsProps) {
  const projects = [
    {
      title: 'ERP Platform - Clothing Sector',
      description: 'Scalable microservices-based ERP platform with intelligent search capabilities and high-volume background job processing.',
      technologies: ['.NET Core', 'Web API', 'Angular', 'Azure AI Search', 'RabbitMQ', 'Hangfire', 'Redis', 'SQL Server'],
      highlights: [
        'Improved API performance by 65% with caching and optimization',
        'Integrated Semantic Search with RAG pipeline',
        'Increased user capacity 3x through optimization'
      ]
    },
    {
      title: 'Cloud Migration: Azure to GCP',
      description: 'Enterprise-scale cloud migration project covering 20+ .NET applications with comprehensive assessment and modernization.',
      technologies: ['Azure', 'GCP', 'Docker', 'Kubernetes', 'Cloud SQL', 'DevOps'],
      highlights: [
        'Led PoCs for key migration paths',
        'Prepared detailed assessment reports for 20+ applications',
        'Containerized and deployed on GKE'
      ]
    },
    {
      title: 'Financial Integration System',
      description: 'Secure third-party payment API integration with QuickBooks for automated financial workflows and operations.',
      technologies: ['C#', '.NET Core', 'Web API', 'QuickBooks API', 'SQL Server', 'Azure'],
      highlights: [
        'Automated financial workflow processing',
        'Improved operational efficiency significantly',
        'Built with enterprise-grade security'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className={`py-20 ${isDark ? 'bg-neutral-900' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-neutral-900'}`}>
            Key Projects
          </h2>
          <div className={`h-1 w-20 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto`}></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className={`flex flex-col rounded-xl overflow-hidden border transition-all duration-300 ${
                isDark
                  ? 'bg-neutral-800 border-neutral-700 hover:border-primary-500/50'
                  : 'bg-neutral-50 border-neutral-200 hover:border-primary-400'
              }`}
            >
              <div className={`h-40 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 border-b ${
                isDark ? 'border-neutral-700' : 'border-neutral-200'
              } flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-secondary-500"></div>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                  {project.title}
                </h3>

                <p className={`text-sm mb-4 flex-1 ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                  {project.description}
                </p>

                <div className="mb-4">
                  <p className={`text-xs font-semibold mb-2 ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                    HIGHLIGHTS
                  </p>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className={`text-xs flex gap-2 ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                        <span className="text-primary-500">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, tIndex) => (
                      <span
                        key={tIndex}
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          isDark
                            ? 'bg-primary-900/30 text-primary-300 border border-primary-700/50'
                            : 'bg-primary-100 text-primary-700 border border-primary-300'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
