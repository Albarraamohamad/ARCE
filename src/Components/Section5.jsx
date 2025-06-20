import React from 'react';
import { motion } from 'framer-motion';

const Section5 = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-16 gap-10 bg-[#f5f5f5] text-gray-900">
      
      {/* Text Content */}
      <motion.div
        className="lg:w-1/2"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-green-700">
          AI-Powered Weather Forecasting
        </h2>
        <p className="text-base sm:text-lg leading-relaxed mb-4">
          Modern agriculture depends heavily on weather — and AI helps make it predictable. Using real-time climate data and machine learning, farmers can now receive highly accurate, localized forecasts.
        </p>
        <p className="text-base sm:text-lg leading-relaxed mb-6">
          This enables smarter irrigation planning, pest control, and crop protection decisions — increasing resilience and reducing losses due to weather surprises.
        </p>
        <button className="mt-4 bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition duration-300">
          Get Forecast
        </button>
      </motion.div>

      {/* Image Content */}
      <motion.div
        className="lg:w-1/2"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <img
          src="/public/pexels-brett-sayles-1021366.jpg"
          alt="AI Weather Forecast"
          className="rounded-xl shadow-lg w-full h-auto object-cover"
        />
      </motion.div>
    </section>
  );
};

export default Section5;
