(function () {
    'use strict';

    angular
        .module('GreedyGame')
        .directive('showGenres', showGenres);

    function showGenres() {
        var directive = {
            bindToController: true,
            controller: showGenresController,
            restrict: 'A',
            template: '<span ng-if="track.genres.length > 0">[<span ng-repeat="genre in track.genres">{{genre.name}} </span>]</span>'
        };
        return directive;

    }

    function showGenresController($scope) {
        $scope.range = function (n) {
            var arr = [];
            for (var index = 0; index < Math.ceil(n); index++) {
                arr.push(index);
            }
            return arr;
        };
    }
})();