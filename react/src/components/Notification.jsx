import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, X } from 'lucide-react';

const Notification = ({ show, type, message, onClose }) => {
    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0, y: 50 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.8, opacity: 0, y: 50 }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-gradient-to-br from-primary-brown to-primary-dark rounded-3xl p-8 shadow-2xl border border-primary-gold/20 max-w-md w-full relative"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                        >
                            <X size={24} />
                        </button>

                        <div className="flex flex-col items-center text-center">
                            {type === 'success' ? (
                                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                                    <CheckCircle className="w-12 h-12 text-green-400" />
                                </div>
                            ) : (
                                <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mb-6">
                                    <XCircle className="w-12 h-12 text-red-400" />
                                </div>
                            )}

                            <h3 className="text-2xl font-bold text-white mb-3 font-serif">
                                {type === 'success' ? 'Success!' : 'Error'}
                            </h3>

                            <p className="text-gray-300 mb-6 leading-relaxed">
                                {message}
                            </p>

                            <motion.button
                                onClick={onClose}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`px-8 py-3 rounded-xl font-semibold transition-all ${type === 'success'
                                    ? 'bg-green-500 hover:bg-green-600 text-white'
                                    : 'bg-red-500 hover:bg-red-600 text-white'
                                    }`}
                            >
                                Close
                            </motion.button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Notification;
