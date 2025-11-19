// src/pages/ContactPage.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: '📍',
      title: 'Address',
      details: ['123 Gourmet Avenue', 'New York, NY 10001'],
      link: '#'
    },
    {
      icon: '📞',
      title: 'Phone',
      details: ['+1 (555) 123-4567', '+1 (555) 123-4568'],
      link: 'tel:+15551234567'
    },
    {
      icon: '✉️',
      title: 'Email',
      details: ['reservations@eclat.com', 'info@eclat.com'],
      link: 'mailto:reservations@eclat.com'
    },
    {
      icon: '🕒',
      title: 'Hours',
      details: ['Mon - Thu: 6PM - 11PM', 'Fri - Sun: 5PM - 12AM'],
      link: '#'
    }
  ];

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary-brown">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl font-serif font-bold mb-6 text-white">Contact Us</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              We'd love to hear from you. Get in touch with any questions or to make a reservation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-primary-dark">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-serif font-bold mb-8 text-white">Get in Touch</h2>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                Whether you're planning a special celebration, a business dinner, 
                or simply want to experience exceptional cuisine, our team is here 
                to ensure your visit is unforgettable.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4 p-4 rounded-2xl bg-primary-brown hover:bg-opacity-80 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="text-3xl">{info.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-400">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {['Instagram', 'Twitter', 'Facebook'].map((social) => (
                    <motion.a
                      key={social}
                      href="#"
                      className="bg-primary-brown text-gray-300 hover:text-primary-gold w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {social.charAt(0)}
                    </motion.a>
                  ))}
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
              <form onSubmit={handleSubmit} className="bg-primary-brown rounded-2xl p-8 shadow-2xl">
                <h3 className="text-3xl font-serif font-bold mb-6 text-white">Send us a Message</h3>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-gray-300 mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-primary-dark border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-primary-dark border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-gold transition-colors"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-gray-300 mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-primary-dark border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Subject</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-primary-dark border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-gold transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="reservation">Reservation</option>
                      <option value="catering">Catering</option>
                      <option value="private-events">Private Events</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-300 mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full bg-primary-dark border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-gold transition-colors resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-primary-gold text-primary-dark py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-primary-brown">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-bold mb-4 text-white">Find Us</h2>
            <p className="text-xl text-gray-300">Visit us at our premier location</p>
          </motion.div>

          <motion.div
            className="bg-primary-dark rounded-2xl overflow-hidden shadow-2xl h-96"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Placeholder for map - in real implementation, you'd use Google Maps or similar */}
            <div className="w-full h-full bg-gradient-to-br from-primary-gold to-primary-red bg-opacity-20 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">📍</div>
                <p className="text-xl font-semibold">123 Gourmet Avenue</p>
                <p className="text-gray-300">New York, NY 10001</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;