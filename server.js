const express             = require('express');
const bodyParser          = require('body-parser');
const request             = require('request');
const dotenv              = require('dotenv').config();
const app                 = express();
const router              = express.Router();

// Middeware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const directionsController = require('./controllers/googleAPI.js');
app.use('/directions', directionsController);

const weatherController = require('./controllers/weather.js')
app.use('/weather', weatherController);

const dummyController = require('./controllers/dummy.js');
app.use('/dummy', dummyController);

const port = 3000;

app.listen(port,()=>{
  console.log('Weather App running on port ' + port);
});
