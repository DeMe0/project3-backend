const { Schema, model } = require("mongoose");

//FullInventory SCHEMA
const fullInventorySchema = new Schema(
  {
    flavor: String,
    store: String,
    brand: String,
    type: String,
    img: String,
    price: Number,
    containsDairy: Boolean,
    containsAlcohol: Boolean,
  },
  { timestamps: true }
);

//FullInventory MODEL
const FullInventory = model("fullInventory", fullInventorySchema);

//EXPORT MODEL
module.exports = FullInventory;
