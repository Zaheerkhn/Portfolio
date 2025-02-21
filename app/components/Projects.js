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
    title: "RAG ChatBot with Chat History",
    description: "This project is an advanced Conversational Retrieval-Augmented Generation (RAG) chatbot that allows users to upload PDFs and ask questions based on their content. The chatbot maintains chat history for a more context-aware conversation.",
    image: "/projects/RAG-CB-CH.png",
    github: "https://github.com/Zaheerkhn/-Conversational-RAG-Chatbot-with-PDF-Q-A-and-Chat-History",
    live: "https://chatbot-with-chat-history1.streamlit.app/",
  },
  {
    title: "RAG Document Q&A ChatBot",
    description: "This project is a Retrieval-Augmented Generation (RAG) chatbot that allows users to upload a PDF document, generate vector embeddings, and ask questions based on the document's content.",
    image: "/projects/RAG-CB.png",
    github: " https://github.com/Zaheerkhn/RAG-Document-Q-A-ChatBot",
    live: "https://rag-document-q-a-chatbot1.streamlit.app/",
  },
  {
    title: "Generative AI Chatbot",
    description: "This AI-powered chatbot uses LangChain and Groq models to provide intelligent answers to user queries. It features a user-friendly interface with customizable settings, allowing users to select AI models, adjust creativity using temperature, and set response length.",
    image: "/projects/CB.png",
    github: "https://github.com/Zaheerkhn/Q-A-ChatBot",
    live: "https://q-a-chatbot1.streamlit.app/",
  },
  {
    title: "Insurance Premium Predictor",
    description: "This web application leverages machine learning to predict insurance premiums based on user inputs, helping individuals understand their potential insurance costs based on various factors.",
    image: "/projects/IPP.png",
    github: "https://github.com/Zaheerkhn/ML-Project-Premium_Prediction",
    live: "https://ml-project-premium-prediction1.streamlit.app/",
  },
  {
    title: "Credit Risk Prediction",
    description: "This project implements a Credit Risk Prediction model using logistic regression to assess the probability of default on loans. The model is designed to help financial institutions evaluate credit risk based on various features provided by applicants.",
    image: "/projects/CRP.png",
    github: "https://github.com/Zaheerkhn/ML-Project-Credit-Risk-Model",
    live: "https://ml-project-credit-risk-model1.streamlit.app/",
  },
  {
    title: "Customer Churn Prediction",
    description: "An AI model that predicts customer churn using ANN and Streamlit.",
    image: "/projects/CCP.png",
    github: "https://github.com/Zaheerkhn/Customer-Churn-Prediction",
    live: "https://customer-churn-prediction111.streamlit.app/",
  },
  {
    title: "Movie-Review Sentiment Analysis",
    description: "A sentiment analysis model that predicts movie reviews as positive or negative.",
    image: "/projects/MRSA.png",
    github: "https://github.com/Zaheerkhn/Movie-Reviews-Sentiment-Analysis",
    live: " https://movie-reviews-sentiment-analysis1.streamlit.app/",
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