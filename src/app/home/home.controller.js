(function() {
  'use strict';

  angular
    .module('htdocs')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController($rootScope, $window) {
    var vm = this;

    //Youtube video background
    vm.showSplash = true;
    vm.video = {
      id: 'cbC-0wG-okM'
    };

    vm.playVideo = function() {
      //Load the background video only on desktop
      if(!$rootScope.isPhone && !$rootScope.isTablet) {
        $rootScope.video = true;
        vm.restartVideo();
        vm.unMuteVideo();
        vm.showSplash = false;
      } else {
        $window.open('https://www.youtube.com/watch?v=cbC-0wG-okM', '_blank');
      }
    };

    vm.playerCallback = function(player) {
      vm.restartVideo = function() {
        player.seekTo(0);
      };

      vm.unMuteVideo = function() {
        player.unMute();
      };

      vm.muteVideo = function() {
        player.mute();
      };
    };

    $rootScope.closeVideo = function() {
      vm.muteVideo();
      $rootScope.video = false;
      vm.showSplash = true;
    };

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


    vm.deadlineAlert = function() {
      alert("DEADLINE EXTENSION to 2nd January 2017");
    };
  }
})();
