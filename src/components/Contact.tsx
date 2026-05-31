import { motion } from 'framer-motion';
import { Mail, Linkedin, Phone, MapPin } from 'lucide-react';

interface ContactProps {
  isDark: boolean;
}

export function Contact({ isDark }: ContactProps) {
  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      value: 'deepakparmar4264@gmail.com',
      href: 'mailto:deepakparmar4264@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: 'NA',
      href: 'NA'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Ahmedabad, Gujarat, India',
      href: '#'
    }
  ];

  const social = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/deepak-parmar-155993205',
      color: 'hover:text-blue-500'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:deepakparmar4264@gmail.com',
      color: 'hover:text-red-500'
    }
  ];

  return (
    <section id="contact" className={`py-20 ${isDark ? 'bg-neutral-900' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-neutral-900'}`}>
            Get in Touch
          </h2>
          <div className={`h-1 w-20 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto`}></div>
          <p className={`text-lg mt-6 ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.a
                key={index}
                href={contact.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className={`p-6 rounded-xl border transition-all ${
                  isDark
                    ? 'bg-neutral-800 border-neutral-700 hover:border-primary-500/50'
                    : 'bg-neutral-50 border-neutral-200 hover:border-primary-400'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary-500/20 to-secondary-500/20">
                    <Icon size={24} className="text-primary-500" />
                  </div>
                  <div>
                    <p className={`text-sm font-medium ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                      {contact.label}
                    </p>
                    <p className={`font-semibold break-all ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                      {contact.value}
                    </p>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`p-8 rounded-xl border flex flex-col justify-between max-w-2xl mx-auto ${
              isDark
                ? 'bg-neutral-800 border-neutral-700'
                : 'bg-neutral-50 border-neutral-200'
            }`}
          >
         <div>
  <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-neutral-900'}`}>
    Connect with me
  </h3>

  <p className={`text-lg mb-6 leading-relaxed ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
    I'm always interested in discussing new projects, innovative ideas, and development opportunities. Whether you have a question, a collaboration in mind, or simply want to connect, feel free to reach out.
  </p>

  <p className={`text-lg mb-8 leading-relaxed ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
    Let's build something great together. I'm always open to meaningful conversations about web development, technology, and creative solutions.
  </p>
</div>

            <div className="space-y-6">
              <div>
                <p className={`text-sm font-semibold mb-4 ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                  FOLLOW ME ON
                </p>
                <div className="flex gap-4">
                  {social.map((s, index) => {
                    const Icon = s.icon;
                    return (
                      <motion.a
                        key={index}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        className={`p-3 rounded-lg transition-all ${
                          isDark
                            ? 'bg-neutral-700 text-neutral-300 hover:bg-neutral-600'
                            : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300'
                        } ${s.color}`}
                      >
                        <Icon size={24} />
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              <div className={`p-4 rounded-lg ${isDark ? 'bg-primary-900/20 border border-primary-500/30' : 'bg-primary-50 border border-primary-200'}`}>
                <p className={`text-sm ${isDark ? 'text-primary-300' : 'text-primary-700'}`}>
                  Based in Ahmedabad, Gujarat. Open to relocation and remote opportunities worldwide.
                </p>
              </div>
            </div>
          </motion.div>
      </div>
    </section>
  );
}
