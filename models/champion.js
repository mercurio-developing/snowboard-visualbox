const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ChampionSchema = new Schema({
  athleteName: String,
  gender: String,
  country: String,
  olympicGames: String,
  medalType: String
});
const Champion = mongoose.model("champions", ChampionSchema);
module.exports = Champion;
