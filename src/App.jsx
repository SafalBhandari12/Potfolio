import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  ExternalLink,
  ChevronDown,
  Camera,
} from "lucide-react";

const App = () => {
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Timeline Item Component
  const TimelineItem = ({ date, title, company, description, isLeft }) => (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`flex w-full ${isLeft ? "justify-start" : "justify-end"} mb-8`}
    >
      <div
        className={`w-5/12 relative ${
          isLeft ? "text-right pr-8" : "text-left pl-8"
        }`}
      >
        <div
          className={`absolute ${
            isLeft ? "right-0" : "left-0"
          } top-0 w-2 h-full bg-gradient-to-b from-blue-400 to-purple-600`}
        />
        <motion.div
          whileHover={{ scale: 1.05 }}
          className='bg-white/5 rounded-2xl p-6 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all'
        >
          <span className='text-blue-400 text-sm'>{date}</span>
          <h3 className='text-2xl font-bold mt-2'>{title}</h3>
          <p className='text-purple-400 mt-1'>{company}</p>
          <p className='text-gray-300 mt-4'>{description}</p>
        </motion.div>
      </div>
    </motion.div>
  );

  return (
    <div
      className='bg-gradient-to-b from-gray-900 to-black text-white min-h-screen'
      ref={containerRef}
    >
      {/* Hero Section */}
      <section className='h-screen relative overflow-hidden'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(67,56,202,0.1)_0%,transparent_100%)]' />

        <div className='relative z-10 h-full flex flex-col items-center justify-center'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className='text-center'
          >
            <h1 className='text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600'>
              Safal Bhandari
            </h1>
            <p className='text-2xl text-gray-300 mb-8'>
              Data Science & Machine Learning Engineer
            </p>
            <div className='flex justify-center space-x-6'>
              {[
                {
                  icon: <Mail className='w-5 h-5' />,
                  text: "Email",
                  href: "mailto:safalbhandari069@gmail.com",
                },
                {
                  icon: <Phone className='w-5 h-5' />,
                  text: "Call",
                  href: "tel:+917847915622",
                },
                {
                  icon: <Linkedin className='w-5 h-5' />,
                  text: "LinkedIn",
                  href: "#",
                },
                {
                  icon: <Github className='w-5 h-5' />,
                  text: "GitHub",
                  href: "#",
                },
              ].map((link, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href={link.href}
                  className='flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all'
                >
                  {link.icon} {link.text}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className='absolute bottom-10 left-1/2 transform -translate-x-1/2'
          >
            <ChevronDown className='w-10 h-10 text-white/50' />
          </motion.div>
        </div>
      </section>

      {/* Experience Timeline Section */}
      <section className='py-20 relative'>
        <div className='absolute inset-0 bg-gradient-to-b from-blue-900/20 to-purple-900/20' />

        <div className='container mx-auto px-4 relative'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className='text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600'
          >
            Professional Journey
          </motion.h2>

          <div className='relative'>
            <div className='absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 to-purple-600' />

            <TimelineItem
              date='June 2024 - September 2024'
              title='Data Science and Machine Learning Intern'
              company='UNIIT Technology Pvt. Ltd'
              description='Conducted comprehensive exploratory data analysis and implemented ML models, reducing manual workload by 30%.'
              isLeft={true}
            />

            <TimelineItem
              date='January 2025 - February 2025'
              title='Student Researcher'
              company='Eye Disease Classification Project'
              description='Led research initiative achieving 97% classification accuracy using hybrid deep learning model.'
              isLeft={false}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className='py-20 relative'>
        <div className='container mx-auto px-4'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className='text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600'
          >
            Featured Projects
          </motion.h2>

          <div className='grid md:grid-cols-2 gap-8'>
            {[
              {
                title: "FinFusion",
                description:
                  "AI-Driven Fintech Platform for Smart Investment & Market Intelligence",
                tags: ["AI", "Fintech", "Machine Learning"],
                details:
                  "Developed AI-powered SaaS platform integrating multiple data sources",
              },
              {
                title: "Plant Disease Detection",
                description: "AI-Driven Solution for Plant Health Monitoring",
                tags: ["Computer Vision", "Deep Learning", "Mobile App"],
                details:
                  "Developed AI-powered crop disease detection system with 97% accuracy",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className='bg-white/5 rounded-2xl p-8 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all group'
              >
                <div className='flex justify-between items-start mb-4'>
                  <h3 className='text-3xl font-bold'>{project.title}</h3>
                  <motion.a
                    whileHover={{ scale: 1.2 }}
                    href='#'
                    className='text-blue-400 hover:text-blue-300'
                  >
                    <ExternalLink className='w-6 h-6' />
                  </motion.a>
                </div>
                <p className='text-gray-300 mb-6'>{project.description}</p>
                <div className='flex flex-wrap gap-2 mb-6'>
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className='px-3 py-1 bg-blue-900/30 rounded-full text-sm'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className='text-gray-300'>{project.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className='py-20 relative bg-gradient-to-b from-gray-900/50 to-black'>
        <div className='container mx-auto px-4'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className='text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600'
          >
            Skills & Expertise
          </motion.h2>

          <div className='grid md:grid-cols-3 gap-8'>
            {[
              {
                title: "Programming Languages & Frameworks",
                skills: [
                  "Python",
                  "FastAPI",
                  "Flask",
                  "Django",
                  "React Native",
                ],
              },
              {
                title: "AI & Machine Learning",
                skills: ["TensorFlow", "PyTorch", "NLP", "CNN", "LLM"],
              },
              {
                title: "Data Science & Tools",
                skills: ["ETL", "Statistics", "MongoDB", "PostgreSQL", "Git"],
              },
            ].map((category, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className='bg-white/5 rounded-2xl p-8 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all'
              >
                <h3 className='text-2xl font-bold mb-6'>{category.title}</h3>
                <div className='flex flex-wrap gap-2'>
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className='px-3 py-1 bg-blue-900/30 rounded-full text-sm'
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className='py-20 relative'>
        <div className='container mx-auto px-4'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className='text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600'
          >
            Education
          </motion.h2>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className='bg-white/5 rounded-2xl p-8 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all max-w-2xl mx-auto'
          >
            <h3 className='text-3xl font-bold mb-4'>Sharda University</h3>
            <p className='text-blue-400 mb-6'>
              B.Tech in Computer Science and Engineering | 2023-2027
            </p>
            <div className='space-y-4'>
              <div className='flex items-center gap-4'>
                <div className='w-2 h-2 rounded-full bg-blue-400' />
                <p className='text-gray-300'>Cumulative CGPA: 9.258</p>
              </div>
              <div className='flex items-center gap-4'>
                <div className='w-2 h-2 rounded-full bg-blue-400' />
                <p className='text-gray-300'>COMPEX Scholarship recipient</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className='py-8 relative'>
        <div className='absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent' />
        <div className='relative text-center text-gray-400'>
          <p>© 2024 Safal Bhandari. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
