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
        shortName: 'alex-hill',
        longName: 'Alex Hill',
        company: 'HelloWork',
        link: 'http://hellowork.co.uk'
      },
      {
        shortName: 'andrew-cooper',
        longName: 'Andrew Cooper',
        company: 'Huffier',
        link: 'http://www.huffier.com/'
      },
      {
        shortName: 'damian-kysely',
        longName: 'Damian Kysely',
        company: 'Manchester Entrepreneurs',
        link: 'http://www.manchesterentrepreneurs.co.uk'
      },
      {
        shortName: 'doug-ward',
        longName: 'Doug Ward',
        company: 'TechBritain',
        link: 'http://techbritain.com'
      },
      {
        shortName: 'emma-madden',
        longName: 'Emma Madden',
        company: 'Uber',
        link: 'https://www.uber.com/'
      },
      {
        shortName: 'fin-okane',
        longName: 'Finian O\'Kane',
        company: 'Wiser',
        link: 'http://wearewiser.com'
      },
      {
        shortName: 'greg-lewis',
        longName: 'Greg Lewis',
        company: 'HireSpace',
        link: 'https://hirespace.com'
      },
      {
        shortName: 'heather-waters',
        longName: 'Heather Waters',
        company: 'Natwest',
        link: 'http://natwest.com'
      },
      {
        shortName: 'hector-kolonas',
        longName: 'Hector Kolonas',
        company: 'Included.co',
        link: 'http://included.co/'
      },
      {
        shortName: 'james-thompson',
        longName: 'James Thompson',
        company: 'Consultant'
      },
      {
        shortName: 'jamil-khalil',
        longName: 'Jamil Khalil',
        company: 'Wakelet',
        link: 'https://wakelet.com'
      },
      {
        shortName: 'louise-kenworthy',
        longName: 'Louise Kenworthy',
        company: 'Innospace',
        link: 'http://www.innospace.co.uk'
      },
      {
        shortName: 'max-lines',
        longName: 'Max Lines',
        company: 'Uber',
        link: 'https://www.uber.com'
      },
      {
        shortName: 'monique-anderson',
        longName: 'Monique Anderson',
        company: 'Manchester Entrepreneurs',
        link: 'http://manchesterentrepreneurs.co.uk'
      },
      {
        shortName: 'naomi-timperley',
        longName: 'Naomi Timperley',
        company: '4hub',
        link: 'http://4hub.co.uk'
      },
      {
        shortName: 'neil-clough',
        longName: 'Neil Cloug',
        company: 'NWC Consulting',
        link: 'http://www.nwcconsultancy.com'
      },
      {
        shortName: 'paul-delamere',
        longName: 'Paul Delamere',
        company: 'Ignite',
      },
      {
        shortName: 'paul-kilpatrick',
        longName: 'Paul Kilpatrick',
        company: 'Barburrito',
        link: 'http://barburrito.co.uk'
      },
      {
        shortName: 'paul-smith',
        longName: 'Paul Smith',
        company: 'Ignite',
      },
      {
        shortName: 'paul-stacey',
        longName: 'Paul Stacey',
        company: 'Fatsoma',
        link: 'https://next.fatsoma.com'
      },
      {
        shortName: 'rich-edwards',
        longName: 'Richard Edwards',
        company: 'HASSLE',
        link: 'http://hassle.com/'
      },
      {
        shortName: 'rich-martell',
        longName: 'Richard Martell',
        company: 'Orderswift',
        link: 'https://orderswift.com'
      },
      {
        shortName: 'river-tam',
        longName: 'River Tam',
        company: 'DotForge',
        link: 'http://www.dotforge.com'
      },
      {
        shortName: 'shaun-gibson',
        longName: 'Shaun Gibson',
        company: 'TechBritain',
        link: 'http://techbritain.com'
      },
      {
        shortName: 'solly-sol',
        longName: 'Solly Sol',
        company: 'Social Media Group',
        link: 'http://socialmediagroup.com'
      },
      {
        shortName: 'stan-reinholds',
        longName: 'Stan Reinholds',
        company: 'Pieboy',
        link: 'https://www.facebook.com/pieboyclothing'
      },
      {
        shortName: 'tamsin-chislett',
        longName: 'Tasmin Chislett',
        company: 'HireSpace',
        link: 'https://hirespace.com'
      },
      {
        shortName: 'timothy-ng',
        longName: 'Timothy Ng',
        company: 'Scryla',
        link: 'http://www.scryla.co.uk'
      },
      {
        shortName: 'vikas-shah',
        longName: 'Vikas Shah',
        company: 'TiE',
      },
      {
        shortName: 'steve-bartlett',
        longName: 'Steve Bartlett',
        company: 'SocialChain',
        link: 'http://www.socialchain.com'
      },
      {
        shortName: 'caleb-meakins',
        longName: 'Caleb Meakins',
        company: 'My 40 Days',
        link: 'http://my40days.co.uk'
      },
      {
        shortName: 'rupert-wingate-sau',
        longName: 'Rupert Wingate-Sau',
        company: 'AXM Venture Capital',
        link: 'http://www.axmvc.co.uk'
      },
      {
        shortName: 'tim-dempsey',
        longName: 'Tim Dempsey',
      },
      {
        shortName: 'george-bettany',
        longName: 'George Bettany',
        company: 'Ignite',
        link: 'http://ignite100.com'
      },
      {
        shortName: 'tristan-watson',
        longName: 'Tristan Watson',
        company: 'Ignite',
        link: 'http://ignite100.com'
      },
      {
        shortName: 'mahmud-kamani',
        longName: 'Mahmud Kamani',
        company: 'BooHoo',
        link: 'http://boohoo.com'
      }
    ];

    vm.getMentors = function() {
      return vm.mentors;
    }
  }
})();
