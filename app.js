'use strict';


var app = angular.module("myApp", ["ngRoute","ui.bootstrap"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/borrower-register.html",
        controller : "borrowerRegisterCtrl"
    })
    .when("/borrower-register1", {
        templateUrl : "views/borrower-register1.html",
        controller : "borrowerRegister1Ctrl"
    })
    .when("/borrower-register2", {
        templateUrl : "views/borrower-register2.html",
        controller : "borrowerRegister2Ctrl"
    })
    .when("/borrower-register3", {
        templateUrl : "views/borrower-register3.html",
        controller : "borrowerRegister3Ctrl"
    })
    .when("/borrower-register", {
        templateUrl :"views/borrower-register.html",
        controller : "borrowerRegisterCtrl"
    });
});

