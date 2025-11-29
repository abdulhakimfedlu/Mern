// src/components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialIcons = [
    { name: 'Instagram', icon: '📷', color: 'hover:text-pink-400' },
    { name: 'Twitter', icon: '🐦', color: 'hover:text-blue-400' },
    { name: 'Facebook', icon: '📘', color: 'hover:text-blue-600' },
    { name: 'LinkedIn', icon: '💼', color: 'hover:text-blue-700' }
  ];

  return (
    <footer className="bg-gradient-to-t from-primary-dark via-primary-dark to-primary-brown relative overflow-hidden">
      {/* Background Patterns and Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,215,0,0.05),transparent_50%)]"
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
          className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(220,38,38,0.03),transparent_50%)]"
          animate={{
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      {/* Decorative Top Border */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-gold to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
      />

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-12 mb-12">

            {/* Brand Section */}
            <motion.div
              className="lg:col-span-1 text-center lg:text-left"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <motion.h3
                className="text-4xl lg:text-5xl font-serif font-light text-primary-light mb-6 tracking-wide"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                style={{
                  textShadow: "0 0 30px rgba(255, 255, 255, 0.1)"
                }}
              >
                ÉCLAT
              </motion.h3>

              <motion.p
                className="text-primary-light/70 mb-8 leading-relaxed font-light text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Experience culinary excellence in an atmosphere of refined elegance.
                Where every meal becomes a cherished memory.
              </motion.p>

              {/* Social Media Icons */}
              <motion.div
                className="flex justify-center lg:justify-start space-x-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                {socialIcons.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href="#"
                    className={`text-3xl text-primary-light/60 ${social.color} transition-all duration-300 relative group`}
                    whileHover={{
                      scale: 1.2,
                      y: -5,
                      textShadow: "0 0 20px currentColor"
                    }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, rotate: -10 }}
                    whileInView={{ opacity: 1, rotate: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.8 + index * 0.1
                    }}
                    viewport={{ once: true }}
                  >
                    <span className="relative z-10">{social.icon}</span>
                    <motion.div
                      className="absolute inset-0 bg-current opacity-0 rounded-full blur-md group-hover:opacity-20"
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Contact & Hours Combined */}
            <motion.div
              className="lg:col-span-2 grid md:grid-cols-2 gap-8"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.h4
                  className="text-primary-light text-2xl font-serif font-light mb-6 tracking-wide"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  Contact
                </motion.h4>
                <div className="space-y-3 text-primary-light/70 font-light">
                  <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    123 Gourmet Avenue
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    viewport={{ once: true }}
                  >
                    New York, NY 10001
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    viewport={{ once: true }}
                  >
                    +1 (555) 123-4567
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                    viewport={{ once: true }}
                  >
                    info@eclat-restaurant.com
                  </motion.p>
                </div>
              </motion.div>

              {/* Hours */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <motion.h4
                  className="text-primary-light text-2xl font-serif font-light mb-6 tracking-wide"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  Hours
                </motion.h4>
                <div className="space-y-3 text-primary-light/70 font-light">
                  <motion.div
                    className="flex justify-between items-center py-2 border-b border-primary-light/10"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-primary-light/80">Mon - Thu:</span>
                    <span>6PM - 11PM</span>
                  </motion.div>
                  <motion.div
                    className="flex justify-between items-center py-2"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-primary-light/80">Fri - Sun:</span>
                    <span>5PM - 12AM</span>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Decorative Divider */}
            <motion.div
              className="w-full h-px bg-gradient-to-r from-transparent via-primary-gold/30 to-transparent mb-8"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.8 }}
              viewport={{ once: true }}
            />

            {/* Copyright */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
            >
              <p className="text-primary-light/60 font-light tracking-wide">
                &copy; 2024 Éclat Restaurant. All rights reserved.
              </p>
              <motion.div
                className="flex items-center justify-center mt-4 space-x-2"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="w-2 h-2 bg-primary-gold rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <span className="text-primary-gold text-sm font-light tracking-wider">EXCELLENCE</span>
                <motion.div
                  className="w-2 h-2 bg-primary-gold rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;