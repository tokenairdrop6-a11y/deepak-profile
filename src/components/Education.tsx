import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

interface EducationProps {
  isDark: boolean;
}

export function Education({ isDark }: EducationProps) {
  const educationList = [
    {
      degree: 'Bachelor of Technology — Computer Science & Engineering',
      institution: 'Compucom Institute of Technology & Management',
      location: 'Jaipur, Rajasthan',
      year: '2022',
      cgpa: '8.56 / 10',
      period: '2018 - 2022'
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Noble School Falna',
      location: 'Pali, Rajasthan',
      year: '2018',
      cgpa: '72.80%',
      period: '04/2017 - 03/2018'
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      institution: 'Chirag Vidyalay & Junior College',
      location: 'Mumbai, Maharashtra',
      year: '2016',
      cgpa: '78.60%',
      period: '06/2015 - 03/2016'
    }
  ];

  const achievements = [
    'Improved API performance by 65% through Redis caching and SQL optimization',
    'Delivered migration assessment reports for 20+ enterprise .NET applications',
    'Integrated Semantic Search (Azure AI Search + RAG) into ERP platform',
    'Contributed to ERP platforms used by hundreds of users across clothing sector'
  ];

  return (
    <section id="education" className={`py-20 ${isDark ? 'bg-neutral-800/50' : 'bg-neutral-50'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-neutral-900'}`}>
            Education & Achievements
          </h2>
          <div className={`h-1 w-20 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto`}></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className={`text-2xl font-bold mb-6 flex items-center gap-3 ${isDark ? 'text-white' : 'text-neutral-900'}`}>
              <GraduationCap className="text-primary-500" size={28} />
              Education
            </h3>

            <div className="space-y-4">
              {educationList.map((edu, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -2 }}
                  className={`p-4 rounded-lg border transition-all ${
                    isDark
                      ? 'bg-neutral-700/30 border-neutral-600/30 hover:border-primary-500/50'
                      : 'bg-neutral-50 border-neutral-200 hover:border-primary-400'
                  }`}
                >
                  <h4 className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                    {edu.degree}
                  </h4>
                  <p className={`text-sm font-medium mb-1 ${isDark ? 'text-primary-400' : 'text-primary-600'}`}>
                    {edu.institution}
                  </p>
                  <div className="flex justify-between text-xs">
                    <span className={isDark ? 'text-neutral-400' : 'text-neutral-600'}>
                      {edu.location}
                    </span>
                    <span className={`font-semibold ${isDark ? 'text-primary-400' : 'text-primary-600'}`}>
                      {edu.cgpa}
                    </span>
                  </div>
                  <p className={`text-xs mt-2 ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                    {edu.period}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`p-8 rounded-xl border ${
              isDark
                ? 'bg-neutral-700/50 border-neutral-600/50'
                : 'bg-white border-neutral-200'
            }`}
          >
            <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-neutral-900'}`}>
              Key Achievements
            </h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 4 }}
                  className="flex gap-3"
                >
                  <span className="text-primary-500 font-bold mt-1 flex-shrink-0">✓</span>
                  <p className={isDark ? 'text-neutral-300' : 'text-neutral-700'}>
                    {achievement}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
