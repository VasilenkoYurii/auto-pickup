const { Schema, model } = require("mongoose");
const Joi = require("joi");

const carSchema = new Schema({
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

const addSchema = Joi.object({
  car: Joi.string().required(),
  car_model: Joi.string().required(),
  car_color: Joi.string().required(),
  car_model_year: Joi.number().required(),
  car_vin: Joi.string().required(),
  price: Joi.string().required(),
  availability: Joi.boolean().required(),
});

module.exports = {
  addSchema,
  Car,
};
