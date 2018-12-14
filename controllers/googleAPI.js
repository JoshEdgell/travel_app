const express = require('express');
const router = express.Router();
const request = require('request');

// We're sending a post so that we can get our driving directions.
router.post('/', (req, res) => {
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

module.exports = router;
