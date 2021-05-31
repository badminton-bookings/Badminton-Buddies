const Sequelize = require("sequelize");
const db = require("../db");

const Location = db.define("location", {
  gymName: {
    type: Sequelize.STRING,
  },
  zipCode: {
    type: Sequelize.INTEGER,
  },
  price: {
    type: Sequelize.INTEGER,
  },
  address: {
    type: Sequelize.STRING,
  },
});

module.exports = Location;
