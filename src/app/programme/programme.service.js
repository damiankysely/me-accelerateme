(function() {
  'use strict';

  angular
    .module('htdocs')
    .service('programmeService', programmeService);

  /** @ngInject */
  function programmeService() {
    var vm = this;

    vm.programme = [
      {
        week:'1',
        date:'4-Feb-2017',
        topic:'Bootcamp, Welcome/Admin'
      },
      {
        week:'2',
        date:'11-Feb-2017',
        topic:'What is your problem?'
      },
      {
        week:'3',
        date:'18-Feb-2017',
        topic:'How will you find your customers?'
      },
      {
        week:'4',
        date:'25-Feb-2017',
        topic:'How will you find customers?'
      },
      {
        week:'',
        date:'Easter',
        topic:''
      },
      {
        week:'5',
        date:'4-Mar-2017',
        topic:'Product Week'
      },
      {
        week:'6',
        date:'11-Mar-2017',
        topic:'Product Week'
      },
      {
        week:'7',
        date:'18-Mar-2017',
        topic:'Product Week'
      },
      {
        week:'8',
        date:'25-Mar-2017',
        topic:'Product/Sales Week'
      },
      {
        week:'',
        date:'Easter',
        topic:''
      },
      {
        week:'9',
        date:'22-Apr-2017',
        topic:'Traction Week'
      },
      {
        week:'10',
        date:'29-Apr-2017',
        topic:'Investor Week'
      },
      {
        week:'11',
        date:'6-May-2017',
        topic:'Business Plan Week'
      },
      {
        week:'',
        date:'Exams',
        topic:''
      },
      {
        week:'12',
        date:'12-Jun-2017',
        topic:'Pitch Week'
      },
      {
        week:'13',
        date:'14-May-2017',
        topic:'Demo Day'
      },
    ];

    vm.getProgramme = function() {
      return vm.programme;
    }
  }
})();
