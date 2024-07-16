const { Player, Game } = require('../models');

exports.createPlayer = async (req, res) => {
  try {
    const game = await Game.findByPk(req.body.gameId);
    if (!game) {
      return res.status(404).json({ error: 'Game not found' });
    }
    const player = await Player.create({ ...req.body, GameId: req.body.gameId });
    res.json(player);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllPlayers = async (req, res) => {
  try {
    const players = await Player.findAll();
    res.json(players);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
