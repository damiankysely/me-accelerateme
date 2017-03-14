(function() {
  'use strict';

  angular
    .module('htdocs')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/home/home.html',
        controller: 'HomeController',
        controllerAs: 'home'
      })
      .state('about', {
        url: '/about/',
        templateUrl: 'app/about/about.html',
        controller: 'AboutController',
        controllerAs: 'about'
      })
      .state('programme', {
        url: '/programme/',
        templateUrl: 'app/programme/programme.html',
        controller: 'ProgrammeController',
        controllerAs: 'programme'
      })
      .state('mentors', {
        url: '/mentors/',
        templateUrl: 'app/mentors/mentors.html',
        controller: 'MentorsController',
        controllerAs: 'mentors'
      })
      .state('partners', {
        url: '/partners/',
        templateUrl: 'app/partners/partners.html',
        controller: 'PartnersController',
        controllerAs: 'partners'
      })
      .state('team', {
        url: '/team/',
        templateUrl: 'app/teams/team.html',
        controller: 'TeamController',
        controllerAs: 'team'
      })
      .state('teams-14-15', {
        url: '/teams/2014',
        templateUrl: 'app/teams/teams-14-15.html',
        controller: 'TeamsController',
        controllerAs: 'teams'
      })
      .state('teams-15-16', {
        url: '/teams/2015',
        templateUrl: 'app/teams/teams-15-16.html',
        controller: 'TeamsController',
        controllerAs: 'teams'
      })
      .state('teams-16-17', {
        url: '/teams/2016',
        templateUrl: 'app/teams/teams-16-17.html',
        controller: 'TeamsController',
        controllerAs: 'teams'
      })
      .state('apply', {
        url: '/',
        templateUrl: 'app/home/apply.html',
        controller: 'HomeController',
        controllerAs: 'home'
      })
      .state('faqs', {
        url: '/faqs/',
        templateUrl: 'app/faqs/faqs.html',
        controller: 'FaqsController',
        controllerAs: 'faqs'
      })
      .state('form', {
        url: '/form/',
        templateUrl: 'app/home/form.html',
        controller: 'FormController',
        controllerAs: 'form'
      })
      .state('success', {
        url: '/success',
        templateUrl: 'app/success/success.html',
        controller: 'SuccessController',
        controllerAs: 'success'
      });


    $urlRouterProvider.otherwise('/');
  }
})();
