const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Player = sequelize.define('Player', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Player.associate = (models) => {
    Player.belongsTo(models.Game, {
      foreignKey: 'GameId',
      as: 'game',
    });
    Player.hasMany(models.Score, {
      foreignKey: 'PlayerId',
      as: 'scores',
    });
  };

  return Player;
};
