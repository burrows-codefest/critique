'use strict';


angular.module('core').controller('HomeController', [
  '$scope', 'Authentication', '$http',
  function ($scope, Authentication, $http) {
    var gitUrl = 'https://api.github.com/',
        userUrl = 'user';

    $http.defaults.headers.common.Authorization = 'token ' + Authentication.user.providerData.accessToken;

    $http.get(gitUrl + userUrl).success(function (data) {
      $scope.gitUser = data;
    });

    $http.get(gitUrl + 'user/subscriptions?page=2').success(function (data) {
      $scope.repos = data;
      console.log(data);
    });
  }
]);
