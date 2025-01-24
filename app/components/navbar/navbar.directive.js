(function() {
    'use strict';

    angular
        .module('myApp')
        .directive('appNavbar', appNavbar);

    function appNavbar() {
        return {
            restrict: 'E',
            templateUrl: 'app/components/navbar/navbar.view.html',
            controller: 'NavbarController',
            controllerAs: 'vm',
            scope: {}
        };
    }
})(); 