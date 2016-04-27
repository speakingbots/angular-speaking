angular.module('angular-speaking.chat-directive', ['luegg.directives'])
  .directive('angularSpeakingChat', function() {
    'use strict';
    return {
      templateUrl: 'views/templates/angular-speaking-ui-bootstrap3-chat.tpl.html',
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
