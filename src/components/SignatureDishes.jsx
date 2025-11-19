// src/components/SignatureDishes.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const dishes = [
  {
    id: 1,
    name: "Truffle Infused Wagyu",
    description: "A5 Japanese Wagyu with black truffle sauce and seasonal vegetables",
    price: "$89",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 2,
    name: "Lobster Thermidor",
    description: "Fresh Maine lobster with brandy cream sauce and gruyère cheese",
    price: "$75",
    image: "https://images.unsplash.com/photo-1563370921-6c8bcd6d7b7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 3,
    name: "Golden Saffron Risotto",
    description: "Arborio rice with saffron, parmesan, and white wine reduction",
    price: "$42",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  }
];

const DishCard = ({ dish, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      className={`relative group ${
        index % 2 === 0 ? 'md:mt-12' : 'md:-mt-12'
      }`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <div className="relative overflow-hidden rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
        <img 
          src={dish.image} 
          alt={dish.name}
          className="w-full h-80 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-2xl font-serif font-bold mb-2">{dish.name}</h3>
          <p className="text-gray-300 mb-3">{dish.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-primary-gold text-xl font-bold">{dish.price}</span>
            <button className="bg-primary-red hover:bg-red-800 text-white px-4 py-2 rounded-full text-sm transition-colors duration-300">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const SignatureDishes = () => {
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
          <h2 className="text-5xl font-serif font-bold mb-4 text-white">Signature Dishes</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Culinary masterpieces crafted with passion and the finest ingredients
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {dishes.map((dish, index) => (
            <DishCard key={dish.id} dish={dish} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignatureDishes;