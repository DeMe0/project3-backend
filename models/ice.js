const { Schema, model } = require("mongoose");

//ICE SCHEMA
const iceSchema = new Schema(
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

//ICE MODEL
const Ice = model("ItalianIce", iceSchema);

//EXPORT MODEL
module.exports = Ice;
