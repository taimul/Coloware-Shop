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
app.get("/products/:id", (req, res) => {
  const id = req.params.id;
  const result = products.find((n) => n.id === id);
  res.send(result);
});

app.get("/products/type/:type", (req, res) => {
  const type = req.params.type;
  const filteredProducts = products.filter((n) => n.type === type).slice(0, 9);
  res.send(filteredProducts);
});

app.listen(port, () => {
  console.log(`COLO WEAR server running on ${port}`);
});
