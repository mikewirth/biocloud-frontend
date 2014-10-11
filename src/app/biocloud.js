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
  .run(function($rootScope) {
    $rootScope.batches = [
      {
        "name": "Colon cell reproduction",
        "id": "1"
      },
      {
        "name": "Retina 3",
        "id": "2"
      }
    ];

    $rootScope.batchImages = {
      "1":
        [
          "holder.js/100%x180",
          "holder.js/100%x180",
          "holder.js/100%x180",
          "holder.js/100%x180"
        ],
      "2":
        [
          "holder.js/100%x180",
          "holder.js/100%x180",
          "holder.js/100%x180",
          "holder.js/100%x180",
          "holder.js/100%x180",
          "holder.js/100%x180",
          "holder.js/100%x180",
          "holder.js/100%x180",
          "holder.js/100%x180",
          "holder.js/100%x180",
          "holder.js/100%x180",
          "holder.js/100%x180"
        ]
    };
  });
