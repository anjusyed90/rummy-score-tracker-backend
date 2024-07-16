const { Sequelize } = require('sequelize');
const config = require('../config/config');

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
});

const db = {
  sequelize,
  Sequelize,
  Game: require('./game')(sequelize),
  Player: require('./player')(sequelize),
  Score: require('./score')(sequelize),
};

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;
