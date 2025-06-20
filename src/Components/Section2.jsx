import React from 'react';
import { motion } from 'framer-motion';

const Section2 = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row text-black items-center justify-between px-6 lg:px-20 py-16 gap-10">
      {/* Text Content */}
      <motion.div
        className="lg:w-1/2"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 ">
          AI-Powered Timing for Smart Harvesting
        </h2>
        <p className="text-base sm:text-lg  leading-relaxed">
          Our AI-driven timing system analyzes satellite data, weather forecasts,
          and moisture levels to determine the ideal harvest window. This means
          higher-quality crops, less spoilage, and better market pricing — all
          powered by precision and automation.
        </p>
      </motion.div>

      {/* Image */}
      <motion.div
        className="lg:w-1/2"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <img
          src="/public/Who's afraid of yellow and blue_.jpeg"
          alt="AI-powered agriculture"
          className="w-full h-auto rounded-xl shadow-lg"
        />
      </motion.div>
    </section>
  );
};

export default Section2;
