(function() {
  'use strict';

  angular
    .module('htdocs')
    .controller('MentorsController', MentorsController);

  /** @ngInject*/
  function MentorsController(mentorsService) {
    var vm = this;
    vm.mentors = mentorsService.getMentors();
  }
})();
