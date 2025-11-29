// src/pages/MenuPage.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getFoodItems } from '../api/menuService';

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [foodItems, setFoodItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch food items from backend on component mount
  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        setLoading(true);
        setError(null);
        const items = await getFoodItems();
        setFoodItems(items);
      } catch (err) {
        setError('Failed to load menu items. Please try again later.');
        console.error('Error loading menu:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchMenuItems();
  }, []);

  // Dynamically extract unique categories from food items
  const categories = React.useMemo(() => {
    const uniqueCategories = [...new Set(foodItems.map(item => item.category))];
    return [
      { id: 'all', name: 'All Items' },
      ...uniqueCategories.map(cat => ({
        id: cat.toLowerCase(),
        name: cat.charAt(0).toUpperCase() + cat.slice(1)
      }))
    ];
  }, [foodItems]);

  const addToCart = (itemId) => {
    setCart(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }));
  };

  const removeFromCart = (itemId) => {
    setCart(prev => {
      const newCart = { ...prev };
      if (newCart[itemId] > 1) {
        newCart[itemId]--;
      } else {
        delete newCart[itemId];
      }
      return newCart;
    });
  };

  // Helper function to get all items
  const getAllItems = () => {
    return foodItems;
  };

  const getCartItems = () => {
    const allItems = getAllItems();
    return Object.entries(cart)
      .map(([id, quantity]) => {
        const item = allItems.find(item => item._id === id);
        if (!item) return null;
        return { ...item, quantity };
      })
      .filter(item => item !== null);
  };

  const cartItems = getCartItems();
  const totalItems = Object.values(cart).reduce((sum, qty) => sum + qty, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + ((item?.price || 0) * (item?.quantity || 0)), 0);

  const filteredItems = (() => {
    let items = selectedCategory === 'all'
      ? getAllItems()
      : foodItems.filter(item => item.category.toLowerCase() === selectedCategory.toLowerCase());

    if (searchTerm) {
      items = items.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return items;
  })();

  // Loading state
  if (loading) {
    return (
      <div className="pt-32 min-h-screen bg-primary-dark flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary-gold mb-4"></div>
          <p className="text-white text-xl">Loading menu...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="pt-32 min-h-screen bg-primary-dark flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-6">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-white text-2xl font-bold mb-4">Oops! Something went wrong</h2>
          <p className="text-gray-400 mb-6">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-primary-gold text-primary-dark px-6 py-3 rounded-full font-semibold hover:bg-opacity-80 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32">
      {/* Minimal Hero Section */}
      <section className="relative py-8 bg-gradient-to-br from-primary-dark via-black to-primary-brown">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1
              className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-gold via-white to-primary-gold mb-4 tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              OUR MENU
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-6 leading-relaxed">
              Discover our carefully curated selection of artisanal dishes, crafted with the finest ingredients and inspired by culinary traditions from around the world.
            </p>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary-gold to-transparent mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Menu Navigation & Content */}
      <section className="py-20 bg-primary-dark">
        <div className="container mx-auto px-6">
          {/* Search Bar */}
          <motion.div
            className="max-w-md mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search menu items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 bg-primary-brown text-white placeholder-gray-400 rounded-full border border-primary-gold/30 focus:border-primary-gold focus:outline-none transition-colors"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-primary-gold">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </motion.div>

          <div className="flex gap-8">
            {/* Left Sidebar - Categories */}
            <motion.div
              className="w-64 flex-shrink-0"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-primary-brown rounded-2xl p-6 sticky top-32">
                <h3 className="text-xl font-serif font-bold text-white mb-6">Categories</h3>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${selectedCategory === category.id
                        ? 'bg-primary-gold text-primary-dark'
                        : 'text-gray-300 hover:text-white hover:bg-primary-dark/50'
                        }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Main Content Area */}
            <div className="flex-1">
              {/* Menu Items Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map((item, index) => (
                  <motion.div
                    key={item._id}
                    className="bg-primary-brown rounded-2xl overflow-hidden shadow-2xl group"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={item.image.startsWith('/uploads') ? `http://localhost:5000${item.image}` : item.image}
                        alt={item.name}
                        className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4 bg-primary-gold text-primary-dark px-3 py-1 rounded-full font-bold">
                        ${item.price}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-serif font-bold mb-2 text-white">{item.name}</h3>
                      <p className="text-gray-400 mb-4 leading-relaxed">{item.description}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => removeFromCart(item._id)}
                            className="w-8 h-8 rounded-full bg-primary-dark text-primary-gold border border-primary-gold flex items-center justify-center hover:bg-primary-gold hover:text-primary-dark transition-colors"
                            disabled={!cart[item._id]}
                          >
                            -
                          </button>
                          <span className="text-white font-semibold w-8 text-center">
                            {cart[item._id] || 0}
                          </span>
                          <button
                            onClick={() => addToCart(item._id)}
                            className="w-8 h-8 rounded-full bg-primary-gold text-primary-dark flex items-center justify-center hover:bg-opacity-80 transition-colors"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* No Results Message */}
              {filteredItems.length === 0 && (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-gray-400 text-lg">
                    {searchTerm ? `No items found for "${searchTerm}"` : 'No items in this category'}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Cart Summary Sticky Bar */}
      {totalItems > 0 && (
        <motion.div
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-primary-gold text-primary-dark rounded-full shadow-2xl z-40"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="px-8 py-4">
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="font-bold text-2xl">{totalItems}</div>
                <div className="text-sm opacity-80">items</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-2xl">${totalPrice.toFixed(2)}</div>
                <div className="text-sm opacity-80">total</div>
              </div>
              <div className="flex space-x-3">
                <Link to="/order/cafe" state={{ cartItems }} onClick={() => console.log('Navigating to Cafe with:', cartItems)}>
                  <motion.button
                    className="bg-primary-dark text-primary-gold px-6 py-2 rounded-full font-semibold hover:bg-opacity-80 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Order in Café
                  </motion.button>
                </Link>
                <Link to="/order/delivery" state={{ cartItems }} onClick={() => console.log('Navigating to Delivery with:', cartItems)}>
                  <motion.button
                    className="bg-primary-red text-white px-6 py-2 rounded-full font-semibold hover:bg-red-800 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Order Online
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default MenuPage;