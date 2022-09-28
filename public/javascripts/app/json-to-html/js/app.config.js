(function(angular) {
    "use strict";
    angular.module('jsonToHtml')
        .config(function($routeProvider,$locationProvider){
            $routeProvider
                .when('/jsonToHtml',{
                    templateUrl:'/welcome'
                })
                .when('/addEmployee',{
                    template:'<create-emp></create-emp>'
                })
                .when('/employeeList',{
                    template:'<div id=""></div>'
                })
                .otherwise({
                    redirectTo:'/jsonToHtml'
                });

            $locationProvider.html5Mode(true).hashPrefix('/');
        });
})(window.angular);