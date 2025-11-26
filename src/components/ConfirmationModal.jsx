import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

const ConfirmationModal = ({ isOpen, onClose, onConfirm, title, message }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="bg-[#1A0F08] border border-red-500/30 rounded-3xl p-8 w-full max-w-md relative shadow-2xl shadow-red-500/10 text-center"
                    >
                        <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-red-500/20">
                            <AlertTriangle className="text-red-500" size={32} />
                        </div>

                        <h2 className="text-2xl font-serif font-bold text-white mb-2">
                            {title}
                        </h2>

                        <p className="text-gray-400 mb-8">
                            {message}
                        </p>

                        <div className="flex gap-4">
                            <button
                                onClick={onClose}
                                className="flex-1 py-3 bg-transparent border border-white/10 hover:bg-white/5 rounded-xl text-gray-400 hover:text-white font-bold transition-all uppercase tracking-wider text-sm"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={onConfirm}
                                className="flex-1 py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl font-bold shadow-lg shadow-red-500/20 hover:scale-105 transition-all uppercase tracking-wider text-sm"
                            >
                                Delete
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ConfirmationModal;
