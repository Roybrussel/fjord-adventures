const { Router } = require("express");
const mongoose = require("mongoose");
const router = Router();

const Activity = require("../models/activity.model");
const Bookings = require("../models/booking.model"); // <== !!!

/* POST - creates a new project */
router.post("/activities", (req, res) => {
  const { title, description, area, price, imageUrl } = req.body;

  Activity.create({
    title,
    description,
    area,
    price,
    imageUrl,
    bookings: [],
    // Add this after finishing authentication
  })
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

/* GET - retrieves all the projects from the database */
router.get("/activities", (req, res) => {
  Activity.find()
    .populate("bookings")
    .then((allTheProjects) => {
      res.status(200).json(allTheProjects);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

/* GET route => to get a specific project/detailed view */
router.get("/activities/:id", (req, res) => {
  const { id } = req.params;

  // Check if the incoming id is a valid ObjectId type
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  // Our projects have array of tasks' ids and
  // we can use .populate() method to get the whole task objects
  Activity.findById(id)
    .populate("activities")
    .then((project) => {
      res.status(200).json(project);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

/* PUT route => to update a specific project */
router.put("/activities/:id", (req, res) => {
  const { id } = req.params;

  // Check if the incoming id is a valid ObjectId type
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Activity.findByIdAndUpdate(id, req.body)
    .then(() => {
      res.status(200).json({
        message: `Project with ${id} is updated successfully.`,
      });
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

// DELETE route => to delete a specific project
router.delete("/activities/:id", (req, res) => {
  const { id } = req.params;

  // Check if the incoming id is a valid ObjectId type
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Activity.findByIdAndRemove(id)
    .then(() => {
      res.status(200).json({
        message: `Project with ${id} is removed successfully.`,
      });
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

module.exports = router;
