import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const DashboardLayout = () => {
    return (
        <div className="min-h-screen bg-black text-white flex">
            <Sidebar />
            <div className="flex-1 ml-64">
                <header className="h-20 border-b border-white/10 flex items-center justify-between px-8 bg-black/50 backdrop-blur-md sticky top-0 z-50">
                    <h2 className="text-xl font-semibold text-white">Overview</h2>
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary-gold/20 flex items-center justify-center text-primary-gold font-bold">
                            A
                        </div>
                    </div>
                </header>
                <main className="p-8">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
