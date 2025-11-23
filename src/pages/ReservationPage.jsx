// src/pages/ReservationPage.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ReservationPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    occasion: ''
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
    // Simulate submission
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-black flex flex-col lg:flex-row">

      {/* Left Side - Visual & Info */}
      <div className="lg:w-5/12 relative hidden lg:flex flex-col justify-between p-12 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/card3.jpg"
            alt="Ambiance"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/90" />
        </div>

        {/* Content */}
        <div className="relative z-10 mt-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl xl:text-7xl font-black text-white mb-6 leading-tight">
              Reserve <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-gold to-yellow-200 font-serif italic">
                Your Table
              </span>
            </h1>
            <p className="text-gray-300 text-lg max-w-md leading-relaxed border-l-2 border-primary-gold pl-6">
              Experience the pinnacle of culinary artistry. Whether for a romantic evening or a business celebration, we promise an unforgettable journey.
            </p>
          </motion.div>
        </div>

        <div className="relative z-10">
          <div className="flex flex-col gap-4 text-gray-400">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary-gold/10 flex items-center justify-center text-primary-gold">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <span></span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary-gold/10 flex items-center justify-center text-primary-gold">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <span>reservations@eclat.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="lg:w-7/12 bg-primary-dark relative flex items-center justify-center p-6 lg:p-12 min-h-screen">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary-gold/5 rounded-full blur-3xl" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary-red/5 rounded-full blur-3xl" />
        </div>

        <motion.div
          className="w-full max-w-2xl relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="text-center lg:text-left mb-12 lg:hidden">
                <h1 className="text-4xl font-black text-white mb-2">Reserve Your Table</h1>
                <p className="text-gray-400">Join us for an unforgettable dining experience.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group">
                  <label className="block text-primary-gold text-sm font-bold uppercase tracking-wider mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border-b border-white/10 px-0 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary-gold transition-colors duration-300"
                    placeholder="Abdu"
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
                    className="w-full bg-white/5 border-b border-white/10 px-0 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary-gold transition-colors duration-300"
                    placeholder="09-----"
                  />
                </div>
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
                    className="w-full bg-white/5 border-b border-white/10 px-0 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary-gold transition-colors duration-300"
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
                    className="w-full bg-white/5 border-b border-white/10 px-0 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary-gold transition-colors duration-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group">
                  <label className="block text-primary-gold text-sm font-bold uppercase tracking-wider mb-2">Guests</label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border-b border-white/10 px-0 py-3 text-white focus:outline-none focus:border-primary-gold transition-colors duration-300 [&>option]:bg-primary-dark"
                  >
                    <option value="">Select guests</option>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                    <option value="more">8+ Guests</option>
                  </select>
                </div>
                <div className="group">
                  <label className="block text-primary-gold text-sm font-bold uppercase tracking-wider mb-2">Occasion</label>
                  <select
                    name="occasion"
                    value={formData.occasion}
                    onChange={handleChange}
                    className="w-full bg-white/5 border-b border-white/10 px-0 py-3 text-white focus:outline-none focus:border-primary-gold transition-colors duration-300 [&>option]:bg-primary-dark"
                  >
                    <option value="">Select occasion (optional)</option>
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="business">Business</option>
                    <option value="date">Date Night</option>
                  </select>
                </div>
              </div>

              <div className="pt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-gold text-primary-dark font-bold py-5 rounded-none hover:bg-white transition-all duration-300 tracking-widest uppercase disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Confirming...' : 'Confirm Reservation'}
                </button>
                <p className="text-center text-gray-500 text-sm mt-4">
                  By booking, you agree to our reservation policy.
                </p>
              </div>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center p-12 border border-primary-gold/20 bg-white/5 backdrop-blur-sm"
            >
              <div className="w-20 h-20 bg-primary-gold/20 rounded-full flex items-center justify-center mx-auto mb-6 text-primary-gold">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              </div>
              <h2 className="text-3xl font-serif text-white mb-4">Reservation Confirmed</h2>
              <p className="text-gray-400 mb-8">
                Thank you, {formData.name}. We look forward to hosting you on {formData.date} at {formData.time}.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({ name: '', phone: '', date: '', time: '', guests: '', occasion: '' });
                }}
                className="text-primary-gold hover:text-white transition-colors duration-300 border-b border-primary-gold pb-1"
              >
                Make another reservation
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ReservationPage;