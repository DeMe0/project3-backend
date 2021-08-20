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

// Dog Routes send to dog router
app.use("/icecream", iceCreamRouter);

//LISTENER
app.listen(PORT, () => {
  console.log(`Your are listening on port ${PORT}`);
});
