const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    department: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    hireDate: {
        type: Date,
        default: Date.now
    },
    // Add more fields as needed:
    // - phoneNumber
    // - address
    // - emergencyContact
});

module.exports = mongoose.model('Employee', employeeSchema);