// src/pages/MenuPage.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState({});

  const menuItems = {
    appetizers: [
      {
        id: 1,
        name: "Truffle Arancini",
        description: "Crispy risotto balls with black truffle and fontina cheese",
        price: 18,
        image: "https://images.unsplash.com/photo-1563370921-6c8bcd6d7b7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      {
        id: 2,
        name: "Hamachi Crudo",
        description: "Yellowtail with yuzu, chili, and fresh herbs",
        price: 22,
        image: "https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      }
    ],
    mains: [
      {
        id: 3,
        name: "Dry-Aged Ribeye",
        description: "28-day dry-aged beef with roasted bone marrow and red wine jus",
        price: 65,
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      {
        id: 4,
        name: "Maine Lobster",
        description: "Whole lobster with drawn butter and lemon herb salad",
        price: 75,
        image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      }
    ],
    desserts: [
      {
        id: 5,
        name: "Chocolate Soufflé",
        description: "Warm chocolate soufflé with vanilla bean ice cream",
        price: 16,
        image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      {
        id: 6,
        name: "Crème Brûlée",
        description: "Classic vanilla bean custard with caramelized sugar",
        price: 14,
        image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      }
    ]
  };

  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'appetizers', name: 'Appetizers' },
    { id: 'mains', name: 'Main Courses' },
    { id: 'desserts', name: 'Desserts' }
  ];

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

  const getCartItems = () => {
    const allItems = [...menuItems.appetizers, ...menuItems.mains, ...menuItems.desserts];
    return Object.entries(cart).map(([id, quantity]) => {
      const item = allItems.find(item => item.id === parseInt(id));
      return { ...item, quantity };
    });
  };

  const cartItems = getCartItems();
  const totalItems = Object.values(cart).reduce((sum, qty) => sum + qty, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const filteredItems = selectedCategory === 'all' 
    ? [...menuItems.appetizers, ...menuItems.mains, ...menuItems.desserts]
    : menuItems[selectedCategory];

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
          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-primary-gold text-primary-dark'
                    : 'bg-primary-brown text-gray-300 hover:text-white hover:bg-opacity-80'
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>

          {/* Menu Items Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="bg-primary-brown rounded-2xl overflow-hidden shadow-2xl group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
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
                        onClick={() => removeFromCart(item.id)}
                        className="w-8 h-8 rounded-full bg-primary-dark text-primary-gold border border-primary-gold flex items-center justify-center hover:bg-primary-gold hover:text-primary-dark transition-colors"
                        disabled={!cart[item.id]}
                      >
                        -
                      </button>
                      <span className="text-white font-semibold w-8 text-center">
                        {cart[item.id] || 0}
                      </span>
                      <button
                        onClick={() => addToCart(item.id)}
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
                <div className="font-bold text-2xl">${totalPrice}</div>
                <div className="text-sm opacity-80">total</div>
              </div>
              <div className="flex space-x-3">
                <Link to="/order/cafe">
                  <motion.button
                    className="bg-primary-dark text-primary-gold px-6 py-2 rounded-full font-semibold hover:bg-opacity-80 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Order in Café
                  </motion.button>
                </Link>
                <Link to="/order/delivery">
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