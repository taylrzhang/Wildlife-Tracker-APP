const models = require("../models/models");

const animalController = {};

animalController.getLocations = (req, res, next) => {
  models.Location.find({})
    .exec()
    .then((locations) => {
      res.locals.locations = locations;
      next();
    })
    .catch((err) => {
      next({
        log: `animalController.getLocations: ${err}`,
        message: {
          err: "animalController.getLocations: ERROR: Incorrect data received",
        },
      });
    });
};

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
  const { name, type, description, date_create, img } = req.body;
  models.Animal.create({
    name,
    type,
    description,
    date_create,
    img,
    date_create: new Date(),
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
    date_create: new Date(),
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

animalController.deleteAnimal = (req, res, next) => {
  console.log(req.params);
  const id = req.params.id;
  models.Animal.deleteOne({ _id: id })
    .then(() => {
      console.log("Data deleted");
      next();
    })
    .catch((err) => {
      next({
        log: `animalController.deleteAnimal: ${err}`,
        message: {
          err: "animalController.deleteAnimal: ERROR: Incorrect data received",
        },
      });
    });
};

module.exports = animalController;
