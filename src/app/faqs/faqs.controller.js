(function() {
  'use strict';

  angular
    .module('htdocs')
    .controller('FaqsController', FaqsController);

  /** @ngInject */
  function FaqsController(faqsService) {
    var vm = this;

    vm.questions = faqsService.getQuestions();
  }
})(); 
