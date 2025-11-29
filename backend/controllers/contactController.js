const Contact = require('../models/Contact');

// @desc    Get all messages
// @route   GET /api/contact
// @access  Private (Admin)
const getMessages = async (req, res) => {
    try {
        const messages = await Contact.find().sort({ createdAt: -1 });
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Create a message
// @route   POST /api/contact
// @access  Public
const createMessage = async (req, res) => {
    try {
        const message = await Contact.create(req.body);
        res.status(201).json(message);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Delete a message
// @route   DELETE /api/contact/:id
// @access  Private (Admin)
const deleteMessage = async (req, res) => {
    try {
        await Contact.findByIdAndDelete(req.params.id);
        res.status(200).json({ id: req.params.id });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    getMessages,
    createMessage,
    deleteMessage,
};
