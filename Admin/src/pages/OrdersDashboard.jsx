import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Truck, Coffee, MapPin, Phone, Clock, CheckCircle, XCircle, FileText, X } from 'lucide-react';
import api from '../api/axios';

const OrdersDashboard = () => {
    const [activeTab, setActiveTab] = useState('cafe');
    const [selectedReceipt, setSelectedReceipt] = useState(null);
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchOrders();
        const interval = setInterval(fetchOrders, 30000); // Poll every 30 seconds
        return () => clearInterval(interval);
    }, []);

    const fetchOrders = async () => {
        try {
            const response = await api.get('/orders');
            setOrders(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching orders:', error);
            setLoading(false);
        }
    };

    const handleStatusUpdate = async (orderId, newStatus) => {
        try {
            await api.put(`/orders/${orderId}`, { status: newStatus });
            fetchOrders(); // Refresh orders
        } catch (error) {
            console.error('Error updating order status:', error);
        }
    };

    const cafeOrders = orders.filter(order => order.type === 'cafe');
    const deliveryOrders = orders.filter(order => order.type === 'delivery');

    return (
        <div className="space-y-8">
            {/* Header */}
            <div>
                <h1 className="text-4xl font-serif font-bold text-white mb-2 tracking-tight">Orders</h1>
                <p className="text-primary-gold/80 text-base font-medium">Manage your culinary operations</p>
            </div>

            {/* Tabs */}
            <div className="flex gap-6 border-b border-white/10 pb-1">
                <button
                    onClick={() => setActiveTab('cafe')}
                    className={`pb-4 px-2 text-sm font-bold uppercase tracking-widest transition-all duration-500 flex items-center gap-3 relative ${activeTab === 'cafe'
                        ? 'text-primary-gold'
                        : 'text-gray-500 hover:text-white'
                        }`}
                >
                    <Coffee size={20} />
                    Café Orders
                    {activeTab === 'cafe' && (
                        <motion.div
                            layoutId="activeTab"
                            className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-gold to-yellow-600 shadow-[0_0_10px_rgba(212,175,55,0.5)]"
                        />
                    )}
                </button>
                <button
                    onClick={() => setActiveTab('delivery')}
                    className={`pb-4 px-2 text-sm font-bold uppercase tracking-widest transition-all duration-500 flex items-center gap-3 relative ${activeTab === 'delivery'
                        ? 'text-primary-gold'
                        : 'text-gray-500 hover:text-white'
                        }`}
                >
                    <Truck size={20} />
                    Delivery Orders
                    {activeTab === 'delivery' && (
                        <motion.div
                            layoutId="activeTab"
                            className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-gold to-yellow-600 shadow-[0_0_10px_rgba(212,175,55,0.5)]"
                        />
                    )}
                </button>
            </div>

            {/* Content */}
            <AnimatePresence mode="wait">
                {activeTab === 'cafe' ? (
                    <motion.div
                        key="cafe"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
                    >
                        {cafeOrders.map((order) => (
                            <div key={order._id} className="bg-[#1A0F08] border border-white/5 rounded-3xl p-8 hover:border-primary-gold hover:shadow-[0_0_40px_rgba(212,175,55,0.15)] hover:scale-[1.02] transition-all duration-500 group relative overflow-hidden backdrop-blur-xl">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-gold/10 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700 blur-xl" />

                                <div className="flex justify-between items-start mb-6 relative z-10">
                                    <div className="bg-primary-gold/10 text-primary-gold px-4 py-1.5 rounded-xl text-xs font-bold uppercase tracking-widest border border-primary-gold/20 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                                        {order.table}
                                    </div>
                                    <div className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${order.status === 'Served' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                                        }`}>
                                        {order.status}
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 mb-3 relative z-10">
                                    <h3 className="text-2xl font-bold text-white font-serif group-hover:text-primary-gold transition-colors duration-300">{order.customer}</h3>
                                    <span className="bg-primary-gold text-primary-dark text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg shadow-primary-gold/20">
                                        {order.items.length} items
                                    </span>
                                </div>

                                <div className="text-gray-400 text-sm mb-6 relative z-10 font-medium leading-relaxed">
                                    {order.items.map(item => item.name).join(', ')}
                                </div>

                                {order.specialRequest && (
                                    <div className="bg-white/5 border border-primary-gold/30 p-4 rounded-2xl mb-6 relative z-10 group-hover:bg-primary-gold/5 transition-colors">
                                        <p className="text-primary-gold text-[10px] font-bold uppercase tracking-widest mb-2">Special Request</p>
                                        <p className="text-white text-sm italic font-serif">"{order.specialRequest}"</p>
                                    </div>
                                )}

                                <div className="flex gap-4 pt-6 border-t border-white/5 relative z-10">
                                    {order.status !== 'Served' && (
                                        <button
                                            onClick={() => handleStatusUpdate(order._id, 'Served')}
                                            className="flex-1 py-3 bg-primary-gold text-primary-dark hover:bg-yellow-400 hover:scale-105 rounded-xl text-xs font-bold transition-all uppercase tracking-widest shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]"
                                        >
                                            Mark Served
                                        </button>
                                    )}
                                    <button
                                        onClick={() => handleStatusUpdate(order._id, 'Cancelled')}
                                        className="flex-1 py-3 bg-transparent border border-white/10 text-gray-400 hover:text-white hover:border-white/30 hover:bg-white/5 rounded-xl text-xs font-bold transition-all uppercase tracking-widest"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                ) : (
                    <motion.div
                        key="delivery"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
                    >
                        {deliveryOrders.map((order) => (
                            <div key={order._id} className="bg-[#1A0F08] border border-white/5 rounded-3xl p-8 hover:border-primary-gold hover:shadow-[0_0_40px_rgba(212,175,55,0.15)] hover:scale-[1.02] transition-all duration-500 group relative overflow-hidden backdrop-blur-xl">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-gold/10 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700 blur-xl" />

                                <div className="flex items-start justify-between mb-6 relative z-10">
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <h3 className="text-2xl font-bold text-white font-serif group-hover:text-primary-gold transition-colors duration-300">{order.customer}</h3>
                                            <span className="bg-primary-gold text-primary-dark text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg shadow-primary-gold/20">
                                                {order.items.length} items
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2 text-primary-gold text-xs font-bold tracking-wide mb-1">
                                            <Phone size={14} />
                                            {order.phone}
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-400 text-xs font-medium">
                                            <MapPin size={14} />
                                            {order.location}
                                        </div>
                                    </div>
                                    <div className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${order.status === 'Delivered' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                                        }`}>
                                        {order.status}
                                    </div>
                                </div>

                                <div className="bg-black/40 p-4 rounded-2xl border border-white/5 mb-6 relative z-10 group-hover:border-primary-gold/20 transition-colors">
                                    <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-2">Order Items</p>
                                    <p className="text-white text-sm font-medium leading-relaxed">{order.items.map(item => item.name).join(', ')}</p>
                                </div>

                                <div className="flex gap-4 pt-2 relative z-10">
                                    {order.status !== 'Delivered' && (
                                        <button
                                            onClick={() => handleStatusUpdate(order._id, order.status === 'Pending' ? 'Out for Delivery' : 'Delivered')}
                                            className="flex-1 py-3 bg-primary-gold text-primary-dark hover:bg-yellow-400 hover:scale-105 rounded-xl text-xs font-bold transition-all uppercase tracking-widest shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]"
                                        >
                                            {order.status === 'Pending' ? 'Start Delivery' : 'Mark Delivered'}
                                        </button>
                                    )}
                                    {order.paymentScreenshot && (
                                        <button
                                            onClick={() => setSelectedReceipt(order.paymentScreenshot.startsWith('http') ? order.paymentScreenshot : `http://localhost:5000${order.paymentScreenshot}`)}
                                            className="px-6 py-3 bg-transparent border border-primary-gold text-primary-gold hover:bg-primary-gold hover:text-primary-dark rounded-xl text-xs font-bold transition-all flex items-center gap-2 uppercase tracking-widest hover:shadow-[0_0_20px_rgba(212,175,55,0.2)]"
                                        >
                                            <FileText size={16} />
                                            Receipt
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Receipt Modal */}
            <AnimatePresence>
                {selectedReceipt && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl" onClick={() => setSelectedReceipt(null)}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="bg-[#1A0F08] border border-primary-gold/30 rounded-3xl p-6 max-w-lg w-full relative shadow-[0_0_50px_rgba(212,175,55,0.15)]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedReceipt(null)}
                                className="absolute -top-4 -right-4 bg-primary-gold text-primary-dark rounded-full p-3 hover:bg-white transition-all shadow-lg hover:scale-110 hover:rotate-90 duration-300"
                            >
                                <X size={20} />
                            </button>
                            <div className="text-center mb-6">
                                <h3 className="text-2xl font-serif font-bold text-white mb-2">Payment Receipt</h3>
                                <div className="w-16 h-1 bg-primary-gold mx-auto rounded-full" />
                            </div>
                            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                                <img src={selectedReceipt} alt="Receipt" className="w-full h-auto" />
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default OrdersDashboard;
