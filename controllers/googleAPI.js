const express = require('express');
const router = express.Router();
const request = require('request');

// We're sending a post so that we can get our driving directions.
router.post('/getdirections', (req, res) => {
    // Receive req.body.
    // {
    // origin: "103+Clearcreek+Ct,+Cary,+NC+27513",     (a string that contains spaces)
    // destination: "807+West+Markham+Ave,+Durham,+NC+27701"     (a string that contains spaces)
    // }

    let directionsObject = req.body; // AT THE END, THIS IS WHAT WE WANT.

    // let directionsObject = {
    //     origin: "103+Clearcreek+Ct,+Cary,+NC+27513",
    //     destination: "807+West+Markham+Ave,+Durham,+NC+27701"
    //     }

    // We want to make a call to the google api.
    request('https://maps.googleapis.com/maps/api/directions/json?origin=' + directionsObject.origin + '&destination=' + directionsObject.destination + '&key=' + process.env.GOOGLE_KEY, function (error, response, body) {
        let route = JSON.parse(body);
        res.json(route);
    });
});

// We're sending this post so that we can display the map in the website.
router.get('/getmap', (req, res) => {

    let directionsObject = req.body; // AT THE END, THIS IS WHAT WE WANT.

    request("https://maps.googleapis.com/maps/api/js?key=AIzaSyDHBfRF4V8XyVyxPHXfgsQUkeIYGNp4ooI&callback=initMap", function (error, response, body) {
        // console.log('body:', body); // Print the HTML for the Google homepage.

        res.json(response);
    })
});


// from:https://developers.google.com/maps/documentation/embed/start
// <iframe width="600" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/directions?origin=' + directionsObject.origin + '&destination=' + directionsObject.destination + '&key=' + process.env.GOOGLE_KEY" allowfullscreen></iframe>

module.exports = router;
