const express = require('express');
//change
const router = express.Router();

// Grab the controller functions
const { index, create, destroy } = require('../controllers/bookmarks');

// http://localhost:8000/bookmarks

// Get all bookmarks
router.get('/', index);

// Create a bookmark
router.post('/', create);

// Delete a bookmark
router.delete('/:id', destroy);

module.exports = router;
