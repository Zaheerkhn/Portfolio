"use client";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="bg-gray-900 text-white min-h-screen py-24 px-6 md:px-16"> {/* Added min-h-screen */}
      {/* Heading Section */}
      <div className="text-center mb-12">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-green-400 text-lg font-semibold mb-2"
        >
          About me
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"
        >
          Lore behind the Code
        </motion.h2>
      </div>

      {/* Cards Section */}
      <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start max-w-7xl mx-auto px-4">
        {/* Left Card (Front Layer) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gray-800 p-6 md:p-8 rounded-2xl shadow-lg border border-gray-700 z-10 h-full hover:border-green-400 transition-all duration-300 hover:shadow-green-400/20 hover:shadow-xl"
        >
          <h3 className="text-xl md:text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 mb-4">
            Who am I?
          </h3>
          <p className="text-gray-300 text-sm md:text-base">
            I am a passionate Computer Science student with a deep interest in Machine Learning and AI. My journey in technology started with a curiosity about how computers think and make decisions.
          </p>
          <p className="text-gray-300 mt-4 text-sm md:text-base">
            Beyond coding, I'm an avid learner who believes in the power of technology to solve real-world problems. I enjoy exploring new technologies and implementing innovative solutions.
          </p>
          <p className="text-gray-300 mt-4 text-sm md:text-base">
            I'm particularly fascinated by the potential of AI to transform our world, and I'm committed to being part of this technological revolution.
          </p>
        </motion.div>

        {/* Middle Card */}
        <motion.div
          className="bg-gradient-to-r from-green-400 to-blue-500 p-6 md:p-8 rounded-2xl shadow-lg text-white transform md:translate-y-12 z-0 h-full hover:shadow-xl transition-all duration-300 hover:shadow-green-400/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-xl md:text-2xl font-black mb-4">Education</h3>
          <p className="text-sm md:text-base">
            Currently pursuing BTech in Computer Science and Engineering at Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal (2021-2025). Focusing on core CS fundamentals while exploring advanced topics in AI and Machine Learning through self-directed learning and practical projects.
          </p>
        </motion.div>

        {/* Right Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gray-800 p-6 md:p-8 rounded-2xl shadow-lg border border-gray-700 z-10 h-full hover:border-green-400 transition-all duration-300 hover:shadow-green-400/20 hover:shadow-xl"
        >
          <h3 className="text-xl md:text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 mb-4">
            Aspirations
          </h3>
          <p className="text-gray-300 text-sm md:text-base">
            Aspiring to become a leading Machine Learning Engineer and AI Developer, I'm focused on creating intelligent solutions that make a difference.
          </p>
          <p className="text-gray-300 mt-4 text-sm md:text-base">
            My goal is to contribute to cutting-edge AI projects while continuously expanding my knowledge in areas like deep learning, natural language processing, and autonomous systems.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

// Rajiv Gandhi Proudyogiki Vishwavidyalaya