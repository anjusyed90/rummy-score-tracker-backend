const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Game = sequelize.define('Game', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Game.associate = (models) => {
    Game.hasMany(models.Player, {
      foreignKey: 'GameId',
      as: 'players',
    });
  };

  return Game;
};
