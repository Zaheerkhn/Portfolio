"use client";
// Remove these imports as they're no longer needed
import { motion } from "framer-motion";

const experiences =  [
  {
    type: "education",
    title: "Bachelor of Technology in Computer Science",
    institution: "Sushila Devi Bansal College of Engineering, Indore",
    duration: "Aug 2021 - Aug 2025",
    description: "Pursuing Computer Science and Engineering with a strong interest in Machine Learning and AI. Self-learning and implementing cutting-edge technologies alongside core engineering curriculum.",
  },
  {
    type: "projects",
    title: "Independent Machine Learning & AI Projects",
    company: "Self-Led Projects",
    duration: "Ongoing",
    description: "Developed diverse AI solutions including ML models for predictive analytics, Deep Learning for computer vision, NLP applications for text analysis, Generative AI chatbots using LangChain, and Autonomous AI agents for task automation. Implemented vector stores and embeddings for efficient information retrieval.",
    technologies: ["Python", "TensorFlow", "Scikit-Learn", "LangChain", "Streamlit"],
  },
  {
    type: "education",
    title: "Relevant Courses & Certifications",
    institution: "Multiple Platforms",
    duration: "Ongoing",
    description: "Completed and enrolled in various courses on Mathematics, Machine Learning, Deep Learning, NLP, and Generative AI. Gained expertise in advanced ML algorithms, neural networks, natural language processing, and large language models. Specialized in Agentic AI development, creating autonomous agents capable of task planning, reasoning, and dynamic decision-making. Developed practical skills through hands-on projects using modern AI frameworks like LangChain, OpenAI, and HuggingFace transformers.",
    technologies: ["Statistics - Codebasics","Machine Learning - Codebasics", "Deep Learning - Udemy", "Mathematics for Data Science - Udemy", "Generative AI - Udemy", "Agentic AI - Krish Naik"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="bg-gray-900 text-white py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-16">
      <div className="text-center mb-8 sm:mb-12">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-green-400 text-base md:text-lg font-semibold mb-2"
        >
          Experience
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"
        >
          Chronicles of Expertise
        </motion.h2>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="relative">
          {/* Central Line - Hide on mobile */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1 }}
            className="absolute left-1/2 w-0.5 bg-gradient-to-b from-green-400 to-blue-500 transform -translate-x-1/2 hidden md:block"
          ></motion.div>

          {/* Experience Items */}
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:justify-end md:pl-8" : "md:justify-start md:pr-8"
              } mb-12 sm:mb-16 md:mb-24`}
            >
              <motion.div 
                initial={{ opacity: 0, x: 0, y: 50 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`w-full md:w-1/2 relative ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}
              >
                {/* Experience Content */}
                <div className="bg-gray-800 p-4 sm:p-6 rounded-2xl shadow-lg border border-gray-700">
                  <h3 className="text-xl sm:text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 mb-3">
                    {exp.title}
                  </h3>
                  <p className="text-green-400 font-semibold text-sm sm:text-base mb-2">
                    {exp.company || exp.institution}
                  </p>
                  <p className="text-gray-400 text-xs sm:text-sm mb-3">
                    {exp.duration}
                  </p>
                  <p className="text-gray-300 text-sm sm:text-base mb-4">
                    {exp.description}
                  </p>
                  {/* Technology Tags */}
                  <div className={`flex flex-wrap gap-2 ${
                    index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                  }`}>
                    {exp.technologies?.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs sm:text-sm bg-gray-700 text-green-400 rounded-full border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Timeline Dot - Hide on mobile */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  className={`absolute top-1/2 transform -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full shadow-lg hidden md:block ${
                    index % 2 === 0 ? "-right-10" : "-left-10"
                  }`}
                ></motion.div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
