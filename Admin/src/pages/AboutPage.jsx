// src/pages/AboutPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AboutPage = () => {

  return (
    <div className="pt-32">
      {/* Hero Section - Redesigned */}
      <section className="relative min-h-screen bg-gradient-to-br from-primary-dark via-black to-primary-brown overflow-hidden flex items-center">
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary-gold/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-white/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-red/5 rounded-full blur-2xl" />
        </div>

        {/* Decorative Lines */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-32 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-gold to-transparent" />
          <div className="absolute bottom-32 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-gold to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1
              className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-gold via-white to-primary-gold mb-8 tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              OUR STORY
            </h1>
            <div className="h-1 w-64 bg-gradient-to-r from-transparent via-primary-gold to-transparent mx-auto rounded-full mb-8" />
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light max-w-4xl mx-auto">
              From a humble Parisian kitchen to a world-renowned culinary destination,
              <span className="text-primary-gold font-medium"> Éclat </span>
              represents the pinnacle of gastronomic excellence and unforgettable experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Simple Philosophy Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-brown via-primary-dark to-black">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <blockquote className="text-2xl md:text-3xl font-light text-gray-200 italic leading-relaxed mb-8">
              "Our philosophy is simple: source the finest ingredients, treat them with respect, and transform them into dishes that tell a story and create lasting memories."
            </blockquote>
            <cite className="block text-primary-gold font-semibold text-xl">— Chef Antoine Moreau, Founder</cite>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary-brown via-primary-dark to-black overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-gold/8 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Decorative Lines */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-32 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-gold to-transparent" />
          <div className="absolute bottom-32 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-gold to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-gold via-white to-primary-gold mb-6 tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              OUR VALUES
            </h2>
            <div className="h-1 w-48 bg-gradient-to-r from-transparent via-primary-gold to-transparent mx-auto rounded-full mb-6" />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              The principles that guide every decision we make and every dish we create
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Sustainable Sourcing */}
              <motion.div
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative h-full bg-gradient-to-br from-primary-gold/10 to-primary-gold/5 rounded-3xl p-8 border border-primary-gold/30 group-hover:border-primary-gold/60 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary-gold/20">
                  {/* Decorative Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary-gold rounded-full flex items-center justify-center text-primary-dark font-black text-xl shadow-lg">
                    01
                  </div>

                  {/* Content */}
                  <div className="pt-4">
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-6 group-hover:text-primary-gold transition-colors duration-300" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Sustainable Sourcing
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-lg mb-6 group-hover:text-gray-200 transition-colors duration-300">
                      We partner with local farmers and sustainable fisheries to ensure the highest quality ingredients while supporting our community and protecting our environment.
                    </p>

                    {/* Feature List */}
                    <ul className="space-y-3">
                      <li className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        <div className="w-2 h-2 bg-primary-gold rounded-full mr-3 flex-shrink-0"></div>
                        Local farm partnerships
                      </li>
                      <li className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        <div className="w-2 h-2 bg-primary-gold rounded-full mr-3 flex-shrink-0"></div>
                        Seasonal menu rotation
                      </li>
                      <li className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        <div className="w-2 h-2 bg-primary-gold rounded-full mr-3 flex-shrink-0"></div>
                        Zero-waste commitment
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Culinary Innovation */}
              <motion.div
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="relative h-full bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 border border-white/30 group-hover:border-white/60 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-white/20">
                  {/* Decorative Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary-dark font-black text-xl shadow-lg">
                    02
                  </div>

                  {/* Content */}
                  <div className="pt-4">
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-6 group-hover:text-white transition-colors duration-300" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Culinary Innovation
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-lg mb-6 group-hover:text-gray-200 transition-colors duration-300">
                      Blending traditional French techniques with modern creativity to create dishes that surprise and delight, pushing the boundaries of gastronomy.
                    </p>

                    {/* Feature List */}
                    <ul className="space-y-3">
                      <li className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        <div className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></div>
                        Modern techniques
                      </li>
                      <li className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        <div className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></div>
                        Creative presentations
                      </li>
                      <li className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        <div className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></div>
                        Flavor experimentation
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Exceptional Service */}
              <motion.div
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="relative h-full bg-gradient-to-br from-primary-gold/15 to-primary-gold/5 rounded-3xl p-8 border border-primary-gold/30 group-hover:border-primary-gold/60 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary-gold/20">
                  {/* Decorative Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary-gold rounded-full flex items-center justify-center text-primary-dark font-black text-xl shadow-lg">
                    03
                  </div>

                  {/* Content */}
                  <div className="pt-4">
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-6 group-hover:text-primary-gold transition-colors duration-300" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Exceptional Service
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-lg mb-6 group-hover:text-gray-200 transition-colors duration-300">
                      Every guest receives personalized attention and service that anticipates their needs, creating memorable experiences that extend beyond the meal.
                    </p>

                    {/* Feature List */}
                    <ul className="space-y-3">
                      <li className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        <div className="w-2 h-2 bg-primary-gold rounded-full mr-3 flex-shrink-0"></div>
                        Personalized attention
                      </li>
                      <li className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        <div className="w-2 h-2 bg-primary-gold rounded-full mr-3 flex-shrink-0"></div>
                        Anticipatory service
                      </li>
                      <li className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        <div className="w-2 h-2 bg-primary-gold rounded-full mr-3 flex-shrink-0"></div>
                        Memorable experiences
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Quote */}
          <motion.div
            className="text-center mt-20 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <blockquote className="text-xl md:text-2xl font-light text-gray-300 italic leading-relaxed">
              "Our values are not just words on a wall—they are the foundation of every decision, every dish, and every moment we share with our guests."
            </blockquote>
            <cite className="block mt-6 text-primary-gold font-semibold text-lg">— The Éclat Team</cite>
          </motion.div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-20 bg-primary-brown">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-bold mb-6 text-white">
              Experience the Éclat Difference
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join us for an unforgettable dining experience that will delight all your senses
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/menu">
                <motion.button
                  className="bg-gradient-to-r from-primary-gold to-yellow-600 hover:from-yellow-600 hover:to-primary-gold text-primary-dark px-10 py-5 rounded-full font-bold text-xl transition-colors duration-300 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Our Menu
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  className="border-2 border-primary-gold text-primary-gold hover:bg-primary-gold hover:text-primary-dark px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;