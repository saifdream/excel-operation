/**
 * Created by saif-dream on 9/22/2016.
 */
(function(angular){
    angular.module('excelOperation')
        .config(function($routeProvider,$locationProvider){
            /*var config = {
             apiKey: "AIzaSyCDxBJM0bNYYpLm96f4jT7dvvHzrB-Rk9w",      // Firebase API key
             authDomain: "excel-operation.firebaseapp.com",          // Firebase Auth domain ("*.firebaseapp.com")
             databaseURL: "https://excel-operation.firebaseio.com",  // Firebase Database URL ("https://!*.firebaseio.com")
             storageBucket: "excel-operation.appspot.com"            // Firebase Storage bucket ("*.appspot.com")
             };
             firebase.initializeApp(config);*/

            $routeProvider
                .when('/',{
                    controller:'indexController as indexCtrl',
                    templateUrl:'/home'
                })
                .when('/excel2web',{
                    controller:'excel2webController as excel2webCtrl',
                    templateUrl:'/excel2web'
                })
                .when('/web2excel',{
                    controller:'web2excelController as web2excelCtrl',
                    templateUrl:'/web2excel'
                })
                .when('/edit/:id',{
                    controller:'editRowController as editRowCtrl',
                    templateUrl:'/rowDetails'
                })
                .otherwise({
                    redirectTo:'/'
                });
            $locationProvider.html5Mode(true).hashPrefix('/');
        })
})(window.angular)