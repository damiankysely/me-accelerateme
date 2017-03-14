(function() {
  'use strict';

  angular
    .module('htdocs')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope, $document, ModalService, matchmedia) {
    $rootScope.video = false;
    $rootScope.isPhone = false;
    $rootScope.mobileMenu = false;
    $rootScope.loaded = true;
  
    //Modals need to be able to be opened from any page
    $rootScope.showApplicationForm = function() {
      $document.scrollTo(0,0);
      ModalService.showModal({
        templateUrl: "app/components/modals/application.html",
        controller: "ApplicationController"
      }).then(function(modal) {
        modal.close.then(function(result) {
          vm.result = "All good!";
        });
      });
    };

    //Sets global isPhone variable
    var unregister = matchmedia.onPhone(function(mediaQueryList){
      $rootScope.isPhone = mediaQueryList.matches;
    });

    var unregister2 = matchmedia.onTablet(function(mediaQueryList){
      $rootScope.isTablet = mediaQueryList.matches;
    });

    $rootScope.toggleMobileMenu = function() {
      if($rootScope.mobileMenu == false) {
        $rootScope.mobileMenu = true;
      } else {
        $rootScope.mobileMenu = false;
      }
    };

    $rootScope.$on('$stateChangeSuccess', function() {
       document.body.scrollTop = document.documentElement.scrollTop = 0;
    });

    $log.debug('runBlock end');
  }
})();
