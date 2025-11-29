import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, X } from 'lucide-react';

const Notification = ({ message, type = 'success', onClose, duration = 5000 }) => {
    useEffect(() => {
        if (duration) {
            const timer = setTimeout(() => {
                onClose();
            }, duration);
            return () => clearTimeout(timer);
        }
    }, [duration, onClose]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-8 right-8 z-50"
        >
            <div className={`flex items-center gap-4 px-6 py-4 rounded-2xl shadow-2xl border backdrop-blur-xl ${type === 'success'
                    ? 'bg-green-500/10 border-green-500/20 text-green-400'
                    : 'bg-red-500/10 border-red-500/20 text-red-400'
                }`}>
                {type === 'success' ? <CheckCircle size={24} /> : <XCircle size={24} />}

                <div>
                    <h4 className="font-bold text-lg">
                        {type === 'success' ? 'Success' : 'Error'}
                    </h4>
                    <p className="text-sm opacity-90">{message}</p>
                </div>

                <button
                    onClick={onClose}
                    className="ml-4 p-1 hover:bg-white/10 rounded-full transition-colors"
                >
                    <X size={18} />
                </button>
            </div>
        </motion.div>
    );
};

export default Notification;
