var app = angular.module('GreedyGame', ['ngRoute', 'ngResource', 'angularUtils.directives.dirPagination', 'angular-loading-bar', 'toaster']);
app.constant('appSetting', {
	"serviceBaseUrl": "http://104.197.128.152:8000/v1/"
});
app.config(function ($routeProvider) {
	$routeProvider
		.when('/track', {
			templateUrl: 'Views/track.html',
			controller: 'trackController'
		})
		.when('/genre', {
			templateUrl: 'Views/genre.html',
			controller: 'genreController'
		})

})