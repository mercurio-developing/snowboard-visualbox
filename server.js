const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const config = require("./config/config");
const Athletes = require("./routes/api/athletes");

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// SEEDER
require("./db");
// models
const Champions = require("./models/champion");

app.use("/api/athletes", Athletes);

// Server static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
// PLEASE FILL YOUR .ENV FILE:

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
