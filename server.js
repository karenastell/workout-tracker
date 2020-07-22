const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

// app.use('/', htmlRoutes);
// app.use('/api', apiRoutes);

mongoose.connect(process.env.MONGODO_URI || 'mongodb://localhost/workouts', {
  useNewUrlParser: true, useUnifiedTopology: true 
});

app.listen(PORT, ()=>{
    console.log(`running on port ${PORT}`);
})
