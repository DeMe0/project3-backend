const { Schema, model } = require("mongoose");

//ITALIAN ICE SCHEMA
const italianIceSchema = new Schema(
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

//ITALIAN ICE MODEL
const ItalianIce = model("ItalianIce", italianIceSchema);

//EXPORT MODEL
module.exports = ItalianIce;
