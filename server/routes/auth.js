const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// User Registration
router.post('/register', async (req, res) => {
    // ...
});

// User Login
router.post('/login', async (req, res) => {
    // ...
});

// User Logout
router.post('/logout', (req, res) => {
    // ...
});

module.exports = router;