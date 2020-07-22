const router = require('express').Router();
const db = require('../models/Workout');

// router.post('/api/workouts', (req, res)=>{
//     Workout.create({}).then((data)=>{
        
//     })
// })

router.get('/workouts', (req, res)=>{
    db.Workout.findOne({}, {}, {sort: {day: -1}}).then((data)=>{
        console.log(data);
        res.json(data);
    }).catch((err)=>{
        console.error(err);
    })
})

module.exports = router;
