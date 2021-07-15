const router = require("express").Router();
let exercise = require("../models/exercise.model");

router.route("/").get((req, res) => {
  exercise
    .find()
    .then((gifts) => res.json(gifts))
    .catch((err) => res.json(err));
});

router.route("/add").post((req, res) => {
  const userName = req.body.userName;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const time = Date.parse(req.body.time);

  const newExercise = new exercise({ userName, description, duration, time });

  newExercise
    .save()
    .then(() => res.json("Saved exercise data"))
    .catch((err) => res.json(err));
});
//////////////////////Update delete and findbyI
router.route("/:id").post((req, res) => {
  const id = req.params.id;
  exercise
    .findById(id)
    .then((foundData) => res.json(foundData))
    .catch((err) => res.status(400).json(err));
});
router.route("/:id").delete((req, res) => {
  exercise
    .findByIdAndDelete(req.params.id)
    .then(() => res.json("File deleted"))
    .catch((err) => res.status(400).json(err));
});

router.route("/update/:id").post((req, res) => {
  exercise
    .findById(req.params.id)
    .then((element) => {
      element.userName = req.body.userName;
      element.description = req.body.description;
      element.duration = Number(req.body.duration);
      element.time = Date.parse(req.body.time);

      element
        .save()
        .then(() => res.json("Successfully  updated"))
        .catch((err) => res.status(400).json(err));
    })
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
