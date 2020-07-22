const router = require('express').Router();
const db = require('../models/Workout');

// router.post('/api/workouts', (req, res)=>{
//     Workout.create({}).then((data)=>{
        
//     })
// })

// Reads all the collections in the database
router.get('/workouts', (req, res)=>{
    db.findOne({}, {}, {sort: {day: -1}}).then((data)=>{
        console.log(data);
        res.json(data);
    }).catch((err)=>{
        console.error(err);
    })
})

// creates a new collection in the database
router.post('/workouts/', (req, res)=>{
    db.insert({body}).then((data)=>{
        console.log('posted: ', data);
        res.json(data);
    })
})

// updates a collection int he database
router.put('/workouts/:id', (req, res)=>{
    db.update({_id: req.params.id}, {$push: {exercise: req.body}}).then((data)=>{
    console.log('updated workout', data);
    res.json(data);
})
})


router.get('/workouts/range', (req, res)=>{
    db.find({}).then((data)=>{
        console.log("get range: ", data);
        res.json(data)
    })
})


module.exports = router;
