import { motion } from 'framer-motion';

interface SkillsProps {
  isDark: boolean;
}

export function Skills({ isDark }: SkillsProps) {
  const skillCategories = [
  {
    title: 'Backend Development',
    skills: [
      'C#',
      '.NET Core',
      'ASP.NET MVC',
      'Web API',
      'LINQ',
      'WPF'
    ]
  },
  {
    title: 'Frontend Development',
    skills: [
      'Angular 19',
      'JavaScript',
      'HTML5',
      'CSS3'
    ]
  },
  {
    title: 'AI & Machine Learning',
    skills: [
      'ML.NET',
      'Azure AI Search',
      'Semantic Search',
      'RAG',
      'LLM Integration',
      'AI Agents',
      'Predictive Modeling'
    ]
  },
  {
    title: 'Databases & Data Access',
    skills: [
      'SQL Server',
      'Azure SQL',
      'Azure Cosmos DB',
      'Entity Framework',
      'Dapper',
      'XPO ORM'
    ]
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      'Microsoft Azure',
      'Azure App Services',
      'Azure Functions',
      'Azure Blob Storage',
      'Azure Monitor',
      'Application Insights',
      'Google Cloud Platform',
      'App Engine',
      'Cloud Run',
      'Docker',
      'Kubernetes',
      'AKS',
      'GKE',
      'CI/CD',
      'Azure DevOps'
    ]
  },
  {
    title: 'Architecture & Design Patterns',
    skills: [
      'Microservices',
      'RESTful APIs',
      'Clean Architecture',
      'N-Tier Architecture',
      'Repository Pattern',
      'Dependency Injection',
      'Singleton Pattern',
      'MVC',
      'MVVM'
    ]
  },
  {
    title: 'Messaging & Background Processing',
    skills: [
      'RabbitMQ',
      'Azure Service Bus',
      'Hangfire'
    ]
  },
  {
    title: 'Tools & Testing',
    skills: [
      'Git',
      'Postman',
      'Swagger/OpenAPI',
      'JMeter',
      'Jira',
      'Azure DevOps Boards',
      'DevExpress'
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className={`py-20 ${isDark ? 'bg-neutral-900' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-neutral-900'}`}>
            Skills & Expertise
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
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`p-6 rounded-xl border transition-all duration-300 hover:translate-y-[-4px] ${
                isDark
                  ? 'bg-neutral-800 border-neutral-700 hover:border-primary-500/50 hover:shadow-lg hover:shadow-primary-500/10'
                  : 'bg-neutral-50 border-neutral-200 hover:border-primary-400 hover:shadow-lg hover:shadow-primary-500/10'
              }`}
            >
              <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    whileHover={{ scale: 1.05 }}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      isDark
                        ? 'bg-gradient-to-r from-primary-900/50 to-secondary-900/50 text-primary-300 border border-primary-700/50 hover:border-primary-500'
                        : 'bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 border border-primary-300/50 hover:border-primary-500'
                    }`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
