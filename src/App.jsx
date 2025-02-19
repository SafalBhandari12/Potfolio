import React, { useState, useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  ChevronDown,
  Award,
  School,
  Code2,
  BrainCircuit,
  Database,
  Link,
  FileText,
  Briefcase,
  BookOpen,
  Cpu,
  Terminal,
} from "lucide-react";

// Custom 3D Card Component
const Card3D = ({ children, className }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * 8;
    const rotateX = -((e.clientY - centerY) / (rect.height / 2)) * 8;
    setRotation({ x: rotateX, y: rotateY });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
        setRotation({ x: 0, y: 0 });
      }}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        transition: "transform 0.1s ease",
      }}
      className={`transform-gpu ${className}`}
    >
      <div
        className={`h-full w-full transition-all duration-200 ${
          hover ? "shadow-xl" : "shadow-md"
        }`}
      >
        {children}
      </div>
    </motion.div>
  );
};

// Animated Section Header
const SectionHeader = ({ title }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <motion.h2
      ref={ref}
      initial='hidden'
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      className='text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600'
    >
      {title}
    </motion.h2>
  );
};

// Hero Section
const HeroSection = () => {
  return (
    <section className='min-h-screen relative overflow-hidden bg-gradient-to-b from-gray-900 to-black'>
      {/* Background Elements */}
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(67,56,202,0.1)_0%,transparent_100%)]' />
      <div className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent' />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNTkuNSA2MEgwbDYwLTYwVjYwek0wIDB2NjBMNjAgMEgweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDEwMCwgMTAwLCAyNTUsIDAuMDMpIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvc3ZnPg==')] opacity-20" />

      <div className='relative z-10 container mx-auto h-full flex flex-col lg:flex-row items-center justify-center px-4 pt-20 gap-16'>
        {/* Profile Card */}
        <Card3D className='w-full lg:w-1/2 max-w-xl bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-3xl border border-gray-700 shadow-2xl overflow-hidden'>
          <div className='p-8 space-y-8 backdrop-blur-sm'>
            {/* Avatar and Basic Info */}
            <div className='flex flex-col items-center space-y-6'>
              <div className='relative w-36 h-36'>
                {/* Animated Glow Effect */}
                <div className='absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-pulse opacity-70 blur-md' />
                <div className='absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full' />
                <div className='absolute inset-1 rounded-full bg-gray-900 flex items-center justify-center overflow-hidden'>
                  <span className='text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 font-bold'>
                    SB
                  </span>
                </div>
              </div>

              <div className='text-center space-y-2'>
                <h1 className='text-4xl font-bold text-white'>
                  Safal Bhandari
                </h1>
                <p className='text-xl text-blue-400 font-medium'>
                  Data Science & ML Engineer
                </p>
                <p className='text-gray-300 max-w-md mx-auto'>
                  Specializing in predictive analytics, intelligent system
                  design, and AI-powered solutions
                </p>
              </div>
            </div>

            {/* Contact & Social Links */}
            <div className='grid grid-cols-2 gap-4'>
              {[
                {
                  icon: <Mail className='h-5 w-5' />,
                  label: "safalbhandari069@gmail.com",
                  href: "mailto:safalbhandari069@gmail.com",
                },
                {
                  icon: <Phone className='h-5 w-5' />,
                  label: "+91 78479 15622",
                  href: "tel:+917847915622",
                },
                {
                  icon: <Linkedin className='h-5 w-5' />,
                  label: "LinkedIn",
                  href: "https://linkedin.com/in/safalbhandari",
                },
                {
                  icon: <Github className='h-5 w-5' />,
                  label: "GitHub",
                  href: "https://github.com/safalbhandari",
                },
                {
                  icon: <FileText className='h-5 w-5' />,
                  label: "Resume",
                  href: "#",
                },
                {
                  icon: <Link className='h-5 w-5' />,
                  label: "Portfolio",
                  href: "#",
                },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href={item.href}
                  className='flex items-center gap-3 p-3 bg-white/5 rounded-xl hover:bg-gradient-to-r hover:from-blue-900/30 hover:to-purple-900/30 transition-all group'
                >
                  <div className='text-blue-400 group-hover:text-blue-300 transition-colors'>
                    {item.icon}
                  </div>
                  <span className='text-sm sm:text-base truncate'>
                    {item.label}
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Key Skills Section */}
            <div className='space-y-4'>
              <h3 className='text-xl font-semibold text-white/90'>
                Core Technologies
              </h3>
              <div className='flex flex-wrap gap-2'>
                {[
                  "Python",
                  "TensorFlow",
                  "PyTorch",
                  "NLP",
                  "CNN",
                  "FastAPI",
                  "React",
                  "SQL",
                  "LLM",
                  "AWS",
                ].map((skill, i) => (
                  <span
                    key={i}
                    className='px-3 py-1 bg-blue-900/30 rounded-full text-sm font-medium'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Card3D>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className='lg:w-1/2 space-y-8'
        >
          <div className='space-y-6'>
            <div className='space-y-2'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h2 className='text-5xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 leading-tight'>
                  Transforming Data <br />
                  <span className='text-white'>Into Intelligence</span>
                </h2>
              </motion.div>
              <p className='text-xl text-gray-300 max-w-xl'>
                Building cutting-edge AI solutions for complex problems through
                innovative machine learning approaches and data-driven insights.
              </p>
            </div>

            {/* Highlights */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {[
                {
                  icon: <BrainCircuit className='h-8 w-8 text-blue-400' />,
                  title: "ML Expertise",
                  description:
                    "Developed models with 97% accuracy for eye disease classification",
                },
                {
                  icon: <Cpu className='h-8 w-8 text-purple-400' />,
                  title: "AI Solutions",
                  description:
                    "Deployed LLM-powered chatbots reducing response times by 25%",
                },
                {
                  icon: <Database className='h-8 w-8 text-blue-400' />,
                  title: "Data Analytics",
                  description:
                    "Implemented clustering models for effective customer segmentation",
                },
                {
                  icon: <Terminal className='h-8 w-8 text-purple-400' />,
                  title: "Full Stack",
                  description:
                    "Built end-to-end solutions with Python, FastAPI, React, and AWS",
                },
              ].map((item, index) => (
                <Card3D
                  key={index}
                  className='bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-5'
                >
                  <div className='space-y-3'>
                    <div>{item.icon}</div>
                    <h3 className='text-lg font-semibold'>{item.title}</h3>
                    <p className='text-sm text-gray-400'>{item.description}</p>
                  </div>
                </Card3D>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className='bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6'>
            <div className='flex items-center gap-4 mb-4'>
              <School className='h-6 w-6 text-blue-400' />
              <h3 className='text-xl font-semibold'>Education</h3>
            </div>
            <div className='space-y-2'>
              <h4 className='font-medium'>
                Sharda University, Greater Noida, India
              </h4>
              <div className='flex justify-between text-sm'>
                <p>B.Tech in Computer Science and Engineering</p>
                <p className='text-gray-400'>2023-2027</p>
              </div>
              <p className='text-blue-400 text-sm'>
                CGPA: 9.258 | COMPEX Scholarship Recipient
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        className='absolute bottom-8 left-1/2 -translate-x-1/2'
      >
        <ChevronDown className='w-10 h-10 text-white/50' />
      </motion.div>
    </section>
  );
};

const ExperienceSection = () => {
  const experiences = [
    {
      company: "UNIIT Technology Pvt. Ltd",
      role: "Data Science & ML Intern",
      period: "Jun 2024 - Sep 2024",
      icon: <Briefcase className='h-8 w-8 text-blue-400' />,
      highlights: [
        "Conducted comprehensive EDA on customer data to uncover 3 key trends and insights",
        "Utilized K-Means clustering, PCA, and decision trees for effective segmentation strategies",
        "Automated monthly reporting with Python and SQL, reducing manual workload by 30%",
        "Deployed supervised learning models enhancing predictive accuracy by 15%",
        "Integrated an LLM-powered chatbot using Docker, Flask, and REST APIs",
      ],
    },
    {
      company: "Eye Disease Classification",
      role: "Student Researcher",
      period: "Jan 2025 - Feb 2025",
      icon: <BookOpen className='h-8 w-8 text-purple-400' />,
      highlights: [
        "Led research initiative under Prof. Ruqaiya Khanam for classifying 12 eye diseases",
        "Integrated Swin Transformer Tiny with EfficientNet-B2 for hybrid model architecture",
        "Designed optimized architecture with residual blocks and window attention",
        "Reduced computational complexity to ~2B FLOPs while achieving 97% classification accuracy",
        "Processed dataset of 48,000 medical images using advanced TensorFlow techniques",
      ],
    },
  ];

  return (
    <section className='py-20 bg-gradient-to-b from-black to-gray-900 relative'>
      {/* 3D Geometric Shapes */}
      <div className='absolute hidden lg:block top-1/4 -left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl' />
      <div className='absolute hidden lg:block bottom-1/4 -right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl' />

      <div className='container mx-auto px-4 relative z-10'>
        <SectionHeader title='Professional Experience' />

        <div className='grid lg:grid-cols-2 gap-10'>
          {experiences.map((exp, index) => (
            <Card3D
              key={index}
              className='bg-gray-800/50 rounded-2xl backdrop-blur-lg border border-gray-700 hover:border-blue-400/50 transition-all overflow-hidden'
            >
              <div className='p-8 space-y-6'>
                <div className='flex justify-between items-start'>
                  <div className='flex gap-4'>
                    <div className='mt-1'>{exp.icon}</div>
                    <div>
                      <h3 className='text-2xl font-bold'>{exp.company}</h3>
                      <p className='text-blue-400 mt-1'>{exp.role}</p>
                    </div>
                  </div>
                  <span className='text-gray-400 text-sm py-1 px-3 bg-gray-800 rounded-full'>
                    {exp.period}
                  </span>
                </div>

                <ul className='space-y-4'>
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className='flex items-start gap-3'>
                      <div className='min-w-2 h-2 rounded-full bg-blue-400 mt-2' />
                      <p className='text-gray-300 text-sm lg:text-base'>
                        {highlight}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </Card3D>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectSection = () => {
  const projects = [
    {
      title: "FinFusion AI Platform",
      description:
        "AI-driven fintech solution for market intelligence and smart investment",
      icon: <Code2 className='h-6 w-6' />,
      details:
        "Integrated web scraping with sentiment analysis using VADER and BERT. Processed data from 5 integrated APIs along with trending posts from Twitter and Reddit. Engineered AI agents for portfolio risk assessment and industry trend prediction.",
      tech: ["Python", "TensorFlow", "React", "AWS", "BERT", "LSTM"],
      link: "#",
    },
    {
      title: "Plant Disease Detection",
      description: "Computer vision system for agricultural health monitoring",
      icon: <BrainCircuit className='h-6 w-6' />,
      details:
        "Developed AI-powered crop disease detection using advanced deep learning models including CNN, VGG16, VGG-19, Inception-v3, ResNet-50, and EfficientNet, achieving 97% accuracy. Trained on 18,345 images and validated on 4,585 images.",
      tech: ["PyTorch", "OpenCV", "Flask", "Docker", "ResNet", "U-Net"],
      link: "#",
    },
  ];

  return (
    <section className='py-20 bg-gray-900 relative'>
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyIiBjeT0iMiIgcj0iMiIgZmlsbD0icmdiYSg3OSwgNzAsIDIyOSwgMC4xKSIvPjwvc3ZnPg==')] opacity-30" />

      <div className='container mx-auto px-4 relative z-10'>
        <SectionHeader title='Featured Projects' />

        <div className='grid lg:grid-cols-2 gap-10'>
          {projects.map((project, index) => (
            <Card3D
              key={index}
              className='bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl backdrop-blur-lg border border-gray-700 hover:border-purple-400/50 transition-all overflow-hidden'
            >
              <div className='p-8 h-full flex flex-col'>
                <div className='flex justify-between items-start mb-6'>
                  <div className='flex items-center gap-3'>
                    <div className='p-2 bg-purple-900/30 rounded-lg text-purple-400'>
                      {project.icon}
                    </div>
                    <div>
                      <h3 className='text-2xl font-bold'>{project.title}</h3>
                      <p className='text-gray-400 mt-1'>
                        {project.description}
                      </p>
                    </div>
                  </div>
                  <a
                    href={project.link}
                    className='text-blue-400 hover:text-blue-300 transition-colors'
                  >
                    <Github className='w-6 h-6' />
                  </a>
                </div>

                <p className='text-gray-300 text-sm mb-6 flex-grow'>
                  {project.details}
                </p>

                <div className='flex flex-wrap gap-2 mt-auto'>
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className='px-3 py-1 bg-purple-900/20 rounded-full text-sm'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card3D>
          ))}
        </div>
      </div>
    </section>
  );
};

const AchievementsSection = () => {
  const achievements = [
    {
      title: "NASA Space Apps Challenge 2024",
      description:
        "Collaborated on tech-driven solutions for space and Earth sciences, enhancing problem-solving skills.",
      icon: <Award className='h-6 w-6 text-yellow-400' />,
    },
    {
      title: "IIIT Bangalore Certification",
      description:
        "Earned IIIT Bangalore certification for Synergy'24, recognizing technical expertise and dedication.",
      icon: <School className='h-6 w-6 text-blue-400' />,
    },
    {
      title: "4th Place - Technovation Hackathon",
      description:
        "Secured 4th place in the 6th Technovation Hackathon at Sharda University, showcasing strong analytical abilities.",
      icon: <Trophy className='h-6 w-6 text-purple-400' />,
    },
  ];

  return (
    <section className='py-16 bg-black'>
      <div className='container mx-auto px-4'>
        <SectionHeader title='Achievements & Certifications' />

        <div className='grid md:grid-cols-3 gap-6'>
          {achievements.map((item, index) => (
            <Card3D
              key={index}
              className='bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 h-full'
            >
              <div className='flex flex-col h-full'>
                <div className='mb-4'>{item.icon}</div>
                <h3 className='text-xl font-semibold mb-3'>{item.title}</h3>
                <p className='text-gray-400 text-sm'>{item.description}</p>
              </div>
            </Card3D>
          ))}
        </div>
      </div>
    </section>
  );
};

// Trophy Icon Component
const Trophy = ({ className }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className={className}
  >
    <path d='M6 9H4.5a2.5 2.5 0 0 1 0-5H6' />
    <path d='M18 9h1.5a2.5 2.5 0 0 0 0-5H18' />
    <path d='M4 22h16' />
    <path d='M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22' />
    <path d='M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22' />
    <path d='M18 2H6v7a6 6 0 0 0 12 0V2Z' />
  </svg>
);

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming & Frameworks",
      skills: ["Python", "FastAPI", "Flask", "Django", "React Native"],
    },
    {
      title: "AI & Machine Learning",
      skills: [
        "TensorFlow",
        "PyTorch",
        "NLP",
        "CNN",
        "LLM",
        "Ollama",
        "LangChain",
        "Scikit-Learn",
      ],
    },
    {
      title: "Data Science Stack",
      skills: [
        "Pandas",
        "NumPy",
        "SciPy",
        "Jupyter",
        "Matplotlib",
        "Seaborn",
        "PySpark",
      ],
    },
    {
      title: "Databases & Infrastructure",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "AWS", "Docker", "Git"],
    },
  ];

  return (
    <section className='py-16 bg-gradient-to-b from-gray-900 to-black'>
      <div className='container mx-auto px-4'>
        <SectionHeader title='Technical Expertise' />

        <div className='grid md:grid-cols-2 gap-8'>
          {skillCategories.map((category, i) => (
            <Card3D
              key={i}
              className='bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-xl p-6'
            >
              <h3 className='text-xl font-semibold text-blue-400 mb-4'>
                {category.title}
              </h3>
              <div className='flex flex-wrap gap-2'>
                {category.skills.map((skill, j) => (
                  <span
                    key={j}
                    className='px-3 py-1 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-full text-sm'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card3D>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section className='py-16 bg-black relative'>
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(67,56,202,0.05)_0%,transparent_70%)]' />

      <div className='container mx-auto px-4 relative z-10'>
        <SectionHeader title='Get In Touch' />

        <Card3D className='max-w-2xl mx-auto bg-gray-900/50 backdrop-blur-md border border-gray-700 rounded-2xl p-8'>
          <div className='grid md:grid-cols-2 gap-6'>
            <div className='space-y-6'>
              <h3 className='text-2xl font-bold'>Contact Information</h3>
              <p className='text-gray-400'>
                Feel free to reach out for collaborations, opportunities, or
                just to say hello!
              </p>

              <div className='space-y-4'>
                {[
                  {
                    icon: <Mail className='h-5 w-5' />,
                    text: "safalbhandari069@gmail.com",
                  },
                  {
                    icon: <Phone className='h-5 w-5' />,
                    text: "+91 78479 15622",
                  },
                  {
                    icon: <Linkedin className='h-5 w-5' />,
                    text: "linkedin.com/in/safalbhandari",
                  },
                ].map((item, i) => (
                  <div key={i} className='flex items-center gap-3 text-sm'>
                    <div className='text-blue-400'>{item.icon}</div>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className='flex flex-col justify-center'>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white py-3 px-6 rounded-xl font-medium'
              >
                Download Resume
              </motion.button>

              <div className='mt-6 flex justify-center gap-4'>
                {[
                  { icon: <Github className='h-6 w-6' />, href: "#" },
                  { icon: <Linkedin className='h-6 w-6' />, href: "#" },
                  { icon: <Terminal className='h-6 w-6' />, href: "#" },
                ].map((item, i) => (
                  <motion.a
                    key={i}
                    href={item.href}
                    whileHover={{ y: -3 }}
                    className='text-gray-400 hover:text-blue-400 transition-colors'
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </Card3D>
      </div>
    </section>
  );
};

const App = () => {
  return (
    <div className='text-white bg-black'>
      <HeroSection />
      <ExperienceSection />
      <ProjectSection />
      <SkillsSection />
      <AchievementsSection />
      <ContactSection />

      {/* Footer */}
      <footer className='py-8 bg-black border-t border-gray-800/50'>
        <div className='container mx-auto text-center text-gray-400'>
          <p>© 2024 Safal Bhandari. All rights reserved</p>
        </div>
      </footer>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap");

        body {
          font-family: "Inter", sans-serif;
        }

        .transform-gpu {
          transform-style: preserve-3d;
          backface-visibility: hidden;
        }
      `}</style>
    </div>
  );
};

export default App;
