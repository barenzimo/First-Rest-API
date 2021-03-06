const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () =>
  console.log("Mongoose connection established successfully")
);

// requiring all the routes
const exerciseRouter = require("./routes/exercise.js");
const usersRouter = require("./routes/users.js");

app.use("/exercise", exerciseRouter);
app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
