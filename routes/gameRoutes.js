const express = require('express');
const { createGame, getGameDetails } = require('../controllers/gameController');
const router = express.Router();

router.post('/', createGame);  // POST /games
router.get('/:gameId', getGameDetails);  // GET /games/:gameId

module.exports = router;
