import React from 'react';
import { motion } from 'framer-motion';

const Section1 = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between px-6 lg:px-20 py-10 gap-10">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h1 className="text-4xl sm:text-6xl">12-15%</h1>
        <p className="text-lg sm:text-xl mt-2">Bales hit ideal moisture range</p>
        <p>
          Cut hay at peak timing to avoid over-drying or <br />
          spoilage during storage. AI predicts when <br />
          moisture hits the sweet spot for baling.
        </p>
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h1 className="text-4xl sm:text-6xl">14%</h1>
        <p className="text-lg sm:text-xl mt-2">Protein level increase</p>
        <p>
          Track crop maturity with precision to harvest <br />
          when nutrient density is at its highest, <br />
          improving quality and market value.
        </p>
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h1 className="text-4xl sm:text-6xl">$122,500</h1>
        <p className="text-lg sm:text-xl mt-2">Added revenue from higher-quality</p>
        <p>
          More frequent and better-timed cutting <br />
          translates into premium-grade hay, stronger <br />
          regrowth, and higher overall output.
        </p>
      </motion.div>
    </div>
  );
};

export default Section1;
