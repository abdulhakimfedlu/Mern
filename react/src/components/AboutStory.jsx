// src/components/AboutStory.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutStory = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary-dark via-black to-primary-dark overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary-gold/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary-red/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
      </div>

      {/* Decorative Lines */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-32 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-gold to-transparent" />
        <div className="absolute bottom-32 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-gold to-transparent" />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-7xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-gold via-white to-primary-gold mb-6 tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            OUR STORY
          </h2>
          <div className="h-1 w-48 bg-gradient-to-r from-transparent via-primary-gold to-transparent mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Enhanced Image Gallery */}
            <motion.div
              ref={ref}
              className="relative"
              initial={{ opacity: 0, x: -100 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="relative" style={{ perspective: '1000px' }}>
                {/* Main Image */}
                <div
                  className="relative w-full h-96 md:h-[500px] rounded-2xl overflow-hidden border-4 border-white shadow-2xl group cursor-pointer"
                  style={{ transform: 'rotateY(-5deg) rotateX(2deg)' }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Restaurant Interior"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-primary-gold/10 group-hover:from-black/20 transition-all duration-500" />
                </div>

                {/* Floating Secondary Image */}
                <div
                  className="absolute -top-8 -right-8 w-48 h-32 md:w-64 md:h-40 rounded-xl overflow-hidden border-3 border-primary-gold shadow-xl"
                  style={{ transform: 'rotateY(15deg) rotateX(-5deg) translateZ(50px)' }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                    alt="Chef at work"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary-gold/20" />
                </div>

                {/* Floating Third Image */}
                <div
                  className="absolute -bottom-6 -left-6 w-40 h-28 md:w-52 md:h-36 rounded-xl overflow-hidden border-3 border-white shadow-xl"
                  style={{ transform: 'rotateY(-15deg) rotateX(5deg) translateZ(30px)' }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                    alt="Signature dish"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tl from-transparent to-white/20" />
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-primary-gold rounded-full animate-ping" />
                <div className="absolute top-20 right-20 w-1 h-1 bg-white rounded-full animate-pulse" />
                <div className="absolute bottom-20 left-20 w-1 h-1 bg-primary-gold rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>
            </motion.div>

            {/* Enhanced Text Content */}
            <motion.div
              className="text-white space-y-8"
              initial={{ opacity: 0, x: 100 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              {/* Story Text */}
              <div className="space-y-6">
                <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light">
                  Founded in <span className="text-primary-gold font-semibold">2010</span>, Éclat emerged from a simple dream: to create an unforgettable dining experience where every detail matters.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Our journey began in a small Parisian kitchen and has since evolved into a culinary destination celebrated worldwide. Led by <span className="text-primary-gold">Michelin-starred Chef Antoine Moreau</span>, our team combines traditional techniques with innovative approaches.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-6 py-8">
                <div className="text-center group cursor-pointer">
                  <div className="bg-gradient-to-br from-primary-gold/20 to-primary-gold/5 rounded-2xl p-6 border border-primary-gold/30 group-hover:border-primary-gold/60 transition-all duration-300">
                    <h4 className="text-primary-gold text-4xl font-black mb-2 group-hover:scale-110 transition-transform duration-300">13+</h4>
                    <p className="text-gray-400 text-sm uppercase tracking-wider">Years Excellence</p>
                  </div>
                </div>
                <div className="text-center group cursor-pointer">
                  <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 border border-white/30 group-hover:border-white/60 transition-all duration-300">
                    <h4 className="text-white text-4xl font-black mb-2 group-hover:scale-110 transition-transform duration-300">50+</h4>
                    <p className="text-gray-400 text-sm uppercase tracking-wider">Awards Won</p>
                  </div>
                </div>
                <div className="text-center group cursor-pointer">
                  <div className="bg-gradient-to-br from-primary-red/20 to-primary-red/5 rounded-2xl p-6 border border-primary-golden/30 group-hover:border-primary-red/60 transition-all duration-300">
                    <h4 className="text-primary-red text-4xl font-black mb-2 group-hover:scale-110 transition-transform duration-300">★★★</h4>
                    <p className="text-gray-400 text-sm uppercase tracking-wider">Michelin Stars</p>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button className="bg-gradient-to-r from-primary-gold to-yellow-600 hover:from-yellow-600 hover:to-primary-gold text-primary-dark px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg shadow-primary-gold/30 hover:shadow-primary-gold/50 hover:scale-105">
                  Discover Our Journey
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-primary-dark px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105">
                  Meet Our Chef
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Decorative Quote */}
        <motion.div
          className="text-center mt-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <blockquote className="text-2xl md:text-3xl font-light text-gray-300 italic leading-relaxed">
            "Every dish tells a story, every flavor creates a memory, and every moment at Éclat becomes part of your culinary journey."
          </blockquote>
          <cite className="block mt-6 text-primary-gold font-semibold text-lg">— Chef Antoine Moreau</cite>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutStory;