'use strict';
angular.
  module('apps').
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
    .when("/productosex",{
        templateUrl: "productoco.html",
        controller: "cajeroController",
        //template: "productos.html"
    })
    .when("/table",{
        template: '<table-list></table-list>'
    })
}]);
