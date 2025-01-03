(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('AboutController', AboutController);

    function AboutController() {
        var vm = this;
        vm.title = 'About Us';
        vm.content = 'We are a company dedicated to providing excellent services.';
    }
})();
