const Country = require("../models/Country");
const Global = require("../models/Global");

exports.Query = {
  countries: async () => {
    const allCountries = await Country.find();
    return allCountries;
  },
  global: async () => {
    const global = await Global.findOne();
    return global;
  },
};
