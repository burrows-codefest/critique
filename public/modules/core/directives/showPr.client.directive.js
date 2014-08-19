'use strict';


angular.module('core').directive('crShowPullRequests', [
  'Authentication', '$http',
  function (Authentication, $http) {
    return {
      restrict: 'E',
      template: '<div ng-repeat="pr in pullRequests">' +
          '({{ pr.state }}) - {{ pr.title }}' +
          '<table><tr ng-repeat="comment in pullRequests.comments">' +
          '<td><img ng-src="{{ comment.user.avatar_url }}" width="50" height="50" /></td>' +
          '<td>{{ comment.user.login }}</td>' +
          '<td>{{ comment.body }}</td>' +
          '<td><a ng-href="{{comment.html_url}}">View</a></td>' +
          '<td>{{ comment.created_at }}</td>' +
          '</tr></table>' +
          '</div>',
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
