import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Search, Edit2, Trash2, Upload, Camera } from 'lucide-react';
import ConfirmationModal from '../components/ConfirmationModal';
import api from '../api/axios';

const FoodItemsDashboard = () => {
    const [items, setItems] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchItems();
        fetchCategories();
    }, []);

    const fetchItems = async () => {
        try {
            const response = await api.get('/items');
            setItems(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching items:', error);
            setLoading(false);
        }
    };

    const fetchCategories = async () => {
        try {
            const response = await api.get('/categories');
            setCategories(response.data.map(cat => cat.name));
        } catch (error) {
            console.error('Error fetching categories:', error);
            setCategories(['Appetizers', 'Main Course', 'Desserts', 'Beverages']);
        }
    };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [itemToDelete, setItemToDelete] = useState(null);
    const [currentItem, setCurrentItem] = useState(null);
    const [formData, setFormData] = useState({ name: '', category: 'Main Course', price: '', description: '', image: null, imagePreview: '' });
    const [searchQuery, setSearchQuery] = useState('');

    const handleOpenModal = (item = null) => {
        if (item) {
            setCurrentItem(item);
            setFormData({ ...item, imagePreview: item.image });
        } else {
            setCurrentItem(null);
            setFormData({ name: '', category: categories[0] || 'Main Course', price: '', description: '', image: null, imagePreview: '' });
        }
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setCurrentItem(null);
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const previewUrl = URL.createObjectURL(file);
            setFormData({ ...formData, image: file, imagePreview: previewUrl });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formDataToSend = new FormData();
        formDataToSend.append('name', formData.name);
        formDataToSend.append('category', formData.category);
        formDataToSend.append('price', formData.price);
        formDataToSend.append('description', formData.description);

        if (formData.image instanceof File) {
            formDataToSend.append('image', formData.image);
        } else if (formData.imagePreview && !formData.imagePreview.startsWith('blob:')) {
            formDataToSend.append('image', formData.imagePreview);
        }

        try {
            if (currentItem) {
                const response = await api.put(`/items/${currentItem._id}`, formDataToSend, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                });
                setItems(items.map(item => item._id === currentItem._id ? response.data : item));
            } else {
                const response = await api.post('/items', formDataToSend, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                });
                setItems([...items, response.data]);
            }
            handleCloseModal();
        } catch (error) {
            console.error('Error saving item:', error);
        }
    };

    const handleDelete = (item) => {
        setItemToDelete(item);
        setIsDeleteModalOpen(true);
    };

    const confirmDelete = async () => {
        if (itemToDelete) {
            try {
                await api.delete(`/items/${itemToDelete._id}`);
                setItems(items.filter(item => item._id !== itemToDelete._id));
                setIsDeleteModalOpen(false);
                setItemToDelete(null);
            } catch (error) {
                console.error('Error deleting item:', error);
            }
        }
    };

    const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-serif font-bold text-white mb-1">Menu Items</h1>
                    <p className="text-primary-gold/80 text-sm font-medium">Manage your dishes and prices</p>
                </div>
                <button
                    onClick={() => handleOpenModal()}
                    className="bg-gradient-to-r from-primary-gold to-yellow-600 text-primary-dark px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:shadow-lg hover:shadow-primary-gold/20 hover:scale-105 transition-all duration-300 uppercase tracking-wider text-sm"
                >
                    <Plus size={20} />
                    Add Item
                </button>
            </div>

            {/* Search */}
            <div className="bg-white/5 border border-primary-gold/20 p-4 rounded-xl flex items-center gap-3 backdrop-blur-sm">
                <Search className="text-primary-gold" size={20} />
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search menu items..."
                    className="bg-transparent border-none focus:outline-none text-white w-full placeholder-gray-500 text-base"
                />
            </div>

            {/* Items List */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredItems.map((item) => (
                    <motion.div
                        key={item._id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary-gold hover:bg-white/10 transition-all duration-300 group relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-24 h-24 bg-primary-gold/5 rounded-bl-full -mr-12 -mt-12 transition-transform group-hover:scale-150 duration-500" />

                        <div className="flex items-start gap-4 mb-4 relative z-10">
                            <div className="w-24 h-24 rounded-xl overflow-hidden border-2 border-primary-gold/30 group-hover:border-primary-gold transition-colors shadow-lg shrink-0">
                                <img
                                    src={item.image?.startsWith('/uploads')
                                        ? `http://localhost:5000${item.image}`
                                        : item.image || 'https://via.placeholder.com/150'}
                                    alt={item.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white font-serif leading-tight mb-1">{item.name}</h3>
                                <span className="inline-block px-2 py-1 bg-primary-gold/10 text-primary-gold text-[10px] font-bold uppercase tracking-wider rounded-md mb-2">
                                    {item.category}
                                </span>
                                <p className="text-primary-gold font-bold">{parseInt(item.price).toLocaleString()} ETB</p>
                            </div>
                        </div>

                        <p className="text-gray-400 text-xs mb-6 line-clamp-2 relative z-10 h-8">
                            {item.description}
                        </p>

                        <div className="flex gap-3 relative z-10">
                            <button
                                onClick={() => handleOpenModal(item)}
                                className="flex-1 py-2 bg-white/5 hover:bg-primary-gold hover:text-primary-dark border border-white/10 hover:border-primary-gold rounded-lg text-white text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-wide"
                            >
                                <Edit2 size={16} /> Edit
                            </button>
                            <button
                                onClick={() => handleDelete(item)}
                                className="flex-1 py-2 bg-red-500/10 text-red-400 border border-red-500/30 hover:bg-red-500 hover:text-white rounded-lg text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-wide"
                            >
                                <Trash2 size={16} /> Delete
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
                            className="bg-[#1A0F08] border border-primary-gold/30 rounded-3xl p-8 w-full max-w-2xl relative shadow-2xl shadow-primary-gold/10 max-h-[90vh] overflow-y-auto"
                        >
                            <div className="text-center mb-6">
                                <h2 className="text-2xl font-serif font-bold text-white mb-2">
                                    {currentItem ? 'Edit Item' : 'New Item'}
                                </h2>
                                <div className="w-12 h-1 bg-primary-gold mx-auto rounded-full" />
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="flex justify-center mb-6">
                                    <div className="relative group cursor-pointer w-full max-w-sm aspect-video rounded-xl overflow-hidden border-2 border-dashed border-white/20 hover:border-primary-gold transition-colors bg-black/40 flex items-center justify-center">
                                        {formData.imagePreview ? (
                                            <img src={formData.imagePreview} alt="Preview" className="w-full h-full object-cover" />
                                        ) : (
                                            <div className="flex flex-col items-center gap-2 text-gray-500 group-hover:text-primary-gold transition-colors">
                                                <Camera size={32} />
                                                <span className="text-xs font-bold uppercase tracking-wider">Upload Photo</span>
                                            </div>
                                        )}
                                        <label className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                                            <Upload className="text-white" size={24} />
                                            <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                                        </label>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="group">
                                        <label className="block text-primary-gold text-xs font-bold uppercase tracking-wider mb-2">Item Name</label>
                                        <input
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary-gold focus:bg-black/40 focus:outline-none transition-all text-sm"
                                            placeholder="Enter item name"
                                            required
                                        />
                                    </div>
                                    <div className="group">
                                        <label className="block text-primary-gold text-xs font-bold uppercase tracking-wider mb-2">Category</label>
                                        <select
                                            value={formData.category}
                                            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                            className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary-gold focus:bg-black/40 focus:outline-none transition-all appearance-none cursor-pointer text-sm"
                                        >
                                            {categories.map(cat => (
                                                <option key={cat} value={cat} className="bg-primary-dark">{cat}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="group">
                                    <label className="block text-primary-gold text-xs font-bold uppercase tracking-wider mb-2">Price (ETB)</label>
                                    <div className="relative">
                                        <input
                                            type="number"
                                            value={formData.price}
                                            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                                            className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary-gold focus:bg-black/40 focus:outline-none transition-all text-sm"
                                            placeholder="0.00"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="group">
                                    <label className="block text-primary-gold text-xs font-bold uppercase tracking-wider mb-2">Description</label>
                                    <textarea
                                        value={formData.description}
                                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                        className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary-gold focus:bg-black/40 focus:outline-none transition-all text-sm h-24 resize-none"
                                        placeholder="Describe the dish..."
                                        required
                                    />
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
                                        Save Item
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <ConfirmationModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={confirmDelete}
                title="Delete Item"
                message={`Are you sure you want to delete "${itemToDelete?.name}"? This action cannot be undone.`}
            />
        </div>
    );
};

export default FoodItemsDashboard;
