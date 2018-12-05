const express = require('express');
const router = express.Router();
const request = require('request');

// We're sending a post so that we can get our driving directions.
// We're sending this post so that we can display the map in the website.
router.post('/', (req, res) => {
    
    // let mapObject = {
    //     origin: "103+Clearcreek+Ct,+Cary,+NC+27513",  
    //     destination: "807+West+Markham+Ave,+Durham,+NC+27701"
    //     }


    let mapObject = req.body; // AT THE END, THIS IS WHAT WE WANT.

    // from:https://developers.google.com/maps/documentation/embed/start
    // <iframe width="600" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/directions?origin=' + mapObject.origin + '&destination=' + mapObject.destination + '&key=' + process.env.GOOGLE_KEY" allowfullscreen></iframe>

    
    request('https://www.google.com/maps/embed/v1/directions?origin=' + mapObject.origin + '&destination=' + mapObject.destination + '&key=' + process.env.GOOGLE_KEY, function (error, response, body) {
        // console.log('error:', error); // Print the error if one occurred
        // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
        //Something is sending the body back as a string, rather than a json object - we need to pick apart either the response or the body to figure out where to get what we want.
        //Maybe it's as simple as figuring out how to turn a string into an object

        res.json(body);
    })
});

module.exports = router;