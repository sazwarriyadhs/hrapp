const router = require('express').Router();
const Employee = require('../models/Employee');
const auth = require('../middleware/auth'); // Assuming you have an auth middleware

// Create a new employee
router.post('/', auth, async (req, res) => {
    // ...
});

// Get all employees
router.get('/', auth, async (req, res) => {
    // ...
});

// Get a specific employee
router.get('/:id', auth, async (req, res) => {
    // ...
});

// Update an employee
router.put('/:id', auth, async (req, res) => {
    // ...
});

// Delete an employee
router.delete('/:id', auth, async (req, res) => {
    // ...
});

module.exports = router;