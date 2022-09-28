/**
 * Created by saif-dream on 9/22/2016.
 */
(function(angular){
    angular.module('excelOperation')
        .service('GenerateColumnHeader',function(){
            function generateGridHeader(stringData){
                var objects = [];
                //split into rows
                var rows = stringData.split('\n');
                //Make columns
                var columns = rows[0].split('\t');
                var length = columns.length;

                var object = [];

                for (var colNa = 0; colNa < length; colNa++) {
                    var o = {};
                    o['title'] = columns[colNa];
                    objects.push(o);
                }
                return objects;
            }
            return { getGridHeader: generateGridHeader }
        })
})(window.angular)