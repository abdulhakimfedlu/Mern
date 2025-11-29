const Order = require('../models/Order');

// @desc    Get all orders
// @route   GET /api/orders
// @access  Private (Admin)
const getOrders = async (req, res) => {
    try {
        const orders = await Order.find().sort({ createdAt: -1 });
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Create an order
// @route   POST /api/orders
// @access  Public
const createOrder = async (req, res) => {
    try {
        const orderData = req.body;

        // Parse items if it's a JSON string (from FormData)
        if (typeof orderData.items === 'string') {
            orderData.items = JSON.parse(orderData.items);
        }

        // If a payment screenshot was uploaded, add its path to the order data
        if (req.file) {
            orderData.paymentScreenshot = '/uploads/' + req.file.filename;
        }

        const order = await Order.create(orderData);
        res.status(201).json(order);
    } catch (error) {
        console.error('Order creation error:', error);
        res.status(400).json({ message: error.message });
    }
};

// @desc    Update an order status
// @route   PUT /api/orders/:id
// @access  Private (Admin)
const updateOrder = async (req, res) => {
    try {
        const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(order);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Delete an order
// @route   DELETE /api/orders/:id
// @access  Private (Admin)
const deleteOrder = async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id);
        res.status(200).json({ id: req.params.id });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    getOrders,
    createOrder,
    updateOrder,
    deleteOrder,
};
