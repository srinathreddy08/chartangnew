(function() {
    'use strict';

    angular
        .module('myApp')
        .factory('chartService', chartService);

    chartService.$inject = ['productsService'];

    function chartService(productsService) {
        var service = {
            getPriceData: getPriceData,
            getPriceDistribution: getPriceDistribution,
            getPriceTrends: getPriceTrends
        };

        return service;

        function getPriceData() {
            var products = productsService.getProducts();
            var categories = {};
            
            products.forEach(function(product) {
                if (!categories[product.category]) {
                    categories[product.category] = {
                        total: 0,
                        count: 0
                    };
                }
                categories[product.category].total += parseFloat(product.price);
                categories[product.category].count += 1;
            });

            var labels = [];
            var data = [];

            Object.keys(categories).forEach(function(category) {
                labels.push(category);
                var avgPrice = categories[category].total / categories[category].count;
                data.push(parseFloat(avgPrice.toFixed(2)));
            });

            return {
                labels: labels,
                data: data
            };
        }

        function getPriceDistribution() {
            var products = productsService.getProducts();
            var distribution = [0, 0, 0, 0]; // [0-50, 51-100, 101-150, 150+]

            products.forEach(function(product) {
                var price = parseFloat(product.price);
                if (price <= 50) distribution[0]++;
                else if (price <= 100) distribution[1]++;
                else if (price <= 150) distribution[2]++;
                else distribution[3]++;
            });

            return distribution;
        }

        function getPriceTrends() {
            var products = productsService.getProducts();
            var sortedProducts = products
                .sort(function(a, b) { 
                    return parseFloat(a.price) - parseFloat(b.price);
                })
                .slice(0, 10); // Only show top 10 products for clarity
            
            return {
                labels: sortedProducts.map(function(p) { return p.name; }),
                data: [sortedProducts.map(function(p) { return parseFloat(p.price); })]
            };
        }
    }
})(); 