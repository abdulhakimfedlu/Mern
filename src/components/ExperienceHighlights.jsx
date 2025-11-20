// src/components/ExperienceHighlights.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const highlights = [
  {
    title: "Theater Kitchen",
    description: "Watch our master chefs create culinary art in our open theater kitchen where every dish tells a story of passion and precision",
    accent: "primary-gold"
  },
  {
    title: "Wine Cellar",
    description: "Over 500 selections from the world's finest vineyards and regions, curated by our sommeliers for the perfect pairing",
    accent: "primary-red"
  },
  {
    title: "Michelin Star",
    description: "Awarded three Michelin stars for exceptional culinary excellence, representing the pinnacle of gastronomic achievement",
    accent: "primary-gold"
  },
  {
    title: "Live Music",
    description: "Elegant live performances by renowned musicians, creating an unforgettable atmosphere for your dining experience",
    accent: "primary-red"
  }
];

const HighlightCard = ({ highlight, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="relative group"
      initial={{ opacity: 0, y: 60, rotateX: 15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 60, rotateX: 15 }}
      transition={{ duration: 1, delay: index * 0.3, ease: "easeOut" }}
    >
      {/* Layered Background Shapes */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className={`absolute -top-4 -left-4 w-full h-full rounded-2xl opacity-10 ${
            highlight.accent === 'primary-gold' ? 'bg-primary-gold' : 'bg-primary-red'
          }`}
          animate={{
            rotate: [0, 5, 0, -5, 0],
            scale: [1, 1.02, 1, 0.98, 1],
          }}
          transition={{
            duration: 20 + index * 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-6 -right-6 w-3/4 h-3/4 bg-gradient-to-br from-white/5 to-transparent rounded-xl"
          animate={{
            rotate: [0, -3, 0, 3, 0],
          }}
          transition={{
            duration: 25 + index * 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 2
          }}
        />
      </div>

      <div className="relative p-8 lg:p-12">
        {/* Large Cinematic Typography */}
        <motion.h3
          className="text-4xl lg:text-6xl font-serif font-extralight mb-6 text-white tracking-wide leading-tight"
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 30 }}
          transition={{ duration: 0.8, delay: index * 0.3 + 0.2 }}
          style={{
            textShadow: "0 0 30px rgba(255, 255, 255, 0.1), 0 0 60px rgba(255, 255, 255, 0.05)"
          }}
        >
          {highlight.title.split(' ').map((word, wordIndex) => (
            <motion.span
              key={wordIndex}
              className="inline-block mr-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.3 + 0.4 + wordIndex * 0.1 }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h3>

        {/* Elegant Description with Layered Effect */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.8, delay: index * 0.3 + 0.6 }}
        >
          <p className="text-gray-300 leading-relaxed text-xl lg:text-2xl font-light max-w-2xl relative z-10">
            {highlight.description}
          </p>

          {/* Subtle Text Shadow Layer */}
          <p className="absolute top-1 left-1 text-gray-500/30 leading-relaxed text-xl lg:text-2xl font-light max-w-2xl -z-10 blur-sm">
            {highlight.description}
          </p>
        </motion.div>

        {/* Dynamic Accent Elements */}
        <motion.div
          className="flex items-center mt-8 space-x-4"
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ duration: 0.6, delay: index * 0.3 + 0.8 }}
        >
          <motion.div
            className={`w-16 h-1 rounded-full ${
              highlight.accent === 'primary-gold' ? 'bg-primary-gold' : 'bg-primary-red'
            }`}
            animate={{
              scaleX: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className={`w-3 h-3 rounded-full ${
              highlight.accent === 'primary-gold' ? 'bg-primary-gold' : 'bg-primary-red'
            }`}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

const ExperienceHighlights = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-primary-dark via-black to-primary-brown relative overflow-hidden">
      {/* Cinematic Background Layers */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary-gold/5 via-transparent to-primary-red/5"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,215,0,0.03),transparent_70%)]"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Large Decorative Elements */}
          <motion.div
            className="flex items-center justify-center mb-12 space-x-8"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="w-20 h-px bg-gradient-to-r from-transparent to-primary-gold"
              animate={{ scaleX: [0, 1, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="w-4 h-4 border-2 border-primary-gold rounded-full"
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="w-20 h-px bg-gradient-to-l from-transparent to-primary-gold"
              animate={{ scaleX: [0, 1, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            />
          </motion.div>

          <motion.h2
            className="text-7xl lg:text-8xl font-serif font-extralight mb-8 text-white tracking-wider leading-tight"
            initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
            whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            style={{
              textShadow: "0 0 50px rgba(255, 255, 255, 0.1), 0 0 100px rgba(255, 255, 255, 0.05)"
            }}
          >
            The Éclat
            <motion.span
              className="block text-primary-gold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              Experience
            </motion.span>
          </motion.h2>

          <motion.p
            className="text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            style={{
              textShadow: "0 0 30px rgba(255, 255, 255, 0.1)"
            }}
          >
            Discover what makes our dining experience truly exceptional and unforgettable
          </motion.p>

          {/* Bottom Decorative Elements */}
          <motion.div
            className="flex items-center justify-center mt-12 space-x-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="w-12 h-px bg-primary-gold"
              animate={{
                scaleX: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="w-2 h-2 bg-primary-gold rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
            <motion.div
              className="w-12 h-px bg-primary-gold"
              animate={{
                scaleX: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />
          </motion.div>
        </motion.div>

        {/* Vertical Stacked Layout */}
        <div className="max-w-5xl mx-auto space-y-20">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <HighlightCard highlight={highlight} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceHighlights;