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
    .when("/borrower-register", {
        templateUrl :"views/borrower-register.html",
        controller : "borrowerRegisterCtrl"
    });
});

app.directive('onlyNumbers', function () {
    return  {
        restrict: 'A',
        link: function (scope, elm, attrs, ctrl) {
            elm.on('keydown', function (event) {
                if(event.shiftKey){event.preventDefault(); return false;}
                //console.log(event.which);
                if ([8, 13, 27, 37, 38, 39, 40].indexOf(event.which) > -1) {
                    // backspace, enter, escape, arrows
                    return true;
                } else if (event.which >= 48 && event.which <= 57) {
                    // numbers 0 to 9
                    return true;
                } else if (event.which >= 96 && event.which <= 105) {
                    // numpad number
                    return true;
                } 
                // else if ([110, 190].indexOf(event.which) > -1) {
                //     // dot and numpad dot
                //     return true;
                // }
                else {
                    event.preventDefault();
                    return false;
                }
            });
        }
    }
});