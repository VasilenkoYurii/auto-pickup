const express = require("express");

const cars = require("../../controllers/cars");

const { isValidId, validateBody } = require("../../middlewares");
const { HttpError } = require("../../helpers");
const { addSchema } = require("../../models/car");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const carList = await cars.listCars();

    res.json(carList);
  } catch (error) {
    next(error);
  }
});

router.get("/company/:company", async (req, res, next) => {
  try {
    const { company } = req.params;
    const carList = await cars.findCarByCompany(company);

    res.json(carList);
  } catch (error) {
    next(error);
  }
});

router.get("/model/:model", async (req, res, next) => {
  try {
    const { model } = req.params;
    const carList = await cars.findCarByModel(model);

    res.json(carList);
  } catch (error) {
    next(error);
  }
});

router.get("/vin/:vin", async (req, res, next) => {
  try {
    const { vin } = req.params;
    const carList = await cars.findCarByVin(vin);

    res.json(carList);
  } catch (error) {
    next(error);
  }
});

router.get("/color/:color", async (req, res, next) => {
  try {
    const { color } = req.params;
    const carList = await cars.findCarByColor(color);

    res.json(carList);
  } catch (error) {
    next(error);
  }
});

router.get("/year/:year", async (req, res, next) => {
  try {
    const { year } = req.params;
    const carList = await cars.findCarByYear(year);

    res.json(carList);
  } catch (error) {
    next(error);
  }
});

router.get("/min_year/:year", async (req, res, next) => {
  try {
    const { year } = req.params;
    const carList = await cars.findCarByMinYear(year);

    res.json(carList);
  } catch (error) {
    next(error);
  }
});

router.get("/max_year/:year", async (req, res, next) => {
  try {
    const { year } = req.params;
    const carList = await cars.findCarByMaxYear(year);

    res.json(carList);
  } catch (error) {
    next(error);
  }
});

router.get("/availability/:availability", async (req, res, next) => {
  try {
    const { availability } = req.params;
    const carList = await cars.findCarByAvailability(availability);

    res.json(carList);
  } catch (error) {
    next(error);
  }
});

router.post("/", validateBody(addSchema), async (req, res, next) => {
  try {
    const result = await cars.addCar(req.body);

    res.json(result);
  } catch (error) {
    next(error);
  }
});

router.put(
  "/:carId",
  isValidId,
  validateBody(addSchema),
  async (req, res, next) => {
    try {
      const result = await cars.updateCar(req);

      if (!result) {
        throw HttpError(404, "Not found");
      }

      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
);

router.delete("/:carId", isValidId, async (req, res, next) => {
  try {
    const { carId } = req.params;
    const result = await cars.removeCar(carId);

    if (!result) {
      throw HttpError(404, "Not found");
    }

    res.json({
      message: "Delete success",
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
