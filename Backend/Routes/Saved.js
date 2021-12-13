const { Saved } = require("../Models/Saved");
const express = require("express");
const router = express.Router();

router.get("/:user", async (req, res) => {
  const savedList = await Saved.find({
    user: req.params.user,
  });

  if (!savedList) {
    res.status(500).json({ message: "The user with given id was not found" });
  }
  res.send(savedList);
});

router.post("/", async (req, res) => {
  let saved = new Saved({
    news: req.body.news,
    user: req.body.user,
  });
  saved = await saved.save();

  if (!saved) {
    return res.status(400).send("User cannot be created");
  }
  res.send(saved);
});

module.exports = router;
