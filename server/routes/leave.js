const router = require('express').Router();
const Leave = require('../models/Leave');
const auth = require('../middleware/auth');

// Create a new leave application
router.post('/', auth, async (req, res) => {
    // ...
});

// Get all leave applications
router.get('/', auth, async (req, res) => {
    // ...
});

// Get a specific leave application
router.get('/:id', auth, async (req, res) => {
    // ...
});

// Approve a leave application
router.put('/:id/approve', auth, async (req, res) => {
    // ...
});

// Reject a leave application
router.put('/:id/reject', auth, async (req, res) => {
    // ...
});

module.exports = router;