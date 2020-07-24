const router = require('express').Router();
const db = require('../models/Workout');

// Reads all the collections in the database and finds the lastest workout for the homepage
router.get('/workouts', (req, res) => {
  db.findOne({})
    .then((data) => {
      console.log('get workout for home: ', data);
      res.json(data);
    });
});

// creates a new collection in the database
router.post('/workouts', (req, res) => {
  console.log("this is the body", req.body);
  db.create(req.body)
    .then((data) => {
      console.log('posted: ', data);
      res.json(data);
    })
    .catch((err) => {
      console.error(err);
    });
});

// updates a collection in the database
router.put('/workouts/:id', (req, res) => {
  console.log('put workout req.body: ', req.body);
  db.updateOne({ _id: req.params.id }, { $push: { exercises: req.body } })
    .then((data) => {
      console.log('updated workout', data);
      res.json(data);
    })
    .catch((err) => {
      console.error(err);
    });
});

// gets all the collections in the database
router.get('/workouts/range', (req, res) => {
  db.find({})
    .then((data) => {
      console.log('get range: ', data);
      res.json(data);
    })
    .catch((err) => {
      console.error(err);
    });
});

module.exports = router;
