const Parlour = require("../models/parlour");
const { Router } = require("express");
const router = Router();
const parlourSeed = require("../db/parlourSeedData.json");

// Seed Route for Seeding Database
router.get("/seed", async (req, res) => {
  // try block for catching errors
  try {
    // remove all Parlours from database
    await Parlour.remove({});
    // add the seed data to the database
    await Parlour.create(parlourSeed);
    // get full list of parlours to confirm seeding worked
    const parlours = await Parlour.find({});
    // return full list of parlours as JSON
    res.json(parlours);
  } catch (error) {
    // return error as JSON with an error status
    res.status(400).json(error);
  }
});

//index route
router.get("/", async (req, res) => {
  res.json(await Parlour.find({}));
});

//create route
router.post("/", async (req, res) => {
  res.json(await Parlour.create(req.body));
});

//update route
router.put("/:id", async (req, res) => {
  res.json(
    await Parlour.findByIdAndUpdate(req.params.id, req.body, { new: true })
  );
});

//delete route
router.delete("/:id", async (req, res) => {
  res.json(await Parlour.findByIdAndRemove(req.params.id));
});

// EXPORT ROUTER
module.exports = router;
