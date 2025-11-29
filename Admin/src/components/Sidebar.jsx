import React from 'react';
import { NavLink } from 'react-router-dom';
import { Users, LayoutDashboard, Settings, LogOut, ShoppingBag, Calendar, UtensilsCrossed, FileText, Mail } from 'lucide-react';

const Sidebar = () => {
    const navItems = [
        { icon: <LayoutDashboard size={20} />, label: 'Dashboard', path: '/' },
        { icon: <ShoppingBag size={20} />, label: 'Orders', path: '/orders' },
        { icon: <Calendar size={20} />, label: 'Reservations', path: '/reservations' },
        { icon: <UtensilsCrossed size={20} />, label: 'Categories', path: '/categories' },
        { icon: <FileText size={20} />, label: 'Menu Items', path: '/menu-items' },
        { icon: <Mail size={20} />, label: 'Messages', path: '/messages' },
        { icon: <Users size={20} />, label: 'Employees', path: '/employees' },
        { icon: <Settings size={20} />, label: 'Settings', path: '/settings' },
    ];

    return (
        <div className="h-screen w-64 bg-[#1A0F08] border-r border-primary-gold/20 flex flex-col fixed left-0 top-0 z-50">
            <div className="p-8 border-b border-primary-gold/10">
                <h1 className="text-3xl font-serif font-bold text-white tracking-tight">
                    Éclat <span className="text-primary-gold italic">Admin</span>
                </h1>
            </div>

            <nav className="flex-1 px-4 space-y-3 py-8">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            `flex items-center gap-4 px-6 py-4 rounded-xl transition-all duration-300 group ${isActive
                                ? 'bg-primary-gold/10 text-primary-gold border border-primary-gold/30 shadow-[0_0_15px_rgba(212,175,55,0.1)]'
                                : 'text-gray-400 hover:bg-white/5 hover:text-white hover:border hover:border-white/10'
                            }`
                        }
                    >
                        <span className="group-hover:scale-110 transition-transform duration-300">
                            {item.icon}
                        </span>
                        <span className="font-medium tracking-wide">{item.label}</span>
                    </NavLink>
                ))}
            </nav>

            <div className="p-6 border-t border-primary-gold/10 bg-black/20">
                <button className="flex items-center gap-3 px-6 py-4 w-full text-gray-400 hover:text-red-400 hover:bg-red-500/10 hover:border hover:border-red-500/20 rounded-xl transition-all duration-300 group">
                    <LogOut size={20} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="font-bold tracking-wide">Logout</span>
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
