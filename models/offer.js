const { Schema, model } = require("mongoose");

//OFFER SCHEMA
const offerSchema = new Schema(
  {
    title: String,
    description: String,
    discount: Number,
    img: String,
  },
  { timestamps: true }
);

//OFFER MODEL
const Offer = model("Offer", offerSchema);

//EXPORT MODEL
module.exports = Offer;
