(function() {
    'use strict';

    angular
        .module('myApp')
        .factory('chartService', chartService);

    chartService.$inject = ['productsService'];

    function chartService(productsService) {
        var service = {
            getPriceData: getPriceData,
            getPriceTrends: getPriceTrends
        };

        return service;

        function getPriceData() {
            var products = productsService.getProducts();
            var categories = {};
            
            // Group products by category and calculate averages
            products.forEach(function(product) {
                if (!categories[product.category]) {
                    categories[product.category] = {
                        total: 0,
                        count: 0
                    };
                }
                categories[product.category].total += product.price;
                categories[product.category].count++;
            });

            var labels = [];
            var data = [];

            Object.keys(categories).forEach(function(category) {
                labels.push(category);
                var avg = categories[category].total / categories[category].count;
                data.push(Number(avg.toFixed(2)));
            });

            return {
                labels: labels,
                data: data
            };
        }

        function getPriceTrends() {
            var products = productsService.getProducts();
            var sortedProducts = products
                .sort((a, b) => a.price - b.price)
                .slice(0, 10);

            return {
                labels: sortedProducts.map(p => p.name),
                data: [sortedProducts.map(p => p.price)]
            };
        }
    }
})(); 