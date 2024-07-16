const express = require('express');
const { createPlayer, getAllPlayers } = require('../controllers/playerController');
const router = express.Router();

router.post('/', createPlayer);  // POST /players
router.get('/', getAllPlayers);  // GET /players

module.exports = router;
