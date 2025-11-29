const Employee = require('../models/Employee');

// @desc    Get all employees
// @route   GET /api/employees
// @access  Private (Admin)
const getEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Create an employee
// @route   POST /api/employees
// @access  Private (Admin)
const createEmployee = async (req, res) => {
    try {
        const employee = await Employee.create(req.body);
        res.status(201).json(employee);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Update an employee
// @route   PUT /api/employees/:id
// @access  Private (Admin)
const updateEmployee = async (req, res) => {
    try {
        const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(employee);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Delete an employee
// @route   DELETE /api/employees/:id
// @access  Private (Admin)
const deleteEmployee = async (req, res) => {
    try {
        await Employee.findByIdAndDelete(req.params.id);
        res.status(200).json({ id: req.params.id });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    getEmployees,
    createEmployee,
    updateEmployee,
    deleteEmployee,
};
