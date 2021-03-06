"use strict";

// const { mapValueFieldNames } = require("sequelize/types/lib/utils");
const { db, User, LeaderBoard, Location, Match } = require("../server/db");

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  // Creating Users
  const users = await Promise.all([
    User.create({
      email: "jonathan@gmail.com",
      password: "123",
      name: "Jonathan",
      gender: "male",
      zipCode: "11020",
      skillLevel: "Advanced",
    }),
    User.create({
      email: "winson@gmail.com",
      password: "123",
      name: "Wison",
      gender: "male",
      zipCode: "11020",
      skillLevel: "Advanced",
    }),
  ]);

  // Creating Locations
  const locations = await Promise.all([
    Location.create({
      gymName: "NYBC",
      zipCode: "11354",
      price: "10",
      address: "132-70 34th Ave, Queens, NY"
    }),
    Location.create({
      gymName: "Long Island Sports Center",
      zipCode: "11576",
      price: "19",
      address: " 22 Lumber Rd, Roslyn, NY"
    }),
    Location.create({
      gymName: "Tiger Badminton",
      zipCode: "11374",
      price: "18",
      address: " 97-30 Queens Blvd, Rego Park, NY"
    }),
  ]);

  // Creating Matches
  const matches = await Promise.all([
    Match.create({
      userId: 1,
      date: "7/01/2021",
      booked: true,
      checkIn: true,
      timeSpan: "2 hours",
      adminId: 1,
      matchType: "Singles",
      locationId: 1
    }),
    Match.create({
      userId: 2,
      date: "7/31/2021",
      booked: false,
      checkIn: false,
      timeSpan: "5 hours",
      adminId: 2,
      matchType: "Doubles"
    }),
  ]);

  const leaderBoard = await Promise.all([
    LeaderBoard.create({
      userId: 1,
      wins: 2,
      losses: 5,
      ties: 9,
    }),
    LeaderBoard.create({
      userId: 2,
      wins: 5,
      losses: 5,
      ties: 0,
    }),
  ]);

  // await matches[0].setUser(users[0]);
  // await locations[0].setMatches(matches[0]);
  // await leaderBoard[0].setUser(user[0]);

  console.log(`seeded successfully`);
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
