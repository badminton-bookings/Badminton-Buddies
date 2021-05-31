//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/user");
const LeaderBoard = require("./models/leaderBoard");
const Location = require("./models/locations");
const Match = require("./models/matches");


//associations
User.hasOne(LeaderBoard)
User.hasMany(Match)

Match.belongsTo(User)
Match.belongsTo(Location)

Location.hasMany(Match)

LeaderBoard.belongsTo(User)


module.exports = {
  db,
  User,
  Match,
  Location,
  LeaderBoard,
};

// The HasOne association
// The BelongsTo association
// The HasMany association
// The BelongsToMany association
