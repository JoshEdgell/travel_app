const express = require('express');
const router = express.Router();

//   What I need here is express documentation.

// We're sending a post so that we can get our driving directions.
router.post('/', (req, res) => {
    // Receive req.body. 
    // {
    // origin: "103+Clearcreek+Ct,+Cary,+NC+27513",     (a string that contains spaces)
    // destination: "807+West+Markham+Ave,+Durham,+NC+27701"     (a string that contains spaces)
    // }

    // We want to make a call to the google api.
    request
        // .get('https://maps.googleapis.com/maps/api/directions/json?origin=' + origin + '&destination=' + destination + '&key=' + apiKey)
        .get('https://maps.googleapis.com/maps/api/directions/json?origin=' + origin + '&destination=' + destination + '&key=' + "AIzaSyDHBfRF4V8XyVyxPHXfgsQUkeIYGNp4ooI")

        // We will receive a response.
        .on('response', function (response) { // make sure we respond with json object
            console.log(response.statusCode) // 200
            console.log(response.headers['content-type']) // 'image/png'

            // We will want to sent that back to the front end.
        });
        // .pipe(request.put('http://mysite.com/img.png'))


    
    




});

module.exports = router;