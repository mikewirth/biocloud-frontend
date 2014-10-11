'use strict';

angular.module('biocloud.training', ['biocloudRender', 'dndLists'])
  .controller('TrainingCtrl', function ($scope, $rootScope, Render) {
    console.log('stuff');
    // Render.render();

    $rootScope.transformations = [
        {
            "method": "gaussianBlur",
            "displayName": "Gaussian Blur",
            "parameters": {
                // "blrSize": 10,
            },
        },
        {
            "method": "noiseRemoval",
            "displayName": "Noise Removal",
            "parameters": {
                // "kSize": ""
            }
        },
        {
            "method": "filterBackgroundNoise",
            "displayName": "Filter Background Noise",
            "parameters": {
                // "subimageSize": 10,
                // "varianceTreshold": 10
            }
        },
        {
            "method": "crop",
            "displayName": "Crop",
            "parameters": {
                "top": 5,
                "bottom": 5,
                "left": 5,
                "right": 5
            }
        }
    ];

    $rootScope.analysisBlocks = [
        {
            "method": "vesselWidth",
            "displayName": "Vessel Width",
            "parameters": {
                // "blrSize": 10,
            },
        },
    ];

                //     {
                //     "name": "blur",
                //     "type": "boolean",
                //     "default": "true"
                // }

    $rootScope.renderingPipeline = {};
    $rootScope.renderingPipeline = {
        "transformations": [
            {
                "method":  "binarization",
                "parameters": {
                    "threshold": "500",
                    "blur": "false"
                }
            },
            {
                "method":  "quantization"
            }
        ],
        "showUntil": 1
    };


    $scope.refresh = function() {
        Render.render($rootScope.renderingPipeline);
    }

    $scope.deleteTransformation = function(index) {
        $rootScope.renderingPipeline.transformations.splice(index, 1);
    }
  });