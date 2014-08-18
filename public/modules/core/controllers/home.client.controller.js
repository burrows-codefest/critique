'use strict';


angular.module('core').controller('HomeController', [
  '$scope', 'Authentication', '$http',
  function ($scope, Authentication, $http) {
    var gitUrl = 'https://api.github.com/user/repos';

    $scope.authentication = Authentication;

    $scope.gitUser = 'Ben';

    $http.get(gitUrl, {headers: { 'Authorization': 'token ' + $scope.authentication.user.providerData.accessToken }}).
        success(function (data) {
          $scope.gitUser = data;
        });
  }
]);
