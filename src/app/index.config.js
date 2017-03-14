(function() {
  'use strict';

  angular
    .module('htdocs')
    .config(config);

  /** @ngInject */
  function config($logProvider, uiGmapGoogleMapApiProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    //Google maps settings
    uiGmapGoogleMapApiProvider.configure({
      key: 'AIzaSyAeeeoK0KynqdGa97ODph_OYx5Eo18qdB8',
      v: '3.20', //defaults to latest 3.X anyhow
      libraries: 'weather,geometry,visualization'
    });
  }
})();
