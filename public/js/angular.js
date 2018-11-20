const app = angular.module('WeatherApp', []);

app.controller('MainController', ['$http', function($http){
  this.word = 'poop'
}])
