'use strict';

/**
 * @ngdoc function
 * @name subInApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the subInApp
 */
angular.module('subInApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
