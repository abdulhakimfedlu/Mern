const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    salary: {
        type: Number,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['Active', 'Fired'],
        default: 'Active',
    },
    photo: {
        type: String,
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Employee', employeeSchema);
