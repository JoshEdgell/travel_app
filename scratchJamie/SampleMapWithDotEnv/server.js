const express = require('express');
// const bodyParser          = require('body-parser'); // I don't think we need this.
// const request             = require('request'); // I don't think we need this.
const dotenv              = require('dotenv').config();
const app                 = express();
// const router              = express.Router();

// Middeware
app.use(express.static('public'));


const port = 3000;

app.get('/hello', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));