const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();

//middlewares
app.use(cors());
app.use(express.json());

const products = require("./Data/products.json");

app.get("/", (req, res) => {
  res.send("COLO WEAR server is running");
});

//get all products
app.get("/products", (req, res) => {
  res.send(products);
});

app.listen(port, () => {
  console.log(`COLO WEAR server running on ${port}`);
});
