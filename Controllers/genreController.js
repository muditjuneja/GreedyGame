(function () {
    'use strict';

    angular
        .module('GreedyGame')
        .controller('genreController', genreController);

    function genreController(Genre, $scope, toaster) {
        $scope.showAddUpdate = false;
        $scope.isUpdate = false;
        function getAllGenres() {
            Genre.query(function (response) {
                $scope.genres = response;
            }, function (error) {
                console.log(error);
            });
        }
        getAllGenres();
        $scope.addGenre = function (genre) {
            Genre.save(genre, function (response) {
                $scope.showAddUpdate = false;
                $scope.genre = {};
                toaster.pop('success', 'Done !', 'Genre has been added');
                getAllGenres();

            }, function (error) {
                console.log(error);
                toaster.pop('error', 'Error !', 'An Error has occured');
            });
        }
        $scope.chooseGenre = function (genre) {
            $scope.genre = genre;
            $scope.showAddUpdate = true;
            $scope.isUpdate = true;
        }

        $scope.updateGenre = function (genre) {
            Genre.update({ id: genre.id }, genre, function (response) {
                $scope.isUpdate = false;
                $scope.showAddUpdate = false;
                $scope.genre = {};
                toaster.pop('success', 'Done !', 'Genre has been updated');
            }, function (error) {
                console.log(error);
                toaster.pop('error', 'Error !', 'An Error has occured');
            });
        }

    }
})();

