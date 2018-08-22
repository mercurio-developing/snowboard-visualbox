require("dotenv").load();

module.exports = {
  mongoURI: "mongodb://visualbox:visual123@ds229722.mlab.com:29722/snowboard",
  secretOrKey: process.env.secretOrKey
};
