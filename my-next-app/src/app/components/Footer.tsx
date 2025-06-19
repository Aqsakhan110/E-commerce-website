'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111827] text-white px-6 py-12 border-t border-[#1f2937] overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10"
      >
        {/* Logo & Description */}
        <div>
          <motion.h2
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-extrabold text-[#3b82f6] mb-4"
          >
            Giggle Mart
          </motion.h2>
          <p className="text-sm text-gray-300">
            Step into GiggleMart — your curated electronics, fashion & home décor hub with fast delivery.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-[#3b82f6] mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-white transition-colors">About</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Products</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold text-[#3b82f6] mb-4">Resources</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms of Use</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
          </ul>
        </div>

        {/* Newsletter - aligned more to the left */}
        <div>
          <h3 className="text-lg font-semibold text-[#3b82f6] mb-4">Newsletter</h3>
          <p className="text-sm text-gray-300 mb-3">
            Get eco-updates and special offers right to your inbox.
          </p>
          <motion.form
            whileHover={{ scale: 1.02 }}
            className="flex flex-col sm:flex-row gap-3 w-full"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-600 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-[#3b82f6]"
            />
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ backgroundColor: '#2563eb' }}
              type="submit"
              className="bg-[#3b82f6] hover:bg-[#2563eb] text-white px-5 py-2 rounded-md transition-all duration-300 shadow-md font-medium whitespace-nowrap"
            >
              Subscribe
            </motion.button>
          </motion.form>
        </div>
      </motion.div>

      {/* Bottom Text */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} GreenSteps. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
