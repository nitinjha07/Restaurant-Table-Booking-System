import React from "react";
import aboutSectionImg from "/assets/aboutSectionImg.jpg";
import data from "../data.json";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="w-full bg-accent py-12 lg:py-20" id="about">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl lg:text-4xl font-serif text-center mb-12"
      >
        Who we are
      </motion.h2>

      <div className="w-[90%] flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12 mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 space-y-4 lg:space-y-6 px-4 lg:px-0"
        >
          <p className="text-base lg:text-lg leading-relaxed text-gray-700">
            Welcome to this place, where culinary passion meets an unforgettable
            dining experience. Nestled in the heart of Delhi, our restaurant is
            dedicated to serving you the finest dishes crafted from the freshest
            ingredients. Our team of skilled chefs and friendly staff are here
            to make every meal special.
          </p>
          <p className="text-base lg:text-lg leading-relaxed text-gray-700">
            Our mission is to provide an exceptional dining experience that
            combines exquisite flavors, top-notch service, and a warm
            atmosphere. Join us and embark on a culinary journey that delights
            all your senses.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2"
        >
          <img
            src={aboutSectionImg}
            alt="About Section"
            className="w-full h-[300px] lg:h-[400px] object-cover rounded-2xl shadow-2xl"
          />
        </motion.div>
      </div>

      <div className="w-[90%] mx-auto mt-12 lg:mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {data.highlights.map((highlight, index) => (
            <motion.div
              key={highlight.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 lg:p-8 flex flex-col items-center justify-center hover:transform hover:scale-105 transition-all duration-300"
            >
              <img
                src={highlight.image}
                alt={highlight.title}
                className="w-16 lg:w-20 mb-4 lg:mb-6"
              />
              <h3 className="font-serif text-lg lg:text-xl font-semibold mb-3 lg:mb-4 text-center">
                {highlight.title}
              </h3>
              <p className="text-center text-sm lg:text-base text-gray-600">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;