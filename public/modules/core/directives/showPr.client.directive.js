'use strict';


angular.module('core').directive('crShowPullRequests', [
  'Authentication', '$http',
  function (Authentication, $http) {
    return {
      restrict: 'E',
      templateUrl: 'modules/core/directives/templates/showPullRequests.client.view.html',
      scope: {
        'crRepo': '='
      },
      link: function (scope) {
        $http.get('https://api.github.com/repos/' + scope.crRepo + '/pulls').success(function (data) {
          scope.pullRequests = data;

          for (var i = 0; i < data.length; i += 1) {
            if (data[i].comments_url) {
              $http.get(data[i].comments_url).success(function (comments) {
                scope.pullRequests.comments = comments;
                console.log(comments);
              });
            }
          }
        });
      }
    };
  }
]);
