'use strict';

angular.module('biocloudRender', [])
  .factory('Render', function ($http) {
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

    renderService.render = function(params) {
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

    renderService.batch = function(params) {
      $http.post('http://ec2-54-77-212-190.eu-west-1.compute.amazonaws.com:5000/batch', renderParams)
          .success(function(data, status, headers, config) {
            var imgSrc = URL.createObjectURL(data);
            document.getElementById('renderImage').src = imgSrc;
            //$window.URL.revokeObjectURL(imgSrc);
          })
          .error(function(data, status, headers, config) {
            // alert('There was an error rendering on the server.');
          });
    }

    return renderService;
  });