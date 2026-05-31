import { motion } from 'framer-motion';
import { Download, Mail, ArrowDown } from 'lucide-react';

interface HeroProps {
  isDark: boolean;
}

export function Hero({ isDark }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center pt-16 ${
        isDark ? 'bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-800' : 'bg-gradient-to-br from-neutral-50 via-white to-neutral-50'
      }`}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/3 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 ${isDark ? 'bg-primary-500' : 'bg-primary-300'}`}></div>
        <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 ${isDark ? 'bg-secondary-500' : 'bg-secondary-300'}`}></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <div className="flex justify-center mb-8">
            <div className={`w-40 h-40 rounded-full border-4 overflow-hidden flex items-center justify-center ${
              isDark ? 'border-primary-500 bg-gradient-to-br from-primary-500/20 to-secondary-500/20' : 'border-primary-400 bg-gradient-to-br from-primary-100 to-secondary-100'
            }`}>
              <img
                src="/1000223270.jpg"
                alt="Deepak Parmar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className={`text-5xl md:text-7xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-neutral-900'
          }`}
        >
          Deepak Parmar
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className={`text-2xl md:text-3xl font-semibold mb-6 bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent`}
        >
          .NET Developer | Full Stack Engineer | Cloud & AI Specialist
        </motion.p>

        <motion.p
          variants={itemVariants}
          className={`text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed ${
            isDark ? 'text-neutral-300' : 'text-neutral-600'
          }`}
        >
          Crafting scalable enterprise solutions with 4.5+ years of experience in .NET Core, Cloud Architecture, and AI Integration. Specialized in building high-performance APIs, modern responsive UI, and intelligent systems.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${
              isDark
                ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:shadow-lg hover:shadow-primary-500/50'
                : 'bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:shadow-lg hover:shadow-primary-400/50'
            }`}
          >
            <Mail size={20} className="mr-2" />
            Get in Touch
          </motion.a>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://software-engineer-po-9a5p.bolt.host/resume.pdf', '_blank')}
            className={`inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold border-2 transition-all duration-300 ${
              isDark
                ? 'border-primary-500 text-primary-400 hover:bg-primary-500/10'
                : 'border-primary-500 text-primary-600 hover:bg-primary-50'
            }`}
          >
            <Download size={20} className="mr-2" />
            Download Resume
          </motion.button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex gap-6 justify-center text-sm"
        >
          <a href="mailto:deepakparmar4264@gmail.com" className={`transition-colors ${isDark ? 'text-neutral-400 hover:text-primary-400' : 'text-neutral-600 hover:text-primary-600'}`}>
            deepakparmar4264@gmail.com
          </a>
          {/* <a href="tel:+919079684264" className={`transition-colors ${isDark ? 'text-neutral-400 hover:text-primary-400' : 'text-neutral-600 hover:text-primary-600'}`}>
            +91-9079684264
          </a> */}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16"
        >
          <motion.button
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className={`p-2 rounded-full ${isDark ? 'hover:bg-neutral-800' : 'hover:bg-neutral-100'} transition-colors`}
          >
            <ArrowDown size={24} className={isDark ? 'text-primary-400' : 'text-primary-600'} />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
