import React from 'react';
import { motion } from 'framer-motion';

const Section4 = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-20 py-16 gap-10 bg-white text-gray-800">
      
      {/* Text */}
      <motion.div
        className="lg:w-1/2"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-green-700">
          Transforming Agriculture with AI
        </h2>
        <p className="text-base sm:text-lg leading-relaxed mb-4">
          Artificial Intelligence is changing the way we farm. With smart sensors, satellite data, and machine learning, farmers can now make more precise decisions.
        </p>
        <p className="text-base sm:text-lg leading-relaxed mb-6">
          AI helps improve crop yield, reduce waste, automate irrigation, and detect diseases early — all while saving time and resources.
        </p>
        <button className="mt-4 bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition duration-300">
          Learn More
        </button>
      </motion.div>

      {/* Images */}
     <motion.div
  className="lg:w-1/2 grid grid-cols-2 gap-4"
  initial={{ x: 100, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  transition={{ duration: 1 }}
  viewport={{ once: true, amount: 0.3 }}
>
  <img src="/public/Quadcopter_camera_drone_in_flight.jpg" alt="Drone" className="rounded-xl shadow-lg w-full h-auto object-cover" />
  <img src="/public/pexels-pixabay-41006.jpg" alt="Satellite" className="rounded-xl shadow-lg w-full h-auto object-cover" />
  <img src="/public/pexels-fotios-photos-1301856.jpg" alt="Soil" className="rounded-xl shadow-lg w-full h-auto object-cover" />
  <img src="/public/pexels-david-bartus-43782-2072553.jpg" alt="Irrigation" className="rounded-xl shadow-lg w-full h-auto object-cover" />
</motion.div>
    </section>
  );
};

export default Section4;
