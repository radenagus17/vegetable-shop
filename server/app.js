if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./routes");
const errorHandler = require("./middlewares/errorHandler");

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(router);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Currently listening on http://localhost:${PORT}`);
});
