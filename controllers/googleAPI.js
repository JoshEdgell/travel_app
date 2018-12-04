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
    // let directionsObject = {
    //     origin: "103+Clearcreek+Ct,+Cary,+NC+27513",  
    //     destination: "807+West+Markham+Ave,+Durham,+NC+27701"
    //     }

    let directionsObject = req.body; // AT THE END, THIS IS WHAT WE WANT. 

    request('https://maps.googleapis.com/maps/api/directions/json?origin=' + directionsObject.origin + '&destination=' + directionsObject.destination + '&key=' + process.env.GOOGLE_KEY, function (error, response, body) {
        // console.log('error:', error); // Prints the error if one occurred.
        // console.log('statusCode:', response && response.statusCode); // Prints the response status code if a response was received.
        // console.log('body:', body); // Prints the HTML for the Google homepage.
        res.json(body);

        // Need to get this info to the front end.

        // console.log(body);
        // console.log(body.routes);
        // console.log(body.status);
        // console.log(body.routes[0].legs[0].steps[0].polyline.points);

        let newbody = body;
        // console.log(newbody);

        // setTimeout(function(){console.log(body.routes[0]); }, 3000);

        // setTimeout(function(){console.log("hello"); }, 3000);

        // console.log(newbody.routes);
        // console.log(newbody.routes[0].legs[0].steps[0].polyline.points);

        // console.log(body.keys(routes[0]));

        // console.log(JSON.stringify(config))

        // console.log(req.body);
        // console.log(req.body.title);
        // console.log(req);

    });


    // NOTE - WE DO NOT NEED ANYTHING THAT IS COMMENTED OUT BELLOW.

    // request
    //     // .get('https://maps.googleapis.com/maps/api/directions/json?origin=' + origin + '&destination=' + destination + '&key=' + apiKey)

    //     // .get('https://maps.googleapis.com/maps/api/directions/json?origin=' + directionsObject.origin + '&destination=' + directionsObject.destination + '&key=' + "AIzaSyDHBfRF4V8XyVyxPHXfgsQUkeIYGNp4ooI")

    //     .get('https://maps.googleapis.com/maps/api/directions/json?origin=600+5th+Street+New+Martinsville,+WV&destination=103+Clearcreek+Ct+Cary,+NC&key=AIzaSyDHBfRF4V8XyVyxPHXfgsQUkeIYGNp4ooI')

    //     // We will receive a response.
    //     .on('response', function (response, error, body) { // make sure we respond with json object

    //         console.log(response.request);
    //         res.json(response);

    //         // console.log(response.statusCode) // 200
    //         // console.log(response.headers['content-type']) // 'image/png'

    //         // We will want to sent that back to the front end.
    //     });
    // .pipe(request.put('http://mysite.com/img.png'))
});

module.exports = router;
