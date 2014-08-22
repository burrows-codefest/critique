'use strict';


angular.module('core').controller('HomeController', [
  '$scope', 'Authentication', '$http',
  function ($scope, Authentication, $http) {
    var gitUrl = 'https://api.github.com/',
        user = Authentication.user,
        providerData, token;

    if (user) {
      providerData = user.providerData;

      if (providerData) {
        token = providerData.accessToken;
      }
    }

    $http.defaults.headers.common.Authorization = 'token ' + token;

    $http.get(gitUrl + 'user/subscriptions').success(function (data) {
      $scope.repos = data;
    });
  }
]);
