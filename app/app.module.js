(function() {
    'use strict';
    angular.module('myApp', [
        'ngRoute',
        'chart.js'
    ]).config(['ChartJsProvider', function(ChartJsProvider) {
        // Configure chart.js global options
        ChartJsProvider.setOptions({
            responsive: true,
            maintainAspectRatio: false
        });
    }]).run(['$route', function($route) {
        // Force route initialization
        $route.reload();
    }]);
})();
