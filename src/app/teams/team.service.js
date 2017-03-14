(function() {
  'use strict';

  angular
    .module('htdocs')
    .service('mentorsService', mentorsService);

  /** @ngInject */
  function mentorsService() {
    var vm = this;

    vm.mentors = [
      {
        shortName: 'damian-kysely',
        longName: 'Damian Kysely',
        description: 'Programme Director',
        link: 'http://www.manchesterentrepreneurs.co.uk'
      },
      {
        shortName: 'tomas-mjartan',
        longName: 'Tomas Mjartan',
        description: 'Programme Manager',
      },
      {
        shortName: 'myrto-lalacos',
        longName: 'Myrto Lalacos',
        description: 'Community Manager',
      },
      {
        shortName: 'madalina-raicu',
        longName: 'Madalina Raicu',
        description: 'Technology Manager',
      },
      {
        shortName: 'vojta-petrus',
        longName: 'Vojta Petrus',
        description: 'President Manchester Entrepreneurs',
      }
    ];

    vm.getMentors = function() {
      return vm.mentors;
    }
  }
})();
