const express = require("express");
const User = require("../models/userModel");

const router = express.Router();

router.post("/", (req, res) => {
  const user = new User(req.body);
  user.save((err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(user);
    }
  });
});

router.get("/", (req, res) => {
  User.find()
    .then((users) => res.send(users))
    .catch((err) => res.status(500).send(err));
});

module.exports = router;
