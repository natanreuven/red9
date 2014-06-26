'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope', function($scope) {
	  $scope.board1  = [[1,3,6], [2,4,7] , [5,9,8] ] ; 
	  $scope.SortedArray = [] ; 
	  $scope.IsFirstClick = 0; 
	  $scope.NextElementIndex = 0 ; 
	  for(var i = 0; i < $scope.board1.length; i++) {
		    var row = $scope.board1[i];
		    for(var j = 0; j < row.length; j++) {
		    	$scope.SortedArray.push(row[j]);
		        /*console.log("row[" + i + "][" + j + "] = " + row[j]);*/
		       /* console.log($scope.SortedArray) ;*/ 
		    }
		  
		}
	  $scope.SortedArray.sort();
	  $scope.FirstNum = $scope.SortedArray[0];
	  $scope.lastElement = $scope.SortedArray[$scope.SortedArray.length - 1];
	  console.log($scope.FirstNum) ; 
	  console.log($scope.lastElement) ; 
	  /*console.log($scope.SortedArray) ;*/
	  
	  
	  
	  
	  
	  
  $scope.NumberIsClicked = function(obj) {
	  if ($scope.NextElementIndex == $scope.SortedArray.length  )
	     {   
		  console.log ( " $scope.NextElementIndex " +  $scope.NextElementIndex  + 
				  		" $scope.SortedArray.length " + $scope.SortedArray.length ) ; 
		  console.log("you win ") ; 
		 } 
	  else  {  
		   if (obj ==  $scope.SortedArray[$scope.NextElementIndex] )  
		       {$scope.NextElementIndex = $scope.NextElementIndex + 1 ;
			   console.log("  ok  ") ; }
	       else {
	    	   console.log(" wrong number  ") 
	  			}
	  		}
		/*      console.log(obj) ; 
	        console.log($scope.SortedArray) ;*/
	        
  }
	  
  
  
  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }]);
