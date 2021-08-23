const Drink = require("../models/drink");
const { Router } = require("express");
const router = Router();
const drinkSeed = require("../db/drinkSeedData.json");

// Seed Route for Seeding Database
router.get("/seed", async (req, res) => {
  // try block for catching errors
  try {
    // remove all Ices from database
    await Drink.remove({});
    // add the seed data to the database
    await Drink.create(drinkSeed);
    // get full list of drinks to confirm seeding worked
    const ices = await Drink.find({});
    // return full list of drinks as JSON
    res.json(ices);
  } catch (error) {
    // return error as JSON with an error status
    res.status(400).json(error);
  }
});

//index route
router.get("/", async (req, res) => {
  res.json(await Drink.find({}));
});

//create route
router.post("/", async (req, res) => {
  res.json(await Drink.create(req.body));
});

//update route
router.put("/:id", async (req, res) => {
  res.json(
    await Drink.findByIdAndUpdate(req.params.id, req.body, { new: true })
  );
});

//delete route
router.delete("/:id", async (req, res) => {
  res.json(await Drink.findByIdAndRemove(req.params.id));
});

// EXPORT ROUTER
module.exports = router;
