// src/pages/AboutPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Antoine Moreau",
      role: "Executive Chef & Founder",
      image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      bio: "With over 20 years of culinary experience and 3 Michelin stars, Chef Moreau brings French culinary artistry to every dish."
    },
    {
      name: "Isabella Rossi",
      role: "Head Sommelier",
      image: "https://images.unsplash.com/photo-1541614101331-41a2fec97f17?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      bio: "Award-winning sommelier with expertise in wine pairings that elevate the dining experience to new heights."
    },
    {
      name: "Marcus Chen",
      role: "Pastry Chef",
      image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      bio: "Master of desserts and pastries, creating sweet masterpieces that are as beautiful as they are delicious."
    }
  ];

  const values = [
    {
      icon: "🌱",
      title: "Sustainable Sourcing",
      description: "We partner with local farmers and sustainable fisheries to ensure the highest quality ingredients while supporting our community."
    },
    {
      icon: "🎨",
      title: "Culinary Innovation",
      description: "Blending traditional techniques with modern creativity to create dishes that surprise and delight."
    },
    {
      icon: "💫",
      title: "Exceptional Service",
      description: "Every guest receives personalized attention and service that anticipates their needs before they even ask."
    }
  ];

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
              className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-gold via-white to-primary-gold mb-8 tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              OUR STORY
            </h1>
            <div className="h-1 w-64 bg-gradient-to-r from-transparent via-primary-gold to-transparent mx-auto rounded-full mb-8" />
            <p className="text-2xl md:text-3xl text-gray-200 leading-relaxed font-light max-w-4xl mx-auto">
              From a humble Parisian kitchen to a world-renowned culinary destination, 
              <span className="text-primary-gold font-medium"> Éclat </span>
              represents the pinnacle of gastronomic excellence and unforgettable experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Enhanced History Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary-brown via-primary-dark to-black overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary-gold/8 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Enhanced Image Gallery */}
              <motion.div
                className="relative order-2 lg:order-1"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <div className="relative" style={{ perspective: '1000px' }}>
                  {/* Main Image */}
                  <div 
                    className="relative w-full h-96 md:h-[500px] rounded-2xl overflow-hidden border-4 border-white shadow-2xl group cursor-pointer"
                    style={{ transform: 'rotateY(5deg) rotateX(-2deg)' }}
                  >
                    <img 
                      src="https://images.unsplash.com/photo-1559329007-40df8a9345d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                      alt="Restaurant History"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-primary-gold/10 group-hover:from-black/20 transition-all duration-500" />
                  </div>

                  {/* Floating Secondary Image */}
                  <div 
                    className="absolute -top-8 -left-8 w-48 h-32 md:w-64 md:h-40 rounded-xl overflow-hidden border-3 border-primary-gold shadow-xl"
                    style={{ transform: 'rotateY(-15deg) rotateX(5deg) translateZ(50px)' }}
                  >
                    <img 
                      src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                      alt="Restaurant interior"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary-gold/20" />
                  </div>

                  {/* Floating Third Image */}
                  <div 
                    className="absolute -bottom-6 -right-6 w-40 h-28 md:w-52 md:h-36 rounded-xl overflow-hidden border-3 border-white shadow-xl"
                    style={{ transform: 'rotateY(15deg) rotateX(-5deg) translateZ(30px)' }}
                  >
                    <img 
                      src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                      alt="Chef Antoine"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tl from-transparent to-white/20" />
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-primary-gold rounded-full animate-ping" />
                </div>
              </motion.div>

              {/* Enhanced Text Content */}
              <motion.div
                className="text-white space-y-8 order-1 lg:order-2"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div>
                  <h2 
                    className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-primary-gold to-white mb-8 tracking-tight"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    A Legacy of Excellence
                  </h2>
                  <div className="h-1 w-32 bg-gradient-to-r from-transparent via-primary-gold to-transparent rounded-full mb-8" />
                </div>

                {/* Story Timeline */}
                <div className="space-y-8">
                  <div className="relative pl-8 border-l-2 border-primary-gold/30">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-primary-gold rounded-full"></div>
                    <div className="bg-gradient-to-br from-primary-gold/10 to-primary-gold/5 rounded-2xl p-6 border border-primary-gold/20">
                      <h4 className="text-primary-gold font-bold text-lg mb-2">2010 - The Beginning</h4>
                      <p className="text-gray-300 leading-relaxed">
                        Founded by Chef Antoine Moreau, Éclat began as a small 30-seat restaurant in the heart of Paris. Our name, meaning "brilliance," reflects our commitment to creating moments of pure culinary magic.
                      </p>
                    </div>
                  </div>

                  <div className="relative pl-8 border-l-2 border-white/30">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-white rounded-full"></div>
                    <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 border border-white/20">
                      <h4 className="text-white font-bold text-lg mb-2">2013-2016 - Recognition</h4>
                      <p className="text-gray-300 leading-relaxed">
                        Within just three years, we earned our first Michelin star, followed by two more in subsequent years, establishing ourselves as a culinary destination.
                      </p>
                    </div>
                  </div>

                  <div className="relative pl-8">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-primary-red rounded-full"></div>
                    <div className="bg-gradient-to-br from-primary-red/10 to-primary-red/5 rounded-2xl p-6 border border-primary-red/20">
                      <h4 className="text-primary-red font-bold text-lg mb-2">Today - Innovation</h4>
                      <p className="text-gray-300 leading-relaxed">
                        We continue to push the boundaries of fine dining while staying true to our roots in French culinary tradition, creating lasting memories for every guest.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Philosophy Quote */}
                <div className="bg-gradient-to-r from-primary-gold/10 to-transparent rounded-2xl p-6 border-l-4 border-primary-gold">
                  <blockquote className="text-xl text-gray-200 italic leading-relaxed">
                    "Our philosophy is simple: source the finest ingredients, treat them with respect, and transform them into dishes that tell a story."
                  </blockquote>
                  <cite className="block mt-4 text-primary-gold font-semibold">— Chef Antoine Moreau</cite>
                </div>
              </motion.div>
            </div>
          </div>
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
              className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-gold via-white to-primary-gold mb-6 tracking-tight"
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
                    <h3 className="text-3xl font-black text-white mb-6 group-hover:text-primary-gold transition-colors duration-300" style={{ fontFamily: "'Playfair Display', serif" }}>
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
                    <h3 className="text-3xl font-black text-white mb-6 group-hover:text-white transition-colors duration-300" style={{ fontFamily: "'Playfair Display', serif" }}>
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
                    <h3 className="text-3xl font-black text-white mb-6 group-hover:text-primary-gold transition-colors duration-300" style={{ fontFamily: "'Playfair Display', serif" }}>
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
            <blockquote className="text-2xl md:text-3xl font-light text-gray-300 italic leading-relaxed">
              "Our values are not just words on a wall—they are the foundation of every decision, every dish, and every moment we share with our guests."
            </blockquote>
            <cite className="block mt-6 text-primary-gold font-semibold text-lg">— The Éclat Team</cite>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-primary-dark">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-serif font-bold mb-4 text-white">Meet Our Team</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The passionate individuals who bring the Éclat experience to life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-48 h-48 rounded-full object-cover mx-auto shadow-2xl"
                  />
                  <div className="absolute inset-0 rounded-full border-4 border-primary-gold border-opacity-50" />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-2 text-white">{member.name}</h3>
                <p className="text-primary-gold mb-4">{member.role}</p>
                <p className="text-gray-400 leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
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