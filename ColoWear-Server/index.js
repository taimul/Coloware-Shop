const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();

//middlewares
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("COLO WEAR server is running");
});

app.listen(port, () => {
  console.log(`COLO WEAR server running on ${port}`);
});
