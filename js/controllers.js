var artistControllers = angular.module('artistControllers', ['ngAnimate']); //this will hold all the code for the application - this is called namespacing
//artistControllers needs to be reference the ng-module deractive in HTML

// https://docs.angularjs.org/api/ng/service/$compile
//Compiles an HTML string or DOM into a template and produces a template function, which can then be used to link scope and the template together

artistControllers.controller('ListController', ['$scope', '$http', function($scope, $http) { //Scope is an object that refers to the application model. It is an execution context for expressions. Scopes are arranged in hierarchical structure which mimic the DOM structure of the application. Scopes can watch expressions and propagate events.
  //You can think of the scope and its properties as the data which is used to render the view. The scope is the single source-of-truth for all things view related.
  $http.get('js/data.json').success(function(data) {
      $scope.artists     = data;
      $scope.artistOrder = 'name'; //put in quotes to access the value of name
  });
}]);

//['$scope', '$http',] puttin [] around the services protects the variables from being changed by minification of Angular files for example

artistControllers.controller('DetailsController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
  $http.get('js/data.json').success(function(data) { //$routeParams service allows you to retrieve the current set of route parameters e.g. $routeParams ==> {chapterId:'1', sectionId:'2', search:'moby'}
    $scope.artists   = data;
    $scope.whichItem = $routeParams.itemId;

//artist profile navigaition logic
    if ($routeParams.itemId > 0) { //while artist profile is not the first one, go back to the previous profile
      $scope.prevItem = Number($routeParams.itemId) - 1;
    } else { //when you reach the first profile on the list ie index 0 --> go to the last profile on the list
      $scope.prevItem = $scope.artists.length - 1;
    }

    if ($routeParams.itemId < $scope.artists.length - 1) { //while artist profile is not the last one, go forward to the next profile
      $scope.nextItem = Number($routeParams.itemId) + 1;
    } else { //when you reach the last profile on the list ie (artist.length - 1) --> go to the first profile on the list
      $scope.nextItem = 0;
    }

  });
}]);
