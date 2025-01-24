(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('ChartController', ChartController);

    ChartController.$inject = ['chartService'];

    function ChartController(chartService) {
        var vm = this;
        
        // Initialize chart data
        var priceData = chartService.getPriceData();
        vm.data = [priceData.data];
        vm.labels = priceData.labels;
        vm.series = ['Average Price by Category'];

        // Get price trends data
        var trendData = chartService.getPriceTrends();
        vm.lineData = trendData.data;
        vm.lineLabels = trendData.labels;
        vm.lineSeries = ['Price Trends'];

        // Chart options
        vm.barOptions = {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        callback: function(value) {
                            return '$' + value;
                        }
                    }
                }]
            },
            responsive: true,
            maintainAspectRatio: false
        };

        vm.lineOptions = {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        callback: function(value) {
                            return '$' + value;
                        }
                    }
                }]
            },
            responsive: true,
            maintainAspectRatio: false
        };

        // Chart colors
        vm.colors = [
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 99, 132, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(255, 206, 86, 0.6)'
        ];

        vm.lineColors = [
            'rgba(75, 192, 192, 1)'
        ];
    }
})(); 