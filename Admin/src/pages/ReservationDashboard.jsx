import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, Phone, User, Mail, MessageSquare, CheckCircle, XCircle } from 'lucide-react';
import api from '../api/axios';

const ReservationDashboard = () => {
    const [reservations, setReservations] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchReservations();
    }, []);

    const fetchReservations = async () => {
        try {
            const response = await api.get('/reservations');
            setReservations(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching reservations:', error);
            setLoading(false);
        }
    };

    const updateReservationStatus = async (id, status) => {
        try {
            const response = await api.put(`/reservations/${id}`, { status });
            setReservations(reservations.map(res =>
                res._id === id ? response.data : res
            ));
        } catch (error) {
            console.error('Error updating reservation:', error);
        }
    };

    const deleteReservation = async (id) => {
        if (window.confirm('Are you sure you want to delete this reservation?')) {
            try {
                await api.delete(`/reservations/${id}`);
                setReservations(reservations.filter(res => res._id !== id));
            } catch (error) {
                console.error('Error deleting reservation:', error);
            }
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'Confirmed':
                return 'text-green-400 bg-green-500/10 border-green-500/30';
            case 'Pending':
                return 'text-yellow-400 bg-yellow-500/10 border-yellow-500/30';
            case 'Declined':
                return 'text-red-400 bg-red-500/10 border-red-500/30';
            default:
                return 'text-gray-400 bg-gray-500/10 border-gray-500/30';
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="text-primary-gold text-xl">Loading reservations...</div>
            </div>
        );
    }

    return (
        <div className="space-y-8">
            {/* Header */}
            <div>
                <h1 className="text-4xl font-serif font-bold text-white mb-2 tracking-tight">Reservations</h1>
                <p className="text-primary-gold/80 text-base font-medium">
                    {reservations.length} {reservations.length === 1 ? 'reservation' : 'reservations'} total
                </p>
            </div>

            {/* Content */}
            {reservations.length === 0 ? (
                <div className="text-center py-16 bg-white/5 rounded-3xl border border-white/10">
                    <Calendar className="w-16 h-16 text-primary-gold/50 mx-auto mb-4" />
                    <p className="text-gray-400 text-lg">No reservations yet</p>
                    <p className="text-gray-500 text-sm mt-2">Reservations will appear here when customers book tables</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {reservations.map((res, index) => (
                        <motion.div
                            key={res._id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-[#1A0F08] border border-white/5 rounded-3xl p-8 hover:border-primary-gold hover:shadow-[0_0_40px_rgba(212,175,55,0.15)] hover:scale-[1.02] transition-all duration-500 group relative overflow-hidden backdrop-blur-xl"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-gold/10 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700 blur-xl" />

                            <div className="flex items-start justify-between mb-6 relative z-10">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-primary-gold/10 flex items-center justify-center text-primary-gold border border-primary-gold/20">
                                        <User size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white font-serif group-hover:text-primary-gold transition-colors duration-300">{res.name}</h3>
                                        <div className="flex items-center gap-2 text-primary-gold/70 text-xs font-bold tracking-wide">
                                            <Phone size={12} />
                                            {res.phone}
                                        </div>
                                    </div>
                                </div>
                                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase border ${getStatusColor(res.status)}`}>
                                    {res.status}
                                </span>
                            </div>

                            <div className="space-y-4 relative z-10 mb-6">
                                <div className="flex items-center gap-3 text-gray-300">
                                    <Calendar size={18} className="text-primary-gold" />
                                    <span className="text-sm font-medium">{new Date(res.date).toLocaleDateString()}</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-300">
                                    <Clock size={18} className="text-primary-gold" />
                                    <span className="text-sm font-medium">{res.time}</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-300">
                                    <Users size={18} className="text-primary-gold" />
                                    <span className="text-sm font-medium">{res.guests} {res.guests === 1 ? 'Guest' : 'Guests'}</span>
                                </div>
                                {res.email && (
                                    <div className="flex items-center gap-3 text-gray-300">
                                        <Mail size={18} className="text-primary-gold" />
                                        <span className="text-sm font-medium truncate">{res.email}</span>
                                    </div>
                                )}
                                {res.specialRequest && (
                                    <div className="flex items-start gap-3 text-gray-300">
                                        <MessageSquare size={18} className="text-primary-gold flex-shrink-0 mt-0.5" />
                                        <span className="text-sm font-medium">{res.specialRequest}</span>
                                    </div>
                                )}
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-2 relative z-10">
                                {res.status === 'Pending' && (
                                    <button
                                        onClick={() => updateReservationStatus(res._id, 'Confirmed')}
                                        className="flex-1 py-2 bg-green-500/10 text-green-400 border border-green-500/30 hover:bg-green-500 hover:text-white rounded-lg text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2"
                                    >
                                        <CheckCircle size={14} /> Confirm
                                    </button>
                                )}
                                {res.status !== 'Declined' && (
                                    <button
                                        onClick={() => updateReservationStatus(res._id, 'Declined')}
                                        className="flex-1 py-2 bg-red-500/10 text-red-400 border border-red-500/30 hover:bg-red-500 hover:text-white rounded-lg text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2"
                                    >
                                        <XCircle size={14} /> Decline
                                    </button>
                                )}
                                <button
                                    onClick={() => deleteReservation(res._id)}
                                    className="px-4 py-2 bg-white/5 text-gray-400 border border-white/10 hover:bg-red-500 hover:text-white hover:border-red-500 rounded-lg text-xs font-bold transition-all duration-300"
                                >
                                    Delete
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ReservationDashboard;
