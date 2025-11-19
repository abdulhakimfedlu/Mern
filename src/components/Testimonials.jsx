// src/components/Testimonials.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Food Critic, Epicurean Magazine",
    text: "Éclat redefines fine dining. Every dish is a masterpiece, and the service is impeccable. An unforgettable culinary journey.",
    rating: 5
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "Restaurant Investor",
    text: "The attention to detail is extraordinary. From the ambiance to the wine pairing, every element is perfectly curated.",
    rating: 5
  },
  {
    id: 3,
    name: "Eleanor Williams",
    role: "Michelin Guide Inspector",
    text: "A true gastronomic delight. Chef Moreau's innovative approach while respecting tradition is remarkable.",
    rating: 5
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-primary-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary-brown to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary-brown to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-serif font-bold mb-4 text-white">Guest Experiences</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Hear what our esteemed guests have to say about their time at Éclat
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="bg-primary-brown rounded-2xl p-8 shadow-2xl border border-primary-gold border-opacity-20"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-primary-gold text-2xl mb-4">
                {"★".repeat(testimonials[currentIndex].rating)}
              </div>
              <p className="text-xl text-gray-300 italic mb-6 leading-relaxed">
                "{testimonials[currentIndex].text}"
              </p>
              <div className="text-right">
                <h4 className="text-white text-lg font-semibold">{testimonials[currentIndex].name}</h4>
                <p className="text-primary-gold">{testimonials[currentIndex].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 border-2 border-primary-gold text-primary-gold rounded-full flex items-center justify-center hover:bg-primary-gold hover:text-primary-dark transition-all duration-300"
            >
              ←
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 border-2 border-primary-gold text-primary-gold rounded-full flex items-center justify-center hover:bg-primary-gold hover:text-primary-dark transition-all duration-300"
            >
              →
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-primary-gold' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;