// src/pages/ReservationPage.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import api from '../api/axios';

const ReservationPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    guests: '',
    specialRequests: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const reservationData = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        date: formData.date,
        time: formData.time,
        guests: parseInt(formData.guests),
        specialRequest: formData.specialRequests,
        status: 'Pending'
      };

      await api.post('/reservations', reservationData);
      setIsSubmitted(true);
      setIsSubmitting(false);
    } catch (err) {
      console.error('Error submitting reservation:', err);
      setError('Failed to submit reservation. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/card3.jpg"
            alt="Reservation Ambiance"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black" />
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tight"
          >
            Reserve <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-gold to-yellow-200 font-serif italic">Your Table</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl font-light"
          >
            Experience the pinnacle of culinary artistry. Secure your spot for an unforgettable evening.
          </motion.p>
        </div>
      </div>

      <div className="relative z-20 -mt-24 container mx-auto px-4 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-sm shadow-2xl space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-serif font-bold text-white mb-2">Book a Table</h2>
                <div className="w-16 h-1 bg-primary-gold mx-auto rounded-full" />
              </div>

              {error && (
                <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-3 rounded-lg">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group">
                  <label className="block text-primary-gold text-sm font-bold uppercase tracking-wider mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-primary-gold focus:bg-black/40 transition-all duration-300"
                    placeholder="Your Name"
                  />
                </div>
                <div className="group">
                  <label className="block text-primary-gold text-sm font-bold uppercase tracking-wider mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-primary-gold focus:bg-black/40 transition-all duration-300"
                    placeholder="+251 911 234 567"
                  />
                </div>
              </div>

              <div className="group">
                <label className="block text-primary-gold text-sm font-bold uppercase tracking-wider mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-primary-gold focus:bg-black/40 transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group">
                  <label className="block text-primary-gold text-sm font-bold uppercase tracking-wider mb-2">Date</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-primary-gold focus:bg-black/40 transition-all duration-300 [color-scheme:dark]"
                  />
                </div>
                <div className="group">
                  <label className="block text-primary-gold text-sm font-bold uppercase tracking-wider mb-2">Time</label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-primary-gold focus:bg-black/40 transition-all duration-300 [color-scheme:dark]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group">
                  <label className="block text-primary-gold text-sm font-bold uppercase tracking-wider mb-2">Guests</label>
                  <div className="relative">
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-primary-gold focus:bg-black/40 transition-all duration-300 appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-primary-dark text-gray-400">Select guests</option>
                      {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                        <option key={num} value={num} className="bg-primary-dark">{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                      ))}
                      <option value="9" className="bg-primary-dark">8+ Guests</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-primary-gold">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                    </div>
                  </div>
                </div>
                <div className="group">
                  <label className="block text-primary-gold text-sm font-bold uppercase tracking-wider mb-2">Special Requests</label>
                  <input
                    type="text"
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-primary-gold focus:bg-black/40 transition-all duration-300"
                    placeholder="Birthday, Anniversary, etc."
                  />
                </div>
              </div>

              <div className="pt-8 text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-16 bg-gradient-to-r from-primary-gold to-yellow-600 text-primary-dark font-bold py-4 rounded-full hover:shadow-lg hover:shadow-primary-gold/20 hover:scale-105 transition-all duration-300 tracking-widest uppercase disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? 'Confirming...' : 'Confirm Reservation'}
                </button>
                <p className="text-gray-500 text-sm mt-4">
                  By booking, you agree to our reservation policy.
                </p>
              </div>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center p-16 border border-primary-gold/20 bg-white/5 backdrop-blur-sm rounded-3xl shadow-2xl"
            >
              <div className="w-24 h-24 bg-primary-gold/20 rounded-full flex items-center justify-center mx-auto mb-8 text-primary-gold">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              </div>
              <h2 className="text-4xl font-serif text-white mb-4">Reservation Confirmed</h2>
              <p className="text-gray-400 mb-10 text-lg max-w-lg mx-auto">
                Thank you! We look forward to hosting you on {formData.date} at {formData.time}.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({ name: '', phone: '', email: '', date: '', time: '', guests: '', specialRequests: '' });
                }}
                className="text-primary-gold hover:text-white transition-colors duration-300 border-b-2 border-primary-gold pb-1 font-bold text-lg tracking-wide"
              >
                Make Another Reservation
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ReservationPage;