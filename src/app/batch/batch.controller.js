'use strict';

angular.module('biocloud')
  .controller('BatchCtrl', function ($scope, $rootScope, Render) {
    console.log('stuff');

    $scope.startBatch = function() {
    	Render.batch($rootScope.renderingPipeline, $rootScope.selectedDataset);
    }

    $scope.identifyBatch = function(datasetName) {
    	for (var item in $rootScope.batches) {
    		if ($rootScope.batches[item].name == datasetName) {
    			return $rootScope.batches[item];
    		}
    	}
    }
  });
