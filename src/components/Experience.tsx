import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

interface ExperienceProps {
  isDark: boolean;
}

export function Experience({ isDark }: ExperienceProps) {
  const experiences = [
    {
      role: '.NET Developer / Software Engineer',
      company: 'Tecmantras',
      location: 'Ahmedabad, Gujarat',
      period: 'Feb 2025 – Present',
      highlights: [
        'Leading enterprise cloud migration (Azure to GCP) using lift-and-shift and modernization approaches',
        'Led PoCs for 20+ .NET applications migration covering readiness, risks, and effort estimates',
        'Containerized applications using Docker and deployed on GKE for improved scalability',
        'Developed scalable microservices-based ERP platform using .NET Core Web API and RabbitMQ',
        'Integrated Semantic Search with Azure AI Search and RAG pipeline for intelligent product lookup',
        'Improved API performance by 65% through Redis caching and SQL query optimization'
      ]
    },
    {
      role: 'Senior .NET Developer',
      company: 'Acty System India Pvt. Ltd.',
      location: 'Ahmedabad, Gujarat',
      period: 'Jun 2022 – Jan 2025',
      highlights: [
        'Developed ERP modules for web (Angular) and desktop (WPF) platforms',
        'Integrated QuickBooks API for financial workflow automation',
        'Built scalable modules using XPO ORM, CodeSmith, and MS SQL Server',
        'Optimized LINQ queries to efficiently handle large datasets in DevExpress controls',
        'Implemented MVVM architecture for maintainable desktop applications',
        'Collaborated with QA and business teams to deliver high-quality solutions'
      ]
    },
    {
      role: 'Associate Software Engineer',
      company: 'Squalo Infotech',
      location: 'Jaipur, Rajasthan',
      period: 'Nov 2021 – Jun 2022',
      highlights: [
        'Gained hands-on .NET development experience on web and desktop modules',
        'Worked on Java application backend logic and debugging',
        'Contributed to multiple projects across different business domains'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="experience" className={`py-20 ${isDark ? 'bg-neutral-800/50' : 'bg-neutral-50'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-neutral-900'}`}>
            Work Experience
          </h2>
          <div className={`h-1 w-20 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto`}></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative pl-6 pb-8 ${index !== experiences.length - 1 ? 'border-l-2' : ''} ${
                isDark ? 'border-primary-500/30' : 'border-primary-300'
              }`}
            >
              <div className={`absolute -left-4 top-0 w-6 h-6 rounded-full border-4 ${
                isDark ? 'bg-neutral-800 border-primary-500' : 'bg-white border-primary-500'
              }`}></div>

              <div className={`p-6 rounded-xl border transition-all duration-300 hover:shadow-lg ${
                isDark
                  ? 'bg-neutral-700/50 border-neutral-600/50 hover:border-primary-500/50'
                  : 'bg-white border-neutral-200 hover:border-primary-400'
              }`}>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm mb-4">
                      <div className="flex items-center gap-2">
                        <Briefcase size={16} className="text-primary-500" />
                        <span className={isDark ? 'text-neutral-300' : 'text-neutral-600'}>
                          {exp.company}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-primary-500" />
                        <span className={isDark ? 'text-neutral-300' : 'text-neutral-600'}>
                          {exp.location}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-primary-500" />
                        <span className={isDark ? 'text-neutral-300' : 'text-neutral-600'}>
                          {exp.period}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex gap-3">
                      <span className="text-primary-500 font-bold mt-1">•</span>
                      <span className={isDark ? 'text-neutral-300' : 'text-neutral-700'}>
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
