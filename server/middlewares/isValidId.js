const { isValidObjectId } = require("mongoose");

const { HttpError } = require("../helpers");

const isValidId = (req, res, next) => {
  const { carId } = req.params;

  if (!isValidObjectId(carId)) {
    next(HttpError(400, `${carId} is not valid id`));
  }

  next();
};

module.exports = isValidId;
