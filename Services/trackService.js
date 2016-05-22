(function () {
    'use strict';
    angular
        .module('GreedyGame')
        .factory('Track', trackService);
    function trackService(appSetting, $resource) {
        var baseUrl = appSetting.serviceBaseUrl;
        return $resource(baseUrl + "tracks/:id", null,
            {
                'update': { method: 'POST', params: { id: "@id" } }
            });

    }
})();