import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  ExternalLink,
  ChevronDown,
  Award,
  School,
  Briefcase,
  Code2,
  BrainCircuit,
  Database,
} from "lucide-react";

const App = () => {
  // Reusable Animation Components
  const SectionTitle = ({ children }) => (
    <motion.h2
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className='text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600'
    >
      {children}
    </motion.h2>
  );

  const BulletPoint = ({ children }) => (
    <li className='flex items-start gap-4 mb-3'>
      <div className='w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0' />
      <span className='text-gray-300'>{children}</span>
    </li>
  );

  // Timeline Item Component
  const TimelineItem = ({ date, title, company, bullets }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
      <div ref={ref} className='grid grid-cols-5 gap-8 mb-16 relative'>
        <div className='col-span-1 relative flex justify-center'>
          <div className='w-1 h-full bg-gradient-to-b from-blue-400 to-purple-600' />
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.4 }}
            className='absolute top-0 w-5 h-5 rounded-full bg-gradient-to-r from-blue-400 to-purple-600'
          />
        </div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className='col-span-4 bg-white/5 rounded-xl p-8 backdrop-blur-lg border border-white/10 relative overflow-hidden'
        >
          <div className='absolute inset-0 rounded-xl opacity-20 bg-gradient-to-r from-blue-400/30 to-purple-600/30' />
          <div className='relative z-10'>
            <div className='flex justify-between items-start mb-4'>
              <div>
                <span className='text-blue-400 text-sm font-mono'>{date}</span>
                <h3 className='text-2xl font-bold mt-2'>{title}</h3>
                <p className='text-purple-400 font-medium'>{company}</p>
              </div>
            </div>
            <ul className='mt-4'>
              {bullets.map((bullet, index) => (
                <BulletPoint key={index}>{bullet}</BulletPoint>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    );
  };

  return (
    <div className='bg-gradient-to-b from-gray-900 to-black text-white min-h-screen'>
      {/* Hero Section */}
      <section className='h-screen relative overflow-hidden'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(67,56,202,0.1)_0%,transparent_100%)]' />

        <div className='relative z-10 h-full flex flex-col items-center justify-center px-4'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className='text-center'
          >
            <h1 className='text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600'>
              Safal Bhandari
            </h1>
            <p className='text-xl md:text-2xl text-gray-300 mb-8'>
              Data Science & Machine Learning Engineer
            </p>
            <div className='flex flex-wrap justify-center gap-4'>
              {[
                {
                  icon: <Mail />,
                  text: "safalbhandari069@gmail.com",
                  href: "mailto:safalbhandari069@gmail.com",
                },
                {
                  icon: <Phone />,
                  text: "+91-7847915622",
                  href: "tel:+917847915622",
                },
                { icon: <Linkedin />, text: "LinkedIn", href: "#" },
                { icon: <Github />, text: "GitHub", href: "#" },
              ].map((link, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.05 }}
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

      {/* Experience Section */}
      <section className='py-20 relative px-4'>
        <div className='container mx-auto'>
          <SectionTitle>Professional Experience</SectionTitle>

          <div className='grid grid-cols-5'>
            <div className='col-span-1' />
            <div className='col-span-4'>
              <TimelineItem
                date='June 2024 - September 2024'
                title='Data Science and Machine Learning Intern'
                company='UNIIT Technology Pvt. Ltd'
                bullets={[
                  "Conducted comprehensive exploratory data analysis on customer data to uncover 3 key trends using K-Means clustering, PCA, and decision trees",
                  "Automated monthly reporting with Python/SQL, reducing manual workload by 30% using Logistic Regression, Random Forest, SVM, KNN",
                  "Deployed LLM-powered chatbot using Docker/Flask/REST APIs, reducing response times by 25%",
                ]}
              />

              <TimelineItem
                date='January 2025 - February 2025'
                title='Student Researcher'
                company='Eye Disease Classification Project'
                bullets={[
                  "Developed hybrid deep learning model (Swin Transformer + EfficientNet-B2) achieving 97% accuracy",
                  "Optimized architecture to 2B FLOPs with 4.89M parameters using residual blocks and window attention",
                  "Utilized TensorFlow and Keras preprocessing on dataset of 48,000 images",
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className='py-20 relative px-4 bg-gradient-to-b from-gray-900/50 to-black'>
        <div className='container mx-auto'>
          <SectionTitle>Projects</SectionTitle>

          <div className='grid md:grid-cols-2 gap-8'>
            {[
              {
                title: "FinFusion",
                link: "#",
                description:
                  "AI-Driven Fintech Platform for Smart Investment & Market Intelligence",
                bullets: [
                  "Integrated 5 APIs + social media scraping with Puppeteer/Selenium",
                  "Developed AI agents with Random Forest/LSTM models for 100+ companies",
                  "Created expense tracking module using K-Means clustering",
                ],
              },
              {
                title: "Plant Disease Detection",
                link: "#",
                description: "AI-Driven Solution for Plant Health Monitoring",
                bullets: [
                  "Achieved 97% accuracy using CNN/VGG/ResNet models",
                  "Trained on 18,345 images with advanced augmentation techniques",
                  "Deployed mobile app with U-Net segmentation and computer vision",
                ],
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='bg-white/5 rounded-2xl p-8 backdrop-blur-lg border border-white/10 relative overflow-hidden'
              >
                <div className='absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-600/10' />
                <div className='relative z-10'>
                  <div className='flex justify-between items-start mb-4'>
                    <h3 className='text-2xl font-bold'>{project.title}</h3>
                    <a
                      href={project.link}
                      className='text-blue-400 hover:text-blue-300'
                    >
                      <Github className='w-6 h-6' />
                    </a>
                  </div>
                  <p className='text-gray-300 mb-6'>{project.description}</p>
                  <ul>
                    {project.bullets.map((bullet, i) => (
                      <BulletPoint key={i}>{bullet}</BulletPoint>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className='py-20 relative px-4'>
        <div className='container mx-auto'>
          <SectionTitle>Technical Expertise</SectionTitle>

          <div className='grid md:grid-cols-3 gap-8'>
            {[
              {
                icon: <Code2 className='w-8 h-8 mb-4' />,
                title: "Programming & Frameworks",
                skills: [
                  "Python",
                  "FastAPI/Flask/Django",
                  "React Native",
                  "REST APIs",
                  "OOP/OOD",
                ],
              },
              {
                icon: <BrainCircuit className='w-8 h-8 mb-4' />,
                title: "AI/ML & Data Science",
                skills: [
                  "TensorFlow/PyTorch",
                  "NLP/Computer Vision",
                  "Pandas/NumPy",
                  "Scikit-Learn",
                  "LLM/LangChain",
                ],
              },
              {
                icon: <Database className='w-8 h-8 mb-4' />,
                title: "Data Engineering",
                skills: [
                  "ETL Pipelines",
                  "SQL/NoSQL",
                  "PySpark",
                  "A/B Testing",
                  "Time Series Analysis",
                ],
              },
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='bg-white/5 rounded-2xl p-8 backdrop-blur-lg border border-white/10'
              >
                <div className='text-blue-400'>{category.icon}</div>
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

      {/* Education & Achievements */}
      <section className='py-20 relative px-4 bg-gradient-to-b from-gray-900/50 to-black'>
        <div className='container mx-auto'>
          <div className='grid md:grid-cols-2 gap-8'>
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className='bg-white/5 rounded-2xl p-8 backdrop-blur-lg border border-white/10'
            >
              <div className='flex items-center gap-4 mb-6'>
                <School className='w-8 h-8 text-blue-400' />
                <h3 className='text-2xl font-bold'>Education</h3>
              </div>
              <h4 className='text-xl font-semibold'>Sharda University</h4>
              <p className='text-gray-300 mt-2'>
                B.Tech Computer Science (2023-2027)
              </p>
              <ul className='mt-4'>
                <BulletPoint>Cumulative CGPA: 9.258</BulletPoint>
                <BulletPoint>COMPEX Scholarship Recipient</BulletPoint>
              </ul>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className='bg-white/5 rounded-2xl p-8 backdrop-blur-lg border border-white/10'
            >
              <div className='flex items-center gap-4 mb-6'>
                <Award className='w-8 h-8 text-purple-400' />
                <h3 className='text-2xl font-bold'>Achievements</h3>
              </div>
              <ul>
                <BulletPoint>
                  NASA Space Apps Challenge 2024 Participant
                </BulletPoint>
                <BulletPoint>
                  IIIT Bangalore Synergy'24 Certification
                </BulletPoint>
                <BulletPoint>
                  4th Place - Technovation Hackathon 2024
                </BulletPoint>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='py-8 relative border-t border-white/10'>
        <div className='container mx-auto text-center text-gray-400'>
          <p>© 2024 Safal Bhandari. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
