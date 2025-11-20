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
            <div className="text-center lg:text-left pt-8">
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
                <button className="bg-gradient-to-r from-primary-red to-red-700 hover:from-red-700 hover:to-red-900 text-white px-10 py-5 rounded-full font-bold text-xl transition-colors duration-300 shadow-lg">
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

                {/* Top Left Photo - More Separated */}
                <div
                  className="absolute top-0 left-0 w-60 h-44 md:w-68 md:h-50 transition-all duration-300 hover:translate-y-[-10px] hover:rotate-[-3deg] hover:scale-105 cursor-pointer group"
                  style={{
                    transform: 'rotateY(-12deg) rotateX(8deg)',
                    transformStyle: 'preserve-3d',
                    zIndex: 2
                  }}
                >
                  <div className="relative w-full h-full rounded-xl overflow-hidden border-4 border-white shadow-xl group-hover:shadow-2xl group-hover:border-white/90 transition-all duration-300">
                    <img
                      src="/card1.jpg"
                      alt="Éclat Experience 1"
                      className="w-full h-full object-cover group-hover:brightness-110 group-hover:contrast-105 transition-all duration-300"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10 group-hover:to-black/5 transition-all duration-300"></div>
                    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-all duration-300"></div>
                  </div>
                </div>

                {/* Top Right Photo - More Separated */}
                <div
                  className="absolute top-0 right-0 w-60 h-44 md:w-68 md:h-50 transition-all duration-300 hover:translate-y-[-10px] hover:rotate-[3deg] hover:scale-105 cursor-pointer group"
                  style={{
                    transform: 'rotateY(12deg) rotateX(8deg)',
                    transformStyle: 'preserve-3d',
                    zIndex: 2
                  }}
                >
                  <div className="relative w-full h-full rounded-xl overflow-hidden border-4 border-primary-gold shadow-xl group-hover:shadow-2xl group-hover:border-primary-gold/90 transition-all duration-300">
                    <img
                      src="/card2.jpg"
                      alt="Éclat Experience 2"
                      className="w-full h-full object-cover group-hover:brightness-110 group-hover:contrast-105 transition-all duration-300"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-bl from-transparent to-primary-gold/10 group-hover:to-primary-gold/5 transition-all duration-300"></div>
                    <div className="absolute inset-0 bg-primary-gold/0 group-hover:bg-primary-gold/5 transition-all duration-300"></div>
                  </div>
                </div>

                {/* Bottom Center Photo - More Separated */}
                <div
                  className="absolute top-36 md:top-40 left-1/2 transform -translate-x-1/2 w-68 h-48 md:w-76 md:h-56 transition-all duration-300 hover:translate-y-[-12px] hover:scale-110 cursor-pointer group"
                  style={{
                    transform: 'translateX(-50%) rotateX(-15deg) translateZ(25px)',
                    transformStyle: 'preserve-3d',
                    zIndex: 3
                  }}
                >
                  <div className="relative w-full h-full rounded-xl overflow-hidden border-4 border-primary-red shadow-2xl group-hover:shadow-3xl group-hover:border-primary-red/90 transition-all duration-300">
                    <img
                      src="/card3.jpg"
                      alt="Éclat Experience 3"
                      className="w-full h-full object-cover group-hover:brightness-110 group-hover:contrast-105 transition-all duration-300"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent to-primary-red/10 group-hover:to-primary-red/5 transition-all duration-300"></div>
                    <div className="absolute inset-0 bg-primary-red/0 group-hover:bg-primary-red/5 transition-all duration-300"></div>
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