const app = angular.module('WeatherApp', []);

app.controller('MainController', ['$http', function($http){
  const controller = this;
  this.word = 'poop';
  this.searchDirections = function(){
    // let originAddress = this.originAddress.replace(/ /g, '+')
    // let destinationAddress = this.destinationAddress.replace(/ /g, '+')
    let directionsObject = {
      origin: this.originAddress.replace(/ /g, '+'),
      destination: this.destinationAddress.replace(/ /g, '+')
    }
    console.log(directionsObject);
    // $http({
    //   method: 'POST',
    //   url: '/directions',
    //   data: directionsObject
    // }).then(
    //   function(response){
    //     console.log(response, 'response from this.searchDirections');
    //   }, function(error){
    //     console.log(error, 'error from this.searchDirections');
    //   }
    // )
  };

}])
