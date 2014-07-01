'use strict';

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope', function($scope) {
	  $scope.board1  = [[1,3,6], [2,4,7] , [5,9,8] ] ; 
	  $scope.SortedArray = [] ;  
	  $scope.NextElementIndex = 0 ; 
	  
	  // populate one dimention array 
	  for(var i = 0; i < $scope.board1.length; i++) {
		    var row = $scope.board1[i];
		    for(var j = 0; j < row.length; j++) {
		    	$scope.SortedArray.push(row[j]);
		    }
		  
		}
	  $scope.SortedArray.sort();
	  
	  
  
	  
	  $scope.lastElement = $scope.SortedArray[$scope.SortedArray.length - 1];
	  /*console.log($scope.SortedArray) ;*/
	  
	  
	  
  $scope.NumberIsClicked = function(obj) {
/*	  console.log ( " $scope.NextElementIndex " +  $scope.NextElementIndex  + 
		  		" $scope.SortedArray.length " + $scope.SortedArray.length ) ; */
	  if ($scope.NextElementIndex+1 == $scope.SortedArray.length  )
	     {   
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
	        
  }
  $scope.NewGame = function () {
	  shuffle( $scope.SortedArray) ; 
	  for(var i = 0; i < $scope.board1.length; i++) {
		    var row = $scope.board1[i];
		    for(var j = 0; j < row.length; j++) {
		    var SarrayIndex = i*3 + j ; 	
		    $scope.board1[i][j] =$scope.SortedArray[SarrayIndex]; 
		    }
		}
	  $scope.SortedArray.sort();
	  
	  
	  function shuffle(o){ //v1.0
		    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
		    return o;
		};	  
  }
  
  
  
  
	  
  
  
  }])
  .controller('MyCtrl2', ['$scope', function($scope) {
	  $scope.pictures = 0; 
	  $scope.class_string  = 1;
	  $scope.pictureClicked = function() {
		  console.log ("is clicked ") ;
		  
		  
		
		  
		  setTimeout(function(){
			  $scope.$apply(function () {
					 $scope.class_string  = 'animated flip';
					 $scope.pictures = $scope.pictures+1;
		        });

		  }, 50);
		  $scope.class_string  = '1';
		  
		  
	  }
	  
	  
	  

  }]);
