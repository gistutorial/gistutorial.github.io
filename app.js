'use strict';

var App = angular.module('App', ['ngRoute']);

App.factory('myHttpInterceptor', function($rootScope, $q) {
  return {
    'requestError': function(config) {
      $rootScope.status = 'HTTP REQUEST ERROR ' + config;
      return config || $q.when(config);
    },
    'responseError': function(rejection) {
      $rootScope.status = 'HTTP RESPONSE ERROR ' + rejection.status + '\n' +
                          rejection.data;
      return $q.reject(rejection);
    },
  };
});

App.config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: '/html/home.html',
    controller: function($location, $scope){
      $scope.currentPath = $location.path();
    }
  });
  $routeProvider.when('/blog/:name*', {
    templateUrl: function(urlattr){
      return '/html/' + urlattr.name + '.html';
    }
  });
  $routeProvider.otherwise({
    redirectTo : '/'
  });
});

App.config(function($httpProvider) {
  $httpProvider.interceptors.push('myHttpInterceptor');
});


