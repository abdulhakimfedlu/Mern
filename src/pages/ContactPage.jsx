// src/pages/ContactPage.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: '',
    message: ''
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
      setFormData({ name: '', phone: '', subject: '', message: '' });
    }, 2000);
  };

  const contactCards = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
      ),
      title: "Call Us",
      info: "+251 911 234 567",
      subInfo: "Mon-Sun from 8am to 11pm",
      link: "tel:+251911234567"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
      ),
      title: "Email Us",
      info: "info@eclat.et",
      subInfo: "We'll reply within 24 hours",
      link: "mailto:info@eclat.et"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
      ),
      title: "Visit Us",
      info: "Bole Atlas",
      subInfo: "Addis Ababa, Ethiopia",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/card2.jpg"
            alt="Contact Hero"
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
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-gold to-yellow-200 font-serif italic">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl font-light"
          >
            We are here to assist you with any inquiries or reservations. Reach out to us and experience exceptional service.
          </motion.p>
        </div>
      </div>

      {/* Info Cards Section */}
      <div className="relative z-20 -mt-24 container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactCards.map((card, index) => (
            <motion.a
              key={index}
              href={card.link}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
              className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:border-primary-gold/30 hover:-translate-y-2 transition-all duration-300 group text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary-gold/10 flex items-center justify-center text-primary-gold group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{card.title}</h3>
              <p className="text-primary-gold text-lg font-medium mb-1">{card.info}</p>
              <p className="text-gray-400 text-sm">{card.subInfo}</p>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Form Section */}
      <div className="container mx-auto px-4 pb-32">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-white mb-4">Send us a Message</h2>
            <div className="w-24 h-1 bg-primary-gold mx-auto rounded-full" />
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-8 bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group">
                  <label className="block text-primary-gold text-sm font-bold uppercase tracking-wider mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-primary-gold focus:bg-black/40 transition-all duration-300"
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
                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-primary-gold focus:bg-black/40 transition-all duration-300"
                    placeholder="+251 911 234 567"
                  />
                </div>
              </div>

              <div className="group">
                <label className="block text-primary-gold text-sm font-bold uppercase tracking-wider mb-2">Subject</label>
                <div className="relative">
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-primary-gold focus:bg-black/40 transition-all duration-300 appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-primary-dark text-gray-400">Select a subject</option>
                    <option value="reservation" className="bg-primary-dark">Reservation Inquiry</option>
                    <option value="catering" className="bg-primary-dark">Catering Services</option>
                    <option value="events" className="bg-primary-dark">Private Events</option>
                    <option value="feedback" className="bg-primary-dark">Feedback</option>
                    <option value="other" className="bg-primary-dark">Other</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-primary-gold">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>
              </div>

              <div className="group">
                <label className="block text-primary-gold text-sm font-bold uppercase tracking-wider mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-primary-gold focus:bg-black/40 transition-all duration-300 resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              <div className="pt-4 text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-12 bg-gradient-to-r from-primary-gold to-yellow-600 text-primary-dark font-bold py-4 rounded-full hover:shadow-lg hover:shadow-primary-gold/20 hover:scale-105 transition-all duration-300 tracking-widest uppercase disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
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
              <h2 className="text-4xl font-serif text-white mb-4">Message Sent Successfully</h2>
              <p className="text-gray-400 mb-10 text-lg max-w-lg mx-auto">
                Thank you for reaching out, {formData.name || 'Guest'}. We'll be in touch shortly.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-primary-gold hover:text-white transition-colors duration-300 border-b-2 border-primary-gold pb-1 font-bold text-lg tracking-wide"
              >
                Send Another Message
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;