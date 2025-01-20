const express = require("express");
const Event = require("../models/eventModel");

const router = express.Router();

router.post("/", (req, res) => {
  const event = new Event(req.body);
  event.save((err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(event);
    }
  });
});

router.get("/", (req, res) => {
  Event.find()
    .then((events) => res.send(events))
    .catch((err) => res.status(500).send(err));
});

module.exports = router;
