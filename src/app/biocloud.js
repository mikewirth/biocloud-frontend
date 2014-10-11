'use strict';

angular.module('biocloud', ['ngAnimate', 'ngResource', 'ui.router'])
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
      });
  })
;
