'use strict';


angular.module('core').directive('crShowPullRequests', [
  'Authentication', '$http',
  function (Authentication, $http) {
    return {
      restrict: 'E',
      template: '<div ng-repeat="pr in pullRequests">' +
          '<h3>{{ pr.title }} ({{ pr.state }})</h3>' +
          '<div ng-hide="pullRequests.comments">No comments</div>' +
          '<div class="row" ng-repeat="comment in pullRequests.comments">' +
          '<div class="col-md-1"><img ng-src="{{ comment.user.avatar_url }}" width="50" height="50" /></div>' +
          '<div class="col-md-1">{{ comment.user.login }}</div>' +
          '<div class="col-md-4">{{ comment.body }}</div>' +
          '<div class="col-md-1"><a ng-href="{{comment.html_url}}">View</a></div>' +
          '<div class="col-md-2">{{ comment.created_at | date:"fullDate" }}</div>' +
          '</div>' +
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
