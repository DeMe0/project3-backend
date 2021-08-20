const { Schema, model } = require("mongoose");

//ICECREAM SCHEMA
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
const Popsicle = model("IceCream", popsicleSchema);

//EXPORT MODEL
module.exports = Popsicle;
