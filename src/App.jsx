import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

// A helper component that fades in its children when they enter the viewport
const FadeInSection = ({ children, className = "" }) => {
  const domRef = useRef();
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      className={`${className} transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
};

// A simple rotating cube for our 3D art component
function RotatingCube() {
  const meshRef = useRef();
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });
  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial color='#3b82f6' />
    </mesh>
  );
}

// The 3D art component using react-three-fiber
function ThreeDArt() {
  return (
    <Canvas className='w-full h-64 md:h-96'>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <RotatingCube />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}

function App() {
  return (
    <div className='bg-gray-900 text-white font-sans'>
      {/* Navigation */}
      <nav className='fixed top-0 w-full bg-gray-800 bg-opacity-75 backdrop-blur-sm z-50'>
        <div className='container mx-auto px-4 py-3 flex justify-between items-center'>
          <div className='text-xl font-bold'>Safal Bhandari</div>
          <div>
            <a href='#home' className='mx-2 hover:text-teal-400'>
              Home
            </a>
            <a href='#experience' className='mx-2 hover:text-teal-400'>
              Experience
            </a>
            <a href='#projects' className='mx-2 hover:text-teal-400'>
              Projects
            </a>
            <a href='#skills' className='mx-2 hover:text-teal-400'>
              Skills
            </a>
            <a href='#education' className='mx-2 hover:text-teal-400'>
              Education
            </a>
            <a href='#contact' className='mx-2 hover:text-teal-400'>
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id='home'
        className='min-h-screen flex flex-col justify-center items-center pt-20'
      >
        <FadeInSection className='text-center'>
          <h1 className='text-5xl md:text-7xl font-bold mb-4'>
            Safal Bhandari
          </h1>
          <p className='text-xl md:text-2xl mb-6'>
            Data Science &amp; Machine Learning Enthusiast
          </p>
        </FadeInSection>
        <div className='w-full max-w-4xl mt-8'>
          <ThreeDArt />
        </div>
      </section>

      {/* Experience Section */}
      <section id='experience' className='min-h-screen py-16 bg-gray-800'>
        <div className='container mx-auto px-4'>
          <FadeInSection>
            <h2 className='text-4xl font-bold mb-8'>Professional Experience</h2>
          </FadeInSection>
          <FadeInSection>
            <div className='mb-12'>
              <h3 className='text-2xl font-semibold'>
                Data Science and Machine Learning Intern
              </h3>
              <p className='italic'>
                UNIIT Technology Pvt. Ltd | June 2024 - September 2024
              </p>
              <ul className='list-disc list-inside mt-4 space-y-2'>
                <li>
                  Conducted comprehensive exploratory data analysis on customer
                  data to uncover 3 key trends and insights using algorithms
                  like K-Means, PCA, and decision trees.
                </li>
                <li>
                  Automated monthly reporting with Python and SQL, reducing
                  manual workload by 30% and deploying supervised learning
                  models to enhance predictive accuracy by 15%.
                </li>
                <li>
                  Collaborated with software engineers to deploy production data
                  models and integrate an LLM-powered chatbot, reducing customer
                  query response times by 25%.
                </li>
              </ul>
            </div>
          </FadeInSection>
          <FadeInSection>
            <div className='mb-12'>
              <h3 className='text-2xl font-semibold'>Student Researcher</h3>
              <p className='italic'>
                Eye Disease Classification Project | January 2025 - February
                2025
              </p>
              <ul className='list-disc list-inside mt-4 space-y-2'>
                <li>
                  Led a research initiative to develop a hybrid deep learning
                  model for classifying 12 eye diseases by integrating Swin
                  Transformer Tiny with EfficientNet-B2.
                </li>
                <li>
                  Designed an optimized architecture that reduced computational
                  complexity to ~2B FLOPs while achieving 97% classification
                  accuracy with only 4.89M parameters.
                </li>
                <li>
                  Utilized advanced TensorFlow techniques and robust image
                  augmentation on a dataset of 48,000 images to enhance training
                  efficiency.
                </li>
              </ul>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Projects Section */}
      <section id='projects' className='min-h-screen py-16 bg-gray-700'>
        <div className='container mx-auto px-4'>
          <FadeInSection>
            <h2 className='text-4xl font-bold mb-8'>Projects</h2>
          </FadeInSection>
          <FadeInSection>
            <div className='mb-12'>
              <h3 className='text-2xl font-semibold'>
                FinFusion{" "}
                <span className='text-sm text-teal-400'>[Github]</span>
              </h3>
              <ul className='list-disc list-inside mt-4 space-y-2'>
                <li>
                  Developed an AI-powered SaaS platform integrating web
                  scraping, sentiment analysis, and API data processing to
                  generate actionable investment insights.
                </li>
                <li>
                  Engineered AI agents for portfolio risk assessment and
                  industry trend prediction using Random Forest and LSTM models.
                </li>
                <li>
                  Designed an expense tracking and budgeting module leveraging
                  K-Means clustering and time series forecasting for
                  personalized recommendations.
                </li>
              </ul>
            </div>
          </FadeInSection>
          <FadeInSection>
            <div className='mb-12'>
              <h3 className='text-2xl font-semibold'>
                Plant Disease Detection{" "}
                <span className='text-sm text-teal-400'>[Github]</span>
              </h3>
              <ul className='list-disc list-inside mt-4 space-y-2'>
                <li>
                  Developed an AI-powered crop disease detection system using
                  advanced deep learning models achieving 97% accuracy in
                  classification.
                </li>
                <li>
                  Trained on a large dataset with data augmentation,
                  fine-tuning, and transfer learning to ensure robust
                  performance.
                </li>
                <li>
                  Designed and deployed a mobile application for real-time
                  disease detection integrating U-Net for precise segmentation.
                </li>
              </ul>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Skills Section */}
      <section id='skills' className='min-h-screen py-16 bg-gray-800'>
        <div className='container mx-auto px-4'>
          <FadeInSection>
            <h2 className='text-4xl font-bold mb-8'>Skills</h2>
          </FadeInSection>
          <FadeInSection>
            <ul className='list-disc list-inside space-y-2 text-lg'>
              <li>
                <strong>Programming Languages &amp; Frameworks:</strong> Python,
                FastAPI, Flask, Django, React Native
              </li>
              <li>
                <strong>AI &amp; Machine Learning:</strong> Pandas, NumPy,
                SciPy, Scikit‑Learn, TensorFlow, PyTorch, NLP, CNN, LLM, Ollama,
                LangChain, Jupyter Notebook, MySQL, PostgreSQL, MongoDB,
                Streamlit, PySpark, Matplotlib, Seaborn
              </li>
              <li>
                <strong>Data Science &amp; Miscellaneous:</strong> A/B testing,
                ETL, Data pipelines, Statistics, Time series, Experimental
                design, Hypothesis testing, OOP, OOD, APIs, Excel, Git
              </li>
            </ul>
          </FadeInSection>
        </div>
      </section>

      {/* Education Section */}
      <section id='education' className='min-h-screen py-16 bg-gray-700'>
        <div className='container mx-auto px-4'>
          <FadeInSection>
            <h2 className='text-4xl font-bold mb-8'>Education</h2>
          </FadeInSection>
          <FadeInSection>
            <div>
              <h3 className='text-2xl font-semibold'>Sharda University</h3>
              <p className='italic'>
                Greater Noida, India | B.Tech in Computer Science and
                Engineering (2023‑2027)
              </p>
              <p className='mt-2'>Cumulative CGPA: 9.258</p>
              <p className='mt-1'>
                COMPEX Scholarship recipient, fully funded by the Indian
                Embassy.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Contact Section */}
      <section id='contact' className='min-h-screen py-16 bg-gray-800'>
        <div className='container mx-auto px-4'>
          <FadeInSection>
            <h2 className='text-4xl font-bold mb-8'>Contact</h2>
          </FadeInSection>
          <FadeInSection>
            <div className='text-lg space-y-4'>
              <p>
                Email:{" "}
                <a
                  href='mailto:safalbhandari069@gmail.com'
                  className='text-teal-400'
                >
                  safalbhandari069@gmail.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a href='tel:+917847915622' className='text-teal-400'>
                  +91‑7847915622
                </a>
              </p>
              <p>
                LinkedIn:{" "}
                <a href='#' className='text-teal-400'>
                  LinkedIn
                </a>
              </p>
              <p>
                GitHub:{" "}
                <a href='#' className='text-teal-400'>
                  GitHub
                </a>
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-gray-900 py-4 text-center'>
        <p className='text-sm'>
          &copy; {new Date().getFullYear()} Safal Bhandari. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
