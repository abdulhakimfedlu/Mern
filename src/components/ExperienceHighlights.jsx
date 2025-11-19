// src/components/ExperienceHighlights.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const highlights = [
  {
    icon: "🎭",
    title: "Theater Kitchen",
    description: "Watch our master chefs create culinary art in our open theater kitchen"
  },
  {
    icon: "🍷",
    title: "Wine Cellar",
    description: "Over 500 selections from the world's finest vineyards and regions"
  },
  {
    icon: "🌟",
    title: "Michelin Star",
    description: "Awarded three Michelin stars for exceptional culinary excellence"
  },
  {
    icon: "🎵",
    title: "Live Music",
    description: "Elegant live performances enhancing your dining atmosphere"
  }
];

const HighlightCard = ({ highlight, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="text-center group"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <motion.div 
        className="text-6xl mb-4 inline-block transform group-hover:scale-110 transition-transform duration-300"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        {highlight.icon}
      </motion.div>
      <h3 className="text-2xl font-serif font-bold mb-3 text-white">{highlight.title}</h3>
      <p className="text-gray-400 leading-relaxed">{highlight.description}</p>
    </motion.div>
  );
};

const ExperienceHighlights = () => {
  return (
    <section className="py-20 bg-primary-brown">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-serif font-bold mb-4 text-white">The Éclat Experience</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover what makes our dining experience truly exceptional and unforgettable
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
          {highlights.map((highlight, index) => (
            <HighlightCard key={index} highlight={highlight} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceHighlights;