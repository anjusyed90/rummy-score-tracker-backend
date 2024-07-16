const { Game, Player, Score } = require('../models');

exports.createGame = async (req, res) => {
  try {
    const game = await Game.create(req.body);
    res.json(game);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getGameDetails = async (req, res) => {
    try {
      const game = await Game.findByPk(req.params.gameId, {
        include: {
          model: Player,
          as: 'players',
          include: {
            model: Score,
            as: 'scores',
          },
        },
      });
      res.json(game);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
