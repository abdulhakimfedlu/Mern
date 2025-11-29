const Reservation = require('../models/Reservation');

// @desc    Get all reservations
// @route   GET /api/reservations
// @access  Private (Admin)
const getReservations = async (req, res) => {
    try {
        const reservations = await Reservation.find().sort({ date: 1, time: 1 });
        res.status(200).json(reservations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Create a reservation
// @route   POST /api/reservations
// @access  Public
const createReservation = async (req, res) => {
    try {
        const reservation = await Reservation.create(req.body);
        res.status(201).json(reservation);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Update a reservation
// @route   PUT /api/reservations/:id
// @access  Private (Admin)
const updateReservation = async (req, res) => {
    try {
        const reservation = await Reservation.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(reservation);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Delete a reservation
// @route   DELETE /api/reservations/:id
// @access  Private (Admin)
const deleteReservation = async (req, res) => {
    try {
        await Reservation.findByIdAndDelete(req.params.id);
        res.status(200).json({ id: req.params.id });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    getReservations,
    createReservation,
    updateReservation,
    deleteReservation,
};
