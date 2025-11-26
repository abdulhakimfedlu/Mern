import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Search, Edit2, Trash2, Upload, Camera, UtensilsCrossed } from 'lucide-react';
import ConfirmationModal from '../components/ConfirmationModal';

const FoodCategoryDashboard = () => {
    const [categories, setCategories] = useState([
        { id: 1, name: 'Appetizers', image: 'https://images.unsplash.com/photo-1541529086526-db283c563270?w=500&h=500&fit=crop' },
        { id: 2, name: 'Main Course', image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=500&h=500&fit=crop' },
        { id: 3, name: 'Desserts', image: 'https://images.unsplash.com/photo-1563729768-74915bd6b2f6?w=500&h=500&fit=crop' },
        { id: 4, name: 'Beverages', image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=500&h=500&fit=crop' },
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [categoryToDelete, setCategoryToDelete] = useState(null);
    const [currentCategory, setCurrentCategory] = useState(null);
    const [formData, setFormData] = useState({ name: '', image: null, imagePreview: '' });
    const [searchQuery, setSearchQuery] = useState('');

    const handleOpenModal = (category = null) => {
        if (category) {
            setCurrentCategory(category);
            setFormData({ name: category.name, imagePreview: category.image });
        } else {
            setCurrentCategory(null);
            setFormData({ name: '', image: null, imagePreview: '' });
        }
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setCurrentCategory(null);
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const previewUrl = URL.createObjectURL(file);
            setFormData({ ...formData, image: file, imagePreview: previewUrl });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const categoryData = {
            name: formData.name,
            image: formData.imagePreview // In a real app, this would be the uploaded file URL
        };

        if (currentCategory) {
            setCategories(categories.map(cat => cat.id === currentCategory.id ? { ...categoryData, id: cat.id } : cat));
        } else {
            setCategories([...categories, { ...categoryData, id: Date.now() }]);
        }
        handleCloseModal();
    };

    const handleDelete = (category) => {
        setCategoryToDelete(category);
        setIsDeleteModalOpen(true);
    };

    const confirmDelete = () => {
        if (categoryToDelete) {
            setCategories(categories.filter(cat => cat.id !== categoryToDelete.id));
            setIsDeleteModalOpen(false);
            setCategoryToDelete(null);
        }
    };

    const filteredCategories = categories.filter(cat =>
        cat.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-serif font-bold text-white mb-1">Food Categories</h1>
                    <p className="text-primary-gold/80 text-sm font-medium">Manage your menu sections</p>
                </div>
                <button
                    onClick={() => handleOpenModal()}
                    className="bg-gradient-to-r from-primary-gold to-yellow-600 text-primary-dark px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:shadow-lg hover:shadow-primary-gold/20 hover:scale-105 transition-all duration-300 uppercase tracking-wider text-sm"
                >
                    <Plus size={20} />
                    Add Category
                </button>
            </div>

            {/* Search */}
            <div className="bg-white/5 border border-primary-gold/20 p-4 rounded-xl flex items-center gap-3 backdrop-blur-sm">
                <Search className="text-primary-gold" size={20} />
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search categories..."
                    className="bg-transparent border-none focus:outline-none text-white w-full placeholder-gray-500 text-base"
                />
            </div>

            {/* Category List */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredCategories.map((category) => (
                    <motion.div
                        key={category.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary-gold hover:bg-white/10 transition-all duration-300 group relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-24 h-24 bg-primary-gold/5 rounded-bl-full -mr-12 -mt-12 transition-transform group-hover:scale-150 duration-500" />

                        <div className="flex items-center gap-4 mb-6 relative z-10">
                            <div className="w-20 h-20 rounded-xl overflow-hidden border-2 border-primary-gold/30 group-hover:border-primary-gold transition-colors shadow-lg">
                                <img
                                    src={category.image || 'https://via.placeholder.com/150'}
                                    alt={category.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white font-serif">{category.name}</h3>
                                <p className="text-primary-gold/70 text-xs font-medium uppercase tracking-wider">
                                    {/* Placeholder for item count if available in future */}
                                    Menu Section
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-3 relative z-10">
                            <button
                                onClick={() => handleOpenModal(category)}
                                className="flex-1 py-2 bg-white/5 hover:bg-primary-gold hover:text-primary-dark border border-white/10 hover:border-primary-gold rounded-lg text-white text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-wide"
                            >
                                <Edit2 size={16} /> Edit
                            </button>
                            <button
                                onClick={() => handleDelete(category)}
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
                            className="bg-[#1A0F08] border border-primary-gold/30 rounded-3xl p-8 w-full max-w-md relative shadow-2xl shadow-primary-gold/10"
                        >
                            <div className="text-center mb-6">
                                <h2 className="text-2xl font-serif font-bold text-white mb-2">
                                    {currentCategory ? 'Edit Category' : 'New Category'}
                                </h2>
                                <div className="w-12 h-1 bg-primary-gold mx-auto rounded-full" />
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="flex justify-center mb-6">
                                    <div className="relative group cursor-pointer w-full aspect-video rounded-xl overflow-hidden border-2 border-dashed border-white/20 hover:border-primary-gold transition-colors bg-black/40 flex items-center justify-center">
                                        {formData.imagePreview ? (
                                            <img src={formData.imagePreview} alt="Preview" className="w-full h-full object-cover" />
                                        ) : (
                                            <div className="flex flex-col items-center gap-2 text-gray-500 group-hover:text-primary-gold transition-colors">
                                                <Camera size={32} />
                                                <span className="text-xs font-bold uppercase tracking-wider">Upload Cover (Optional)</span>
                                            </div>
                                        )}
                                        <label className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                                            <Upload className="text-white" size={24} />
                                            <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                                        </label>
                                    </div>
                                </div>

                                <div className="group">
                                    <label className="block text-primary-gold text-xs font-bold uppercase tracking-wider mb-2">Category Name</label>
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary-gold focus:bg-black/40 focus:outline-none transition-all text-sm"
                                        placeholder="Enter category name"
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
                                        Save Category
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
                title="Delete Category"
                message={`Are you sure you want to delete "${categoryToDelete?.name}"? This action cannot be undone.`}
            />
        </div>
    );
};

export default FoodCategoryDashboard;
