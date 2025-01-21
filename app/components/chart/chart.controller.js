(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('ChartController', ChartController);

    ChartController.$inject = ['chartService'];

    function ChartController(chartService) {
        var vm = this;
        
        // Colors for charts
        var colors = {
            backgroundColor: [
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ]
        };

        // Bar Chart
        var priceData = chartService.getPriceData();
        vm.labels = priceData.labels;
        vm.data = [priceData.data];
        vm.series = ['Average Price by Category'];
        
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
            tooltips: {
                callbacks: {
                    label: function(tooltipItem, data) {
                        return 'Average Price: $' + tooltipItem.yLabel.toFixed(2);
                    }
                }
            },
            responsive: true,
            maintainAspectRatio: false
        };

        vm.colors = [colors.backgroundColor];
        vm.borderColors = [colors.borderColor];

        

        // Line Chart
        var trendData = chartService.getPriceTrends();
        vm.lineLabels = trendData.labels;
        vm.lineData = trendData.data;
        vm.lineSeries = ['Product Prices'];
        vm.lineOptions = {
            responsive: true,
            maintainAspectRatio: false,
            elements: {
                line: {
                    tension: 0.3
                }
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        callback: function(value) {
                            return '$' + value;
                        }
                    }
                }]
            }
        };
        vm.lineColors = [{
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            pointBackgroundColor: 'rgba(54, 162, 235, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(54, 162, 235, 1)'
        }];
    }
})(); 