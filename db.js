"use strict";

const mongoose = require("mongoose");
const config = require("./config/config");
const Champions = require("./models/champion");
const data = require("./mock/data.js");

mongoose.Promise = require("bluebird");
mongoose.connect(
  config.mongoURI,
  { useNewUrlParser: true },
  function(err) {
    if (err) {
      console.log("Failed connecting to MongoDB!");
    } else {
      console.log("Successfully connected to MongoDB!");
    }
  }
);
var db = mongoose.connection;
const Schema = mongoose.Schema,
  ObjectID = require("mongodb").ObjectID;
db.on("error", function(err) {
  console.log("error");
}).catch(function(err) {
  console.error(err);
});
db.once("open", function() {
  console.log("running");
  async function dropDatabase() {
    console.log("Removing Champions collection");
    await Champions.remove();
    console.log("Success!");
  }
  async function seedChampions() {
    console.log("Seeding data..");
    try {
      await Champions.insertMany(data.champions);
      console.log("Success!");
    } catch (error) {
      console.log("Error:" + error);
    }
  }
  async function doBoth() {
    // await dropDatabase();
    // await seedChampions();
  }
  doBoth();
}).catch(function(err) {
  console.error(err);
});

module.exports = db;
