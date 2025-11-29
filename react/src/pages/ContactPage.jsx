import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MapPin, Clock, Send, Instagram, Facebook, Twitter, UserX } from 'lucide-react';
import Notification from '../components/Notification';
import api from '../api/axios';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const payload = {
        message: formData.message,
        isAnonymous: isAnonymous,
        subject: 'General Inquiry'
      };

      if (!isAnonymous) {
        payload.name = formData.name;
        payload.phone = formData.phone;
      }

      await api.post('/contact', payload);

      setNotification({
        type: 'success',
        message: isAnonymous ? 'Your anonymous message has been sent!' : 'Thank you! Your message has been sent successfully.'
      });
      setFormData({
        name: '',
        phone: '',
        message: ''
      });
      setIsAnonymous(false);
    } catch (error) {
      console.error('Error sending message:', error);
      setNotification({
        type: 'error',
        message: error.response?.data?.message || 'Failed to send message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-32 min-h-screen bg-primary-dark">
      <AnimatePresence>
        {notification && (
          <Notification
            message={notification.message}
            type={notification.type}
            onClose={() => setNotification(null)}
          />
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-dark via-black to-primary-brown overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1
              className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-gold via-white to-primary-gold mb-6 tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Get in Touch
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              We'd love to hear from you. Whether you have a question about our menu, need to make a reservation, or just want to say hello.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-3xl font-serif font-bold text-white mb-8">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-6 group">
                  <div className="w-14 h-14 bg-primary-brown rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-gold transition-colors duration-300">
                    <MapPin className="w-6 h-6 text-primary-gold group-hover:text-primary-dark transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
                    <p className="text-gray-400 leading-relaxed">
                      Bole Road, Near Friendship Mall<br />
                      Addis Ababa, Ethiopia
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group">
                  <div className="w-14 h-14 bg-primary-brown rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-gold transition-colors duration-300">
                    <Phone className="w-6 h-6 text-primary-gold group-hover:text-primary-dark transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                    <p className="text-gray-400 mb-1">+251 911 234 567 (Abebe Kebede)</p>
                    <p className="text-gray-400">+251 922 345 678 (Sara Tadesse)</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group">
                  <div className="w-14 h-14 bg-primary-brown rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-gold transition-colors duration-300">
                    <Clock className="w-6 h-6 text-primary-gold group-hover:text-primary-dark transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Opening Hours</h3>
                    <p className="text-gray-400">Mon - Sun: 8:00 AM - 10:00 PM</p>
                    <p className="text-gray-400">Happy Hour: 5:00 PM - 7:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-2xl font-serif font-bold text-white mb-6">Follow Us</h3>
              <div className="flex space-x-4">
                {[Facebook, Twitter, Instagram].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-12 h-12 bg-primary-brown rounded-full flex items-center justify-center text-primary-gold hover:bg-primary-gold hover:text-primary-dark transition-all duration-300 hover:scale-110"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-primary-brown rounded-3xl p-8 md:p-12 border border-primary-gold/20 shadow-2xl"
          >
            <h2 className="text-3xl font-serif font-bold text-white mb-2">Send a Message</h2>
            <p className="text-gray-400 text-sm mb-8">Share your thoughts with us, anonymously or with your details</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Anonymous Toggle */}
              <div className="flex items-center justify-between p-4 bg-primary-dark/30 rounded-xl border border-primary-gold/20">
                <div className="flex items-center space-x-3">
                  <UserX className="w-5 h-5 text-primary-gold" />
                  <div>
                    <p className="text-white font-semibold">Send Anonymously</p>
                    <p className="text-gray-400 text-xs">Your identity will remain private</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsAnonymous(!isAnonymous)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${isAnonymous ? 'bg-primary-gold' : 'bg-gray-600'
                    }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isAnonymous ? 'translate-x-6' : 'translate-x-1'
                      }`}
                  />
                </button>
              </div>

              {/* Name Field - Hidden when anonymous */}
              {!isAnonymous && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <label className="block text-primary-gold text-sm font-bold mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required={!isAnonymous}
                    className="w-full bg-primary-dark/50 border border-primary-gold/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-gold transition-colors"
                    placeholder="Abebe Kebede"
                  />
                </motion.div>
              )}

              {/* Phone Field - Hidden when anonymous */}
              {!isAnonymous && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <label className="block text-primary-gold text-sm font-bold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required={!isAnonymous}
                    className="w-full bg-primary-dark/50 border border-primary-gold/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-gold transition-colors"
                    placeholder="+251..."
                  />
                </motion.div>
              )}

              {/* Message Field - Always visible */}
              <div>
                <label className="block text-primary-gold text-sm font-bold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full bg-primary-dark/50 border border-primary-gold/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-gold transition-colors resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-gold text-primary-dark font-bold py-4 rounded-xl hover:bg-white transition-colors flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary-dark"></div>
                ) : (
                  <>
                    <span>{isAnonymous ? 'Send Anonymously' : 'Send Message'}</span>
                    <Send size={18} />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;