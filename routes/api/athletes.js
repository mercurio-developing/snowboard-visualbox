const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// Load User Model
const Champions = require("../../models/champion");

router.get("/all", (req, res) => {
  Champions.find().then(champions => {
    if (!champions) {
      let errors = "CHAMPIONS NOT FOUND";
      return res.status(404).json(errors);
    }
    res.send(champions);
  });
});

router.get("/:id", (req, res) => {
  Champions.findById(req.params.id).then(champion => {
    if (!champion) {
      let errors = "CHAMPION NOT FOUND";
      return res.status(404).json(errors);
    }
    res.send(champion);
  });
});

router.post("/", (req, res) => {
  console.log(req.body._id);
  Champions.findOne({ _id: req.body._id }).then(champion => {
    if (champion) {
      // Update
      console.log("We founded");

      Champions.findOneAndUpdate(
        { _id: req.body._id },
        { $set: req.body },
        { new: true }
      )
        .then(champion => res.json(champion))
        .catch(err => res.send(err));
    } else {
      // Create
      console.log("We need create a new one");
      // // Check if handle exists
      // Champions.findOne({ handle: profileFields.handle }).then(champion => {
      //   if (champion) {
      //     errors.handle = "That handle already exists";
      //     res.status(400).json(errors);
      //   }
      //   // Save Profile
      //   new Profile(profileFields).save().then(profile => res.json(profile));
      // });
    }
  });
});

router.delete("/:id", (req, res) => {
  console.log(req.params);
  Champions.findByIdAndRemove(req.params.id, function(err, champion) {
    if (err) {
      throw err;
    } else {
      res.json({ message: "Athlete Deleted" });
    }
  });
});

module.exports = router;
