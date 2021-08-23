const Popsicle = require("../models/popsicle");
const { Router } = require("express");
const router = Router();
const popsicleSeed = require("../db/popsicleSeedData.json");

// Seed Route for Seeding Database
router.get("/seed", async (req, res) => {
  // try block for catching errors
  try {
    // remove all Popsicles from database
    await Popsicle.remove({});
    // add the seed data to the database
    await Popsicle.create(popsicleSeed);
    // get full list of popsicles to confirm seeding worked
    const popsicles = await Popsicle.find({});
    // return full list of popsicles as JSON
    res.json(popsicles);
  } catch (error) {
    // return error as JSON with an error status
    res.status(400).json(error);
  }
});

//index route
router.get("/", async (req, res) => {
  res.json(await Popsicle.find({}));
});

//create route
router.post("/", async (req, res) => {
  res.json(await Popsicle.create(req.body));
});

//update route
router.put("/:id", async (req, res) => {
  res.json(
    await Popsicle.findByIdAndUpdate(req.params.id, req.body, { new: true })
  );
});

//delete route
router.delete("/:id", async (req, res) => {
  res.json(await Popsicle.findByIdAndRemove(req.params.id));
});

// EXPORT ROUTER
module.exports = router;
