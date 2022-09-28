/**
 * Created by saif-dream on 9/22/2016.
 */
(function(angular){
    angular.module('excelOperation')
        .controller('excel2webController',function(GenerateColumnHeader,Excel2WebGrid,$http){
            console.log("Excel to Web operation stared.")

            var excel2webCtrl = this;

            excel2webCtrl.stringData = "";

            excel2webCtrl.getGridData = function(stringData){
                excel2webCtrl.gridData = Excel2WebGrid.getGridData(stringData);
                //console.log(excel2webCtrl.gridData)
            }

            excel2webCtrl.generateGrid = function(gridString){
                excel2webCtrl.gridHeader = GenerateColumnHeader.getGridHeader(gridString);
                excel2webCtrl.gridBodyData = Excel2WebGrid.getGridData(gridString);
            }

            function generateJsonData(gridHeader, gridBodyData){
                var colName = [];

                for( var i in gridHeader ){
                    colName[i] = gridHeader[i]["title"];
                }

                var name = [];
                var email = [];
                var dob = [];

                for( var i in gridBodyData ){
                    name[i] = gridBodyData[i]["Name"];
                    email[i] = gridBodyData[i]["Email"];
                    dob[i] = gridBodyData[i]["DoB"];
                }
                var colData = {};
                colData = {
                    "name" :name,
                    "email" : email,
                    "dob" : dob
                };

                //excel2webCtrl.gridJsonData = {};

                excel2webCtrl.gridJsonData = {
                    "gridHeader" : colName,
                    "gridBodyData" : colData
                };
                console.log(excel2webCtrl.gridJsonData)

                return excel2webCtrl.gridJsonData;
            }

            excel2webCtrl.saveJsonData = function(gridHeader,gridBodyData){
                console.log(gridHeader,gridBodyData)
                $http.post('/data/json',generateJsonData(gridHeader, gridBodyData)).then(
                    function(){
                        console.log("Success!")
                    },
                    function(){
                        console.log("Failed!")
                    }
                );
            }
        })
})(window.angular)