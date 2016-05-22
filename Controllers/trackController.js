(function () {
    'use strict';

    angular
        .module('GreedyGame')
        .controller('trackController', trackController);

    function trackController(Track, $scope, toaster) {

        $scope.showAddUpdate = false;
        $scope.isUpdate = false;
        function getAllTracks() {
            Track.query(function (response) {
                $scope.tracks = response;
            }, function (error) {
                toaster.pop('error', 'Error !', 'An Error has occured');
            });
        }

        getAllTracks();
        $scope.addTrack = function (track) {
            if (track.genreIds)
                track.genres = track.genreIds.split(',');
            Track.save(track, function (response) {
                $scope.showAddUpdate = false;
                $scope.track = {};
                toaster.pop('success', 'Done !', 'Track has been added');
                getAllTracks();
            }, function (error) {
                console.log(error);
                toaster.pop('error', 'Error !', 'An Error has occured');
            });
        }
        $scope.chooseTrack = function (track) {

            $scope.track = track;
            $scope.track.genreIds = [];
            for (var index = 0; index < $scope.track.genres.length; index++) {
                $scope.track.genreIds.push($scope.track.genres[index].id);
            }
            $scope.showAddUpdate = true;
            $scope.isUpdate = true;
        }

        $scope.updateTrack = function (track) {
            if(track.genreIds == "")
                track.genres = [];
            else if (typeof(track.genreIds) == "string")
                track.genres = track.genreIds.split(",");
            else
                track.genres = track.genreIds;
            Track.update({ id: track.id }, track, function (response) {
                $scope.isUpdate = false;
                $scope.showAddUpdate = false;
                $scope.track = {};
                toaster.pop('success', 'Done !', 'Track has been updated');
                getAllTracks();
            }, function (error) {
                console.log(error);
                toaster.pop('error', 'Error !', 'An Error has occured');
            }); 
        }

        // Track.query({"title":"dj wale"},function(response){
        //     console.log(response);
        //     $scope.tracks = response;
        // },function(error){
        //     console.log(error);
        // });
    }
})();

