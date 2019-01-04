const express = require('express');
const router = express.Router();
const request = require('request');

router.get('/getMap',(req,res)=>{
  console.log("getMap route accessed")

  // request('https://maps.googleapis.com/maps/api/directions/json?origin=' + directionsObject.origin + '&destination=' + directionsObject.destination + '&key=' + process.env.GOOGLE_KEY, function (error, response, body) {
  //     let route = JSON.parse(body);
  //     res.json(route);
  // });

  request('https://maps.googleapis.com/maps/api/js?key=' + process.env.GOOGLE_KEY + '&callback=initMap', function (error, response, body){
      res.send(body);
  });
});

module.exports = router;
