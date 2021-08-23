const { Schema, model } = require("mongoose");

//POPSICLE SCHEMA
const popsicleSchema = new Schema(
  {
    flavor: String,
    brand: String,
    type: String,
    img: String,
    price: Number,
    containsDairy: Boolean,
  },
  { timestamps: true }
);

//POPSICLE MODEL
const Popsicle = model("Popsicle", popsicleSchema);

//EXPORT MODEL
module.exports = Popsicle;
