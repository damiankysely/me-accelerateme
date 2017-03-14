(function() {
  'use strict';

  angular
    .module('htdocs')
    .controller('ApplicationController', ApplicationController);

  /** @ngInject */
  function ApplicationController($scope, close) {

    $scope.applicationYear = 2016;
    $scope.closeModal = function() {
      close();
    }

  }

})();
