const app = angular.module('WeatherApp', []);

app.controller('MainController', ['$http', function($http){
  const controller = this;
  this.word = 'poop';
  this.searchDirections = function(){
    // let originAddress = this.originAddress.replace(/ /g, '+')
    // let destinationAddress = this.destinationAddress.replace(/ /g, '+')
    // let directionsObject = {
    //   origin: this.originAddress.replace(/ /g, '+'),
    //   destination: this.destinationAddress.replace(/ /g, '+')
    // }
    
    let directionsObject = {
        origin: "103+Clearcreek+Ct,+Cary,+NC+27513",
        destination: "807+West+Markham+Ave,+Durham,+NC+27701"
        }
    // console.log(directionsObject);
    $http({
      method: 'POST',
      url: '/directions',
      data: directionsObject
    }).then(
      function(response){
        console.log(response.data, 'response from this.searchDirections');
      }, function(error){
        console.log(error, 'error from this.searchDirections');
      }
    )

  };
}])
