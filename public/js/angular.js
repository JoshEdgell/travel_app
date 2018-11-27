const app = angular.module('WeatherApp', []);

app.controller('MainController', ['$http', function($http){
  const controller = this;
  this.word = 'poop';
  this.searchDirections = function(){
    console.log('search directions clicked');
    $http({
      method: 'POST',
      url: '/directions',
      data: {
        origin: this.originAddress,
        destination: this.destinationAddress
      }
    }).then(
      function(response){
        console.log(response, 'response from this.searchDirections');
      }, function(error){
        console.log(error, 'error from this.searchDirections');
      }
    )
  }
}])
