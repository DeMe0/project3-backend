const { Schema, model } = require("mongoose");

//OFFER SCHEMA
const offerSchema = new Schema(
  {
    title: String,
    description: String,
    brand: String,
    img: String,
  },
  { timestamps: true }
);

//OFFER MODEL
const Offer = model("ItalianIce", offerSchema);

//EXPORT MODEL
module.exports = Offer;
