const mongoose = require("mongoose");
const countrySchema = new mongoose.Schema({
  Country: {
    type: String,
  },
  CountryCode: {
    type: String,
  },
  Slug: {
    type: String,
  },
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
  Premium: {
    type: Object,
  },
});

module.exports = mongoose.model("country", countrySchema);
