const { Car } = require("../models/car");

const listCars = async () => {
  const data = await Car.find();
  return data;
};

const findCarByCompany = async (company) => {
  const data = await Car.find({
    car: { $regex: new RegExp(company, "i") },
  });
  return data;
};

const findCarByModel = async (model) => {
  const data = await Car.find({
    car_model: { $regex: new RegExp(model, "i") },
  });
  return data;
};

const findCarByVin = async (vin) => {
  const data = await Car.find({
    car_vin: { $regex: new RegExp(vin, "i") },
  });
  return data;
};

const findCarByColor = async (color) => {
  const data = await Car.find({
    car_color: { $regex: new RegExp(color, "i") },
  });
  return data;
};

const findCarByYear = async (year) => {
  const data = await Car.find({ car_model_year: year });
  return data;
};

const findCarByMaxYear = async (year) => {
  const data = await Car.find({ car_model_year: { $lte: year } });
  return data;
};

const findCarByMinYear = async (year) => {
  const data = await Car.find({ car_model_year: { $gte: year } });
  return data;
};

const findCarByAvailability = async (availability) => {
  const data = await Car.find({ availability: availability });
  return data;
};

const updateCar = async (req) => {
  const result = await Car.findByIdAndUpdate(req.params.carId, req.body, {
    new: true,
  });

  return result;
};

const addCar = async (body) => {
  const result = await Car.create({ ...body });
  return result;
};

const removeCar = async (carId) => {
  const result = await Car.findByIdAndRemove(carId);
  return result;
};

module.exports = {
  listCars,
  findCarByCompany,
  findCarByModel,
  findCarByVin,
  findCarByColor,
  findCarByYear,
  findCarByMinYear,
  findCarByMaxYear,
  findCarByAvailability,
  removeCar,
  addCar,
  updateCar,
};
