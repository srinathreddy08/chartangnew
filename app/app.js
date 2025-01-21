(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('MainController', MainController);

    function MainController() {
        var vm = this;
        
        vm.isChartModalVisible = false;
        
        vm.showChartModal = function() {
            vm.isChartModalVisible = true;
            console.log('Show modal clicked', vm.isChartModalVisible); // Debug log
        };

        vm.closeModal = function() {
            vm.isChartModalVisible = false;
            console.log('Close modal clicked', vm.isChartModalVisible); // Debug log
        };
    }
})(); 