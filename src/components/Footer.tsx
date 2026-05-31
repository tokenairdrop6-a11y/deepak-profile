import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

interface FooterProps {
  isDark: boolean;
}

export function Footer({ isDark }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
  ];

  const resources = [
    { label: 'Resume', href: '#' },
    { label: 'Portfolio', href: '#projects' },
    { label: 'Blog', href: '#' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className={`${isDark ? 'bg-neutral-900 border-neutral-800' : 'bg-neutral-900 border-neutral-800'} border-t`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent mb-4">
              DP
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Full-stack developer crafting scalable solutions with modern technologies and best practices.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-neutral-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-neutral-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://linkedin.com/in/deepak-parmar-155993205"
                  className="text-neutral-400 hover:text-primary-400 transition-colors text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:deepakparmar4264@gmail.com"
                  className="text-neutral-400 hover:text-primary-400 transition-colors text-sm"
                >
                  Email
                </a>
              </li>
              {/* <li>
                <a
                  href="tel:+919079684264"
                  className="text-neutral-400 hover:text-primary-400 transition-colors text-sm"
                >
                  Phone
                </a>
              </li> */}
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-neutral-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-neutral-400 text-sm">
            <p className="flex items-center gap-1">
              Made with <Heart size={16} className="text-primary-500" /> by Deepak Parmar
            </p>
            <p>© {currentYear} Deepak Parmar. All rights reserved.</p>
            <p className="text-xs text-neutral-500">
              Designed & Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
