import { motion } from 'framer-motion';
import { Code2, Zap, Target } from 'lucide-react';

interface AboutProps {
  isDark: boolean;
}

export function About({ isDark }: AboutProps) {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const highlights = [
    {
      icon: Code2,
      title: 'Full Stack Development',
      description: 'Expert in building complete solutions from database design to responsive UI using .NET Core and Angular'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Improved API performance by 65% through Redis caching and SQL optimization, handling 3x user capacity'
    },
    {
      icon: Target,
      title: 'Cloud Architecture',
      description: 'Specialized in Azure services, cloud migration (Azure to GCP), and scalable microservices design'
    }
  ];

  return (
    <section id="about" className={`py-20 ${isDark ? 'bg-neutral-800/50' : 'bg-neutral-50'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-neutral-900'}`}>
            About Me
          </h2>
          <div className={`h-1 w-20 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto`}></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`p-8 rounded-2xl ${isDark ? 'bg-neutral-700/50' : 'bg-white'} border ${isDark ? 'border-neutral-600/50' : 'border-neutral-200'}`}
          >
            <p className={`text-lg leading-relaxed mb-6 ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>
              I'm a results-driven .NET Developer with 4.5+ years of experience designing and building scalable enterprise applications. My journey has been driven by a passion for crafting elegant solutions to complex problems.
            </p>
            <p className={`text-lg leading-relaxed mb-6 ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>
              I specialize in full-stack development, cloud architecture, and AI integration. Whether it's optimizing database queries, architecting microservices, or implementing intelligent search systems, I bring technical excellence and business acumen to every project.
            </p>
            <p className={`text-lg leading-relaxed ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>
              My goal is to build software that not only works flawlessly but also delivers measurable business value. I'm particularly passionate about cloud technologies, AI-driven solutions, and mentoring junior developers.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`p-6 rounded-xl transition-all duration-300 hover:translate-x-2 ${
                    isDark
                      ? 'bg-neutral-700/30 border border-neutral-600/30 hover:border-primary-500/50'
                      : 'bg-neutral-50 border border-neutral-200 hover:border-primary-400'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-3 rounded-lg bg-gradient-to-br from-primary-500/20 to-secondary-500/20">
                      <Icon size={24} className="text-primary-500" />
                    </div>
                    <div>
                      <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                        {highlight.title}
                      </h3>
                      <p className={`${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
