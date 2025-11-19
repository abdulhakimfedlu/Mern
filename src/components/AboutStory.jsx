// src/components/AboutStory.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutStory = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  return (
    <section className="py-20 bg-primary-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary-gold rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-red rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image Section */}
          <motion.div
            ref={ref}
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Restaurant Interior"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-64 h-64 border-4 border-primary-gold rounded-2xl transform rotate-12" />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="text-white"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className="text-5xl font-serif font-bold mb-6">Our Story</h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Founded in 2010, Éclat emerged from a simple dream: to create an unforgettable 
              dining experience where every detail matters. Our journey began in a small 
              Parisian kitchen and has since evolved into a culinary destination celebrated 
              worldwide.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Led by Michelin-starred Chef Antoine Moreau, our team combines traditional 
              techniques with innovative approaches, sourcing only the finest seasonal 
              ingredients from local artisans and global purveyors.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="text-primary-gold text-3xl font-bold mb-2">13+</h4>
                <p className="text-gray-400">Years of Excellence</p>
              </div>
              <div>
                <h4 className="text-primary-gold text-3xl font-bold mb-2">50+</h4>
                <p className="text-gray-400">Awards Worldwide</p>
              </div>
            </div>

            <button className="border-2 border-primary-gold text-primary-gold hover:bg-primary-gold hover:text-primary-dark px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;