// src/components/SignatureDishes.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const dishes = [
  {
    id: 1,
    name: "Truffle Infused Wagyu",
    price: "$89",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 2,
    name: "Lobster Thermidor",
    price: "$75",
    image: "https://images.unsplash.com/photo-1563370921-6c8bcd6d7b7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 3,
    name: "Golden Saffron Risotto",
    price: "$42",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  }
];

const DishCard = ({ dish, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  // Dynamic positioning for mosaic effect
  const positions = [
    { x: 0, y: 0, rotate: 0 },      // Center
    { x: -120, y: -80, rotate: -8 }, // Top-left
    { x: 120, y: 80, rotate: 8 }    // Bottom-right
  ];

  const position = positions[index] || { x: 0, y: 0, rotate: 0 };

  return (
    <motion.div
      ref={ref}
      className="relative group"
      style={{
        x: position.x,
        y: position.y,
        rotate: position.rotate
      }}
      initial={{ opacity: 0, scale: 0.8, rotate: position.rotate - 10 }}
      animate={isInView ? {
        opacity: 1,
        scale: 1,
        rotate: position.rotate
      } : {
        opacity: 0,
        scale: 0.8,
        rotate: position.rotate - 10
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.3,
        ease: "easeOut"
      }}
      whileHover={{
        scale: 1.1,
        rotate: position.rotate + 2,
        z: 50
      }}
    >
      <div className="relative overflow-hidden rounded-3xl shadow-2xl transform transition-all duration-700 group-hover:shadow-3xl group-hover:shadow-primary-gold/30">
        {/* Epic glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-gold/20 via-primary-red/20 to-primary-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl blur-xl"></div>

        <div className="relative bg-gradient-to-br from-white/10 to-black/20 rounded-3xl overflow-hidden">
          <img
            src={dish.image}
            alt={dish.name}
            className="w-full h-80 lg:h-96 object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110 group-hover:contrast-110"
          />

          {/* Dynamic overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />

          {/* Content overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <motion.h3
              className="text-2xl lg:text-3xl font-serif font-bold mb-3 tracking-wide"
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ delay: index * 0.3 + 0.4, duration: 0.6 }}
            >
              {dish.name}
            </motion.h3>

            <motion.div
              className="flex justify-end"
              initial={{ x: 20, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: 20, opacity: 0 }}
              transition={{ delay: index * 0.3 + 0.6, duration: 0.6 }}
            >
              <span className="text-primary-gold text-2xl lg:text-3xl font-black tracking-wider">
                {dish.price}
              </span>
            </motion.div>
          </div>

          {/* Decorative corner accent */}
          <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary-gold/60 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        </div>
      </div>
    </motion.div>
  );
};

const SignatureDishes = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-primary-brown via-primary-dark to-primary-brown relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,215,0,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(220,38,38,0.1),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Decorative Top Elements */}
          <motion.div
            className="w-32 h-px bg-gradient-to-r from-transparent via-primary-gold to-transparent mx-auto mb-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />

          <motion.h2
            className="text-6xl lg:text-7xl font-serif font-light mb-6 text-white tracking-wide leading-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Signature
            <span className="block text-primary-gold">Dishes</span>
          </motion.h2>

          <motion.p
            className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Culinary masterpieces crafted with passion and the finest ingredients
          </motion.p>

          {/* Decorative Bottom Elements */}
          <motion.div
            className="w-40 h-px bg-gradient-to-r from-transparent via-primary-gold to-transparent mx-auto mt-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="relative flex justify-center items-center min-h-[600px] lg:min-h-[700px]">
          {dishes.map((dish, index) => (
            <DishCard key={dish.id} dish={dish} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignatureDishes;