(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('NavbarController', NavbarController);

    NavbarController.$inject = ['$location'];

    function NavbarController($location) {
        var vm = this;
        
        vm.navItems = [
            { path: '/', label: 'Home', icon: 'home' },
            { path: '/products', label: 'Products', icon: 'shopping-cart' },
            { path: '/price-analysis', label: 'Price Analysis', icon: 'chart-bar' },
            { path: '/about', label: 'About', icon: 'info-circle' }
        ];

        vm.isActive = function(path) {
            return $location.path() === path;
        };

        vm.navigate = function(path) {
            $location.path(path);
        };
    }
})(); 