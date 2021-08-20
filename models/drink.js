const { Schema, model } = require("mongoose");

//DRINK SCHEMA
const drinkSchema = new Schema(
  {
    flavor: String,
    brand: String,
    img: String,
    containsDairy: Boolean,
  },
  { timestamps: true }
);

//DRINK MODEL
const Drink = model("Drink", drinkSchema);

//EXPORT MODEL
module.exports = Drink;
