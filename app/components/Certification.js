"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import Image from "next/image"; // Using Next.js Image for better performance
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

const certifications = [
  {
    title: "Master Machine Learning For Data Science",
    description: "Successfully completed the Machine Learning course from Codebasics, gaining hands-on experience in data preprocessing, model building, evaluation, and deployment using industry-standard tools and techniques.",
    image: "/Certificates/Certificate1.png",
  },
  {
    title: "Mathematics-Basics to Advanced for Data Science And GenAI",
    description: "Successfully completed the 'Mathematics - Basics to Advanced for Data Science and GenAI' course on Udemy by Krish Naik, gaining in-depth knowledge of mathematical concepts essential for data science and generative AI applications.",
    image: "/Certificates/Certificate2.jpg",
  },
  {
    title: "Maths and Statistics for AI, Data Science",
    description: "Completed 'Maths and Statistics for AI, Data Science' covering essential mathematical and statistical concepts for AI and data science.",
    image: "/Certificates/Certificate3.png",
  },
  {
    title: "Complete Data Science, Machine Learning, DL, NLP Bootcamp",
    description: "Completed 'Complete Data Science, Machine Learning, DL, NLP Bootcamp', a 100-hour program covering end-to-end data science and AI concepts.",
    image: "/Certificates/Certificate4.png",
  },
  {
    title: "AI for Everyone",
    description: "Completed 'AI for Everyone', covering all theoretical concepts in data science and AI.",
    image: "/Certificates/Certificate5.png",
  },
];

const Certification = () => {
  return (
    <section id="certifications" className="bg-gray-900 text-white py-20 px-4 md:px-8 lg:px-16">
      <div className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-green-400 text-base md:text-lg font-semibold mb-3"
        >
          Certifications
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 mb-8"
        >
          Enchanted Scrolls of Mastery
        </motion.h2>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto"
      >
        <Swiper
          modules={[Navigation, Autoplay, EffectFade]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          effect="fade"
          fadeEffect={{
            crossFade: true
          }}
          speed={800}
          loop={true}
          className="relative group [&_.swiper-button-next]:text-green-400 [&_.swiper-button-next]:hover:text-blue-400 [&_.swiper-button-prev]:text-green-400 [&_.swiper-button-prev]:hover:text-blue-400 [&_.swiper-button-next]:hidden [&_.swiper-button-next]:md:block [&_.swiper-button-prev]:hidden [&_.swiper-button-prev]:md:block"
        >
          {certifications.map((cert, index) => (
            <SwiperSlide key={cert.title}>
              <div className="flex flex-col items-center text-center p-2 md:p-4">
                <motion.div 
                  className="relative overflow-hidden rounded-lg mb-6 bg-gray-800 border border-gray-700 transition-colors duration-300 w-full max-w-3xl mx-auto"
                >
                  <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px]">
                    <Image 
                      src={cert.image} 
                      alt={cert.title}
                      fill
                      className="object-contain p-2"
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                      quality={100}
                    />
                  </div>
                </motion.div>
                <div className="w-full max-w-2xl mx-auto">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 mb-3">
                    {cert.title}
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base">
                    {cert.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default Certification;