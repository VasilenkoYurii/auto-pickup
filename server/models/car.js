const { Schema, model } = require("mongoose");

const carSchema = new Schema({
  id: {
    type: Number,
    required: [true, "Set id"],
  },
  car: {
    type: String,
    required: [true, "Set car"],
  },
  car_model: {
    type: String,
    required: [true, "Set car_model"],
  },
  car_color: {
    type: String,
    required: [true, "Set car_color"],
  },
  car_model_year: {
    type: Number,
    required: [true, "Set car_model_year"],
  },
  car_vin: {
    type: String,
    required: [true, "Set car_vin"],
  },
  price: {
    type: String,
    required: [true, "Set price"],
  },
  availability: {
    type: Boolean,
    required: [true, "Set availability"],
  },
});

const Car = model("car", carSchema);

module.exports = Car;
