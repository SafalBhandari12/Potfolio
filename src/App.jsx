import React, { useEffect, useState, useRef, Suspense } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import {
  OrbitControls,
  Text3D,
  Float,
  PerspectiveCamera,
  useGLTF,
} from "@react-three/drei";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  ChevronDown,
} from "lucide-react";

// 3D Text Component
const AnimatedText = ({ text, position, rotation }) => {
  const meshRef = useRef();

  useFrame((state) => {
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.1;
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <Text3D
        ref={meshRef}
        font='/helvetiker_regular.typeface.json'
        size={0.5}
        height={0.2}
        position={position}
        rotation={rotation}
      >
        {text}
        <meshNormalMaterial />
      </Text3D>
    </Float>
  );
};

// Animated Background Sphere
const AnimatedSphere = () => {
  const meshRef = useRef();

  useFrame((state) => {
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshPhongMaterial wireframe color='#4338ca' />
    </mesh>
  );
};

const App = () => {
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef();
  const { scrollYProgress } = useScroll();

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  };

  return (
    <div className='bg-black text-white min-h-screen' ref={containerRef}>
      {/* Hero Section with 3D Elements */}
      <section className='h-screen relative overflow-hidden'>
        <div className='absolute inset-0'>
          <Canvas>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Suspense fallback={null}>
              <AnimatedSphere />
            </Suspense>
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>

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
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href='mailto:safalbhandari069@gmail.com'
                className='flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all'
              >
                <Mail size={20} /> Email
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href='tel:+917847915622'
                className='flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all'
              >
                <Phone size={20} /> Call
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href='#'
                className='flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all'
              >
                <Linkedin size={20} /> LinkedIn
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href='#'
                className='flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all'
              >
                <Github size={20} /> GitHub
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className='absolute bottom-10'
          >
            <ChevronDown size={40} className='text-white/50' />
          </motion.div>
        </div>
      </section>

      {/* Experience Section with Parallax */}
      <section className='py-20 relative'>
        <motion.div
          style={{ y: backgroundY }}
          className='absolute inset-0 bg-gradient-to-b from-blue-900/20 to-purple-900/20'
        />

        <div className='container mx-auto px-4 relative'>
          <motion.h2
            {...fadeInUp}
            className='text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600'
          >
            Professional Experience
          </motion.h2>

          <div className='space-y-12'>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className='bg-white/5 rounded-2xl p-8 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all'
            >
              <h3 className='text-3xl font-bold mb-4'>
                UNIIT Technology Pvt. Ltd
              </h3>
              <p className='text-blue-400 mb-6'>
                Data Science and Machine Learning Intern | June 2024-September
                2024
              </p>
              <ul className='space-y-4 text-gray-300'>
                <li className='flex items-start gap-4'>
                  <div className='w-2 h-2 mt-2 rounded-full bg-blue-400' />
                  <p>
                    Conducted comprehensive exploratory data analysis on
                    customer data to uncover 3 key trends and insights
                  </p>
                </li>
                <li className='flex items-start gap-4'>
                  <div className='w-2 h-2 mt-2 rounded-full bg-blue-400' />
                  <p>
                    Automated monthly reporting with Python and SQL, reducing
                    manual workload by 30%
                  </p>
                </li>
                <li className='flex items-start gap-4'>
                  <div className='w-2 h-2 mt-2 rounded-full bg-blue-400' />
                  <p>
                    Collaborated with software engineers to deploy production
                    data models and integrate an LLM-powered chatbot
                  </p>
                </li>
              </ul>
            </motion.div>

            {/* Similar motion.div for Student Researcher section */}
          </div>
        </div>
      </section>

      {/* Projects Section with 3D Cards */}
      <section className='py-20 relative overflow-hidden'>
        <div className='container mx-auto px-4'>
          <motion.h2
            {...fadeInUp}
            className='text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600'
          >
            Featured Projects
          </motion.h2>

          <div className='grid md:grid-cols-2 gap-8'>
            <motion.div
              whileHover={{ scale: 1.02, rotateY: 5 }}
              className='bg-white/5 rounded-2xl p-8 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all transform perspective-1000'
            >
              <div className='flex justify-between items-start mb-6'>
                <h3 className='text-3xl font-bold'>FinFusion</h3>
                <motion.a
                  whileHover={{ scale: 1.2, rotate: 45 }}
                  whileTap={{ scale: 0.8 }}
                  href='#'
                  className='text-blue-400 hover:text-blue-300'
                >
                  <ExternalLink size={24} />
                </motion.a>
              </div>
              <p className='text-gray-300 mb-6'>
                AI-Driven Fintech Platform for Smart Investment & Market
                Intelligence
              </p>
              <div className='flex flex-wrap gap-2 mb-6'>
                <span className='px-3 py-1 bg-blue-900/30 rounded-full text-sm'>
                  AI
                </span>
                <span className='px-3 py-1 bg-blue-900/30 rounded-full text-sm'>
                  Fintech
                </span>
                <span className='px-3 py-1 bg-blue-900/30 rounded-full text-sm'>
                  Machine Learning
                </span>
              </div>
              <ul className='space-y-4 text-gray-300'>
                <li className='flex items-start gap-4'>
                  <div className='w-2 h-2 mt-2 rounded-full bg-blue-400' />
                  <p>
                    Developed AI-powered SaaS platform integrating multiple data
                    sources
                  </p>
                </li>
                {/* More list items */}
              </ul>
            </motion.div>

            {/* Similar motion.div for Plant Disease Detection project */}
          </div>
        </div>
      </section>

      {/* Skills Section with 3D Grid */}
      <section className='py-20 relative'>
        <div className='container mx-auto px-4'>
          <motion.h2
            {...fadeInUp}
            className='text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600'
          >
            Skills & Expertise
          </motion.h2>

          <div className='grid md:grid-cols-3 gap-8'>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className='bg-white/5 rounded-2xl p-8 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all'
            >
              <h3 className='text-2xl font-bold mb-6'>
                Programming Languages & Frameworks
              </h3>
              <div className='flex flex-wrap gap-2'>
                <span className='px-3 py-1 bg-blue-900/30 rounded-full text-sm'>
                  Python
                </span>
                <span className='px-3 py-1 bg-blue-900/30 rounded-full text-sm'>
                  FastAPI
                </span>
                <span className='px-3 py-1 bg-blue-900/30 rounded-full text-sm'>
                  Flask
                </span>
                <span className='px-3 py-1 bg-blue-900/30 rounded-full text-sm'>
                  Django
                </span>
                <span className='px-3 py-1 bg-blue-900/30 rounded-full text-sm'>
                  React Native
                </span>
              </div>
            </motion.div>

            {/* Similar motion.div for other skills sections */}
          </div>
        </div>
      </section>

      {/* Education Section with 3D Elements */}
      <section className='py-20 relative'>
        <div className='container mx-auto px-4'>
          <motion.h2
            {...fadeInUp}
            className='text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600'
          >
            Education
          </motion.h2>

          <motion.div
            whileHover={{ scale: 1.02 }}
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

      {/* Footer with Gradient */}
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