'use strict';

describe('Directive: speakingChat', function () {

  // load the directive's module and view
  beforeEach(module('speaking'));
  beforeEach(module('components/speaking/speaking-chat/speaking-chat.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<speaking-chat></speaking-chat>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the speakingChat directive');
  }));
});
