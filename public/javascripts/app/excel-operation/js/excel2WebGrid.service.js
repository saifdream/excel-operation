/**
 * Created by saif-dream on 9/22/2016.
 */
(function(angular){
    angular.module('excelOperation')
        .service('Excel2WebGrid',function(){
            var excelToObjects = function(stringData){
                var objects = [];

                //split into rows
                var rows = stringData.split('\n');
                var rowLength = rows.length;

                //Make columns
                var columns = rows[0].split('\t');

                //Note how we start at rowNr = 1, because 0 is the column row
                for (var rowNr = 1; rowNr < rowLength; rowNr++) {
                    var o = {};
                    var data = rows[rowNr].split('\t');
                    var dataLength = data.length;

                    //Loop through all the data
                    for (var cellNr = 0; cellNr < dataLength; cellNr++) {
                        o[columns[cellNr]] = data[cellNr];
                    }
                    objects.push(o);
                }
                return objects;
            }
            return { getGridData: excelToObjects }
        })
})(window.angular)