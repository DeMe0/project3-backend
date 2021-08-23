const { Schema, model } = require("mongoose");

//ICECREAM SCHEMA
const iceCreamSchema = new Schema(
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

//ICECREAM MODEL
const IceCream = model("IceCream", iceCreamSchema);

//EXPORT MODEL
module.exports = IceCream;
