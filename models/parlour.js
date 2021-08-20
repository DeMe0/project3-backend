const { Schema, model } = require("mongoose");

//DOG SCHEMA
const parlourSchema = new Schema(
  {
    name: String,
    city: String,
    img: String,
    containsDairy: Boolean,
  },
  { timestamps: true }
);

//ICECREAM MODEL
const Parlour = model("Parlour", parlourSchema);

//EXPORT MODEL
module.exports = Parlour;
