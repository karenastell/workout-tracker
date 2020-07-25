const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      name: {
        type: String,
        required: 'Exercise Name Required',
        trim: true,
      },
      type: {
        type: String,
        required: 'Exercise Type Required',
        trim: true,
      },
      duration: {
        type: Number,
        trim: true,
        required: 'Workout Duration Required',
        default: 0,
      },
      weight: {
        type: Number,
        trim: true,
        default: 0,
      },
      sets: {
        type: Number,
        trim: true,
        default: 0,
      },
      reps: {
        type: Number,
        trim: true,
        default: 0,
      },
      distance: {
        type: Number,
        trim: true,
        default: 0,
      },
    },
  ],
  
}, {
  toJSON: {
    virtuals: true,
  }
});


// help from tutor
// this takes the objects from the exercise array and adds the durations together to get one number
WorkoutSchema.virtual('totalDuration').get(function() {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;
