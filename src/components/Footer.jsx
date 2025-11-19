// src/components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-primary-brown border-t border-primary-gold border-opacity-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Brand */}
          <motion.div 
            className="md:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-serif font-bold text-white mb-4">ÉCLAT</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Experience culinary excellence in an atmosphere of refined elegance. 
              Where every meal becomes a cherished memory.
            </p>
            <div className="flex space-x-4">
              {['Instagram', 'Twitter', 'Facebook'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  className="text-gray-400 hover:text-primary-gold transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <p>123 Gourmet Avenue</p>
              <p>New York, NY 10001</p>
              <p>+1 (555) 123-4567</p>
              <p>info@eclat-restaurant.com</p>
            </div>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white text-lg font-semibold mb-4">Hours</h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex justify-between">
                <span>Mon - Thu:</span>
                <span>6PM - 11PM</span>
              </div>
              <div className="flex justify-between">
                <span>Fri - Sun:</span>
                <span>5PM - 12AM</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p>&copy; 2024 Éclat Restaurant. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;