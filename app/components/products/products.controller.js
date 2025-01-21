(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('ProductsController', ProductsController);

    ProductsController.$inject = ['productsService', 'uiGridConstants'];

    function ProductsController(productsService, uiGridConstants) {
        var vm = this;
        
        // Initialize properties
        vm.title = 'Our Products';
        vm.viewType = 'grid'; // Default view
        vm.products = productsService.getProducts();
        vm.filterText = '';

        // Toggle view function
        vm.toggleView = function() {
            vm.viewType = vm.viewType === 'grid' ? 'cards' : 'grid';
            console.log('Current view:', vm.viewType); // For debugging
        };

        // Buy product function
        vm.buyProduct = function(product) {
            console.log('Buying product:', product);
            // Implement your buy functionality
        };

        // UI Grid Configuration
        vm.gridOptions = {
            enableSorting: true,
            enableFiltering: true,
            enableGridMenu: true,
            enableColumnResizing: true,
            enableRowSelection: true,
            enableSelectAll: true,
            paginationPageSizes: [10, 20, 30],
            paginationPageSize: 10,
            data: vm.products,
            columnDefs: [
                { 
                    field: 'name', 
                    displayName: 'Product Name',
                    filterHeaderTemplate: '<div class="ui-grid-filter-container"><input type="text" ng-model="grid.appScope.vm.filterText" class="ui-grid-filter-input"></div>'
                },
                { field: 'description', displayName: 'Description' },
                { field: 'category', displayName: 'Category' },
                { 
                    field: 'price', 
                    displayName: 'Price',
                    cellFilter: 'currency',
                    sort: {
                        direction: uiGridConstants.ASC
                    }
                },
                { field: 'rating', displayName: 'Rating' },
                {
                    field: 'actions',
                    displayName: 'Actions',
                    cellTemplate: '<button class="buy-now-button" ng-click="grid.appScope.vm.buyProduct(row.entity)">Buy Now</button>'
                }
            ]
        };
    }
})();