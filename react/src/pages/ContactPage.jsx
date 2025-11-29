// src/pages/ContactPage.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAnonymous, setIsAnonymous] = useState(false);

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
      console.log('Form submitted:', formData);
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({
        name: '',
        description: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 2000);
  };

  const contactInfo = [
    {
      title: 'Visit Us',
      details: ['123 Gourmet Avenue', 'New York, NY 10001'],
      link: '#'
    },
    {
      title: 'Call Us',
      details: ['+1 (555) 123-4567', '+1 (555) 123-4568'],
      link: 'tel:+15551234567'
    },
    {
      title: 'Email Us',
      details: ['reservations@eclat.com', 'info@eclat.com'],
      link: 'mailto:reservations@eclat.com'
    },
    {
      title: 'Opening Hours',
      details: ['Monday - Thursday: 6PM - 11PM', 'Friday - Sunday: 5PM - 12AM'],
      link: '#'
    }
  ];

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
              Get in Touch
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              We'd love to hear from you. Reach out for reservations, inquiries, or just to say hello.
            </p>
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-primary-gold to-transparent mx-auto mt-8" />
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-primary-brown to-primary-dark rounded-3xl p-8 shadow-2xl border border-primary-gold/20 h-fit">
                <h2 className="text-3xl font-serif font-bold mb-6 text-white">Contact Information</h2>
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  Whether you're planning a special celebration, a business dinner, 
                  or simply want to experience exceptional cuisine, our team is here 
                  to ensure your visit is unforgettable.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      className="p-6 rounded-2xl bg-primary-dark/50 border border-primary-gold/10 hover:border-primary-gold/30 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      <h3 className="text-xl font-semibold text-primary-gold mb-3">{info.title}</h3>
                      <div className="space-y-1">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-300 text-lg">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Social Media */}
                <div className="mt-8 pt-6 border-t border-primary-gold/20">
                  <h3 className="text-xl font-semibold text-primary-gold mb-4">Connect With Us</h3>
                  <div className="flex space-x-4">
                    {[
                      { name: 'Instagram', handle: '@eclat_restaurant' },
                      { name: 'Twitter', handle: '@eclat_nyc' },
                      { name: 'Facebook', handle: 'Eclat Restaurant' }
                    ].map((social) => (
                      <motion.a
                        key={social.name}
                        href="#"
                        className="bg-primary-gold/20 text-primary-gold hover:bg-primary-gold hover:text-primary-dark px-4 py-2 rounded-xl font-semibold transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {social.name}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="bg-gradient-to-br from-primary-brown to-primary-dark rounded-3xl p-8 shadow-2xl border border-primary-gold/20">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-serif font-bold text-white mb-2">Send us a Message</h3>
                  <p className="text-gray-400">We'll get back to you within 24 hours</p>
                </div>
                
                {!isAnonymous && (
                  <motion.div
                    initial={{ opacity: 1, height: 'auto' }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mb-6"
                  >
                    <label className="block text-primary-gold font-semibold mb-3">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-primary-dark/50 border-2 border-primary-gold/30 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary-gold transition-all duration-300 placeholder-gray-500"
                      placeholder="Your full name"
                    />
                  </motion.div>
                )}

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-primary-gold font-semibold mb-3">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-primary-dark/50 border-2 border-primary-gold/30 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary-gold transition-all duration-300 placeholder-gray-500"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-primary-gold font-semibold mb-3">Subject</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-primary-dark/50 border-2 border-primary-gold/30 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary-gold transition-all duration-300"
                    >
                      <option value="">Select a subject</option>
                      <option value="reservation">Reservation Inquiry</option>
                      <option value="catering">Catering Services</option>
                      <option value="private-events">Private Events</option>
                      <option value="feedback">Feedback & Reviews</option>
                      <option value="other">General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-primary-gold font-semibold mb-3">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full bg-primary-dark/50 border-2 border-primary-gold/30 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary-gold transition-all duration-300 resize-none placeholder-gray-500"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                {isAnonymous && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mb-6"
                  >
                    <label className="block text-primary-gold font-semibold mb-3">Description *</label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      required
                      rows="3"
                      className="w-full bg-primary-dark/50 border-2 border-primary-gold/30 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary-gold transition-all duration-300 resize-none placeholder-gray-500"
                      placeholder="Provide a brief description..."
                    />
                  </motion.div>
                )}

                <div className="mb-8">
                  <motion.button
                    type="button"
                    onClick={() => setIsAnonymous(!isAnonymous)}
                    className={`relative inline-flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
                      isAnonymous
                        ? 'bg-primary-gold text-primary-dark'
                        : 'bg-primary-dark/50 text-gray-300 border-2 border-primary-gold/30'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className={`mr-3 text-sm font-semibold ${isAnonymous ? 'text-primary-dark' : 'text-primary-gold'}`}>
                      {isAnonymous ? 'Anonymous' : 'Identified'}
                    </span>
                    <motion.div
                      className={`w-5 h-5 rounded-full ${
                        isAnonymous ? 'bg-primary-dark' : 'bg-primary-gold'
                      }`}
                      layout
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  </motion.button>
                  <p className="text-gray-400 text-sm mt-2">
                    {isAnonymous
                      ? 'Your message will be sent anonymously. Only the message is required.'
                      : 'Provide your details for a personalized response.'
                    }
                  </p>
                </div>

                {(() => {
                  const isFormValid = (!isAnonymous ? formData.name.trim() : true) && formData.message.trim() && (!isAnonymous || formData.description.trim());
                  const isDisabled = isSubmitting || !isFormValid;
                  
                  return (
                    <motion.button
                      type="submit"
                      disabled={isDisabled}
                      className="w-full bg-gradient-to-r from-primary-gold to-yellow-500 text-primary-dark py-5 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      whileHover={{ scale: isDisabled ? 1 : 1.02 }}
                      whileTap={{ scale: isDisabled ? 1 : 0.98 }}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-primary-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending Message...
                        </div>
                      ) : (
                        'Send Message'
                      )}
                    </motion.button>
                  );
                })()}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-bold mb-4 text-white">Visit Our Restaurant</h2>
            <p className="text-xl text-gray-300">Experience fine dining in the heart of New York</p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-primary-brown to-primary-dark rounded-3xl overflow-hidden shadow-2xl border border-primary-gold/20 h-96"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-full h-full bg-gradient-to-br from-primary-gold/20 to-primary-brown/40 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-3xl font-serif font-bold mb-4 text-primary-gold">123 Gourmet Avenue</h3>
                <p className="text-xl text-gray-300 mb-2">New York, NY 10001</p>
                <p className="text-gray-400">Located in the heart of Manhattan's finest dining district</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;