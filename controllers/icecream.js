const IceCream = require("../models/icecream");
const { Router } = require("express");
const router = Router();

const iceCreamSeed = [
  {
    flavor: "Butter Pecan Ice Cream",
    brand: "Häagen-Dazs",
    type: "Ice Cream",
    img: "https://res.cloudinary.com/ademeo/image/upload/v1629479367/project3/00055000547321_fkmgam.jpg",
    containsDairy: true,
  },
  {
    flavor: "Wildberry Cheesecake Ice Cream",
    brand: "Trader Joe's",
    type: "Ice Cream",
    img: "https://res.cloudinary.com/ademeo/image/upload/v1629479460/project3/mlq3uwr4fn671_xzryh1.jpg",
    containsDairy: true,
  },
  {
    flavor: "Pineapple Upside Down Cake Ice Cream",
    brand: "Jeni's",
    type: "Ice Cream",
    img: "https://res.cloudinary.com/ademeo/image/upload/v1629479584/project3/resize_afyek5.webp",
    containsDairy: true,
  },
];

// Seed Route for Seeding Database
router.get("/seed", async (req, res) => {
  // try block for catching errors
  try {
    // remove all IceCream from database
    await IceCream.remove({});
    // add the seed data to the database
    await IceCream.create(iceCreamSeed);
    // get full list of songs to confirm seeding worked
    const icecreams = await IceCream.find({});
    // return full list of songs as JSON
    res.json(icecreams);
  } catch (error) {
    // return error as JSON with an error status
    res.status(400).json(error);
  }
});

//index route
router.get("/", async (req, res) => {
  res.json(await IceCream.find({}));
});

//create route
router.post("/", async (req, res) => {
  res.json(await IceCream.create(req.body));
});

//update route
router.put("/:id", async (req, res) => {
  res.json(
    await IceCream.findByIdAndUpdate(req.params.id, req.body, { new: true })
  );
});

//delete route
router.delete("/:id", async (req, res) => {
  res.json(await IceCream.findByIdAndRemove(req.params.id));
});

// EXPORT ROUTER
module.exports = router;
