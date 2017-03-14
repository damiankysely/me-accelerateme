(function() {
  'use strict';

  angular
    .module('htdocs')
    .controller('ProgrammeController', ProgrammeController);

  /** @ngInject*/
  function ProgrammeController(programmeService) {
    var vm = this;

    vm.map = {
      center: {
        latitude: 53.4641739, longitude: -2.2355702
      },
      zoom: 14,
      options: {
        scrollwheel: false,
        draggable: false
      }
    };

    vm.marker = {
      id: 0,
      coords: {
        latitude: 53.4641739,
        longitude: -2.2355702
      },
      options: {
        draggable: false
      }
    };

    vm.programme = programmeService.getProgramme();
  }
})();
