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
      {/* Hero Section */}
      <section className="relative py-20 bg-primary-brown">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl font-serif font-bold mb-6 text-white">Our Story</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              From a humble Parisian kitchen to a world-renowned culinary destination, 
              Éclat represents the pinnacle of gastronomic excellence and unforgettable experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-primary-dark">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-serif font-bold mb-6 text-white">A Legacy of Excellence</h2>
              <div className="space-y-4 text-gray-300">
                <p className="text-lg leading-relaxed">
                  Founded in 2010 by Chef Antoine Moreau, Éclat began as a small 30-seat restaurant 
                  in the heart of Paris. Our name, meaning "brilliance" or "sparkle," reflects our 
                  commitment to creating moments of pure culinary magic.
                </p>
                <p className="text-lg leading-relaxed">
                  Within just three years, we earned our first Michelin star, followed by two more 
                  in subsequent years. Today, we continue to push the boundaries of fine dining 
                  while staying true to our roots in French culinary tradition.
                </p>
                <p className="text-lg leading-relaxed">
                  Our philosophy is simple: source the finest ingredients, treat them with respect, 
                  and transform them into dishes that tell a story and create lasting memories.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1559329007-40df8a9345d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Restaurant History"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 border-4 border-primary-gold rounded-2xl transform rotate-12" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-primary-brown">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-serif font-bold mb-4 text-white">Our Values</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The principles that guide every decision we make and every dish we create
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="text-center p-8 bg-primary-dark rounded-2xl shadow-2xl"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-serif font-bold mb-4 text-white">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
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
                  className="bg-primary-red hover:bg-red-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
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