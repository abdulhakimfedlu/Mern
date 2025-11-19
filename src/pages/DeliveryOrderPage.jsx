// src/pages/DeliveryOrderPage.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const DeliveryOrderPage = () => {
  const [orderDetails, setOrderDetails] = useState({
    customerName: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    paymentMethod: '',
    paymentScreenshot: null
  });

  const [isUploading, setIsUploading] = useState(false);

  const sampleCart = [
    {
      id: 1,
      name: "Truffle Arancini",
      price: 18,
      quantity: 2
    },
    {
      id: 4,
      name: "Maine Lobster",
      price: 75,
      quantity: 1
    },
    {
      id: 5,
      name: "Chocolate Soufflé",
      price: 16,
      quantity: 1
    }
  ];

  const deliveryFee = 5.99;
  const taxRate = 0.0875;
  const subtotal = sampleCart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * taxRate;
  const total = subtotal + deliveryFee + tax;

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle order submission
    console.log('Delivery order submitted:', { orderDetails, items: sampleCart });
    alert('Order placed successfully! You will receive a confirmation email shortly.');
  };

  return (
    <div className="pt-32 min-h-screen bg-primary-dark">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 text-white">
              Order Online
            </h1>
            <p className="text-xl text-gray-300">
              Delivery to your doorstep
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Order Summary & Payment */}
            <div className="space-y-6">
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

                <div className="space-y-2 border-t border-gray-600 pt-4">
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
                  <div className="flex justify-between items-center text-lg font-bold border-t border-gray-600 pt-2">
                    <span className="text-white">Total</span>
                    <span className="text-primary-gold text-xl">${total.toFixed(2)}</span>
                  </div>
                </div>
              </motion.div>

              {/* Payment Section */}
              <motion.div
                className="bg-primary-brown rounded-2xl p-6 shadow-2xl"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-2xl font-serif font-bold mb-6 text-white">Payment Method</h2>

                <div className="space-y-4 mb-6">
                  <label className="flex items-center space-x-3 p-4 border border-gray-600 rounded-lg hover:border-primary-gold cursor-pointer transition-colors">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="stripe"
                      onChange={handleInputChange}
                      className="text-primary-gold focus:ring-primary-gold"
                    />
                    <div>
                      <span className="text-white font-semibold">Credit/Debit Card (Stripe)</span>
                      <p className="text-gray-400 text-sm">Pay securely with your credit or debit card</p>
                    </div>
                  </label>

                  <label className="flex items-center space-x-3 p-4 border border-gray-600 rounded-lg hover:border-primary-gold cursor-pointer transition-colors">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="bank_transfer"
                      onChange={handleInputChange}
                      className="text-primary-gold focus:ring-primary-gold"
                    />
                    <div>
                      <span className="text-white font-semibold">Bank Transfer</span>
                      <p className="text-gray-400 text-sm">Upload payment confirmation screenshot</p>
                    </div>
                  </label>
                </div>

                {orderDetails.paymentMethod === 'bank_transfer' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                  >
                    <label className="block text-gray-300 mb-2">Upload Payment Screenshot *</label>
                    <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center hover:border-primary-gold transition-colors">
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
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-gold mx-auto mb-2"></div>
                            Uploading...
                          </div>
                        ) : orderDetails.paymentScreenshot ? (
                          <div className="text-primary-gold">
                            <div className="text-2xl mb-2">✓</div>
                            File uploaded successfully
                            <p className="text-gray-400 text-sm mt-1">
                              {orderDetails.paymentScreenshot.name}
                            </p>
                          </div>
                        ) : (
                          <div>
                            <div className="text-3xl mb-2">📁</div>
                            <p className="text-white">Click to upload payment confirmation</p>
                            <p className="text-gray-400 text-sm mt-1">
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
              className="bg-primary-brown rounded-2xl p-6 shadow-2xl h-fit"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="text-2xl font-serif font-bold mb-6 text-white">Delivery Information</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-gray-300 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="customerName"
                    value={orderDetails.customerName}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-primary-dark border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-gold transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={orderDetails.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-primary-dark border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-gold transition-colors"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={orderDetails.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-primary-dark border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-gold transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Delivery Address *</label>
                  <input
                    type="text"
                    name="address"
                    value={orderDetails.address}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-primary-dark border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-gold transition-colors"
                    placeholder="Street address"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 mb-2">City *</label>
                    <input
                      type="text"
                      name="city"
                      value={orderDetails.city}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-primary-dark border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-gold transition-colors"
                      placeholder="City"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">ZIP Code *</label>
                    <input
                      type="text"
                      name="zipCode"
                      value={orderDetails.zipCode}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-primary-dark border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-gold transition-colors"
                      placeholder="ZIP code"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <motion.button
                  type="submit"
                  disabled={!orderDetails.paymentMethod || (orderDetails.paymentMethod === 'bank_transfer' && !orderDetails.paymentScreenshot)}
                  className="w-full bg-primary-gold text-primary-dark py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                  whileHover={{ scale: orderDetails.paymentMethod && (orderDetails.paymentMethod !== 'bank_transfer' || orderDetails.paymentScreenshot) ? 1.02 : 1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Place Delivery Order
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
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <p>Estimated delivery time: 30-45 minutes</p>
            <p>Free delivery on orders over $50</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default DeliveryOrderPage;