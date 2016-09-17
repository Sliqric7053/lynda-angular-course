var myApp = angular.module('myApp', [
  'ngRoute', //ngRoute module provides routing and deeplinking services and directives for angular apps.
  'artistControllers' //the JS to handle this module Important! --> must match name in controllers.js
]);

//configure how the partials run
myApp.config(['$routeProvider', function($routeProvider) { //$routeProvider is a Service similar to $http, it is used for configuring routes
  $routeProvider.
  when('/list', { // when(path, route) - Adds a new route definition to the $route service.
    // file directories must start at the folder level
    templateUrl: 'partials/list.html', //must match document in partials folder
    controller: 'ListController' //must match document in controllers.js file
  }).
  when('/details/:itemId', {
    templateUrl: 'partials/details.html',
    controller: 'DetailsController'
  }).
  otherwise({ //otherwise(params) - Sets route definition that will be used on route change when no other route definition is matched.
    redirectTo: '/list'
  });
}]);
