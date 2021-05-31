//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/user");
const leaderBoard = require("./models/leaderBoard");
const locations = require("./models/locations");
const matches = require("./models/matches");


//associations
User.belongsTo(leaderBoard)
User.hasMany(matches)

matches.belongsTo(User)
matches.hasOne(locations)

locations.belongsTo(matches)

leaderBoard.hasMany(User)


module.exports = {
  db,
  User,
  matches,
  locations,
  leaderBoard,
};

// The HasOne association
// The BelongsTo association
// The HasMany association
// The BelongsToMany association