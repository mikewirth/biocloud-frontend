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
        "showUntil": 1
    };

    renderService.render = function() {
        $http.post('/render', renderParams, {responseType: 'blob'})
          .success(function(data, status, headers, config) {
            var imgSrc = URL.createObjectURL(data);
            document.getElementById('renderImage').src = imgSrc;
            //$window.URL.revokeObjectURL(imgSrc);
          })
          .error(function(data, status, headers, config) {
            alert('There was an error rendering on the server.');
          });
    };

    return renderService;
  });