const { Score, Player } = require('../models');

exports.createScore = async (req, res) => {
  try {
    const player = await Player.findByPk(req.body.playerId);
    if (!player) {
      return res.status(404).json({ error: 'Player not found' });
    }
    const score = await Score.create({ ...req.body, PlayerId: req.body.playerId });
    res.json(score);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllScores = async (req, res) => {
  try {
    const scores = await Score.findAll({ include: 'Player' });
    res.json(scores);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
