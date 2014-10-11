'use strict';

angular.module('biocloud.training', ['biocloudRender', 'dndLists'])
  .controller('TrainingCtrl', function ($scope, Render) {
    console.log('stuff');
    Render.render();

    $scope.transformations = [
        {
            "method": "binarization",
            "parameters": [
                {
                    "name": "threshold",
                    "type": "integer",
                    "default": "50"
                },
                {
                    "name": "blur",
                    "type": "boolean",
                    "default": "true"
                }
            ]
        },
        {
            "method": "quantization"
        },
        {
            "method": "quantization2"
        }
    ];

    $scope.renderingPipeline = {};
    $scope.renderingPipeline = {
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
        Render.render();
    }

    $scope.deleteTransformation = function(index) {
        $scope.renderingPipeline.transformations.splice(index, 1);
    }
  })
  .directive('resize', function ($window) {
    return function (scope, element) {
        var w = angular.element($window);
        scope.getWindowDimensions = function () {
            return {
                'h': w.height(),
                'w': w.width()
            };
        };
        scope.$watch(scope.getWindowDimensions, function (newValue, oldValue) {
            scope.windowHeight = newValue.h;
            scope.windowWidth = newValue.w;

            element.css({height: ((newValue.h - 140 - 50) + 'px')});
            /*
            scope.style = function () {
                console.log((newValue.h - 140) + 'px');
                return {
                    'height': (newValue.h - 140) + 'px'
                };
            };
            */

        }, true);

        w.bind('resize', function () {
            scope.$apply();
        });
    }
});