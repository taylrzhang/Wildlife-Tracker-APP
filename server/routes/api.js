const express = require("express");

const router = express.Router();

router.get("/", (req, res) => res.status(200).json({ name: "user" }));

router.get("/list", (req, res) =>
  res.status(200).json({ name: "user", animal: "marmot" })
);

module.exports = router;
