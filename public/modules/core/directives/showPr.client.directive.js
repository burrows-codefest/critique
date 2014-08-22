'use strict';


angular.module('core').directive('crShowPullRequests', [
  'Authentication', '$http',
  function (Authentication, $http) {
    return {
      restrict: 'E',
      templateUrl: 'modules/core/directives/templates/showPullRequests.client.view.html',
      scope: {
        'crRepo': '=',
        'crRepoShow': '='
      },
      link: function (scope) {

        scope.crRepoShow = true;

        $http.get('https://api.github.com/repos/' + scope.crRepo + '/pulls').success(function (data) {
          if (data.length < 1) {
            console.log('no pull requests');
            scope.crRepoShow = false;
          }

          scope.pullRequests = data;

          for (var i = 0; i < data.length; i += 1) {
            if (data[i].comments_url) {
              $http.get(data[i].comments_url).success(function (comments) {
                scope.pullRequests.comments = comments;
              });
            }
          }
        });
      }
    };
  }
]);
