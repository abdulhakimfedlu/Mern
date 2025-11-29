// src/components/Testimonials.jsx
import React from 'react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Food Critic, Epicurean Magazine",
    text: "Éclat redefines fine dining. Every dish is a masterpiece, and the service is impeccable. An unforgettable culinary journey.",
    rating: 5
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "Restaurant Investor",
    text: "The attention to detail is extraordinary. From the ambiance to the wine pairing, every element is perfectly curated.",
    rating: 5
  },
  {
    id: 3,
    name: "Eleanor Williams",
    role: "Michelin Guide Inspector",
    text: "A true gastronomic delight. Chef Moreau's innovative approach while respecting tradition is remarkable.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-primary-dark to-primary-brown relative">
      <div className="container mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white">
            Guest Experiences
          </h2>
          <div className="w-24 h-1 bg-primary-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Discover what makes dining at Éclat an extraordinary experience
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-primary-brown/50 backdrop-blur-sm rounded-xl p-6 border border-primary-gold/20 hover:border-primary-gold/40 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              {/* Rating Stars */}
              <div className="flex justify-center mb-4">
                <div className="text-primary-gold text-xl">
                  {"★".repeat(testimonial.rating)}
                </div>
              </div>

              {/* Quote */}
              <div className="text-center mb-6">
                <p className="text-gray-300 italic leading-relaxed text-sm md:text-base">
                  "{testimonial.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="text-center border-t border-primary-gold/20 pt-4">
                <h4 className="text-white font-semibold text-lg mb-1">
                  {testimonial.name}
                </h4>
                <p className="text-primary-gold text-sm">
                  {testimonial.role}
                </p>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">Ready to create your own memorable experience?</p>
          <button className="bg-gradient-to-r from-primary-gold to-yellow-600 hover:from-yellow-600 hover:to-primary-gold text-primary-dark px-10 py-5 rounded-full font-bold text-xl transition-colors duration-300 shadow-lg">
            Reserve Your Table
          </button>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;