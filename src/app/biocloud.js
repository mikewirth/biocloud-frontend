'use strict';

angular.module('biocloud', ['ngAnimate', 'ngResource', 'ui.router', 'biocloud.training'])
  .config(function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/upload');

    $stateProvider
      .state('upload', {
        url: '/upload',
        templateUrl: 'app/upload/upload.html',
        controller: 'UploadCtrl'
      })
      .state('training', {
        url: '/train',
        templateUrl: 'app/training/training.html',
        controller: 'TrainingCtrl'
      })
      .state('batch', {
        url: '/batch',
        templateUrl: 'app/batch/batch.html',
        controller: 'BatchCtrl'
      });
  })
;
