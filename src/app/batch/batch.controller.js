'use strict';

angular.module('biocloud')
  .controller('BatchCtrl', function ($scope, $rootScope, Render) {
    $scope.startBatch = function() {
    	Render.batch($rootScope.renderingPipeline, $rootScope.fields.selectedDataset);
    }

    $scope.identifyBatch = function(datasetName) {
    	return Render.identifyBatch(datasetName);
    }
  });
