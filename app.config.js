angular.
  module('app').
  config(['$routeProvider',
    function config($routeProvider){
    $routeProvider
    .when("/",{
        templateUrl: "cajero.html",
        controller: "cajeroController",
        //template: "cajero.html"
    })
    .when("/productos",{
        templateUrl: "productos.html",
        controller: "cajeroController",
        //template: "productos.html"
    })
}]);
