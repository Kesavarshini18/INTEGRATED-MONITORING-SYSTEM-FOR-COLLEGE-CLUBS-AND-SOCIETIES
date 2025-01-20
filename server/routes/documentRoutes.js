const express = require("express");
const multer = require("multer");
const Document = require("../models/documentModel");

const router = express.Router();
const upload = multer({ dest: "./uploads/" });

router.post("/", upload.single("file"), (req, res) => {
  const document = new Document({
    title: req.body.title,
    description: req.body.description,
    file: req.file.filename,
  });
  document.save((err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(document);
    }
  });
});

router.get("/", (req, res) => {
  Document.find()
    .then((documents) => res.send(documents))
    .catch((err) => res.status(500).send(err));
});

module.exports = router;
