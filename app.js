'use strict';
var app = angular.module("apps",["ngRoute"]);

app.config(function ($routeProvider){
    $routeProvider
    .when("/",{
        templateUrl: "cajero.html",
        controller: "cajeroController",
    
    })
    .when("/productos",{
        templateUrl: "productos.html",
        controller: "cajeroController"
    })
});



