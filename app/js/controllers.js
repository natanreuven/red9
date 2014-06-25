'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope', function($scope) {
	  $scope.board1  = [[1,3,6], [2,4,7] , [5,9,8] ] ;  
	  
  $scope.NumberIsClicked = function(obj) {
	        console.log(obj) ; 
	        /*alert(obj.target.attributes.data.value);*/
	    }
	  
  
  
  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }]);
