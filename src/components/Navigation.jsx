// src/components/Navigation.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Menu', path: '/menu' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-gradient-to-r from-primary-dark via-primary-dark to-black bg-opacity-95 backdrop-blur-lg shadow-2xl shadow-primary-gold/20 py-2 border-t-2 border-gradient-to-r from-primary-gold to-primary-red border-b border-primary-gold/30'
          : 'bg-transparent py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={isScrolled ? { boxShadow: "0 0 30px rgba(255, 215, 0, 0.3)" } : {}}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <motion.div
              className="w-10 h-10 bg-gradient-to-br from-primary-gold to-yellow-400 rounded-full flex items-center justify-center shadow-lg shadow-primary-gold/50"
              whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(255, 215, 0, 0.6)" }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="text-primary-dark font-serif font-bold text-lg">E</span>
            </motion.div>
            <motion.span
              className="text-3xl font-serif font-black text-white drop-shadow-2xl tracking-wider"
              style={{ textShadow: "0 0 15px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 215, 0, 0.4)" }}
              whileHover={{ scale: 1.05, textShadow: "0 0 20px rgba(255, 255, 255, 1), 0 0 40px rgba(255, 215, 0, 0.6)" }}
            >
              ÉCLAT
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden md:flex items-center space-x-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                variants={{
                  hidden: { opacity: 0, y: -20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={item.path}
                    className={`relative font-bold uppercase tracking-widest transition-all duration-300 ${
                      location.pathname === item.path
                        ? 'text-primary-gold drop-shadow-2xl'
                        : 'text-gray-300 hover:text-white'
                    }`}
                    style={location.pathname === item.path ? { textShadow: "0 0 12px rgba(255, 215, 0, 0.8), 0 0 24px rgba(255, 215, 0, 0.4)" } : {}}
                  >
                    {item.name}
                    {location.pathname === item.path && (
                      <motion.div
                        className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-gold to-yellow-400 shadow-lg shadow-primary-gold/50"
                        layoutId="navbar-indicator"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
          <motion.button
            className="bg-gradient-to-r from-primary-red to-red-600 hover:from-red-600 hover:to-red-800 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-primary-red/50"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(220, 38, 38, 0.6)" }}
            whileTap={{ scale: 0.95 }}
          >
            Reserve Table
          </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className={`block h-0.5 w-6 bg-current transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`block h-0.5 w-6 bg-current transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-6 bg-current transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </button>

        {/* Mobile Navigation */}
        <motion.div
          className={`md:hidden overflow-hidden ${
            isMobileMenuOpen ? 'max-h-96' : 'max-h-0'
          } transition-all duration-500`}
          initial="hidden"
          animate={isMobileMenuOpen ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          <div className="py-4 space-y-4">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
                }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  to={item.path}
                  className={`block py-2 px-4 rounded-lg transition-all duration-300 ${
                    location.pathname === item.path
                      ? 'bg-gradient-to-r from-primary-gold to-yellow-400 text-primary-dark font-semibold shadow-lg shadow-primary-gold/50'
                      : 'text-gray-300 hover:text-white hover:bg-white hover:bg-opacity-10'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <motion.button
              className="w-full bg-gradient-to-r from-primary-red to-red-600 hover:from-red-600 hover:to-red-800 text-white py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-primary-red/50"
              whileHover={{ scale: 1.02, boxShadow: "0 0 15px rgba(220, 38, 38, 0.5)" }}
              whileTap={{ scale: 0.98 }}
            >
              Reserve Table
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;