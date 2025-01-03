(function() {
    'use strict';

    angular
        .module('myApp')
        .component('navbar', {
            templateUrl: 'app/components/navbar/navbar.view.html',
            controller: 'NavbarController'
        })
        .controller('NavbarController', NavbarController);

    function NavbarController() {
        var vm = this;
        vm.isActive = function(path) {
            return window.location.hash === path ? 'active' : '';
        };
    }
})();
