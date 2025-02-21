"use client";
import { motion } from "framer-motion";
import { 
  SiC, 
  SiCplusplus, 
  SiPython, 
  SiMysql, 
  SiPandas, 
  SiNumpy, 
  SiScikitlearn, 
  SiTensorflow, 
  SiLangchain, 
  SiFastapi, 
  SiFlask, 
  SiStreamlit, 
  SiJupyter, 
  SiGit, 
} from "react-icons/si";
import { FaDocker } from "react-icons/fa";

const skills = [
  { name: "C", icon: <SiC /> },
  { name: "C++", icon: <SiCplusplus /> },
  { name: "Python", icon: <SiPython /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Pandas", icon: <SiPandas /> },
  { name: "NumPy", icon: <SiNumpy /> },
  { name: "Scikit-Learn", icon: <SiScikitlearn /> },
  { name: "TensorFlow", icon: <SiTensorflow /> },
  { name: "LangChain", icon: <SiLangchain /> },
  { name: "FastAPI", icon: <SiFastapi /> },
  { name: "Flask", icon: <SiFlask /> },
  { name: "Streamlit", icon: <SiStreamlit /> },
  { name: "Jupyter Notebook", icon: <SiJupyter /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "Git", icon: <SiGit /> },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-900 text-white py-20 px-4 md:px-8 lg:px-16">
      <div className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-green-400 text-base md:text-lg font-semibold mb-3"
        >
          Skills
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"
        >
          My Mystical Abilities
        </motion.h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{
              scale: 1.05,
              rotate: 1,
              filter: 'drop-shadow(0 8px 6px rgba(74, 222, 128, 0.2))'
            }}
            className="flex flex-col items-center justify-center p-3 sm:p-4 md:p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-green-400 transition-all group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl opacity-0 group-hover:opacity-10 blur-lg transition-all duration-300" />
            <div className="text-2xl sm:text-3xl md:text-4xl text-green-400 mb-2 z-10">
              {skill.icon}
            </div>
            <span className="text-xs sm:text-sm text-gray-300 font-medium z-10 text-center">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;