const models = require("../models/models");

const animalController = {};

animalController.getAnimals = (req, res, next) => {
  models.Animal.find({})
    .exec()
    .then((animals) => {
      res.locals.animals = animals;
      next();
    })
    .catch((err) => {
      next({
        log: `animalController.getAnimals: ${err}`,
        message: {
          err: "animalController.getAnimals: ERROR: Incorrect data received",
        },
      });
    });
};

animalController.addAnimal = (req, res, next) => {
  console.log(req.body);
  const { name, type, description } = req.body;
  models.Animal.create({
    name,
    type,
    description,
  })
    .then((animal) => {
      res.locals.animal = animal;
      next();
    })
    .catch((err) => {
      next({
        log: `animalController.addAnimal: ${err}`,
        message: {
          err: "animalController.addAnimal: ERROR: Incorrect data received",
        },
      });
    });
};

animalController.addlocation = (req, res, next) => {
  console.log(req.body);
  const { name, lat, lng } = req.body;
  models.Location.create({
    name,
    lat,
    lng,
  })
    .then((location) => {
      res.locals.location = location;
      next();
    })
    .catch((err) => {
      next({
        log: `animalController.addAnimal: ${err}`,
        message: {
          err: "animalController.addAnimal: ERROR: Incorrect data received",
        },
      });
    });
};

module.exports = animalController;
