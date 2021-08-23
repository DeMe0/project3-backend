const { Schema, model } = require("mongoose");

//PARLOUR SCHEMA
const parlourSchema = new Schema(
  {
    name: String,
    city: String,
    address: String,
    rating: String,
    ratingQty: String,
    img: String,
  },
  { timestamps: true }
);

//Parlour MODEL
const Parlour = model("Parlour", parlourSchema);

//EXPORT MODEL
module.exports = Parlour;
