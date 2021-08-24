const Offer = require("../models/offer");
const { Router } = require("express");
const router = Router();
const offerSeed = require("../db/offerSeedData.json");

// Seed Route for Seeding Database
router.get("/seed", async (req, res) => {
  // try block for catching errors
  try {
    // remove all Offers from database
    await Offer.remove({});
    // add the seed data to the database
    await Offer.create(offerSeed);
    // get full list of offers to confirm seeding worked
    const offers = await Offer.find({});
    // return full list of offers as JSON
    res.json(offers);
  } catch (error) {
    // return error as JSON with an error status
    res.status(400).json(error);
  }
});

//index route
router.get("/", async (req, res) => {
  res.json(await Offer.find({}));
});

//create route
router.post("/", async (req, res) => {
  res.json(await Offer.create(req.body));
});

//update route
router.put("/:id", async (req, res) => {
  res.json(
    await Offer.findByIdAndUpdate(req.params.id, req.body, { new: true })
  );
});

//delete route
router.delete("/:id", async (req, res) => {
  res.json(await Offer.findByIdAndRemove(req.params.id));
});

// EXPORT ROUTER
module.exports = router;
