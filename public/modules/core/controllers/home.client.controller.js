'use strict';


angular.module('core').controller('HomeController', [
  '$scope', 'Authentication', '$http',
  function ($scope, Authentication, $http) {
    var gitUrl = 'https://api.github.com/';

    $scope.authentication = Authentication;

    $http.defaults.headers.common.Authorization = 'token ' + $scope.authentication.user.providerData.accessToken;

    $http.get(gitUrl + 'user/subscriptions').success(function (data) {
      $scope.repos = data;
    });
  }
]);
