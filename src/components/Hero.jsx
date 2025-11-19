// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden bg-primary-dark">
      {/* Background Images with Diagonal Split */}
      <div className="absolute inset-0 flex">
        <div className="relative w-1/2">
          <div 
            className="absolute inset-0 bg-cover bg-center transform -skew-x-6 origin-right"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
              clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)'
            }}
          />
        </div>
        <div className="relative w-1/2">
          <div 
            className="absolute inset-0 bg-cover bg-center transform skew-x-6 origin-left"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80")',
              clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)'
            }}
          />
        </div>
      </div>

      {/* Animated Overlay Shapes */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-8 h-8 border-2 border-primary-gold rounded-full shape-float"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-3/4 right-1/3 w-12 h-12 border border-primary-gold shape-float delay-200"
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-6 h-6 border border-primary-red shape-float delay-400"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-serif font-bold mb-6 text-white"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            ÉCLAT
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-primary-gold font-light tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Savor the Flavors Like Never Before
          </motion.p>
          <motion.button
            className="bg-primary-red hover:bg-red-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Menu
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary-gold rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-gold rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;