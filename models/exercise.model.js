const mongoose = require("mongoose");

const exerciseSchema = mongoose.Schema(
  {
    userName: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    time: { type: Date, required: true },
  },
  {
    timeStamps: true,
  }
);
const Excersise = mongoose.model("Excersize", exerciseSchema);

module.exports = Excersise;
