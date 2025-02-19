import { useState, useEffect,useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Sphere, OrbitControls } from "@react-three/drei";
import { motion, useScroll, useInView } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";

const Sphere3D = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Sphere args={[1, 32, 32]}>
        <meshStandardMaterial color='#4f46e5' wireframe />
      </Sphere>
      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  );
};


const AnimatedSection = ({ children }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

const App = () => {
  const [activeSection, setActiveSection] = useState("home");

  const sections = [
    { id: "experience", name: "Experience" },
    { id: "projects", name: "Projects" },
    { id: "skills", name: "Skills" },
    { id: "education", name: "Education" },
  ];

  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 text-gray-100'>
      {/* Header */}
      <nav className='fixed w-full z-50 bg-gray-900/80 backdrop-blur-sm shadow-lg'>
        <div className='max-w-6xl mx-auto px-4 py-4 flex justify-between items-center'>
          <h1 className='text-2xl font-bold bg-gradient-to-r from-indigo-400 to-blue-500 bg-clip-text text-transparent'>
            Safal Bhandari
          </h1>
          <div className='flex space-x-8'>
            {sections.map((section) => (
              <ScrollLink
                key={section.id}
                to={section.id}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className={`cursor-pointer hover:text-indigo-400 transition-colors ${
                  activeSection === section.id ? "text-indigo-400" : ""
                }`}
              >
                {section.name}
              </ScrollLink>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className='pt-32 pb-20 px-4'>
        <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between'>
          <div className='md:w-1/2 mb-12 md:mb-0'>
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className='text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-blue-500 bg-clip-text text-transparent'
            >
              AI Developer &<br />
              Data Scientist
            </motion.h1>
            <div className='space-y-4 mb-8'>
              <div className='flex items-center space-x-4'>
                <FiMail className='text-indigo-400' />
                <span>safalbhandari069@gmail.com</span>
              </div>
              <div className='flex items-center space-x-4'>
                <FiPhone className='text-indigo-400' />
                <span>+91-7847915622</span>
              </div>
            </div>
            <div className='flex space-x-6'>
              <a
                href='#'
                className='p-2 rounded-full border border-indigo-400 hover:bg-indigo-400/20'
              >
                <FiLinkedin size={24} />
              </a>
              <a
                href='#'
                className='p-2 rounded-full border border-indigo-400 hover:bg-indigo-400/20'
              >
                <FiGithub size={24} />
              </a>
            </div>
          </div>
          <div className='md:w-1/2 h-96'>
            <Sphere3D />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id='experience' className='py-20 px-4'>
        <div className='max-w-6xl mx-auto'>
          <AnimatedSection>
            <h2 className='text-3xl font-bold mb-12 text-indigo-400'>
              Professional Experience
            </h2>
            <div className='space-y-12'>
              <div className='relative pl-8 border-l-2 border-indigo-400/50'>
                <div className='absolute w-4 h-4 bg-indigo-400 rounded-full -left-[9px] top-0'></div>
                <h3 className='text-xl font-bold mb-2'>
                  UNIIT Technology Pvt. Ltd
                </h3>
                <p className='text-gray-400 mb-4'>
                  Data Science and Machine Learning Intern (June 2024 - Sept
                  2024)
                </p>
                <ul className='space-y-4'>
                  <li className='relative pl-4 before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-indigo-400 before:rounded-full'>
                    Conducted comprehensive exploratory data analysis using
                    K-Means, PCA, and decision trees
                  </li>
                  {/* Add other points similarly */}
                </ul>
              </div>
              {/* Add other experiences similarly */}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects Section */}
      <section id='projects' className='py-20 px-4 bg-gray-800/50'>
        <div className='max-w-6xl mx-auto'>
          <AnimatedSection>
            <h2 className='text-3xl font-bold mb-12 text-indigo-400'>
              Projects
            </h2>
            <div className='grid md:grid-cols-2 gap-8'>
              <div className='p-6 bg-gray-900 rounded-xl hover:transform hover:scale-105 transition-all'>
                <h3 className='text-xl font-bold mb-4'>FinFusion</h3>
                <p className='text-gray-400 mb-4'>
                  AI-Driven Fintech Platform for Smart Investment
                </p>
                {/* Add project details */}
              </div>
              {/* Add other projects similarly */}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Skills Section */}
      <section id='skills' className='py-20 px-4'>
        <div className='max-w-6xl mx-auto'>
          <AnimatedSection>
            <h2 className='text-3xl font-bold mb-12 text-indigo-400'>
              Technical Skills
            </h2>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
              {[
                "Python",
                "TensorFlow",
                "PyTorch",
                "React Native",
                "NLP",
                "CNN",
                "LLM",
                "Docker",
              ].map((skill) => (
                <div
                  key={skill}
                  className='p-3 text-center border border-indigo-400/30 rounded-lg hover:bg-indigo-400/10 transition-colors'
                >
                  {skill}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Education Section */}
      <section id='education' className='py-20 px-4 bg-gray-800/50'>
        <div className='max-w-6xl mx-auto'>
          <AnimatedSection>
            <h2 className='text-3xl font-bold mb-12 text-indigo-400'>
              Education
            </h2>
            <div className='relative pl-8 border-l-2 border-indigo-400/50'>
              <div className='absolute w-4 h-4 bg-indigo-400 rounded-full -left-[9px] top-0'></div>
              <h3 className='text-xl font-bold'>Sharda University</h3>
              <p className='text-gray-400 mb-2'>
                B.Tech in Computer Science (2023-2027)
              </p>
              <p className='text-indigo-400'>CGPA: 9.258</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className='py-12 text-center border-t border-gray-800'>
        <p className='text-gray-400'>
          © 2024 Safal Bhandari. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;
