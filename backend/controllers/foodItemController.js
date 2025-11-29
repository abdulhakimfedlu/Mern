const FoodItem = require('../models/FoodItem');
const fs = require('fs');
const path = require('path');

// @desc    Get all food items
// @route   GET /api/items
// @access  Public
const getFoodItems = async (req, res) => {
    try {
        const items = await FoodItem.find();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Create a food item
// @route   POST /api/items
// @access  Private (Admin)
const createFoodItem = async (req, res) => {
    try {
        const itemData = {
            name: req.body.name,
            category: req.body.category,
            price: req.body.price,
            description: req.body.description,
            image: req.file ? `/uploads/${req.file.filename}` : req.body.image || ''
        };

        const item = await FoodItem.create(itemData);
        res.status(201).json(item);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Update a food item
// @route   PUT /api/items/:id
// @access  Private (Admin)
const updateFoodItem = async (req, res) => {
    try {
        const updateData = {
            name: req.body.name,
            category: req.body.category,
            price: req.body.price,
            description: req.body.description
        };

        // If new file uploaded, use it; otherwise keep existing or use provided URL
        if (req.file) {
            updateData.image = `/uploads/${req.file.filename}`;

            // Delete old image if it exists and is a local file
            const oldItem = await FoodItem.findById(req.params.id);
            if (oldItem && oldItem.image && oldItem.image.startsWith('/uploads/')) {
                const oldImagePath = path.join(__dirname, '..', oldItem.image);
                if (fs.existsSync(oldImagePath)) {
                    fs.unlinkSync(oldImagePath);
                }
            }
        } else if (req.body.image) {
            updateData.image = req.body.image;
        }

        const item = await FoodItem.findByIdAndUpdate(req.params.id, updateData, { new: true });
        res.status(200).json(item);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Delete a food item
// @route   DELETE /api/items/:id
// @access  Private (Admin)
const deleteFoodItem = async (req, res) => {
    try {
        const item = await FoodItem.findById(req.params.id);

        // Delete associated image if it's a local file
        if (item && item.image && item.image.startsWith('/uploads/')) {
            const imagePath = path.join(__dirname, '..', item.image);
            if (fs.existsSync(imagePath)) {
                fs.unlinkSync(imagePath);
            }
        }

        await FoodItem.findByIdAndDelete(req.params.id);
        res.status(200).json({ id: req.params.id });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    getFoodItems,
    createFoodItem,
    updateFoodItem,
    deleteFoodItem,
};
