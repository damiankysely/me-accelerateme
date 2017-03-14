(function() {
  'use strict';

  angular
    .module('htdocs')
    .service('faqsService', faqsService);

  /** @ngInject */
  function faqsService() {
    var vm = this;

    vm.questions = [
      {
        question: 'Who can take part in the scheme?',
        answer: 'The AccelerateME programme is open to current students or alumni at the University of Manchester.',
      },
      {
        question: 'What does the application process look like?',
        answer: 'DEADLINE EXTENSION to 2nd January 2017!!! Every team/individual needs to submit their written application via the application form by 2nd of January 2017. Shortlisted applicants will be invited to a skype interview after the application deadline. There will be up to 15 successful applicants (teams) selected on the basis of their application and phone interview, and invited to participate in our bootcamp on the 4th - 5th February 2017. We’ll then selected the top  6 performing teams.',
      },
      {
        question: 'Who reviews applications?',
        answer: 'The applications are primarily reviewed by the Programme Director and the AccelerateME team. We may also consult the applications with our advisors. None of the information provided by you will be disclosed to any third parties, who are not officially associated with the AccelerateME programme.',
      },
      {
        question: 'How long does the scheme last?',
        answer: 'The cohort 2017 will commence in February 2017, lasting 12-weeks. The sessions will pause for Easters break in April and for most of May, as we want you to focus on your exams! Demo Day will be held in June 2017 right after the exam period. Therefore the absolute length of the programme is close to 5 months.',
      },
      {
        question: 'How is the programme structured and what does it focus on?',
        answer:  'The programme is structured around approximately 12 intensive weekend sessions, which are designed to take you through the entire journey of starting up a business. These sessions are compulsory and will usually last all of Saturday and part of Sunday (this can vary). During the week, you will have the opportunity to arrange one-on-one consultancy sessions with the AccelerateME team, advisors and mentors. You will also be encouraged to spend time in the office with the rest of the cohort during the week.'
      },
      {
        question: 'Am I expected to attend all of the 12 weekend sessions?',
        answer: 'Yes, we will expect a high level of commitment from you and your team, as this is the only way we can mutually achieve the goal of this programme - to help you become an entrepreneur and kick your business off the ground. If you are unable to attend, we will expect you to let the Programme Director know in advance.'
      },
      {
        question: 'Can I be taken off the programme if my commitment is not sufficient?',
        answer:'Yes, we receive a high number of applications every year and we want to make sure, that the selected participants make the most out of the programme. If you display a continual lack of commitment, we may grant your place to another applicant. '
      },
      {
        question: 'What does the scheme involve day to day?',
        answer: 'As this scheme is designed to cater for students whilst they are doing their degree, the majority of sessions take place during the weekends. The rest of the time you will be free to work in our office space and take advantage of the support offered.',
      },
      {
        question: 'What type of business can apply?',
        answer: 'You can apply with any business idea. Whether it be technology based, a social enterprise or something more general – we will review it against our criteria and see if its a good match. We’re looking to take on businesses that we can actually help, so ideas that involve large amounts of investment to begin with are probably not right for us. Nevertheless, that doesn’t mean we can’t put you in touch with someone more appropriate – so apply anyway!',
      },
      {
        question: 'Does the business need to have already started?',
        answer: 'No, your business does not have to be incorporated. We will encourage you and help you with registering your company in the first weeks of the programme.',
      },
      {
        question: 'How does the money need to be spent?',
        answer: 'There are no specific restrictions to how the money needs to be spent, however it will be drip-fed to you based on meeting objectives. Throughout the programme you’ll meet with our team to set short term measurable goals, and receive instalments of funding that tie in with those goals.',
      },
      {
        question:'Do I need a technical co-founder if my business is technology based?',
        answer: 'It is highly recommended to have a co-founder or a team member with technical background, if you are looking to build a business with a technological product/service. Outsourcing development work can be a very costly investment that may slow you down and burn your money very quickly. However, we will still consider you application even your team does not have this capability at the moment.'
      },
      {
        question: 'Can I apply as an individual?',
        answer: 'Yes, you can. However, we will require you to find a team (team means 2+) as soon as possible, if you get accepted. It is immensely important to have a teammate on board. You’ll make better decisions, motivate each other, bounce ideas, have a diverse skillset and double the time of an individual.'
      },
      {
        question: 'Are there any costs to take part, or is any equity taken?',
        answer: 'We do not take any equity from startups and there is no participation fee. However, we expect high level of commitment from all participants throughout the whole programme.',
      },
      {
        question: 'How much funds can I get allocated throughout the programme?',
        answer: 'This depends on a number of factors, however at the moment we can guarantee at least £1,500 per team.'
      },
      {
        question: 'What is expected of me and my team?',
        answer: 'Apart from attending the weekend sessions, you will be expected to set your own goals and KPIs, and work tirelessly to achieve them. At the end of the programme, we want you to look back and be proud of what you have achieved. On the side, we will be organising plenty of social activities for the cohort, as interaction with other teams is also very important.'
      },
      {
        question: 'What happens during the Demo Day?',
        answer: 'This is the day when you get to show off, what you have achieved over the 5 months. It is usually an evening event, where we invite interesting speakers (Founder and CEO of Skyscanner joined us last year) and about 80 mentors, advisors, investors and entrepreneurs. The aim for the evening is to get you set up for what happens post-programme, whether it is getting onto another accelerators or raising investment. This is an ideal opportunity for you to do both.'
      },
      {
        question: 'What happens after the programme?',
        answer: 'Most alumni have successfully applied to accelerators such as Ignite, Wayra, Dotforge, MassChallenge that invest around £20,000 into all of their startups (for equity) and then help you raise seed funding (£50k+). However, you there is nothing stopping you from raising seed investment straight out of AccelerateME.'
      },
      {
        question: 'Haven’t found an answer to your questions?',
        answer: 'Feel free to email damian@manchesterentrepreneurs.co.uk with any question!'
      }
    ];

    vm.getQuestions = function() {
      return vm.questions;
    }
  }
})();
