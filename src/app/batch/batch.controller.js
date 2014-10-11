'use strict';

angular.module('biocloud')
  .controller('BatchCtrl', function ($scope) {
    console.log('stuff');
    $scope.batches = [
    	{
    		"name": "Colon cell reproduction",
    		"id": "1"
    	},
    	{
    		"name": "Retina 3",
    		"id": "2"
    	}
    ];

    $scope.batchImages = [
    	"holder.js/100%x180",
    	"holder.js/100%x180",
    	"holder.js/100%x180",
    	"holder.js/100%x180"
    ];

    $scope.selectDataset = function() {

    }
  });
