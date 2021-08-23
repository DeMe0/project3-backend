///////////////////////////
// Environmental Variables
///////////////////////////
require("dotenv").config();
const { PORT = 3000 } = process.env;

//MONGO CONNECTION
const mongoose = require("./db/connection");

//CORS
const cors = require("cors");

//Bringing in Express
const express = require("express");
const app = express();

//OTHER IMPORTS
const morgan = require("morgan");
const iceCreamRouter = require("./controllers/icecream");
const parlourRouter = require("./controllers/parlour");
const popsicleRouter = require("./controllers/popsicle");
const iceRouter = require("./controllers/ice");
const drinkRouter = require("./controllers/drink");

////////////
//MIDDLEWARE
////////////
app.use(cors());
app.use(express.json());
app.use(morgan("tiny")); //logging

///////////////
//Routes and Routers
//////////////

//Route for testing server is working
app.get("/", (req, res) => {
  res.json({ msg: "Server is working!" });
});

// Routes send users to each respective router
app.use("/icecream", iceCreamRouter);
app.use("/parlours", parlourRouter);
app.use("/popsicles", popsicleRouter);
app.use("/ice", iceRouter);
app.use("/drinks", drinkRouter);

//LISTENER
app.listen(PORT, () => {
  console.log(`Your are listening on port ${PORT}`);
});
