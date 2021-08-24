const FullInventory = require("../models/fullInventory");
const { Router } = require("express");
const router = Router();
const fullInventorySeed = require("../db/fullInventorySeedData.json");

// Seed Route for Seeding Database
router.get("/seed", async (req, res) => {
  // try block for catching errors
  try {
    // remove all fullinventory products from database
    await FullInventory.remove({});
    // add the seed data to the database
    await FullInventory.create(fullInventorySeed);
    // get full list of full inventory products to confirm seeding worked
    const ices = await FullInventory.find({});
    // return full list of drinks as JSON
    res.json(ices);
  } catch (error) {
    // return error as JSON with an error status
    res.status(400).json(error);
  }
});

//index route
router.get("/", async (req, res) => {
  res.json(await FullInventory.find({}));
});

//create route
router.post("/", async (req, res) => {
  res.json(await FullInventory.create(req.body));
});

//update route
router.put("/:id", async (req, res) => {
  res.json(
    await FullInventory.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
  );
});

//delete route
router.delete("/:id", async (req, res) => {
  res.json(await FullInventory.findByIdAndRemove(req.params.id));
});

// EXPORT ROUTER
module.exports = router;
