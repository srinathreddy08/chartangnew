(function() {
    'use strict';

    angular
        .module('myApp')
        .factory('productsService', productsService);

    function productsService() {
        var service = {
            getProducts: getProducts
        };

        return service;

        function getProducts() {
            return [
                { name: 'Product 1', description: 'Description for product 1', price: 29.99, category: 'Electronics', image: 'https://via.placeholder.com/250', rating: 4.5 },
                { name: 'Product 2', description: 'Description for product 2', price: 39.99, category: 'Home Appliances', image: 'https://via.placeholder.com/250', rating: 4.0 },
                { name: 'Product 3', description: 'Description for product 3', price: 49.99, category: 'Kitchen', image: 'https://via.placeholder.com/250', rating: 3.5 },
                { name: 'Product 4', description: 'Description for product 4', price: 59.99, category: 'Sports', image: 'https://via.placeholder.com/250', rating: 5.0 },
                { name: 'Product 5', description: 'Description for product 5', price: 19.99, category: 'Books', image: 'https://via.placeholder.com/250', rating: 4.2 },
                { name: 'Product 6', description: 'Description for product 6', price: 24.99, category: 'Fashion', image: 'https://via.placeholder.com/250', rating: 4.8 },
                { name: 'Product 7', description: 'Description for product 7', price: 34.99, category: 'Beauty', image: 'https://via.placeholder.com/250', rating: 4.6 },
                { name: 'Product 8', description: 'Description for product 8', price: 44.99, category: 'Toys', image: 'https://via.placeholder.com/250', rating: 3.9 },
                { name: 'Product 9', description: 'Description for product 9', price: 54.99, category: 'Fitness', image: 'https://via.placeholder.com/250', rating: 4.7 },
                { name: 'Product 10', description: 'Description for product 10', price: 64.99, category: 'Travel', image: 'https://via.placeholder.com/250', rating: 4.3 },
                { name: 'Product 11', description: 'Description for product 11', price: 14.99, category: 'Stationery', image: 'https://via.placeholder.com/250', rating: 4.1 },
                { name: 'Product 12', description: 'Description for product 12', price: 74.99, category: 'Gadgets', image: 'https://via.placeholder.com/250', rating: 4.4 },
                { name: 'Product 13', description: 'Description for product 13', price: 84.99, category: 'Gaming', image: 'https://via.placeholder.com/250', rating: 5.0 },
                { name: 'Product 14', description: 'Description for product 14', price: 94.99, category: 'Automotive', image: 'https://via.placeholder.com/250', rating: 4.0 },
                { name: 'Product 15', description: 'Description for product 15', price: 104.99, category: 'Health', image: 'https://via.placeholder.com/250', rating: 4.9 },
                { name: 'Product 16', description: 'Description for product 16', price: 114.99, category: 'Outdoor', image: 'https://via.placeholder.com/250', rating: 4.2 },
                { name: 'Product 17', description: 'Description for product 17', price: 124.99, category: 'Accessories', image: 'https://via.placeholder.com/250', rating: 4.8 },
                { name: 'Product 18', description: 'Description for product 18', price: 134.99, category: 'Pets', image: 'https://via.placeholder.com/250', rating: 4.5 },
                { name: 'Product 19', description: 'Description for product 19', price: 144.99, category: 'Office', image: 'https://via.placeholder.com/250', rating: 4.0 },
                { name: 'Product 20', description: 'Description for product 20', price: 154.99, category: 'Tools', image: 'https://via.placeholder.com/250', rating: 4.3 }
            ];
        }
    }
})();
