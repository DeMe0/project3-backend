const { Schema, model } = require("mongoose");

//DRINK SCHEMA
const drinkSchema = new Schema(
  {
    flavor: String,
    store: String,
    type: String,
    img: String,
    price: Number,
    containsDairy: Boolean,
    containsAlcohol: Boolean,
  },
  { timestamps: true }
);

//DRINK MODEL
const Drink = model("Drink", drinkSchema);

//EXPORT MODEL
module.exports = Drink;
