/**
 * Created by saif-dream on 9/22/2016.
 */
(function(angular){
    angular.module('excelOperation')
        .controller('indexController',function($scope){ //,$firebaseObject, DataList
            console.log("Excel Operation Started.")

            var indexCtrl = this;

            /*var ref = firebase.database().ref();
             ref.on("value", function(snapshot) {
             // This isn't going to show up in the DOM immediately, because
             // Angular does not know we have changed this in memory.
             // $scope.data = snapshot.val();
             // To fix this, we can use $scope.$apply() to notify Angular that a change occurred.
             $scope.$apply(function() {
             $scope.data = snapshot.val();
             });
             });

             var obj = $firebaseObject(ref);*/

            /* It will be use */
            //$scope.list = DataList;

            // to take an action after the data loads, use the $loaded() promise
            /*obj.$loaded().then(function() {
             //console.log("loaded record:", obj.$id, obj.someOtherKeyInData);

             // To iterate the key/value pairs of the object, use angular.forEach()
             /!*angular.forEach(obj, function(value, key) {
             console.log(key, value);
             });*!/
             });*/

            // To make the data available in the DOM, assign it to $scope
            /*$scope.data = obj;

             // For three-way data bindings, bind it to the scope instead

             obj.$bindTo($scope, "data").then(function() {
             console.log($scope.data);
             });*/

        })
})(window.angular)