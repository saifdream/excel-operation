/**
 * Created by saif-dream on 9/22/2016.
 */
(function(angular){
    angular.module('excelOperation')
        .controller('web2excelController',function(Excel,$timeout){
            console.log("Web to Excel operation stared.")

            var web2excelCtrl = this;

            web2excelCtrl.exportData = function () {
                /*var blob = new Blob([document.getElementById('exportable').innerHTML], {
                 type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64'
                 //vnd.openxmlformats-officedocument.spreadsheetml.sheet
                 });
                 saveAs(blob, "Report.xls");*/

                document.querySelector('#export').disabled = true;
                /* Run plugin and save it to a variable */
                $("table").tableExport({
                    headings: true,                    // (Boolean), display table headings (th/td elements) in the <thead>
                    footers: true,                     // (Boolean), display table footers (th/td elements) in the <tfoot>
                    formats: ["xlsx","xls","csv","txt"],           // (String[]), filetypes for the export
                    fileName: "id",                    // (id, String), filename for the downloaded file
                    bootstrap: true,                   // (Boolean), style buttons using bootstrap
                    position: "top",                // (top, bottom), position of the caption element relative to table
                    ignoreRows: null,                  // (Number, Number[]), row indices to exclude from the exported file
                    ignoreCols: null,                  // (Number, Number[]), column indices to exclude from the exported file
                    ignoreCSS: ".tableexport-ignore"   // (selector, selector[]), selector(s) to exclude from the exported file
                });
            }

            web2excelCtrl.exportToExcel = function(tableId){ // ex: '#my-table'
                var exportHref=Excel.tableToExcel(tableId,'Sheet 1');
                $timeout(function(){location.href=exportHref;},100); // trigger download
            }

            web2excelCtrl.items = [
                {
                    id:1,
                    name: "John Smith",
                    email: "j.smith@example.com",
                    dob: "1985-10-10"
                }, {
                    id:2,
                    name: "Jane Smith",
                    email: "jane.smith@example.com",
                    dob: "1988-12-22"
                }, {
                    id:3,
                    name: "Jan Smith",
                    email: "jan.smith@example.com",
                    dob: "2010-01-02"
                }, {
                    id:4,
                    name: "Jake Smith",
                    email: "jake.smith@exmaple.com",
                    dob: "2009-03-21"
                }, {
                    id:5,
                    name: "Josh Smith",
                    email: "josh@example.com",
                    dob: "2011-12-12"
                }, {
                    id:6,
                    name: "Jessie Smith",
                    email: "jess@example.com",
                    dob: "2004-10-12"
                }
            ];
        })
})(window.angular)