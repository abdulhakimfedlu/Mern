// src/pages/CafeOrderPage.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const CafeOrderPage = () => {
  const location = useLocation();
  const [orderDetails, setOrderDetails] = useState({
    tableNumber: '',
    customerName: '',
    specialRequests: ''
  });

  // In a real app, you'd get this from state management or context
  const sampleCart = [
    {
      id: 1,
      name: "Truffle Arancini",
      price: 18,
      quantity: 2
    },
    {
      id: 3,
      name: "Dry-Aged Ribeye",
      price: 65,
      quantity: 1
    }
  ];

  const totalPrice = sampleCart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleInputChange = (e) => {
    setOrderDetails({
      ...orderDetails,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle order submission
    console.log('Cafe order submitted:', { orderDetails, items: sampleCart });
    alert('Order placed successfully! Your food will be prepared and brought to your table.');
  };

  return (
    <div className="pt-32 min-h-screen bg-primary-dark">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 text-white">
              Order in Café
            </h1>
            <p className="text-xl text-gray-300">
              Please provide your table details for in-restaurant ordering
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Order Summary */}
            <motion.div
              className="bg-primary-brown rounded-2xl p-6 shadow-2xl"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-serif font-bold mb-6 text-white">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                {sampleCart.map((item) => (
                  <div key={item.id} className="flex justify-between items-center py-3 border-b border-gray-600">
                    <div>
                      <h3 className="text-white font-semibold">{item.name}</h3>
                      <p className="text-gray-400 text-sm">Qty: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-primary-gold font-bold">${item.price * item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-600 pt-4">
                <div className="flex justify-between items-center text-lg">
                  <span className="text-gray-300">Total</span>
                  <span className="text-primary-gold font-bold text-xl">${totalPrice}</span>
                </div>
              </div>
            </motion.div>

            {/* Order Form */}
            <motion.form
              onSubmit={handleSubmit}
              className="bg-primary-brown rounded-2xl p-6 shadow-2xl"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl font-serif font-bold mb-6 text-white">Table Information</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-gray-300 mb-2">Table Number *</label>
                  <input
                    type="number"
                    name="tableNumber"
                    value={orderDetails.tableNumber}
                    onChange={handleInputChange}
                    required
                    min="1"
                    max="50"
                    className="w-full bg-primary-dark border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-gold transition-colors"
                    placeholder="Enter your table number"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Your Name *</label>
                  <input
                    type="text"
                    name="customerName"
                    value={orderDetails.customerName}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-primary-dark border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-gold transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Special Requests</label>
                  <textarea
                    name="specialRequests"
                    value={orderDetails.specialRequests}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full bg-primary-dark border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-gold transition-colors resize-none"
                    placeholder="Any allergies, dietary restrictions, or special instructions..."
                  />
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <motion.button
                  type="submit"
                  className="w-full bg-primary-gold text-primary-dark py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Place Order at Table
                </motion.button>

                <Link to="/menu">
                  <motion.button
                    type="button"
                    className="w-full border-2 border-primary-gold text-primary-gold py-4 rounded-lg font-semibold text-lg hover:bg-primary-gold hover:text-primary-dark transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Back to Menu
                  </motion.button>
                </Link>
              </div>
            </motion.form>
          </div>

          {/* Additional Info */}
          <motion.div
            className="mt-12 text-center text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p>Your order will be prepared fresh and served at your table.</p>
            <p>Estimated preparation time: 20-30 minutes</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default CafeOrderPage;