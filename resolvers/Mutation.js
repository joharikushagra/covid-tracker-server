const { mongoose } = require("mongoose");
const fetch = require("node-fetch");
const Country = require("../models/Country");
const Global = require("../models/Global");

exports.Mutation = {
  addCountries: async () => {
    mongoose.connection.collections["countries"].drop(() =>
      console.log("collection dropped")
    );
    const res = await fetch("https://api.covid19api.com/summary");
    const data = await res.json();
    const countryInDB = Country.insertMany(data.Countries)
      .then(() => console.log("docs saved successfully"))
      .catch((err) => console.log(err));
    await countryInDB.save();
  },
  addGlobal: async () => {
    mongoose.connection.collections["globals"].drop(() =>
      console.log("collection dropped")
    );
    const res = await fetch("https://api.covid19api.com/summary");
    const data = await res.json();
    const globalInDB = Global.create(data.Global)
      .then(() => console.log("doc saved successfully"))
      .catch((err) => console.log(err));
    await globalInDB.save();
  },
};
