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
app.get("/products/:gender", (req, res) => {
  const gender = req.params.gender;

  const filteredProducts = products.filter((n) => n.gender === gender);
  res.send(filteredProducts);
});
app.get("/products/moreOption/:category", (req, res) => {
  const category = req.params.category;

  const filteredProducts = products.filter((n) => n.category === category);
  res.send(filteredProducts);
});
app.get("/products/type/:type", (req, res) => {
  const type = req.params.type;

  const filteredProducts = products.filter((n) => n.type === type);
  res.send(filteredProducts);
});

app.listen(port, () => {
  console.log(`COLO WEAR server running on ${port}`);
});
