/*
Created by Alex Klibisz, aklibisz@utk.edu
February 2015
*/

var a;
a = angular.module("dualmultiselect", []), a.directive("dualmultiselect", [function () {
    return {
        restrict: 'E',
        scope: {
            options: '='
        },
        controller: ['$scope', function ($scope) {
            $scope.transfer = function (from, to, index) {
                if (index >= 0) {
                    to.push(from[index]);
                    from.splice(index, 1);
                } else {
                    for (var i = 0; i < from.length; i++) {
                        to.push(from[i]);
                    }
                    from.length = 0;
                }
            };
        }],
        template: '<div class="dualmultiselect"> <div class="row"> <div class="col-lg-12 col-md-12 col-sm-12"> <h4>{{options.title | translate}}<small>&nbsp;{{options.helpMessage | translate}}</small> </h4> <input class="form-control" placeholder="{{options.filterPlaceHolder | translate}}" ng-model="searchTerm"> </div></div><div class="row"> <div class="col-lg-6 col-md-6 col-sm-6"> <label>{{options.labelAll | translate}}</label> <button type="button" class="btn btn-default btn-xs" ng-click="transfer(options.items, options.selectedItems, -1)"> {{\'Select All\' | translate}} </button> <div class="pool"> <ul> <li ng-repeat="item in options.items | filter: searchTerm | orderBy: options.orderProperty"> <a href="" ng-click="transfer(options.items, options.selectedItems, options.items.indexOf(item))">{{item.name | translate}}&nbsp;&rArr; </a> </li></ul> </div></div><div class="col-lg-6 col-md-6 col-sm-6"> <label>{{options.labelSelected | translate}}</label> <button type="button" class="btn btn-default btn-xs" ng-click="transfer(options.selectedItems, options.items, -1)"> {{\'Deselect All\' | translate}} </button> <div class="pool"> <ul> <li ng-repeat="item in options.selectedItems | orderBy: options.orderProperty"> <a href="" ng-click="transfer(options.selectedItems, options.items, options.selectedItems.indexOf(item))"> &lArr;&nbsp;{{item.name | translate}}</a> </li></ul> </div></div></div></div>'
    };
}]);
