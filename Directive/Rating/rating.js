(function () {
    'use strict';

    angular
        .module('GreedyGame')
        .directive('starRating', starRating);

    function starRating() {
        var directive = {
            bindToController: true,
            controller: starRatingController,
            restrict: 'A',
            template: '<span class="glyphicon glyphicon-star" ng-repeat="i in range(track.rating)"></span>'
        };
        return directive;

    }

    function starRatingController($scope) {
        $scope.range = function (n) {
            var arr = [];
            for (var index = 0; index < Math.ceil(n); index++) {
                arr.push(index);
            }
            return arr;
        };
    }
})();