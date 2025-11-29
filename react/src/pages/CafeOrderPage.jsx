// src/pages/CafeOrderPage.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Utensils, AlertCircle } from 'lucide-react';
import api from '../api/axios';
import Notification from '../components/Notification';

const CafeOrderPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [orderDetails, setOrderDetails] = useState({
    tableNumber: '',
    customerName: '',
    specialRequests: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState(null);

  // Get cart data from location state
  const cartItems = location.state?.cartItems || [];
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleInputChange = (e) => {
    setOrderDetails({
      ...orderDetails,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const orderData = {
        customer: orderDetails.customerName,
        table: orderDetails.tableNumber,
        specialRequest: orderDetails.specialRequests,
        type: 'cafe',
        status: 'Pending',
        items: cartItems.map(item => ({
          itemId: item._id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          image: item.image,
          category: item.category
        }))
      };

      console.log('Submitting cafe order:', orderData);

      await api.post('/orders', orderData);

      setNotification({
        type: 'success',
        message: 'Order placed successfully! Your food will be served shortly.'
      });

      setTimeout(() => {
        navigate('/menu');
      }, 3000);

    } catch (error) {
      console.error('Order submission error:', error);
      console.error('Error response:', error.response?.data);
      setNotification({
        type: 'error',
        message: error.response?.data?.message || 'Failed to place order. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="pt-32 min-h-screen bg-primary-dark flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 bg-primary-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertCircle className="w-12 h-12 text-primary-gold" />
          </div>
          <h3 className="text-2xl font-serif font-bold text-white mb-4">Your Cart is Empty</h3>
          <p className="text-gray-400 mb-8">Please add items to your cart from the menu first.</p>
          <Link to="/menu">
            <motion.button
              className="bg-primary-gold text-primary-dark px-8 py-3 rounded-xl font-semibold hover:bg-opacity-90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Browse Menu
            </motion.button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 min-h-screen bg-gradient-to-br from-primary-dark via-black to-primary-brown">
      <AnimatePresence>
        {notification && (
          <Notification
            message={notification.message}
            type={notification.type}
            onClose={() => setNotification(null)}
          />
        )}
      </AnimatePresence>

      <div className="container mx-auto px-6 max-w-6xl pb-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-gold rounded-full mb-6">
                <Utensils className="w-10 h-10 text-primary-dark" />
              </div>
              <h1
                className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-gold via-white to-primary-gold mb-4 tracking-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Dine-In Order
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Enjoy our culinary experience in the comfort of our restaurant
              </p>
              <div className="h-px w-32 bg-gradient-to-r from-transparent via-primary-gold to-transparent mx-auto mt-6" />
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column: Order Summary */}
            <div className="lg:col-span-2">
              <motion.div
                className="bg-primary-brown/50 backdrop-blur-md rounded-3xl p-8 border border-primary-gold/20 h-full"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-serif font-bold text-white">Your Order</h2>
                  <div className="bg-primary-gold text-primary-dark px-4 py-1 rounded-full text-sm font-bold">
                    {totalItems} items
                  </div>
                </div>

                <div className="space-y-4 mb-8 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                  {cartItems.map((item) => (
                    <div
                      key={item._id}
                      className="flex items-center gap-4 p-4 bg-primary-dark/40 rounded-2xl border border-primary-gold/10"
                    >
                      <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                        <img
                          src={item.image.startsWith('/uploads') ? `http://localhost:5000${item.image}` : item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-semibold text-lg">{item.name}</h3>
                        <p className="text-primary-gold font-bold">{item.price} ETB</p>
                      </div>
                      <div className="text-gray-400 font-medium">
                        x{item.quantity}
                      </div>
                      <div className="text-white font-bold text-lg">
                        {(item.price * item.quantity).toFixed(2)} ETB
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-primary-dark/40 rounded-2xl p-6 border border-primary-gold/10">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-xl">Total Amount</span>
                    <span className="text-primary-gold font-bold text-3xl">{totalPrice.toFixed(2)} ETB</span>
                  </div>
                  <div className="mt-2 text-gray-400 text-sm">
                    * Payment will be collected at the counter or by your server
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Table Details Form */}
            <div className="lg:col-span-1">
              <motion.form
                onSubmit={handleSubmit}
                className="bg-primary-brown/50 backdrop-blur-md rounded-3xl p-8 border border-primary-gold/20 sticky top-32"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-2xl font-serif font-bold text-white mb-6">Table Details</h2>

                <div className="space-y-6">
                  <div>
                    <label className="block text-primary-gold text-sm font-bold mb-2">Table Number</label>
                    <input
                      type="number"
                      name="tableNumber"
                      value={orderDetails.tableNumber}
                      onChange={handleInputChange}
                      required
                      min="1"
                      className="w-full bg-primary-dark/50 border border-primary-gold/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-gold transition-colors"
                      placeholder="e.g., 12"
                    />
                  </div>

                  <div>
                    <label className="block text-primary-gold text-sm font-bold mb-2">Your Name</label>
                    <input
                      type="text"
                      name="customerName"
                      value={orderDetails.customerName}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-primary-dark/50 border border-primary-gold/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-gold transition-colors"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label className="block text-primary-gold text-sm font-bold mb-2">Special Requests</label>
                    <textarea
                      name="specialRequests"
                      value={orderDetails.specialRequests}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full bg-primary-dark/50 border border-primary-gold/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-gold transition-colors resize-none"
                      placeholder="Allergies, dietary restrictions..."
                    />
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-primary-gold/20">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary-gold to-yellow-500 text-primary-dark font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary-dark"></div>
                    ) : (
                      'Confirm Order'
                    )}
                  </motion.button>

                  <Link to="/menu">
                    <button type="button" className="w-full mt-4 text-primary-gold hover:text-white transition-colors text-sm font-semibold">
                      Back to Menu
                    </button>
                  </Link>
                </div>
              </motion.form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CafeOrderPage;