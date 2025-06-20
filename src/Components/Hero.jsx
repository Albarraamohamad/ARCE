import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import "../App.css";

const Hero = () => {
  return (
    <div className="hero h-[90vh]">
      <Navbar />

      <main className="flex flex-col lg:flex-row justify-between px-0 lg:px-15 text-white items-center ">
        {/* Left Side Animation */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="h1 py-10 text-7xl sm:text-5xl md:text-7xl lg:text-9xl text-white">
            AI-Powered <br /> Timing
          </h1>

          <div className="text-black mt-10">
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white py-2 px-5 rounded-full mr-5 mb-5 hover:bg-amber-100 duration-500 hover:-translate-y-3 cursor-pointer"
            >
              Blue ridge
            </motion.button>
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white py-2 px-5 rounded-full hover:bg-amber-100 duration-500 hover:-translate-y-3 cursor-pointer"
            >
              1200 Acres
            </motion.button>
            <br />
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white py-2 px-5 rounded-full hover:bg-amber-100 duration-500 hover:-translate-y-3 cursor-pointer"
            >
              Hay Operation
            </motion.button>
          </div>
        </motion.div>

        {/* Right Side Animation */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mr-12"
        >
          <p className="mt-10 text-lg sm:text-xl ">
            AI recommended optimal cutting dates
          </p>
          <div className="mt-16">
            <p className="p mb-1 mt-10 text-lg sm:text-2xl font-semibold">
              Never miss the ideal <br />
              harvest window
            </p>
            <p className="text-sm sm:text-md text-gray-100">
              Monitor growth rate, plant moisture, and <br />
              weather forecasts using satellite data
            </p>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Hero;
