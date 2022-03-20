const mongoose = require("mongoose");
const globalSchema = new mongoose.Schema({
  NewConfirmed: {
    type: String,
  },
  TotalConfirmed: {
    type: String,
  },
  NewDeaths: {
    type: String,
  },
  TotalDeaths: {
    type: String,
  },
  NewRecovered: {
    type: String,
  },
  TotalRecovered: {
    type: String,
  },
  Date: {
    type: Date,
  },
});

module.exports = mongoose.model("global", globalSchema);
