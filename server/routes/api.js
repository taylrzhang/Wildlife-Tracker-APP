const express = require("express");

const animalController = require("../controllers/animalController");
const router = express.Router();

router.get("/", animalController.getAnimals, (req, res) =>
  res.status(200).json(res.locals.animals)
);

router.get("/list", animalController.getAnimals, (req, res) =>
  res.status(200).json(res.locals.animals)
);

router.post(
  "/addAnimal",
  animalController.addAnimal,
  animalController.addlocation,
  (req, res) => res.status(200).json(res.locals.location)
);

module.exports = router;
