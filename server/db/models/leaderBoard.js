const Sequelize = require("sequelize");
const db = require("../db");

const LeaderBoard = db.define("leaderBoard", {
  wins: {
    type: Sequelize.INTEGER,
  },
  losses: {
    type: Sequelize.INTEGER,
  },
  ties: {
    type: Sequelize.INTEGER,
  },
});

module.exports = LeaderBoard;
