const { Schema, model } = require("mongoose");

//DOG SCHEMA
const iceCreamSchema = new Schema(
  {
    flavor: String,
    brand: String,
    img: String,
    containsDairy: Boolean,
  },
  { timestamps: true }
);

//ICECREAM MODEL
const IceCream = model("IceCream", iceCreamSchema);

//EXPORT MODEL
module.exports = IceCream;
