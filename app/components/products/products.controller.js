(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('ProductsController', ProductsController);

    ProductsController.$inject = ['productsService'];

    function ProductsController(productsService) {
        var vm = this;
        
        // Initialize properties
        vm.title = 'Our Products';
        vm.viewType = 'cards'; // Default view is now cards
        vm.products = productsService.getProducts();
        vm.filterText = '';

        // Buy product function
        vm.buyProduct = function(product) {
            console.log('Buying product:', product);
            // Implement your buy functionality
        };
    }
})();