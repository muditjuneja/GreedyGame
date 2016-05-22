(function () {
    'use strict';
    angular
        .module('GreedyGame')
        .factory('Genre', genreService);
    function genreService($resource, appSetting) {
        var baseUrl = appSetting.serviceBaseUrl;
        return $resource(baseUrl + "genres/:id", null,
            {
                'update': { method: 'POST', params: { id: "@id" } }
            });
    }
})();