import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <motion.footer
      className="bg-[#0f172a] text-white px-6 lg:px-20 py-10 mt-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between gap-10">
        {/* Left - Branding */}
        <div>
          <h2 className="text-2xl font-bold text-green-400 mb-3">AgroAI</h2>
          <p className="text-gray-300 text-sm">
            Empowering smarter farming with AI technology.  
            Real-time insights, accurate predictions, and automated efficiency.
          </p>
        </div>

        {/* Middle - Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="#hero" className="hover:text-green-400">Home</a></li>
            <li><a href="#section2" className="hover:text-green-400">Technology</a></li>
            <li><a href="#section3" className="hover:text-green-400">Solutions</a></li>
            <li><a href="#contact" className="hover:text-green-400">Contact</a></li>
          </ul>
        </div>

        {/* Right - Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-4 text-xl text-green-400">
            <a href="#" className="hover:text-white"><FaFacebookF /></a>
            <a href="#" className="hover:text-white"><FaTwitter /></a>
            <a href="#" className="hover:text-white"><FaInstagram /></a>
            <a href="#" className="hover:text-white"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} AgroAI. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
