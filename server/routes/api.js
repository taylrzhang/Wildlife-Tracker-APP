const express = require("express");

const router = express.Router();

router.get("/", starWarsController.getCharacters, (req, res) =>
  res.status(200).send({ name: user })
);
module.exports = router;
