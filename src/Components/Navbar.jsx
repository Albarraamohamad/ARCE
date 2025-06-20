import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react'; // optional icon library

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="px-15 py-5 text-white"
    >
      <div className="flex justify-between items-center">
        <h1>ARCE</h1>

        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className="hidden lg:flex space-x-10">
          <Link>Product</Link>
          <Link>Use Cases</Link>
          <Link>Case Studies</Link>
          <Link>Pricing</Link>
          <Link>Blog</Link>
        </div>

        <div className="hidden lg:block">
          <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-lg hover:bg-white/20 transition duration-300">
            Contact Us
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col items-start mt-5 space-y-3 lg:hidden">
          <Link>Product</Link>
          <Link>Use Cases</Link>
          <Link>Case Studies</Link>
          <Link>Pricing</Link>
          <Link>Blog</Link>
          <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-lg hover:bg-white/20 transition duration-300">
            Contact Us
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default Navbar;
