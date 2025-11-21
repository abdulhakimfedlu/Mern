// src/pages/DeliveryOrderPage.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const DeliveryOrderPage = () => {
  const location = useLocation();
  const [orderDetails, setOrderDetails] = useState({
    customerName: '',
    phone: '',
    address: '',
    paymentMethod: '',
    paymentScreenshot: null
  });

  const [isUploading, setIsUploading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Get cart data from location state or context (in real app)
  const cartItems = location.state?.cartItems || [];
  
  const deliveryFee = 5.99;
  const taxRate = 0.0875;
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
      setIsUploading(true);
      // Simulate file upload
      setTimeout(() => {
        setOrderDetails({
          ...orderDetails,
          paymentScreenshot: file
        });
        setIsUploading(false);
      }, 1500);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Delivery order submitted:', { orderDetails, items: cartItems });
      alert('Order placed successfully! Your delivery is on the way.');
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="pt-32 min-h-screen bg-gradient-to-br from-primary-dark via-black to-primary-brown">
      <div className="container mx-auto px-6 max-w-6xl">
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
                <svg className="w-10 h-10 text-primary-dark" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zM10 6a2 2 0 0 1 4 0v1h-4V6zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v10z"/>
                </svg>
              </div>
              <h1 
                className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-gold via-white to-primary-gold mb-4 tracking-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Online Delivery
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Premium dining delivered fresh to your doorstep with care and precision
              </p>
              <div className="h-px w-32 bg-gradient-to-r from-transparent via-primary-gold to-transparent mx-auto mt-6" />
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Order Summary & Payment */}
            <div className="lg:col-span-2 space-y-8">
              {/* Order Summary */}
              <motion.div
                className="bg-gradient-to-br from-primary-brown to-primary-dark rounded-3xl p-8 shadow-2xl border border-primary-gold/20"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {cartItems.length > 0 ? (
                  <>
                    <div className="flex items-center justify-between mb-8">
                      <h2 className="text-3xl font-serif font-bold text-white">Your Order</h2>
                      <div className="bg-primary-gold text-primary-dark px-4 py-2 rounded-full font-bold">
                        {totalItems} {totalItems === 1 ? 'item' : 'items'}
                      </div>
                    </div>
                    
                    <div className="space-y-6 mb-8">
                      {cartItems.map((item, index) => (
                        <motion.div 
                          key={item.id} 
                          className="flex items-center gap-4 p-4 bg-primary-dark/50 rounded-2xl border border-primary-gold/10"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                          <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                            <img 
                              src={item.image} 
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-white font-semibold text-lg">{item.name}</h3>
                            <p className="text-gray-400">Quantity: {item.quantity}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-primary-gold font-bold text-xl">${item.price * item.quantity}</p>
                            <p className="text-gray-400 text-sm">${item.price} each</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <div className="bg-primary-gold/10 rounded-2xl p-6 border border-primary-gold/30">
                      <div className="space-y-3">
                        <div className="flex justify-between text-gray-300">
                          <span>Subtotal</span>
                          <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-gray-300">
                          <span>Delivery Fee</span>
                          <span>${deliveryFee.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-gray-300">
                          <span>Tax</span>
                          <span>${tax.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between items-center text-xl font-bold border-t border-primary-gold/30 pt-3">
                          <span className="text-white">Total</span>
                          <span className="text-primary-gold text-3xl">${total.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-24 h-24 bg-primary-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-12 h-12 text-primary-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M8 11v6h8v-6M8 11h8" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-white mb-4">No Items Selected</h3>
                    <p className="text-gray-400 mb-6">Please add items to your cart from the menu first.</p>
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
                )}
              </motion.div>

              {/* Payment Section */}
              <motion.div
                className="bg-gradient-to-br from-primary-brown to-primary-dark rounded-3xl p-8 shadow-2xl border border-primary-gold/20"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-gold/20 rounded-full mb-4">
                    <svg className="w-8 h-8 text-primary-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-serif font-bold text-white">Payment Method</h2>
                  <p className="text-gray-400 mt-2">Choose your preferred payment option</p>
                </div>

                <div className="space-y-4 mb-6">
                  <motion.label 
                    className="flex items-center space-x-4 p-6 border-2 border-primary-gold/30 rounded-2xl hover:border-primary-gold cursor-pointer transition-all duration-300 bg-primary-dark/30"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="stripe"
                      onChange={handleInputChange}
                      className="text-primary-gold focus:ring-primary-gold w-5 h-5"
                    />
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary-gold/20 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-primary-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                      </div>
                      <div>
                        <span className="text-white font-semibold text-lg">Credit/Debit Card</span>
                        <p className="text-gray-400 text-sm">Secure payment with Stripe</p>
                      </div>
                    </div>
                  </motion.label>

                  <motion.label 
                    className="flex items-center space-x-4 p-6 border-2 border-primary-gold/30 rounded-2xl hover:border-primary-gold cursor-pointer transition-all duration-300 bg-primary-dark/30"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="bank_transfer"
                      onChange={handleInputChange}
                      className="text-primary-gold focus:ring-primary-gold w-5 h-5"
                    />
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary-gold/20 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-primary-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                        </svg>
                      </div>
                      <div>
                        <span className="text-white font-semibold text-lg">Bank Transfer</span>
                        <p className="text-gray-400 text-sm">Upload payment confirmation</p>
                      </div>
                    </div>
                  </motion.label>
                </div>

                {orderDetails.paymentMethod === 'bank_transfer' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                  >
                    <label className="block text-primary-gold font-semibold mb-3">Upload Payment Screenshot *</label>
                    <div className="border-2 border-dashed border-primary-gold/30 rounded-2xl p-8 text-center hover:border-primary-gold transition-colors bg-primary-dark/20">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileUpload}
                        className="hidden"
                        id="paymentScreenshot"
                      />
                      <label htmlFor="paymentScreenshot" className="cursor-pointer">
                        {isUploading ? (
                          <div className="text-primary-gold">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-gold mx-auto mb-4"></div>
                            <p className="text-lg">Uploading...</p>
                          </div>
                        ) : orderDetails.paymentScreenshot ? (
                          <div className="text-primary-gold">
                            <div className="text-4xl mb-4">✓</div>
                            <p className="text-lg font-semibold">File uploaded successfully</p>
                            <p className="text-gray-400 text-sm mt-2">
                              {orderDetails.paymentScreenshot.name}
                            </p>
                          </div>
                        ) : (
                          <div>
                            <div className="text-5xl mb-4">📁</div>
                            <p className="text-white text-lg font-semibold">Click to upload payment confirmation</p>
                            <p className="text-gray-400 text-sm mt-2">
                              PNG, JPG up to 5MB
                            </p>
                          </div>
                        )}
                      </label>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </div>

            {/* Customer Information */}
            <motion.form
              onSubmit={handleSubmit}
              className="bg-gradient-to-br from-primary-brown to-primary-dark rounded-3xl p-8 shadow-2xl border border-primary-gold/20 h-fit"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-gold/20 rounded-full mb-4">
                  <svg className="w-8 h-8 text-primary-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-serif font-bold text-white">Delivery Details</h2>
                <p className="text-gray-400 mt-2">Where should we deliver your order?</p>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-primary-gold font-semibold mb-3">Full Name *</label>
                  <div className="relative">
                    <input
                      type="text"
                      name="customerName"
                      value={orderDetails.customerName}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-primary-dark/50 border-2 border-primary-gold/30 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary-gold transition-all duration-300 placeholder-gray-500"
                      placeholder="Enter your full name"
                    />
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-primary-gold">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-primary-gold font-semibold mb-3">Phone Number *</label>
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      value={orderDetails.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-primary-dark/50 border-2 border-primary-gold/30 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary-gold transition-all duration-300 placeholder-gray-500"
                      placeholder="Your phone number"
                    />
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-primary-gold">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-primary-gold font-semibold mb-3">Delivery Address *</label>
                  <div className="relative">
                    <input
                      type="text"
                      name="address"
                      value={orderDetails.address}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-primary-dark/50 border-2 border-primary-gold/30 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary-gold transition-all duration-300 placeholder-gray-500"
                      placeholder="Complete delivery address"
                    />
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-primary-gold">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 space-y-6">
                <motion.button
                  type="submit"
                  disabled={isSubmitting || cartItems.length === 0 || !orderDetails.paymentMethod || (orderDetails.paymentMethod === 'bank_transfer' && !orderDetails.paymentScreenshot)}
                  className="w-full bg-gradient-to-r from-primary-gold to-yellow-500 text-primary-dark py-5 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting || cartItems.length === 0 || !orderDetails.paymentMethod || (orderDetails.paymentMethod === 'bank_transfer' && !orderDetails.paymentScreenshot) ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting || cartItems.length === 0 || !orderDetails.paymentMethod || (orderDetails.paymentMethod === 'bank_transfer' && !orderDetails.paymentScreenshot) ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-primary-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing Order...
                    </div>
                  ) : (
                    <>
                      <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Place Delivery Order
                    </>
                  )}
                </motion.button>

                <div className="border-t border-primary-gold/20 pt-4">
                  <Link to="/menu">
                    <motion.button
                      type="button"
                      className="w-full border-2 border-primary-gold/50 text-primary-gold py-4 rounded-xl font-semibold text-lg hover:bg-primary-gold hover:text-primary-dark hover:border-primary-gold transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                      </svg>
                      Back to Menu
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.form>
          </div>

          {/* Epic Delivery Features */}
          <motion.div
            className="mt-20 grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.div 
              className="group relative bg-gradient-to-br from-primary-brown/60 to-primary-dark/80 rounded-3xl p-8 border border-primary-gold/20 text-center overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-gold/0 to-primary-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 rounded-3xl shadow-[0_0_50px_rgba(255,215,0,0)] group-hover:shadow-[0_0_50px_rgba(255,215,0,0.3)] transition-all duration-500" />
              
              <div className="relative z-10">
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-primary-gold/30 to-primary-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gradient-to-br group-hover:from-primary-gold/50 group-hover:to-primary-gold/20 transition-all duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <svg className="w-8 h-8 text-primary-gold group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </motion.div>
                <h3 className="text-2xl font-serif font-bold text-primary-gold mb-3 group-hover:text-yellow-300 transition-colors duration-300">
                  Fast Delivery
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
                  Fresh meals delivered hot in 30-45 minutes
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="group relative bg-gradient-to-br from-primary-brown/60 to-primary-dark/80 rounded-3xl p-8 border border-primary-gold/20 text-center overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.05, rotateY: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-gold/0 to-primary-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 rounded-3xl shadow-[0_0_50px_rgba(255,215,0,0)] group-hover:shadow-[0_0_50px_rgba(255,215,0,0.3)] transition-all duration-500" />
              
              <div className="relative z-10">
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-primary-gold/30 to-primary-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gradient-to-br group-hover:from-primary-gold/50 group-hover:to-primary-gold/20 transition-all duration-300"
                  whileHover={{ rotate: -360 }}
                  transition={{ duration: 0.6 }}
                >
                  <svg className="w-8 h-8 text-primary-gold group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </motion.div>
                <h3 className="text-2xl font-serif font-bold text-primary-gold mb-3 group-hover:text-yellow-300 transition-colors duration-300">
                  Free Delivery
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
                  No delivery fees on orders over $50
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="group relative bg-gradient-to-br from-primary-brown/60 to-primary-dark/80 rounded-3xl p-8 border border-primary-gold/20 text-center overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-gold/0 to-primary-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 rounded-3xl shadow-[0_0_50px_rgba(255,215,0,0)] group-hover:shadow-[0_0_50px_rgba(255,215,0,0.3)] transition-all duration-500" />
              
              <div className="relative z-10">
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-primary-gold/30 to-primary-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gradient-to-br group-hover:from-primary-gold/50 group-hover:to-primary-gold/20 transition-all duration-300"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <svg className="w-8 h-8 text-primary-gold group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </motion.div>
                <h3 className="text-2xl font-serif font-bold text-primary-gold mb-3 group-hover:text-yellow-300 transition-colors duration-300">
                  Safe & Secure
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
                  Contactless delivery with secure payment options
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default DeliveryOrderPage;