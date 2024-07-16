const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Score = sequelize.define('Score', {
    points: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Score.associate = (models) => {
    Score.belongsTo(models.Player, {
      foreignKey: 'PlayerId',
      as: 'player',
    });
  };

  return Score;
};
