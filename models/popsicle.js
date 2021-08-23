const { Schema, model } = require("mongoose");

//POPSICLE SCHEMA
const popsicleSchema = new Schema(
  {
    flavor: String,
    brand: String,
    img: String,
    containsDairy: Boolean,
  },
  { timestamps: true }
);

//ICECREAM MODEL
const Popsicle = model("Popsicle", popsicleSchema);

//EXPORT MODEL
module.exports = Popsicle;
