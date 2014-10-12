'use strict';

angular.module('biocloud')
  .controller('BatchCtrl', function ($scope, $rootScope, Render) {
  	$scope.mode = 'start';

    $scope.startBatch = function() {
    	Render.batch($rootScope.renderingPipeline, $rootScope.fields.selectedDataset).then(function(data) {
    		$scope.resultData = data;
    		$scope.mode = 'results';
        console.log(document.getElementById('myChart'));
        var ctx = document.getElementById('myChart').getContext('2d');
        var options = { animation: true };
        var data = {
          datasets: [
            {
              data: [1,2,3,4,5,6,7,8]
            }
          ]
        };

        var data = {
    labels : ["January","February","March","April","May","June","July"],
    datasets : [
      {
        fillColor : "rgba(220,220,220,0.5)",
        strokeColor : "rgba(220,220,220,1)",
        pointColor : "rgba(220,220,220,1)",
        pointStrokeColor : "#fff",
        data : [65,59,90,81,56,55,40]
      },
      {
        fillColor : "rgba(151,187,205,0.5)",
        strokeColor : "rgba(151,187,205,1)",
        pointColor : "rgba(151,187,205,1)",
        pointStrokeColor : "#fff",
        data : [28,48,40,19,96,27,100]
      }
    ]
  };

  $scope.myChart.data = data;
    //         labels: ["January", "February", "March", "April", "May", "June", "July"],
    // datasets: [
    //     {
    //         label: "My First dataset",
    //         fillColor: "rgba(220,220,220,0.2)",
    //         strokeColor: "rgba(220,220,220,1)",
    //         pointColor: "rgba(220,220,220,1)",
    //         pointStrokeColor: "#fff",
    //         pointHighlightFill: "#fff",
    //         pointHighlightStroke: "rgba(220,220,220,1)",
    //         data: [65, 59, 80, 81, 56, 55, 40]
    //     },
    //     {
    //         label: "My Second dataset",
    //         fillColor: "rgba(151,187,205,0.2)",
    //         strokeColor: "rgba(151,187,205,1)",
    //         pointColor: "rgba(151,187,205,1)",
    //         pointStrokeColor: "#fff",
    //         pointHighlightFill: "#fff",
    //         pointHighlightStroke: "rgba(151,187,205,1)",
    //         data: [28, 48, 40, 19, 86, 27, 90]
    //     }
    // ]
        // var myLineChart = new Chart(ctx).Line(data, options);
    	});
    }

    $scope.identifyBatch = function(datasetName) {
      console.log("basdfasdf");
      console.log(datasetName);
    	return Render.identifyBatch(datasetName);
    }
  });
