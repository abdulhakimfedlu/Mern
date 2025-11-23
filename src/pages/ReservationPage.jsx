// src/pages/ReservationPage.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ReservationPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    reason: '',
    otherReason: '',
    guests: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log('Reservation submitted:', formData);
      setIsSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        date: '',
        reason: '',
        otherReason: '',
        guests: ''
      });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="pt-32 min-h-screen bg-gradient-to-br from-primary-dark via-black to-primary-brown">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-gold via-white to-primary-gold mb-6 tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Reserve Your Table
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Book your dining experience at Éclat. We'll confirm your reservation shortly.
            </p>
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-primary-gold to-transparent mx-auto mt-8" />
          </motion.div>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            {!isSubmitted ? (
              <motion.form
                onSubmit={handleSubmit}
                className="bg-gradient-to-br from-primary-brown to-primary-dark rounded-3xl p-8 shadow-2xl border border-primary-gold/20"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-serif font-bold text-white mb-2">Make a Reservation</h3>
                  <p className="text-gray-400">Fill in the details below to reserve your table</p>
                </div>

                <div className="mb-8 relative">
                  <label className="block text-primary-gold font-semibold mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-primary-dark/50 border-2 border-primary-gold/30 rounded-xl px-4 py-4 pl-12 text-white focus:outline-none focus:border-primary-gold transition-all duration-300 placeholder-gray-500"
                      placeholder="Your full name"
                    />
                    <svg className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-primary-gold/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-primary-gold font-semibold mb-3">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-primary-dark/50 border-2 border-primary-gold/30 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary-gold transition-all duration-300 placeholder-gray-500"
                    placeholder="Your phone number"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-primary-gold font-semibold mb-3">Date *</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full bg-primary-dark/50 border-2 border-primary-gold/30 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary-gold transition-all duration-300"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-primary-gold font-semibold mb-3">Reason for Visit *</label>
                  <select
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    required
                    className="w-full bg-primary-dark/50 border-2 border-primary-gold/30 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary-gold transition-all duration-300"
                  >
                    <option value="">Select a reason</option>
                    <option value="dinner">Dinner</option>
                    <option value="lunch">Lunch</option>
                    <option value="special-occasion">Special Occasion</option>
                    <option value="business">Business Meeting</option>
                    <option value="other">Other</option>
                  </select>
                  {formData.reason === 'other' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4"
                    >
                      <label className="block text-primary-gold font-semibold mb-3">Please specify *</label>
                      <input
                        type="text"
                        name="otherReason"
                        value={formData.otherReason}
                        onChange={handleChange}
                        required
                        className="w-full bg-primary-dark/50 border-2 border-primary-gold/30 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary-gold transition-all duration-300 placeholder-gray-500"
                        placeholder="Describe your reason for visit"
                      />
                    </motion.div>
                  )}
                </div>

                <div className="mb-8">
                  <label className="block text-primary-gold font-semibold mb-3">Number of Guests *</label>
                  <input
                    type="number"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    required
                    min="1"
                    max="20"
                    className="w-full bg-primary-dark/50 border-2 border-primary-gold/30 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary-gold transition-all duration-300 placeholder-gray-500"
                    placeholder="Number of guests"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary-gold to-yellow-500 text-primary-dark py-5 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-primary-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting Request...
                    </div>
                  ) : (
                    'Submit Request'
                  )}
                </motion.button>
              </motion.form>
            ) : (
              <motion.div
                className="bg-gradient-to-br from-primary-brown to-primary-dark rounded-3xl p-8 shadow-2xl border border-primary-gold/20 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-6">
                  <svg className="w-16 h-16 text-primary-gold mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-2xl font-serif font-bold text-white mb-2">Submitted successfully</h3>
                  <p className="text-gray-300">Please wait for a response from our team.</p>
                </div>
                <motion.button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-primary-gold text-primary-dark px-6 py-3 rounded-xl font-semibold hover:bg-yellow-500 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Make Another Reservation
                </motion.button>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReservationPage;