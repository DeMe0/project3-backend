const { Schema, model } = require("mongoose");

//ITALIAN ICE SCHEMA
const italianIceSchema = new Schema(
  {
    flavor: String,
    brand: String,
    img: String,
    containsDairy: Boolean,
  },
  { timestamps: true }
);

//ITALIAN ICE MODEL
const ItalianIce = model("ItalianIce", italianIceSchema);

//EXPORT MODEL
module.exports = ItalianIce;
