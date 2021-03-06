const Sequelize = require('sequelize');
const db = require('../db');

const Match = db.define('match', {
  date: {
    type: Sequelize.DATE,
  },
  booked: {
    type: Sequelize.BOOLEAN,
  },
  checkIn: {
    type: Sequelize.BOOLEAN,
  },
  timeSpan: {
    type: Sequelize.STRING,
  },
  adminId: {
    type: Sequelize.INTEGER,
  },
  matchType: {
    type: Sequelize.STRING,
  },
});

module.exports = Match;
