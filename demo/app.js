angular.module('app', ['dynpage','ui.bootstrap'])
  .controller('AppCtrl', ['$scope', function ($scope) {
    
    $scope.stdPageData = {};

    $scope.today = function() {
      $scope.stdPageData.date = new Date();
    };
    $scope.today();  

    $scope.stdPageTemplate = {
      "text": {
        "type": "text",
        "label": "text",
        "required":"required",
        "placeholder": "text"
       //, "readonly"
       //, "val"
      },
      "date": {
        "type": "date",
        "label": "date",
        "placeholder": "date",
        "required":"required",
        "dtFormat" : "dd/MM/yyyy"
      },
      "date1": {
        "type": "date",
        "label": "date1",
        "placeholder": "date",
        "datepicker" : "true",
        "timepicker" : "true",
        "format" : "d.m.Y H:i",
        "mask": "true",
        "yearStart" : "1980",
        "yearEnd" :"2015"

      },
      "datetime": {
        "type": "datetime",
        "label": "datetime",
        "placeholder": "datetime"
      },
      "datetime-local": {
        "type": "datetime-local",
        "label": "datetime-local",
        "placeholder": "datetime-local"
      },
      "email": {
        "type": "email",
        "label": "email",
        "required":"required",
        "placeholder": "email"
      },
      "month": {
        "type": "month",
        "label": "month",
        "placeholder": "month"
      },
      "number": {
        "type": "number",
        "label": "number",
        "placeholder": "number"
        //,"model": "numberVal",
      },
      "password": {
        "type": "password",
        "label": "password",
        "placeholder": "password"
      },
      "search": {
        "type": "search",
        "label": "search",
        "placeholder": "search"
      },
      "tel": {
        "type": "tel",
        "label": "tel",
        "placeholder": "tel"
      },
      "textarea": {
        "type": "textarea",
        "label": "textarea",
        "placeholder": "textarea",
        "splitBy": "\n",
        "val": ["This array should be","separated by new lines"]
      },
      "time": {
        "type": "time",
        "label": "time",
        "placeholder": "time", 
        "datepicker" : "false",
        "timepicker" : "true",
        "format" : "H:i",
        "hoursFormat": "12" 
      },
      "url": {
        "type": "url",
        "label": "url",
        "placeholder": "url"
      },
      "week": {
        "type": "week",
        "label": "week",
        "placeholder": "week"
      },     
      "color": {
        "type": "color",
        "label": "color"
      },
      "file": {
        "type": "file",
        "label": "file",
        "multiple": true
      },
      "range": {
        "type": "range",
        "label": "range",
        "model": "number",
        "val": 42,
        "minValue": -42,
        "maxValue": 84
      },
      "select": {
        "type": "select",
        "label": "select",
        "empty": "nothing selected",
        "options": {
          "first": {
            "label": "first option"
          },
          "second": {
            "label": "second option",
            "group": "first group"
          },
          "third": {
            "label": "third option",
            "group": "second group"
          },
          "fourth": {
            "label": "fourth option",
            "group": "first group"
          },
          "fifth": {
            "label": "fifth option"
          },
          "sixth": {
            "label": "sixth option",
            "group": "second group"
          },
          "seventh": {
            "label": "seventh option"
          },
          "eighth": {
            "label": "eighth option",
            "group": "first group"
          },
          "ninth": {
            "label": "ninth option",
            "group": "second group"
          },
          "tenth": {
            "label": "tenth option"
          }
        }
      },
       "checkbox": {
        "type": "checkbox",
        "label": "checkbox"
      },
      "checklist1": {
        "type": "checklist",
        "label": "checklist Testing",
        "options": {
              "first": {
                "label": "first option",
                "isOn": "true",
                "isOff": "false"
              },
              "second": {
                "label": "second option",
                "isOn": "on",
                "isOff": "off"
              },
               "third": {
                "label": "third option",
                "isOn": "male",
                "isOff": "female"
              }
          } 
      },
      "radio": {
        "type": "radio",
        "label": "radio",
        "values": {
          "first": "first option",
          "second": "second option",
          "third": "third option",
          "fourth": "fourth option",
          "fifth": "fifth option"
        }
      },
      "button": {
        "type": "button",
        "label": "button"
      },
      "hidden": {
        "type": "hidden",
        "label": "hidden",
        "val": "hidden"
      },
      "image": {
        "type": "image",
        "label": "image",
        "source": "http://hirepro.in/images/hirepro_logo.gif"
      },
      "legend": {
        "type": "legend",
        "label": "legend"
      },
      "reset": {
        "type": "reset",
        "label": "reset"
      },
      "submit": {
        "type": "submit",
        "label": "submit",
        "disabled": "form.$invalid",
        "callback" : "alertText(stdPageData)"
      },
      "bogus": {
        "type": "bogus",
        "label": "bogus"
      }
    };
    
    //$scope.urlPageData = {};
    $scope.alertText = function(stdPageData){
        alert("Testing on click");
    }
  }])
  .filter('pretty', function() {
    return function (input) {
      var temp;
      try {
        temp = angular.pageJson(input);
      }
      catch (e) {
        temp = input;
      }
      
      return angular.toJson(temp, true);
    };
  });