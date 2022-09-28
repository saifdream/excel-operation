/**
 * Created by saif-dream on 9/18/2016.
 */
(function(angular) {
    "use strict";
    angular.module('createEmp')
        .component('createEmp',{
            template:'<div id="form_sample"></div>',
            controller:['$scope','$http','$compile',
                function createEmpCtrl($scope,$http,$compile){
                    var data = {};
                    data = {
                                "createFields" : [
                                    {
                                        "type" : "text",
                                        "label" : "Name",
                                        "name" : "fullName",
                                        "placeholder" : "Full Name",
                                        "pattern" : "",
                                        "required" : true
                                    }, {
                                        "type" : "email",
                                        "label" : "E-mail",
                                        "name" : "email",
                                        "placeholder" : "E-mail",
                                        "pattern" : "",
                                        "required" : true
                                    }, {
                                        "type" : "password",
                                        "label" : "Password",
                                        "name" : "password",
                                        "placeholder" : "Password",
                                        "pattern" : "",
                                        "required" : true
                                    }, {
                                        "type" : "radio",
                                        "label" : "Gender",
                                        "name" :"gender",
                                        "required" : true,
                                        "options" : [ "Male", "Female" ]
                                    }, {
                                        "type" : "select",
                                        "label" : "User Type",
                                        "name" :"userType",
                                        "required" : true,
                                        "options" : [ "Admin", "Accountant", "Executive" ]
                                    }, {
                                        "type" : "textarea",
                                        "label" : "Address",
                                        "name" :"address",
                                        "placeholder" : "Full Address",
                                        "pattern" : "",
                                        "required" : false
                                    }, {
                                        "type" : "checkbox",
                                        "label" : "Agree?",
                                        "name" :"isAgree",
                                        "required" : true,
                                        "massage" : "I agree"
                                    }
                                ]
                    };
                    var createFields = {};

                    // Fetching HTML Elements in Variables by ID.
                    var x = document.getElementById("form_sample");
                    var createform = document.createElement('form'); // Create New Element Form
                    //createform.setAttribute("action", ""); // Setting Action Attribute on Form
                    //createform.setAttribute("method", "post"); // Setting Method Attribute on Form
                    x.appendChild(createform);

                    var heading = document.createElement('h2'); // Heading of Form
                    heading.innerHTML = "Add Employee ";
                    createform.appendChild(heading);

                    var line = document.createElement('hr'); // Giving Horizontal Row After Heading
                    createform.appendChild(line);

                    $http.get('/html/data ').then(function(response){
                        //createFields = response.data.createFields;
                        //setData(response.data.createFields);
                        createFields = response.data.createFields;
                        console.log(createFields)
                        for (var createField in createFields){
                            switch (createFields[createField]["type"]) {
                                case "text":
                                    inputTextCreator(createform,
                                        createFields[createField]["type"],
                                        createFields[createField]["label"],
                                        createFields[createField]["name"],
                                        createFields[createField]["placeholder"],
                                        createFields[createField]["required"]
                                    );
                                    break;
                                case "email":
                                    inputTextCreator(createform,
                                        createFields[createField]["type"],
                                        createFields[createField]["label"],
                                        createFields[createField]["name"],
                                        createFields[createField]["placeholder"],
                                        createFields[createField]["required"]
                                    );
                                    break;
                                case "password":
                                    inputTextCreator(createform,
                                        createFields[createField]["type"],
                                        createFields[createField]["label"],
                                        createFields[createField]["name"],
                                        createFields[createField]["placeholder"],
                                        createFields[createField]["required"]
                                    );
                                    break;
                                case "textarea":
                                    textAreaCreator(createform,
                                        createFields[createField]["type"],
                                        createFields[createField]["label"],
                                        createFields[createField]["name"],
                                        createFields[createField]["placeholder"],
                                        createFields[createField]["required"]
                                    );
                                    break;
                                case "select":
                                    inputSelectCreator(createform,
                                        createFields[createField]["type"],
                                        createFields[createField]["label"],
                                        createFields[createField]["name"],
                                        createFields[createField]["option"],
                                        createFields[createField]["required"]
                                    );
                                    break;
                                case "radio":
                                    inputRadioCreator(createform,
                                        createFields[createField]["type"],
                                        createFields[createField]["label"],
                                        createFields[createField]["name"],
                                        createFields[createField]["option"],
                                        createFields[createField]["required"]
                                    );
                                    break;
                                case "checkbox":
                                    inputCheckBoxCreator(createform,
                                        createFields[createField]["type"],
                                        createFields[createField]["label"],
                                        createFields[createField]["name"],
                                        createFields[createField]["massage"],
                                        createFields[createField]["required"]
                                    );

                                    var submitelement = document.createElement('input'); // Append Submit Button
                                    submitelement.setAttribute("type", "Submit");
                                    submitelement.setAttribute("name", "dsubmit");
                                    submitelement.setAttribute("value", "Submit");
                                    submitelement.setAttribute("onclick", "");
                                    createform.appendChild(submitelement);
                                    break;
                                default:
                                    break;
                            }
                        }
                    });
                    function setData(data){

                    }

                    /*var myEl = document.createElement('div');
                    myEl.setAttribute("id", "divID");
                    createform.appendChild(myEl);

                    var myEl2 = angular.element( document.querySelector( '#divID' ) );
                    myEl2.html('This is html. Here html tags will be mixed with page. Example : <span style="font-weight:bold;"> Styled Text</span>');*/

                    /*$scope.$watch("email", function (){
                        console.log("Hello")
                    })*/

                    function inputTextCreator (createform, type, labelText, name, placeholder, required){
                        createform = elementCompiler(createform);

                        var label = '<label>'+labelText+':&nbsp; '+'</label>';
                        label = elementCompiler(label);

                        var inputElement = '<input type="'+type+'" ' +
                                                'name="'+name+'" ' +
                                                'ng-model="'+name+'" ' +
                                                'placeholder="'+placeholder+'" ' +
                                                'ng-required="'+required+'">'+'<br/>';

                        inputElement = elementCompiler(inputElement);
                        createform.append(label);
                        createform.append(inputElement);
                    }

                    function inputRadioCreator (createform, type, labelText, name, options, required){
                        createform = elementCompiler(createform);

                        var label = '<label>'+labelText+':&nbsp; '+'</label>';
                        label = elementCompiler(label);

                        var optionElement = "";
                        for (var option in options){
                            optionElement += '<label>'+
                                                '<input type="'+type+'"' +
                                                        'name="'+name+'" ' +
                                                        'ng-model="'+name+'" ' +
                                                        'value="'+options[option]+'" ' +
                                                        'ng-required="'+required+'"> '+options[option]+
                                            ' </label>';
                        }
                        optionElement += '<br/><br/>';

                        optionElement = elementCompiler(optionElement);
                        createform.append(label);
                        createform.append(optionElement);
                    }

                    function inputCheckBoxCreator (createform, type, labelText, name, massage, required){
                        createform = elementCompiler(createform);

                        var label = '<label>'+labelText+'&nbsp; '+'</label>';
                        label = elementCompiler(label);

                        var inputElement =  '<label> ' +
                                                '<input type="'+type+'" ' +
                                                        'name="'+name+'" ' +
                                                        'ng-model="'+name+'" ' +
                                                        'ng-required="'+required+'"> '+massage+' ' +
                                            '</label>';
                        inputElement += '<br/><br/><br/>';

                        inputElement = elementCompiler(inputElement);
                        createform.append(label);
                        createform.append(inputElement);
                    }

                    function inputSelectCreator (createform, type, labelText, name, options, required){
                        createform = elementCompiler(createform);

                        var label = '<label>'+labelText+':&nbsp; '+'</label>';
                        label = elementCompiler(label);

                        var optionElement = "";
                        for (var option in options){
                            optionElement += '<option value="'+options[option]+'">'+options[option]+'</option> ';
                        }

                        var inputElement =  '<select name="'+name+'" ng-model="'+name+'" ng-required="'+required+'">'+
                                                '<option value="">-- Select --</option>'+
                                                    optionElement+
                                            '</select><br>';

                        inputElement = elementCompiler(inputElement);
                        createform.append(label);
                        createform.append(inputElement);
                    }

                    function textAreaCreator (createform, type, labelText, name, placeholder, required){
                        createform = elementCompiler(createform);

                        var label = '<label>'+labelText+':&nbsp; '+'</label>';
                        label = elementCompiler(label);

                        var textArea = '<textarea name="'+name+'" ng-model="'+name+'"  ng-required="'+required+'" '+
                                            'placeholder="'+placeholder+'" ng-minlength="" ng-maxlength="" ng-pattern="" '+
                                        '</textarea> <br />';

                        textArea = elementCompiler(textArea);
                        createform.append(label);
                        createform.append(textArea);
                    }

                    function elementCompiler(content){
                        /* Step 1: parse HTML into DOM element */
                        var element = angular.element(content);

                        /* Step 2: compile the template */
                        element = $compile(element);

                        /* Step 3: link the compiled template with the scope. */
                        element = element($scope);

                        return element;
                    }
                }
            ]
        })
})(window.angular);