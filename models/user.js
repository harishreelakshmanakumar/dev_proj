// routes/user.js
const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Create a new user
router.post('/register', async (req, res) => {
    try {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });

        const savedUser = await newUser.save();
        res.json({ message: 'User registered successfully', user: savedUser });
    } catch (error) {
        console.error('Registration failed:', error);
        res.status(500).json({ error: 'Registration failed' });
    }
});

module.exports = router;
