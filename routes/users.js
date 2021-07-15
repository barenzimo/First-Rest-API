const router = require("express").Router();
let User = require("../models/user.model");

router.route("/").get((req, res) => {
  User.find()
    .then((gifts) => res.json(gifts))
    .catch((err) => res.status(404).json(err));
});

// router.route("/add").post((req, res) => {
//   const userName = req.body.userName;
//   const newUser = new User({ userName });

//   newUser
//     .save()
//     .then(() => res.json("User Added"))
//     .catch((err) => res.status(400).json(err));
// });

router.route("/add").post((req, res) => {
  const userName = req.body.userName;

  const newUser = new User({ userName });

  newUser
    .save()
    .then(() => res.json("Saved exercise data"))
    .catch((err) => res.json(err));
});
module.exports = router;
