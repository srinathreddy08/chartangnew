(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('HomeController', HomeController);

    function HomeController() {
        var vm = this;
        vm.title = 'Welcome to Our Product Showcase';
        vm.message = 'Discover a world of innovative products designed to enhance your lifestyle.';
        vm.highlights = [
            {
                title: 'Innovative Designs',
                description: 'Experience the perfect blend of creativity and functionality in every product.'
            },
            {
                title: 'Quality You Can Trust',
                description: 'Our products are built to last, offering exceptional quality and durability.'
            },
            {
                title: 'Customer Focused',
                description: 'We listen to your needs and deliver solutions that exceed your expectations.'
            }
        ];
        vm.cta = 'Explore our collection and find something you’ll love today!';
    }
})();
