// Create web server
// Create a route to get all comments
// Create a route to get comment by id
// Create a route to add a comment
// Create a route to update a comment
// Create a route to delete a comment

// Import express
const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');

// Get all comments
router.get('/', async (req, res) => {
    try {
        const comments = await Comment.find();
        res.json(comments);
    } catch (err) {
        res.json({ message: err });
    }
});

// Get comment by id
router.get('/:commentId', async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.commentId);
        res.json(comment);
    } catch (err) {
        res.json({ message: err });
    }
});

// Add comment
router.post('/', async (req, res) => {
    const comment = new Comment({
        text: req.body.text
    });

    try {
        const savedComment = await comment.save();
        res.json(savedComment);
    } catch (err) {
        res.json({ message: err });
    }
});