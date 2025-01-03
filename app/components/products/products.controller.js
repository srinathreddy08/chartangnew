(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('ProductsController', ProductsController);

    ProductsController.$inject = ['productsService'];

    function ProductsController(productsService) {
        var vm = this;
        vm.title = 'Our Products';
        vm.products = productsService.getProducts();
    }
})();
