// src/pages/DeliveryOrderPage.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Upload, CreditCard, Building2, Check, AlertCircle } from 'lucide-react';
import api from '../api/axios';
import Notification from '../components/Notification';

const DeliveryOrderPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [orderDetails, setOrderDetails] = useState({
    customerName: '',
    phone: '',
    address: '',
    paymentMethod: '',
    paymentScreenshot: null
  });

  const [isUploading, setIsUploading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState(null);

  // Get cart data from location state
  const cartItems = location.state?.cartItems || [];

  const deliveryFee = 150; // ETB
  const taxRate = 0.15; // 15% VAT
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * taxRate;
  const total = subtotal + deliveryFee + tax;
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleInputChange = (e) => {
    setOrderDetails({
      ...orderDetails,
      [e.target.name]: e.target.value
    });
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        setNotification({
          type: 'error',
          message: 'File size too large. Please upload an image under 5MB.'
        });
        return;
      }
      setOrderDetails({
        ...orderDetails,
        paymentScreenshot: file
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append('customer', orderDetails.customerName);
      formData.append('phone', orderDetails.phone);
      formData.append('location', orderDetails.address);
      formData.append('type', 'delivery');
      formData.append('status', 'Pending');

      const itemsPayload = cartItems.map(item => ({
        itemId: item._id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        image: item.image,
        category: item.category
      }));

      formData.append('items', JSON.stringify(itemsPayload));

      if (orderDetails.paymentMethod === 'bank_transfer' && orderDetails.paymentScreenshot) {
        formData.append('paymentScreenshot', orderDetails.paymentScreenshot);
      }

      await api.post('/orders', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setNotification({
        type: 'success',
        message: 'Order placed successfully! We will contact you shortly.'
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
              <h1
                className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-gold via-white to-primary-gold mb-4 tracking-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Online Delivery
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Premium dining delivered fresh to your doorstep
              </p>
              <div className="h-px w-32 bg-gradient-to-r from-transparent via-primary-gold to-transparent mx-auto mt-6" />
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column: Order Summary & Payment */}
            <div className="lg:col-span-2 space-y-8">
              {/* Order Summary */}
              <motion.div
                className="bg-primary-brown/50 backdrop-blur-md rounded-3xl p-8 border border-primary-gold/20"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-serif font-bold text-white">Order Summary</h2>
                  <div className="bg-primary-gold text-primary-dark px-4 py-1 rounded-full text-sm font-bold">
                    {totalItems} items
                  </div>
                </div>

                <div className="space-y-4 mb-8 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
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
                    </div>
                  ))}
                </div>

                <div className="bg-primary-dark/40 rounded-2xl p-6 border border-primary-gold/10 space-y-3">
                  <div className="flex justify-between text-gray-300">
                    <span>Subtotal</span>
                    <span>{subtotal.toFixed(2)} ETB</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Delivery Fee</span>
                    <span>{deliveryFee.toFixed(2)} ETB</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>VAT (15%)</span>
                    <span>{tax.toFixed(2)} ETB</span>
                  </div>
                  <div className="flex justify-between items-center text-xl font-bold border-t border-primary-gold/20 pt-4 mt-2">
                    <span className="text-white">Total</span>
                    <span className="text-primary-gold text-2xl">{total.toFixed(2)} ETB</span>
                  </div>
                </div>
              </motion.div>

              {/* Payment Method */}
              <motion.div
                className="bg-primary-brown/50 backdrop-blur-md rounded-3xl p-8 border border-primary-gold/20"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-2xl font-serif font-bold text-white mb-6">Payment Method</h2>

                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <label className={`relative p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${orderDetails.paymentMethod === 'bank_transfer'
                      ? 'border-primary-gold bg-primary-gold/10'
                      : 'border-primary-gold/20 hover:border-primary-gold/50 bg-primary-dark/30'
                    }`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="bank_transfer"
                      onChange={handleInputChange}
                      className="absolute opacity-0 w-full h-full inset-0 cursor-pointer"
                    />
                    <div className="flex flex-col items-center text-center space-y-3">
                      <Building2 className={`w-8 h-8 ${orderDetails.paymentMethod === 'bank_transfer' ? 'text-primary-gold' : 'text-gray-400'}`} />
                      <span className="font-bold text-white">Bank Transfer</span>
                    </div>
                  </label>

                  <label className={`relative p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${orderDetails.paymentMethod === 'cash'
                      ? 'border-primary-gold bg-primary-gold/10'
                      : 'border-primary-gold/20 hover:border-primary-gold/50 bg-primary-dark/30'
                    }`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cash"
                      onChange={handleInputChange}
                      className="absolute opacity-0 w-full h-full inset-0 cursor-pointer"
                    />
                    <div className="flex flex-col items-center text-center space-y-3">
                      <CreditCard className={`w-8 h-8 ${orderDetails.paymentMethod === 'cash' ? 'text-primary-gold' : 'text-gray-400'}`} />
                      <span className="font-bold text-white">Cash on Delivery</span>
                    </div>
                  </label>
                </div>

                {/* Bank Info Card */}
                <AnimatePresence>
                  {orderDetails.paymentMethod === 'bank_transfer' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="bg-gradient-to-r from-[#8B1F41] to-[#4A0E22] rounded-2xl p-6 mb-6 text-white shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
                        <div className="relative z-10">
                          <div className="flex items-center gap-3 mb-4">
                            <Building2 className="w-8 h-8 text-primary-gold" />
                            <h3 className="font-bold text-lg">Commercial Bank of Ethiopia</h3>
                          </div>
                          <div className="space-y-2">
                            <p className="text-sm opacity-80">Account Name</p>
                            <p className="font-mono text-xl font-bold tracking-wider">RESTAURANT NAME</p>
                            <p className="text-sm opacity-80 mt-2">Account Number</p>
                            <p className="font-mono text-2xl font-bold tracking-widest text-primary-gold">1000123456789</p>
                          </div>
                        </div>
                      </div>

                      <div className="border-2 border-dashed border-primary-gold/30 rounded-2xl p-8 text-center bg-primary-dark/20 hover:bg-primary-dark/30 transition-colors relative">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleFileUpload}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        {orderDetails.paymentScreenshot ? (
                          <div className="flex flex-col items-center text-green-400">
                            <Check className="w-10 h-10 mb-2" />
                            <p className="font-semibold">Receipt Uploaded</p>
                            <p className="text-xs opacity-70 mt-1">{orderDetails.paymentScreenshot.name}</p>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center text-primary-gold">
                            <Upload className="w-10 h-10 mb-2" />
                            <p className="font-semibold">Upload Payment Receipt</p>
                            <p className="text-xs text-gray-400 mt-1">Click or drag image here</p>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>

            {/* Right Column: Customer Details Form */}
            <div className="lg:col-span-1">
              <motion.form
                onSubmit={handleSubmit}
                className="bg-primary-brown/50 backdrop-blur-md rounded-3xl p-8 border border-primary-gold/20 sticky top-32"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h2 className="text-2xl font-serif font-bold text-white mb-6">Delivery Details</h2>

                <div className="space-y-6">
                  <div>
                    <label className="block text-primary-gold text-sm font-bold mb-2">Full Name</label>
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
                    <label className="block text-primary-gold text-sm font-bold mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={orderDetails.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-primary-dark/50 border border-primary-gold/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-gold transition-colors"
                      placeholder="09..."
                    />
                  </div>

                  <div>
                    <label className="block text-primary-gold text-sm font-bold mb-2">Delivery Address</label>
                    <textarea
                      name="address"
                      value={orderDetails.address}
                      onChange={handleInputChange}
                      required
                      rows="3"
                      className="w-full bg-primary-dark/50 border border-primary-gold/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-gold transition-colors resize-none"
                      placeholder="Subcity, Woreda, House No..."
                    />
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-primary-gold/20">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting || (orderDetails.paymentMethod === 'bank_transfer' && !orderDetails.paymentScreenshot)}
                    className="w-full bg-gradient-to-r from-primary-gold to-yellow-500 text-primary-dark font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary-dark"></div>
                    ) : (
                      'Place Order'
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

export default DeliveryOrderPage;