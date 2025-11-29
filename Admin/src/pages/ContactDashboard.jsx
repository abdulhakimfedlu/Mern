import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Trash2, Mail, MessageSquare, Calendar, User } from 'lucide-react';
import ConfirmationModal from '../components/ConfirmationModal';
import api from '../api/axios';

const ContactDashboard = () => {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchMessages();
    }, []);

    const fetchMessages = async () => {
        try {
            const response = await api.get('/contact');
            setMessages(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching messages:', error);
            setLoading(false);
        }
    };

    const [searchQuery, setSearchQuery] = useState('');
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [messageToDelete, setMessageToDelete] = useState(null);

    const handleDelete = (message) => {
        setMessageToDelete(message);
        setIsDeleteModalOpen(true);
    };

    const confirmDelete = async () => {
        if (messageToDelete) {
            try {
                await api.delete(`/contact/${messageToDelete._id}`);
                setMessages(messages.filter(msg => msg._id !== messageToDelete._id));
                setIsDeleteModalOpen(false);
                setMessageToDelete(null);
            } catch (error) {
                console.error('Error deleting message:', error);
            }
        }
    };

    const filteredMessages = messages.filter(msg =>
        msg.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        msg.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
        msg.email.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-serif font-bold text-white mb-1">Messages</h1>
                    <p className="text-primary-gold/80 text-sm font-medium">Client inquiries and feedback</p>
                </div>
            </div>

            {/* Search */}
            <div className="bg-white/5 border border-primary-gold/20 p-4 rounded-xl flex items-center gap-3 backdrop-blur-sm">
                <Search className="text-primary-gold" size={20} />
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search messages..."
                    className="bg-transparent border-none focus:outline-none text-white w-full placeholder-gray-500 text-base"
                />
            </div>

            {/* Messages List */}
            <div className="grid grid-cols-1 gap-4">
                <AnimatePresence>
                    {filteredMessages.map((msg) => (
                        <motion.div
                            key={msg._id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary-gold hover:bg-white/10 transition-all duration-300 group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 bg-primary-gold/5 rounded-bl-full -mr-12 -mt-12 transition-transform group-hover:scale-150 duration-500" />

                            <div className="flex flex-col md:flex-row gap-6 relative z-10">
                                {/* Sender Info */}
                                <div className="md:w-1/4 space-y-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-primary-gold/10 flex items-center justify-center text-primary-gold border border-primary-gold/30">
                                            <User size={20} />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold font-serif">{msg.name}</h3>
                                            <p className="text-gray-400 text-xs">{msg.email}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-500 text-xs">
                                        <Calendar size={14} />
                                        {msg.date}
                                    </div>
                                </div>

                                {/* Message Content */}
                                <div className="flex-1 space-y-2">
                                    <div className="flex items-center gap-2 mb-2">
                                        <MessageSquare size={16} className="text-primary-gold" />
                                        <h4 className="text-primary-gold font-bold text-sm uppercase tracking-wide">{msg.subject}</h4>
                                    </div>
                                    <p className="text-gray-300 text-sm leading-relaxed bg-black/20 p-4 rounded-xl border border-white/5">
                                        {msg.message}
                                    </p>
                                </div>

                                {/* Actions */}
                                <div className="flex items-start justify-end">
                                    <button
                                        onClick={() => handleDelete(msg)}
                                        className="p-3 bg-red-500/10 text-red-400 border border-red-500/30 hover:bg-red-500 hover:text-white rounded-xl transition-all duration-300 group/btn"
                                        title="Delete Message"
                                    >
                                        <Trash2 size={20} className="group-hover/btn:scale-110 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>

                {filteredMessages.length === 0 && (
                    <div className="text-center py-12 text-gray-500">
                        <Mail size={48} className="mx-auto mb-4 opacity-20" />
                        <p>No messages found</p>
                    </div>
                )}
            </div>

            <ConfirmationModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={confirmDelete}
                title="Delete Message"
                message={`Are you sure you want to delete the message from "${messageToDelete?.name}"? This action cannot be undone.`}
            />
        </div>
    );
};

export default ContactDashboard;
