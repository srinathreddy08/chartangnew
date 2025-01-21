(function() {
    'use strict';

    angular
        .module('myApp')
        .config(config);

    function config($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/components/home/home.view.html',
                controller: 'HomeController',
                controllerAs: 'vm'
            })
            .when('/products', {
                templateUrl: 'app/components/products/products.view.html',
                controller: 'ProductsController',
                controllerAs: 'vm'
            })
            .when('/price-analysis', {
                templateUrl: 'app/components/chart/chart.view.html',
                controller: 'ChartController',
                controllerAs: 'vm'
            })
            .when('/about', {
                templateUrl: 'app/components/about/about.view.html',
                controller: 'AboutController',
                controllerAs: 'vm'
            })
            .otherwise({ redirectTo: '/' });
    }
})();
