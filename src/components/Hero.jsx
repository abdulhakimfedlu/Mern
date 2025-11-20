// src/components/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-br from-primary-dark via-black to-primary-dark">
      {/* Static Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary-red/20 to-primary-gold/30" />

      {/* Subtle Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

      {/* Main Content Layout */}
      <div className="relative z-10 flex items-start justify-center h-full px-6 pt-16">
        <div className="max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Text Content */}
            <div className="text-center lg:text-left pt-24">
              <div className="mb-8">
                <h1
                  className="text-6xl md:text-8xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-gold via-white to-primary-red mb-4 tracking-tight"
                  style={{
                    fontFamily: "'Playfair Display', serif"
                  }}
                >
                  ÉCLAT
                </h1>
                <div className="h-1 w-32 bg-gradient-to-r from-transparent via-primary-gold to-transparent mx-auto lg:mx-0 rounded-full" />
              </div>

              <p className="text-xl md:text-2xl mb-12 text-gray-200 font-light tracking-wide leading-relaxed">
                Where Culinary Art Meets Extraordinary Experience
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center">
                <button className="bg-gradient-to-r from-primary-gold to-yellow-600 hover:from-yellow-600 hover:to-primary-gold text-primary-dark px-10 py-5 rounded-full font-bold text-xl transition-colors duration-300 shadow-lg">
                  Explore Menu
                </button>

                <button className="border-2 border-primary-gold text-primary-gold hover:bg-primary-gold hover:text-primary-dark px-10 py-5 rounded-full font-bold text-xl transition-colors duration-300">
                  Reserve Table
                </button>
              </div>
            </div>

            {/* 3D Photo Layout - Better Separated */}
            <div className="relative flex justify-center lg:justify-end mt-24 lg:mt-32">
              <div className="relative w-full max-w-3xl h-[500px] md:h-[550px]" style={{ perspective: '1200px' }}>

                {/* Top Left Photo - White & Golden Border */}
                <div
                  className="absolute top-0 left-6 w-72 h-52 md:w-80 md:h-60 transition-all duration-300 hover:translate-y-[-10px] hover:rotate-[-3deg] hover:scale-105 cursor-pointer group"
                  style={{
                    transform: 'rotateY(-12deg) rotateX(8deg)',
                    transformStyle: 'preserve-3d',
                    zIndex: 2
                  }}
                >
                  <div className="relative w-full h-full rounded-xl overflow-hidden border-4 border-white shadow-xl group-hover:shadow-2xl group-hover:border-primary-gold transition-all duration-300">
                    <img
                      src="/card1.jpg"
                      alt="Éclat Experience 1"
                      className="w-full h-full object-cover group-hover:brightness-110 group-hover:contrast-105 transition-all duration-300"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/10 group-hover:to-primary-gold/10 transition-all duration-300"></div>
                    <div className="absolute inset-0 bg-white/0 group-hover:bg-primary-gold/5 transition-all duration-300"></div>
                  </div>
                </div>

                {/* Top Right Photo - White & Golden Border */}
                <div
                  className="absolute top-0 right-6 w-72 h-52 md:w-80 md:h-60 transition-all duration-300 hover:translate-y-[-10px] hover:rotate-[3deg] hover:scale-105 cursor-pointer group"
                  style={{
                    transform: 'rotateY(12deg) rotateX(8deg)',
                    transformStyle: 'preserve-3d',
                    zIndex: 2
                  }}
                >
                  <div className="relative w-full h-full rounded-xl overflow-hidden border-4 border-white shadow-xl group-hover:shadow-2xl group-hover:border-primary-gold transition-all duration-300">
                    <img
                      src="/card2.jpg"
                      alt="Éclat Experience 2"
                      className="w-full h-full object-cover group-hover:brightness-110 group-hover:contrast-105 transition-all duration-300"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-bl from-transparent to-white/10 group-hover:to-primary-gold/10 transition-all duration-300"></div>
                    <div className="absolute inset-0 bg-white/0 group-hover:bg-primary-gold/5 transition-all duration-300"></div>
                  </div>
                </div>

                {/* Bottom Center Photo - White & Golden Border */}
                <div
                  className="absolute top-32 md:top-36 left-1/2 transform -translate-x-1/2 w-80 h-56 md:w-88 md:h-64 transition-all duration-300 hover:translate-y-[-12px] hover:scale-110 cursor-pointer group"
                  style={{
                    transform: 'translateX(-50%) rotateX(-15deg) translateZ(25px)',
                    transformStyle: 'preserve-3d',
                    zIndex: 3
                  }}
                >
                  <div className="relative w-full h-full rounded-xl overflow-hidden border-4 border-white shadow-2xl group-hover:shadow-3xl group-hover:border-primary-gold transition-all duration-300">
                    <img
                      src="/card3.jpg"
                      alt="Éclat Experience 3"
                      className="w-full h-full object-cover group-hover:brightness-110 group-hover:contrast-105 transition-all duration-300"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/10 group-hover:to-primary-gold/10 transition-all duration-300"></div>
                    <div className="absolute inset-0 bg-white/0 group-hover:bg-primary-gold/5 transition-all duration-300"></div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;