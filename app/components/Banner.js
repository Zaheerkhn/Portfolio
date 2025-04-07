"use client";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes, FaDownload, FaTwitter, FaPhone } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";

const Banner = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to close the menu when a link is clicked
  const handleMenuClick = () => {
    setMenuOpen(false);
  };

  // Function to scroll to the About section
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-900 text-white px-4 sm:px-6 md:px-8 py-12 md:py-0 overflow-hidden">
      {/* Social Media Icons - Top Left */}
      <div className="absolute top-4 left-4 flex flex-wrap gap-1.5 md:gap-3 z-20">
        <a href="https://github.com/Zaheerkhn" target="_blank" rel="noopener noreferrer" className="p-1.5 md:p-2">
          <FaGithub className="text-lg md:text-2xl hover:text-gray-400 transition-transform hover:scale-110" />
        </a>
        <a href="https://linkedin.com/in/zaheer-khan1" target="_blank" rel="noopener noreferrer" className="p-2">
          <FaLinkedin className="text-xl md:text-2xl hover:text-blue-400 transition-transform hover:scale-110" />
        </a>
        <a href="https://twitter.com/Zaheer_twts" target="_blank" rel="noopener noreferrer" className="p-2">
          <FaTwitter className="text-xl md:text-2xl hover:text-blue-400 transition-transform hover:scale-110" />
        </a>
        <a href="mailto:zaheerkhan00457@gmail.com" className="p-2">
          <FaEnvelope className="text-xl md:text-2xl hover:text-red-400 transition-transform hover:scale-110" />
        </a>
        <a href="tel:+918450868623" className="p-2">
          <FaPhone className="text-xl md:text-2xl hover:text-green-400 transition-transform hover:scale-110" />
        </a>
      </div>

      {/* Hamburger Menu - Top Right */}
      <div className="absolute top-4 right-4">
        <motion.button
          onClick={() => setMenuOpen(!menuOpen)}
          whileHover={{ scale: 1.1 }}
          className="text-3xl text-green-400 hover:text-blue-400 transition-all"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </motion.button>
      </div>

      {/* Full-Screen Overlay Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-gray-900/95 backdrop-blur-sm flex flex-col items-center justify-center z-50 p-4"
          >
            {/* Close Button */}
            <motion.button
              onClick={() => setMenuOpen(false)}
              whileHover={{ scale: 1.1 }}
              className="absolute top-4 right-4 text-3xl text-green-400 hover:text-blue-400 transition-all"
            >
              <FaTimes />
            </motion.button>

            {/* Menu Items */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col gap-4 sm:gap-8 text-center w-full max-w-md"
            >
              {['About', 'Skills', 'Certifications', 'Projects', 'Experience'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={handleMenuClick}
                  whileHover={{ scale: 1.05 }}
                  className="text-2xl sm:text-4xl font-semibold text-gray-300 hover:text-green-400 transition-all px-4 sm:px-8 py-3 sm:py-4 rounded-lg backdrop-blur-sm bg-gray-800/30 border border-gray-700 hover:border-green-400"
                >
                  {item}
                </motion.a>
              ))}
              
              <motion.a
                href="/resume.pdf"
                download
                onClick={handleMenuClick}
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center gap-2 text-2xl sm:text-4xl font-semibold text-green-400 px-4 sm:px-8 py-3 sm:py-4 rounded-lg border-2 border-green-400 hover:bg-green-400/10 transition-all backdrop-blur-sm bg-gray-800/30"
              >
                <FaDownload className="text-2xl sm:text-3xl" />
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
{/* Middle Content */}
      <div className="text-center md:text-left w-full md:w-1/2 lg:max-w-2xl px-4 md:px-8 mt-16 md:mt-0">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-sm md:text-base lg:text-lg text-green-400 font-semibold mb-2"
        >
          Hi, my name is
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-3xl md:text-4xl lg:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 mb-3"
        >
          Zaheer Khan.
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-4 leading-tight"
        >
          I'm Casting Machine Learning Spells,<br className="hidden md:block"/>Brewing Generative AI Potions.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="text-base sm:text-lg text-gray-400 max-w-3xl"
        >
          I am the <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 font-semibold">ML wizard</span> with a deep passion for building intelligent models and AI solutions. 
          Currently seeking new opportunities as a <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 font-semibold">Machine Learning Engineer</span> / 
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 font-semibold"> Generative AI Developer</span>.
        </motion.p>
      </div>
      {/* Wizard Image */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 2.5 }}
        className="w-full md:w-1/2 mt-6 md:mt-0 px-4 md:px-8 flex justify-center items-center"
      >
        <motion.div
          whileHover={{ 
            scale: 1.05,
            rotate: 2,
            filter: 'drop-shadow(0 10px 8px rgba(74, 222, 128, 0.3))'
          }}
          transition={{ duration: 0.3 }}
          className="cursor-pointer relative group w-40 sm:w-56 md:w-72 lg:w-96"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300" />
          <Image 
            src="/wizard.png" 
            alt="Wizard" 
            width={400} 
            height={400} 
            priority
            className="relative z-10 w-full h-auto"
          />
        </motion.div>
      </motion.div>
      {/* Remove the second menu overlay section */}
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 3 }}
        className="absolute bottom-2 sm:bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer hidden sm:block"
        onClick={scrollToAbout}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-green-400 rounded-full flex items-center justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
            className="w-2 h-2 bg-green-400 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Banner;