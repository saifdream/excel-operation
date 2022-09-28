/**
 * Created by saif-dream on 9/22/2016.
 */
(function(angular){
    angular.module('excelOperation')
        .controller('editRowController',function($routeParams){
            console.log($routeParams.id)
            var editRowCtrl = this;
            editRowCtrl.id = $routeParams.id;
        })
})(window.angular)