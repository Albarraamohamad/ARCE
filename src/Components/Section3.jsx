import React from 'react';
import { motion } from 'framer-motion';

const Section3 = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-16 gap-10 bg-[#0f172a]">
      {/* Image */}
      <motion.div
        className="lg:w-1/2"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <img
          src="/12.jpeg"
          alt="AI detecting crop diseases"
          className="w-full h-auto rounded-xl shadow-lg"
        />
      </motion.div>

      {/* Text */}
      <motion.div
        className="lg:w-1/2 text-white"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
          AI in Crop Disease Detection
        </h2>
        <p className="text-base sm:text-lg leading-relaxed">
          Artificial Intelligence is revolutionizing agriculture by detecting early signs of crop diseases using image recognition and machine learning. Farmers can now act faster to prevent outbreaks, reduce pesticide usage, and improve overall yield.
        </p>
      </motion.div>
    </section>
  );
};

export default Section3;
