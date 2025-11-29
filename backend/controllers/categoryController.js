const Category = require('../models/Category');
const fs = require('fs');
const path = require('path');

// @desc    Get all categories
// @route   GET /api/categories
// @access  Public
const getCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Create a category
// @route   POST /api/categories
// @access  Private (Admin)
const createCategory = async (req, res) => {
    try {
        const existingCategory = await Category.findOne({ name: { $regex: new RegExp(`^${req.body.name}$`, 'i') } });
        if (existingCategory) {
            return res.status(400).json({ message: 'Category with this name already exists' });
        }

        const categoryData = {
            name: req.body.name,
            image: req.file ? `/uploads/${req.file.filename}` : req.body.image || ''
        };

        const category = await Category.create(categoryData);
        res.status(201).json(category);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Update a category
// @route   PUT /api/categories/:id
// @access  Private (Admin)
const updateCategory = async (req, res) => {
    try {
        const updateData = {
            name: req.body.name
        };

        // If new file uploaded, use it; otherwise keep existing or use provided URL
        if (req.file) {
            updateData.image = `/uploads/${req.file.filename}`;

            // Delete old image if it exists and is a local file
            const oldCategory = await Category.findById(req.params.id);
            if (oldCategory && oldCategory.image && oldCategory.image.startsWith('/uploads/')) {
                const oldImagePath = path.join(__dirname, '..', oldCategory.image);
                if (fs.existsSync(oldImagePath)) {
                    fs.unlinkSync(oldImagePath);
                }
            }
        } else if (req.body.image) {
            updateData.image = req.body.image;
        }

        const category = await Category.findByIdAndUpdate(req.params.id, updateData, { new: true });
        res.status(200).json(category);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Delete a category
// @route   DELETE /api/categories/:id
// @access  Private (Admin)
const deleteCategory = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);

        // Delete associated image if it's a local file
        if (category && category.image && category.image.startsWith('/uploads/')) {
            const imagePath = path.join(__dirname, '..', category.image);
            if (fs.existsSync(imagePath)) {
                fs.unlinkSync(imagePath);
            }
        }

        await Category.findByIdAndDelete(req.params.id);
        res.status(200).json({ id: req.params.id });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    getCategories,
    createCategory,
    updateCategory,
    deleteCategory,
};
