"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // Removed Pagination
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Insurance Premium Predictor",
    description: "A machine learning model that predicts insurance premiums based on user data.",
    image: "/projects/insurance_premium.png",
    github: "https://github.com/yourusername/insurance-premium-predictor",
    live: "https://insurance-predictor.com",
  },
  {
    title: "Customer Churn Prediction",
    description: "An AI model that predicts customer churn using ANN and Streamlit.",
    image: "/projects/customer_churn.png",
    github: "https://github.com/yourusername/customer-churn-prediction",
    live: "https://customerchurn.app",
  },
  {
    title: "Generative AI Chatbot",
    description: "A chatbot built with LangChain that interacts using AI-generated responses.",
    image: "/projects/genai_chatbot.png",
    github: "https://github.com/yourusername/genai-chatbot",
    live: "https://genai-chatbot.com",
  },
  // Add more projects here...
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-900 text-white py-20 px-4 md:px-8 lg:px-16">
      <div className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-green-400 text-base md:text-lg font-semibold mb-3"
        >
          Projects
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"
        >
          The Sorcerer's Repository
        </motion.h2>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          breakpoints={{
            480: { slidesPerView: 1, spaceBetween: 15 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 2, spaceBetween: 30 }
          }}
          className="relative px-2 sm:px-4 md:px-8 [&_.swiper-slide]:!h-[auto] [&_.swiper-wrapper]:!items-stretch [&_.swiper-button-next]:text-green-400 [&_.swiper-button-next]:hover:text-blue-400 [&_.swiper-button-prev]:text-green-400 [&_.swiper-button-prev]:hover:text-blue-400 [&_.swiper-button-next]:hidden [&_.swiper-button-next]:md:block [&_.swiper-button-prev]:hidden [&_.swiper-button-prev]:md:block"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-800 p-3 sm:p-4 md:p-6 rounded-2xl shadow-lg border border-gray-700 flex flex-col h-full">
                <div className="relative w-full aspect-[3/2] mb-3 sm:mb-4 md:mb-6">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain rounded-lg"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={100}
                  />
                </div>
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-black bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 mb-2 sm:mb-3 md:mb-4">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-300 mb-3 sm:mb-4 md:mb-6 flex-grow">
                  {project.description}
                </p>
                <div className="flex justify-center gap-3 sm:gap-4 md:gap-6 mt-auto pt-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 hover:text-blue-400 transition-colors"
                    >
                      <FaGithub className="text-lg sm:text-xl md:text-2xl" />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 hover:text-blue-400 transition-colors"
                    >
                      <FaExternalLinkAlt className="text-base sm:text-lg md:text-xl" />
                    </a>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default Projects;