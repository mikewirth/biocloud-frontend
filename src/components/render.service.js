'use strict';

angular.module('biocloudRender', [])
  .factory('Render', function ($http, $rootScope) {
    var renderService = {};

    var renderParams = {
        "transformations": [
        {
            "method":  ":methodID",
                "parameters": {
                    
                }
            }
        ],
        "showUntil": -1
    };

    renderService.render = function(actions, selectedDataset) {
      var params = {
        "actions": actions,
        "selectedDataset": selectedDataset,
        "showUntil": -1
      };
      console.log(params);

      $http.post('http://ec2-54-77-212-190.eu-west-1.compute.amazonaws.com:5000/render', params, {responseType: 'blob'})
        .success(function(data, status, headers, config) {
          var imgSrc = URL.createObjectURL(data);
          document.getElementById('renderImage').src = imgSrc;
            //$window.URL.revokeObjectURL(imgSrc);
          })
      .error(function(data, status, headers, config) {
            // alert('There was an error rendering on the server.');
          });
    };

    renderService.batch = function(actions, selectedDataset) {
      var params = {
        "actions": actions,
        "selectedDataset": selectedDataset
      };

      $http.post('http://ec2-54-77-212-190.eu-west-1.compute.amazonaws.com:5000/batch', params)
          .success(function(data, status, headers, config) {
            
            //$window.URL.revokeObjectURL(imgSrc);
          })
          .error(function(data, status, headers, config) {
            // alert('There was an error rendering on the server.');
          });
    }

    renderService.images = function() {
      $http.get('http://ec2-54-77-212-190.eu-west-1.compute.amazonaws.com:5000/imglist')
          .success(function(data, status, headers, config) {
            $rootScope.batches = data.results;
            console.log($rootScope.batches);
          })
          .error(function(data, status, headers, config) {
            // alert('There was an error rendering on the server.');
          });
    }

    return renderService;
  });