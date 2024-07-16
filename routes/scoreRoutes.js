const express = require('express');
const { createScore, getAllScores } = require('../controllers/scoreController');
const router = express.Router();

router.post('/', createScore);  // POST /scores
router.get('/', getAllScores);  // GET /scores

module.exports = router;
