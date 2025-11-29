// src/components/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-primary-dark flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary-dark to-primary-dark opacity-90" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-red/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-primary-gold/5 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-block mb-6 px-4 py-1.5 border border-primary-gold/30 rounded-full bg-primary-gold/5 backdrop-blur-sm">
              <span className="text-primary-gold text-sm font-medium tracking-wider uppercase">
                Experience Fine Dining
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-primary-light mb-6 leading-tight tracking-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-gold via-white to-primary-gold bg-300% animate-gradient">
                ÉCLAT
              </span>
              <span className="block text-3xl md:text-5xl font-light text-primary-light/80 mt-2 font-serif italic">
                Taste the Extraordinary
              </span>
            </h1>

            <p className="text-lg md:text-xl text-primary-light/70 mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Immerse yourself in a symphony of flavors where culinary artistry meets an unforgettable atmosphere.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <button className="px-8 py-4 bg-primary-gold text-primary-dark font-bold rounded-full hover:bg-white transition-colors duration-300 shadow-lg shadow-primary-gold/20">
                Explore Menu
              </button>
              <button className="px-8 py-4 border border-primary-light/20 text-primary-light font-medium rounded-full hover:bg-primary-light/10 transition-colors duration-300 backdrop-blur-sm">
                Book a Table
              </button>
            </div>
          </div>

          {/* Image Composition */}
          <div className="relative order-1 lg:order-2 h-[500px] md:h-[600px] w-full flex items-center justify-center lg:justify-end">

            {/* Main Large Image */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3/4 h-3/4 z-10 rounded-2xl overflow-hidden shadow-2xl border border-primary-light/10 group">
              <div className="absolute inset-0 bg-primary-dark/20 group-hover:bg-transparent transition-colors duration-500" />
              <img
                src="/card1.jpg"
                alt="Signature Dish"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Top Floating Image */}
            <div className="absolute top-0 left-0 w-1/2 h-1/2 z-20 rounded-2xl overflow-hidden shadow-xl border border-primary-light/10 transform hover:-translate-y-2 transition-transform duration-500">
              <img
                src="/card2.jpg"
                alt="Chef Detail"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom Floating Image */}
            <div className="absolute bottom-10 left-10 w-6/12 h-5/12 z-30 rounded-2xl overflow-hidden shadow-xl border border-primary-light/10 transform hover:translate-y-2 transition-transform duration-500">
              <img
                src="/card3.jpg"
                alt="Ambiance"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 top-1/2 right-1/4 w-64 h-64 bg-primary-gold/20 rounded-full blur-3xl" />
            <div className="absolute -z-10 bottom-0 left-0 w-48 h-48 bg-primary-red/20 rounded-full blur-3xl" />

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;