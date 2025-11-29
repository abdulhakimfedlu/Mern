import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Search, Edit2, Trash2, CheckCircle, XCircle, Upload, Camera } from 'lucide-react';

const EmployeeDashboard = () => {
    const [employees, setEmployees] = useState([
        { id: 1, name: 'Abdu Ahmed', role: 'Head Chef', salary: '50000', phone: '0911234567', status: 'Active', photo: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=150&h=150&fit=crop' },
        { id: 2, name: 'Sara Kebede', role: 'Sous Chef', salary: '35000', phone: '0911234568', status: 'Active', photo: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=150&h=150&fit=crop' },
        { id: 3, name: 'Dawit Tadesse', role: 'Server', salary: '15000', phone: '0911234569', status: 'Fired', photo: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=150&h=150&fit=crop' },
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentEmployee, setCurrentEmployee] = useState(null);
    const [formData, setFormData] = useState({ name: '', role: '', salary: '', phone: '', status: 'Active', photo: null, photoPreview: '' });
    const [searchQuery, setSearchQuery] = useState('');
    const [errors, setErrors] = useState({});

    const handleOpenModal = (employee = null) => {
        setErrors({});
        if (employee) {
            setCurrentEmployee(employee);
            setFormData({ ...employee, photoPreview: employee.photo });
        } else {
            setCurrentEmployee(null);
            setFormData({ name: '', role: '', salary: '', phone: '', status: 'Active', photo: null, photoPreview: '' });
        }
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setCurrentEmployee(null);
    };

    const handlePhotoUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const previewUrl = URL.createObjectURL(file);
            setFormData({ ...formData, photo: file, photoPreview: previewUrl });
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!/^\d+$/.test(formData.salary)) {
            newErrors.salary = 'Only numbers are allowed';
        }
        if (!/^\d+$/.test(formData.phone)) {
            newErrors.phone = 'Only numbers are allowed';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;

        const employeeData = {
            ...formData,
            photo: formData.photoPreview // In a real app, this would be the uploaded file URL
        };

        if (currentEmployee) {
            setEmployees(employees.map(emp => emp.id === currentEmployee.id ? { ...employeeData, id: emp.id } : emp));
        } else {
            setEmployees([...employees, { ...employeeData, id: Date.now() }]);
        }
        handleCloseModal();
    };

    const toggleStatus = (id) => {
        setEmployees(employees.map(emp =>
            emp.id === id ? { ...emp, status: emp.status === 'Active' ? 'Fired' : 'Active' } : emp
        ));
    };

    const filteredEmployees = employees.filter(emp =>
        emp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        emp.role.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-serif font-bold text-white mb-1">Employees</h1>
                    <p className="text-primary-gold/80 text-sm font-medium">Manage your culinary team</p>
                </div>
                <button
                    onClick={() => handleOpenModal()}
                    className="bg-gradient-to-r from-primary-gold to-yellow-600 text-primary-dark px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:shadow-lg hover:shadow-primary-gold/20 hover:scale-105 transition-all duration-300 uppercase tracking-wider text-sm"
                >
                    <Plus size={20} />
                    Add Employee
                </button>
            </div>

            {/* Filters & Search */}
            <div className="bg-white/5 border border-primary-gold/20 p-4 rounded-xl flex items-center gap-3 backdrop-blur-sm">
                <Search className="text-primary-gold" size={20} />
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search employees..."
                    className="bg-transparent border-none focus:outline-none text-white w-full placeholder-gray-500 text-base"
                />
            </div>

            {/* Employee List */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredEmployees.map((employee) => (
                    <motion.div
                        key={employee.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary-gold hover:bg-white/10 transition-all duration-300 group relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-24 h-24 bg-primary-gold/5 rounded-bl-full -mr-12 -mt-12 transition-transform group-hover:scale-150 duration-500" />

                        <div className="flex items-start justify-between mb-4 relative z-10">
                            <div className="flex items-center gap-4">
                                <div className="relative">
                                    <img
                                        src={employee.photo || 'https://via.placeholder.com/150'}
                                        alt={employee.name}
                                        className="w-16 h-16 rounded-full object-cover border-2 border-primary-gold shadow-lg shadow-primary-gold/20"
                                    />
                                    <div className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-black ${employee.status === 'Active' ? 'bg-green-500' : 'bg-red-500'
                                        }`} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white font-serif">{employee.name}</h3>
                                    <p className="text-primary-gold text-sm font-medium">{employee.role}</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2 mb-6 relative z-10 bg-black/20 p-3 rounded-xl border border-white/5">
                            <div className="flex justify-between text-xs">
                                <span className="text-gray-400">Salary</span>
                                <span className="text-white font-bold">{parseInt(employee.salary).toLocaleString()} ETB</span>
                            </div>
                            <div className="flex justify-between text-xs">
                                <span className="text-gray-400">Phone</span>
                                <span className="text-white font-bold">{employee.phone}</span>
                            </div>
                            <div className="flex justify-between text-xs">
                                <span className="text-gray-400">Status</span>
                                <span className={`font-bold ${employee.status === 'Active' ? 'text-green-400' : 'text-red-400'
                                    }`}>{employee.status}</span>
                            </div>
                        </div>

                        <div className="flex gap-3 relative z-10">
                            <button
                                onClick={() => handleOpenModal(employee)}
                                className="flex-1 py-2 bg-white/5 hover:bg-primary-gold hover:text-primary-dark border border-white/10 hover:border-primary-gold rounded-lg text-white text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-wide"
                            >
                                <Edit2 size={16} /> Edit
                            </button>
                            <button
                                onClick={() => toggleStatus(employee.id)}
                                className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-wide border ${employee.status === 'Active'
                                        ? 'bg-red-500/10 text-red-400 border-red-500/30 hover:bg-red-500 hover:text-white'
                                        : 'bg-green-500/10 text-green-400 border-green-500/30 hover:bg-green-500 hover:text-white'
                                    }`}
                            >
                                {employee.status === 'Active' ? <XCircle size={16} /> : <CheckCircle size={16} />}
                                {employee.status === 'Active' ? 'Fire' : 'Activate'}
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="bg-[#1A0F08] border border-primary-gold/30 rounded-3xl p-8 w-full max-w-2xl relative shadow-2xl shadow-primary-gold/10"
                        >
                            <div className="text-center mb-6">
                                <h2 className="text-2xl font-serif font-bold text-white mb-2">
                                    {currentEmployee ? 'Edit Employee' : 'New Employee'}
                                </h2>
                                <div className="w-12 h-1 bg-primary-gold mx-auto rounded-full" />
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="flex justify-center mb-6">
                                    <div className="relative group cursor-pointer">
                                        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary-gold/30 group-hover:border-primary-gold transition-colors bg-black/40 flex items-center justify-center">
                                            {formData.photoPreview ? (
                                                <img src={formData.photoPreview} alt="Preview" className="w-full h-full object-cover" />
                                            ) : (
                                                <Camera className="text-gray-500 group-hover:text-primary-gold transition-colors" size={32} />
                                            )}
                                        </div>
                                        <label className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-full cursor-pointer">
                                            <Upload className="text-white" size={20} />
                                            <input type="file" accept="image/*" onChange={handlePhotoUpload} className="hidden" />
                                        </label>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="group">
                                        <label className="block text-primary-gold text-xs font-bold uppercase tracking-wider mb-2">Full Name</label>
                                        <input
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary-gold focus:bg-black/40 focus:outline-none transition-all text-sm"
                                            placeholder="Enter name"
                                            required
                                        />
                                    </div>
                                    <div className="group">
                                        <label className="block text-primary-gold text-xs font-bold uppercase tracking-wider mb-2">Role</label>
                                        <input
                                            type="text"
                                            value={formData.role}
                                            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                            className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary-gold focus:bg-black/40 focus:outline-none transition-all text-sm"
                                            placeholder="Enter role"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="group">
                                        <label className="block text-primary-gold text-xs font-bold uppercase tracking-wider mb-2">Salary (ETB)</label>
                                        <input
                                            type="text"
                                            value={formData.salary}
                                            onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
                                            className={`w-full bg-black/20 border ${errors.salary ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:border-primary-gold focus:bg-black/40 focus:outline-none transition-all text-sm`}
                                            placeholder="Enter salary"
                                            required
                                        />
                                        {errors.salary && <p className="text-red-500 text-xs mt-1">{errors.salary}</p>}
                                    </div>
                                    <div className="group">
                                        <label className="block text-primary-gold text-xs font-bold uppercase tracking-wider mb-2">Phone Number</label>
                                        <input
                                            type="text"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className={`w-full bg-black/20 border ${errors.phone ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:border-primary-gold focus:bg-black/40 focus:outline-none transition-all text-sm`}
                                            placeholder="Enter phone number"
                                            required
                                        />
                                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                                    </div>
                                </div>

                                <div className="group">
                                    <label className="block text-primary-gold text-xs font-bold uppercase tracking-wider mb-2">Status</label>
                                    <select
                                        value={formData.status}
                                        onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                                        className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary-gold focus:bg-black/40 focus:outline-none transition-all appearance-none cursor-pointer text-sm"
                                    >
                                        <option value="Active" className="bg-primary-dark">Active</option>
                                        <option value="Fired" className="bg-primary-dark">Fired</option>
                                    </select>
                                </div>

                                <div className="flex gap-4 pt-6 border-t border-white/10 mt-6">
                                    <button
                                        type="button"
                                        onClick={handleCloseModal}
                                        className="flex-1 py-3 bg-transparent border border-white/10 hover:bg-white/5 rounded-xl text-gray-400 hover:text-white font-bold transition-all uppercase tracking-wider text-sm"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="flex-1 py-3 bg-gradient-to-r from-primary-gold to-yellow-600 text-primary-dark rounded-xl font-bold hover:shadow-lg hover:shadow-primary-gold/20 hover:scale-105 transition-all uppercase tracking-wider text-sm"
                                    >
                                        Save Employee
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default EmployeeDashboard;
