angular.module('angular-speaking', ['angular-speaking-ui-directive']);
angular.module('angular-speaking-ui-directive', ['luegg.directives'])
  .directive('angularSpeackingChat', function() {
    'use strict';
    return {
      templateUrl: 'views/templates/angular-speaking-ui-bootstrap3-chat.html',
      restrict: 'EA',
      //link: function(scope, element, attrs) {
      link: function(scope) {
        scope.chatMessages = [];

        scope.formatChat = function(icon, username, text, createdAt) {
          var chat = {};
          chat.icon = icon;
          chat.username = username;
          chat.text = text;
          chat.createdAt = createdAt;
          return chat;
        };

        scope.addChat = function() {
          if (scope.newChatMsg !== '') {
            var chat = scope.formatChat('http://placehold.it/16x16',
              'steve',
              scope.newChatMsg,
              new Date());

            scope.chatMessages.push(chat);
            scope.newChatMsg = '';
          } else {

          }
        };

        scope.reset = function () {
          scope.chatMessages = [];
        };
      }
    };
  });


angular.module('SpeakingBots.Templates', ['views/templates/angular-speaking-ui-bootstrap3-chat.tpl.html']);

angular.module('views/templates/angular-speaking-ui-bootstrap3-chat.tpl.html', []).run(['$templateCache', function($templateCache) {
  'use strict';
  $templateCache.put('views/templates/angular-speaking-ui-bootstrap3-chat.tpl.html',
    '<div class="speaking-chat panel panel-primary"><div class=panel-heading style="padding:0 0 0 8px"><span class="glyphicon glyphicon-user"></span><h6 class=panel-title style=display:inline>Chat</h6><div class="btn-group btn-group-xs pull-right"><button type=button class="btn btn-primary"><span class="glyphicon glyphicon-lock"></span></button> <button type=button class="btn btn-primary"><span class="glyphicon glyphicon-cog"></span></button> <button type=button class="btn btn-primary"><span class="glyphicon glyphicon-remove"></span></button></div><div class=clearfix></div></div><div class=panel-body style="padding:0 4px"><ul scroll-glue-bottom class=list-group style=max-height:300px;max-width:100%;overflow-y:auto;overflow-x:hidden><li class=list-group-item ng-hide="chatMessages.length === 0" ng-repeat="chat in chatMessages | orderBy:createdAt "><div class=media-left><img src={{chat.icon}} alt="" style="margin-top:8px"></div><div class=media-body><h6 style=width:10%>{{chat.username}}</h6><p style=width:90% class=word-wrap:break-word><small>{{chat.text}}</small></p></div></li><li class=list-group-item ng-show="chatMessages.length === 0"><p></p><p>Nothin\' here. <strong>Say something!</strong></p></li></ul></div><div class=panel-footer><form><div class="input-group input-group-sm"><span class=input-group-addon><img src=http://placehold.it/16x16 alt=""></span> <input class=form-control ng-model=newChatMsg placeholder="..."> <span class=input-group-btn><button class="btn btn-primary" type=submit ng-click=addChat()>Send</button></span></div></form></div></div>');
}]);
