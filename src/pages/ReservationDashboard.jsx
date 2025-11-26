import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, Phone, User, GlassWater } from 'lucide-react';

const ReservationDashboard = () => {
    const reservations = [
        { id: 1, name: 'Abebe Bikila', phone: '0911234567', date: '2023-11-25', time: '7:00 PM', guests: 4, occasion: 'Birthday' },
        { id: 2, name: 'Tirunesh Dibaba', phone: '0911234568', date: '2023-11-26', time: '8:30 PM', guests: 2, occasion: 'Anniversary' },
        { id: 3, name: 'Haile Gebrselassie', phone: '0911234569', date: '2023-11-27', time: '1:00 PM', guests: 6, occasion: 'Business Lunch' },
        { id: 4, name: 'Derartu Tulu', phone: '0911234570', date: '2023-11-28', time: '6:00 PM', guests: 3, occasion: 'Casual' },
    ];

    return (
        <div className="space-y-8">
            {/* Header */}
            <div>
                <h1 className="text-4xl font-serif font-bold text-white mb-2 tracking-tight">Reservations</h1>
                <p className="text-primary-gold/80 text-base font-medium">Manage table bookings</p>
            </div>

            {/* Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {reservations.map((res, index) => (
                    <motion.div
                        key={res.id}
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
                        </div>

                        <div className="space-y-4 relative z-10">
                            <div className="flex items-center gap-3 text-gray-300">
                                <Calendar size={18} className="text-primary-gold" />
                                <span className="text-sm font-medium">{res.date}</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300">
                                <Clock size={18} className="text-primary-gold" />
                                <span className="text-sm font-medium">{res.time}</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300">
                                <Users size={18} className="text-primary-gold" />
                                <span className="text-sm font-medium">{res.guests} Guests</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300">
                                <GlassWater size={18} className="text-primary-gold" />
                                <span className="text-sm font-medium">{res.occasion}</span>
                            </div>
                        </div>


                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ReservationDashboard;
