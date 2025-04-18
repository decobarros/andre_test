const express = require('express');
const { saveGameData, listGameData } = require('../controllers/memoryController');
const router = express.Router();

// Route to save game data
router.post('/save', saveGameData);

router.post('/list', listGameData);

module.exports = router;
