const Ice = require("../models/ice");
const { Router } = require("express");
const router = Router();
const iceSeed = require("../db/iceData.json");

// Seed Route for Seeding Database
router.get("/seed", async (req, res) => {
  // try block for catching errors
  try {
    // remove all Ices from database
    await Ice.remove({});
    // add the seed data to the database
    await Ice.create(iceSeed);
    // get full list of ices to confirm seeding worked
    const ices = await Ice.find({});
    // return full list of ices as JSON
    res.json(ices);
  } catch (error) {
    // return error as JSON with an error status
    res.status(400).json(error);
  }
});

//index route
router.get("/", async (req, res) => {
  res.json(await Ice.find({}));
});

//create route
router.post("/", async (req, res) => {
  res.json(await Ice.create(req.body));
});

//update route
router.put("/:id", async (req, res) => {
  res.json(await Ice.findByIdAndUpdate(req.params.id, req.body, { new: true }));
});

//delete route
router.delete("/:id", async (req, res) => {
  res.json(await Ice.findByIdAndRemove(req.params.id));
});

// EXPORT ROUTER
module.exports = router;
