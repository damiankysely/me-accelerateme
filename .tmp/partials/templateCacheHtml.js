angular.module("htdocs").run(["$templateCache", function($templateCache) {$templateCache.put("app/footer.html","<div class=\"content footer-me pure-g\"><div class=\"pure-u-1-2\"><a target=\"_blank\" href=\"https://www.facebook.com/ManchesterEntrepreneurs\"><i class=\"fa fa-facebook\"></i></a> <a target=\"_blank\" href=\"https://twitter.com/m_entrepreneurs\"><i class=\"fa fa-twitter\"></i></a> <a target=\"_blank\" href=\"https://www.linkedin.com/company/manchester-entrepreneurs\"><i class=\"fa fa-linkedin\"></i></a> <a target=\"_blank\" href=\"https://www.youtube.com/user/ManEntrepreneurs\"><i class=\"fa fa-youtube\"></i></a></div><div class=\"pure-u-1-2 text-right\"><img src=\"assets/images/meLogo.png\"></div></div><div class=\"content\"><p>Built by the tech team @ <a href=\"http://manchesterentrepreneurs.co.uk/about/meet-the-team\" target=\"_blank\">Manchester Entrepreneurs</a></p></div>");
$templateCache.put("app/faqs/faqs.html","<div class=\"content-wrapper\"><div class=\"content-header\"><div class=\"inner-content\"><img class=\"logo\" src=\"assets/images/AME_logo(for_dark).png\"><h1>FAQs</h1><p class=\"text-center\">Below you\'ll find our FAQs. Please don\'t hesitate to get in contact if you have any other queries.</p></div></div></div><div class=\"content-wrapper\"><div class=\"content content-row\"><ang-accordion class=\"module\" close-icon-class=\"fa fa-chevron-right\" open-icon-class=\"fa fa-chevron-down\"><collapsible-item ng-repeat=\"question in faqs.questions\" item-title=\"{{ question.question }}\"><div>{{ question.answer }}</div></collapsible-item></ang-accordion></div></div>");
$templateCache.put("app/home/apply.html","<div class=\"content-wrapper\"><div class=\"content-header\"><div class=\"inner-content\"><img class=\"logo\" src=\"assets/images/AME_logo(for_dark).png\"><h1>APPLICATIONS FOR THE NEXT COHORT OPEN IN OCTOBER 2017.</h1></div></div><div class=\"content content-row\"><h1 class=\"text-center\">HOW YOU APPLY</h1><p class=\"text-center\">The next cohort is scheduled to start in January 2018. Applications will open in October 2017.</p><div class=\"pure-g\"><div class=\"pure-u-1 pure-u-md-1-3\"><h2 class=\"text-center\">STEP 1</h2><div class=\"module\"><i class=\"fa fa-lightbulb-o\"></i><h3>Have a solid idea</h3><p>Think about the problem you\'re solving, the market size, scalability and your revenue model. We recomend filling out the <a href=\"http://www.uoguelph.ca/cbase/resource-library/wp-content/uploads/2014/05/Lean-Business-Model-Canvas-template.pdf\" target=\"_blank\">business model canvas</a> if you haven\'t already to refine your concept even further.</p></div></div><div class=\"pure-u-1 pure-u-md-1-3\"><h2 class=\"text-center\">STEP 2</h2><div class=\"module\"><i class=\"fa fa-money\"></i><h3>Be a Manchester student</h3><p>The AccelerateME programme is open to current students or alumni at the University of Manchester.</p></div></div><div class=\"pure-u-1 pure-u-md-1-3\"><h2 class=\"text-center\">STEP 3</h2><div class=\"module\"><i class=\"fa fa-arrow-down\"></i><h3>Fill out our application form</h3><a href=\"\" ui-sref=\"faqs\" class=\"button button-light\">FAQs</a></div></div></div></div><div class=\"content content-row\"><iframe id=\"typeform-full\" width=\"100%\" height=\"700px\" frameborder=\"0\" src=\"https://president6.typeform.com/to/WE8Hn0\"></iframe><script type=\"text/javascript\" src=\"https://s3-eu-west-1.amazonaws.com/share.typeform.com/embed.js\"></script></div></div>");
$templateCache.put("app/home/form.html","<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\"><html><head><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0\"><title>AccelerateME [COHORT 2017]</title><style type=\"text/css\">\n    html{\n      margin: 0;\n      height: 100%;\n      overflow: hidden;\n    }\n    iframe{\n      position: absolute;\n      left:0;\n      right:0;\n      bottom:0;\n      top:0;\n      border:0;\n    }\n  </style></head><body><div class=\"content-wrapper\"><iframe id=\"typeform-full\" width=\"100%\" height=\"100%\" frameborder=\"0\" src=\"https://president6.typeform.com/to/WE8Hn0\"></iframe><script type=\"text/javascript\" src=\"https://s3-eu-west-1.amazonaws.com/share.typeform.com/embed.js\"></script></div></body></html>");
$templateCache.put("app/home/home.html","<div class=\"content-wrapper\"><div class=\"splash-container\"><div class=\"triangle t-1\"></div><video-bg video-id=\"home.video.id\" start=\"56\" allow-click-events=\"true\" player-callback=\"home.playerCallback(player)\"></video-bg><div ng-show=\"home.showSplash\" id=\"splash\" class=\"splash splash-opacity\"><a ng-click=\"home.playVideo()\" href=\"\"></a> <img class=\"logo-front-page\" src=\"assets/images/AME_logo(for_dark).png\"><div class=\"box\"><h1>Take your ideas further</h1><h2><strong>AccelerateME</strong> in an intensive 12-week programme designed to accelerate and grow the best student startups and talent. It fits around academic studies and provides participants with workshops, mentoring, office space and funding to help develop and grow their businesses successfully. We take no equity and we accept entrepreneurs at any stage of their journeys.</h2><a tooltips=\"\" class=\"pure-button button\" href=\"\" ui-sref=\"apply\">Applications are now closed</a></div></div></div><div class=\"content content-row\"><h1 class=\"content-title text-center\">WHAT YOU GET</h1><p class=\"text-center\">As a successful applicant you get access to the resources and vast network of one of the largest student socities in the UK.</p><div class=\"pure-g\"><div class=\"pure-u-1 pure-u-md-1-4\"><div class=\"module\"><i class=\"fa fa-money\"></i><h3>Startup Funding of £1,500</h3></div></div><div class=\"pure-u-1 pure-u-md-1-4\"><div class=\"module\"><i class=\"fa fa-building-o\"></i><h3>Office Space with other 5 startups</h3></div></div><div class=\"pure-u-1 pure-u-md-1-4\"><div class=\"module\"><i class=\"fa fa-briefcase\"></i><h3>Legal &amp; Accounting Advice</h3><br></div></div><div class=\"pure-u-1 pure-u-md-1-4\"><div class=\"module\"><i class=\"fa fa-users\"></i><h3>One-to-One Mentor Meetings</h3></div></div></div></div></div>");
$templateCache.put("app/mentors/mentors.html","<div class=\"content-wrapper\"><div class=\"content-header\"><div class=\"inner-content\"><img class=\"logo\" src=\"assets/images/AME_logo(for_dark).png\"><h1>Mentors Past &amp; Present</h1><p>Learn from the smartest and most successful entrepreneurs in Manchester and beyond.</p></div></div><br><div class=\"pure-g\"><div class=\"pure-u-1-3 pure-u-md-1-6 mentor-container\" ng-repeat=\"person in mentors.mentors\" ng-if=\"person.link\" style=\"background-image:url(assets/images/mentors/{{ person.shortName }}.jpg)\"><a href=\"{{ person.link }}\" target=\"_blank\" class=\"mentor-details\"><h6>{{ person.longName }}</h6><p>{{ person.company }}</p></a></div><div class=\"pure-u-1-3 pure-u-md-1-6 mentor-container\" ng-repeat=\"person in mentors.mentors\" ng-if=\"!person.link\" style=\"background-image:url(assets/images/mentors/{{ person.shortName }}.jpg)\"><a class=\"mentor-details\"><h6>{{ person.longName }}</h6><p>{{ person.company }}</p></a></div></div><br></div>");
$templateCache.put("app/partners/partners.html","<div class=\"content-wrapper\"><div class=\"content-header\"><div class=\"inner-content\"><img class=\"logo\" src=\"assets/images/AME_logo(for_dark).png\"><h1>Partners</h1></div></div><div class=\"content content-row\"><h1 class=\"content-title text-center\">2016/17 PARTNERS</h1><p class=\"text-center\">accelerateme is jointly supported by the University of Manchester, Manchester Metropolitan University and other generous organisations.</p><div class=\"pure-g\"><div class=\"pure-u-1 pure-u-md-1-2\"><div class=\"module\"><img class=\"pure-img\" src=\"assets/images/partners/uom.jpg\"><br><br><p class=\"box box-light\">The University of Manchester is backing our project through HEIF Funding from the Higher Education Funding Council. This support is invaluable in making the project a success.</p><br><br></div><div class=\"module\"><a href=\"http://www.pomegranateconsulting.co.uk/\"><img class=\"pure-img\" src=\"assets/images/partners/pomegranate.png\"></a><p class=\"box box-light\">Based in the heart of Manchester’s City Centre, Pomegranate Consulting are a firm of Chartered Accountants and Business Advisors who have experience dealing with clients at all stages of their journey. As well as the more standard accounting tasks Pomegranate pride themselves on taking an interest in the development and long term success of their clients. They have been heavily involved with some of the successful start-ups in the Manchester area over the last few years.</p></div><div class=\"module\"><img class=\"pure-img\" src=\"assets/images/partners/mills.jpg\"><p class=\"box box-light\">Mills &amp; Reeve is one of the UK\'s best law firms with offices in six locations across the UK cities. They serve Barcalays, the University of Cambridge and AIG among their clients. They have been named for twelve years running as one of the 100 best companies to work for in The Sunday Times\' annual survey.</p></div></div><div class=\"pure-u-1 pure-u-md-1-2\"><div class=\"module\"><img class=\"pure-img\" src=\"assets/images/partners/msp.jpg\"><p class=\"box box-light\">MSP have an extensive experience in growing successful businesses and fostering an enterprising culture. For this reason they are sponsoring our scheme through free office space.</p></div><div class=\"module\"><img class=\"pure-img\" src=\"assets/images/partners/included.jpg\"><p class=\"box box-light\">Included.co is one of the best kept secrets by fast paced teams. Their free concierge service helps businesses growing from awesome shared workspaces save both time and money, every single day. This event is supported through their includedLive programme for entrepreneurial events.</p></div><div class=\"module\"><img class=\"pure-img\" src=\"assets/images/partners/nacue.jpg\"><p class=\"box box-light\">Leading student enterprise organization NACUE have been a fantastic supporter of accelerateme and recently awarded the scheme with the NACUE Ignition Fund. They are sponsoring our Demo Day.</p></div></div></div><div class=\"content banner-row text-center\"><p>Interested in getting involved as a mentor, investor or sponsor?</p><a class=\"button\" href=\"http://manchesterentrepreneurs.co.uk/contact\" target=\"_blank\">Send us a message</a></div></div></div>");
$templateCache.put("app/programme/programme.html","<div class=\"content-wrapper\"><div class=\"content-header\"><div class=\"inner-content\"><img class=\"logo\" src=\"assets/images/AME_logo(for_dark).png\"><h1>Programme</h1><p>Designed to incubate and grow the best student startups, accelerateme is an intensive 5 month program that fits around academic studies and provides participants with workshops, resources and funding to develop and grow their businesses successfully.</p></div></div></div><div class=\"content-wrapper\"><div class=\"pure-g row-spacing\"><div class=\"pure-u-1 pure-u-md-1-2 image-row-text\"><h1 class=\"content-title\">FUNDING</h1><div class=\"image-row-bullet\"><h2>Startup grant</h2><p>We have a pot of money to allocate to each startup. We’ll expect them to spend the funds on developing their MVP and other development costs. The funding will be awarded upon progress throughout the programme, not as a lump sum at the start.</p></div><div class=\"image-row-bullet\"><h2>Demo day pitching to investors</h2><p>At the end of the program in June 2016 we give you an opportunity to present the amazing work you have done over the past five months to a room of investors and successful entrepreneurs.</p></div></div><div class=\"pure-u-1 pure-u-md-1-2 image-row-text\"><h1 class=\"content-title\">OFFICE SPACE</h1><div class=\"image-row-bullet\"><h2>Work alongside professionals</h2><p>You\'ll get free office space just off oxford road at Manchester Science Partnerships. It\'s a vibrant co-working facility where you\'ll set opposite from the ME team and other Manchester businesses.</p><br></div><div class=\"image-row-bullet\"><h2>Legal &amp; accounting advice</h2><p>Get on with the fun stuff. We\'ll help bootstrap all of the legal and accountancy work for your business so you can work on growing and getting customers.</p></div></div></div></div><div class=\"content-wrapper\"><div class=\"pure-g row-spacing\"><div class=\"pure-u-1 pure-u-md-1-2 image-row-text\"><h1 align=\"center\">Programme</h1><table class=\"pure-table\" align=\"center\"><thead><tr><th>Week</th><th>Date</th><th>Topic</th></tr></thead><tbody><font color=\"white\"><tr bgcolor=\"#79D89D\"><td>1</td><td>4-Feb-2017</td><td>Bootcamp, Welcome/Admin</td></tr><tr bgcolor=\"#79D89D\"><td>2</td><td>11-Feb-2017</td><td>What\'s your problem?</td></tr><tr bgcolor=\"#79D89D\"><td>3</td><td>18-Feb-2017</td><td>How are you going to solve it</td></tr><tr bgcolor=\"#79D89D\"><td>4</td><td>25-Feb-2017</td><td>How will you find customers?</td></tr><tr bgcolor=\"#72B8E0\"><td>5</td><td>4-Mar-2017</td><td>Product Week</td></tr><tr bgcolor=\"#72B8E0\"><td>6</td><td>11-Mar-2017</td><td>Product Week</td></tr><tr bgcolor=\"#72B8E0\"><td>7</td><td>18-Mar-2017</td><td>Product Week</td></tr><tr bgcolor=\"#72B8E0\"><td>8</td><td>25-Mar-2017</td><td>Product/Sales Week</td></tr><tr bgcolor=\"#D8A841\"><td></td><td>Easters</td><td></td></tr><tr bgcolor=\"#F4BFFF\"><td>9</td><td>22-Apr-2017</td><td>Traction Week</td></tr><tr bgcolor=\"#F4BFFF\"><td>10</td><td>29-Apr-2017</td><td>Investor Week</td></tr><tr bgcolor=\"#F4BFFF\"><td>11</td><td>6-May-2017</td><td>Business Plan Week</td></tr><tr bgcolor=\"#D8A841\"><td></td><td>Exams</td><td></td></tr><tr bgcolor=\"#E8D489\"><td>12</td><td>12-Jun-2017</td><td>Pitch Week</td></tr><tr bgcolor=\"#E8D489\"><td>13</td><td>14-Jun-2017</td><td>Demo Day</td></tr></font></tbody></table></div><div class=\"pure-u-1 pure-u-md-1-2 funding-image\"></div></div></div><div class=\"content-wrapper\"><h1 class=\"content-title text-center\">ADVISORS</h1><div class=\"content content-row\"><div class=\"pure-g row-spacing\"><div class=\"pure-g\"><div class=\"pure-u-1 pure-u-md-1-3\"><div class=\"module team-module\"><img class=\"pure-img-team\" src=\"assets/images/mentors/doug-ward.jpg\"><p></p><h1>Doug Ward</h1><p></p><p>10 Downing Street Advisor, CEO at BetGame, Founder of ForwardMCR and SpaceportX</p></div></div><div class=\"pure-u-1 pure-u-md-1-3\"><div class=\"module team-module\"><img class=\"pure-img-team\" src=\"assets/images/mentors/jamil-khalil.jpg\"><p></p><h1>Jamil Khalil</h1><p></p><p>Founder and CEO Wakelet</p><br></div></div><div class=\"pure-u-1 pure-u-md-1-3\"><div class=\"module team-module\"><img class=\"pure-img-team\" src=\"assets/images/mentors/tim-dempsey.jpg\"><p></p><h1>Tim Dempsey</h1><p></p><p>VC Dealmaker</p><br></div></div></div></div></div></div>");
$templateCache.put("app/success/success.html","<div class=\"content-wrapper\"><div class=\"content content-row\"><h1 class=\"content-title text-center\">THANKS</h1><p class=\"text-center\">Your application was successful. We\'ll be in touch shortly.</p></div></div>");
$templateCache.put("app/teams/team.html","<link rel=\"stylesheet\" href=\"http://icono-49d6.kxcdn.com/icono.min.css\"><div class=\"content-wrapper\"><div class=\"content-header\"><div class=\"inner-content\"><img class=\"logo\" src=\"assets/images/AME_logo(for_dark).png\"><h1>AccelerateME Team</h1><p></p></div></div><div class=\"content-wrapper\"><div class=\"content content-row\"><div class=\"pure-g\"><div class=\"pure-u-1 pure-u-md-1-3\"><div class=\"module team-module\"><img class=\"pure-img-team\" src=\"assets/images/dk_profile.jpg\"><p></p><h1>Programme Director</h1><p></p><p></p><h2>Damian Kysely</h2><p></p><ul class=\"social-icons\"><li><a href=\"mailto:damian@manchesterentrepreneurs.co.uk\" class=\"social-icon\"><i class=\"envelope fa fa-envelope\"></i></a></li><li><a href=\"https://twitter.com/Damiankys\" class=\"social-icon\"><i class=\"fa fa-twitter\"></i></a></li><li><a href=\"https://uk.linkedin.com/in/damiankysely/en\" class=\"social-icon\"><i class=\"fa fa-linkedin\"></i></a></li></ul></div><div class=\"module team-module\"><img class=\"pure-img-team\" src=\"http://manchesterentrepreneurs.co.uk/wp-content/uploads/2015/08/dan.jpg\"><p></p><h1>Technology Director</h1><p></p><p></p><h2>Daniel Ireson</h2><p></p><ul class=\"social-icons\"><li><a href=\"mailto:daniel@manchesterentrepreneurs.co.uk\" class=\"social-icon\"><i class=\"envelope fa fa-envelope\"></i></a></li><li><a href=\"https://uk.linkedin.com/in/danielireson\" class=\"social-icon\"><i class=\"fa fa-linkedin\"></i></a></li></ul></div></div><div class=\"pure-u-1 pure-u-md-1-3\"><div class=\"module team-module\"><img class=\"pure-img-team\" src=\"http://manchesterentrepreneurs.co.uk/wp-content/uploads/2015/08/vojtech.png\"><p></p><h1>ME President</h1><p></p><p></p><h2>Vojta Petrus<br></h2><p></p><ul class=\"social-icons\"><li><a href=\"mailto:vojta@manchesterentrepreneurs.co.uk\" class=\"social-icon\"><i class=\"envelope fa fa-envelope\"></i></a></li><li><a href=\"https://www.facebook.com/vojta.petrus\" class=\"social-icon\"><i class=\"fa fa-facebook\"></i></a></li><li><a href=\"https://uk.linkedin.com/pub/vojtech-petrus/80/591/846\" class=\"social-icon\"><i class=\"fa fa-linkedin\"></i></a></li></ul></div><div class=\"module team-module\"><img class=\"pure-img-team\" src=\"assets/images/teams/haider300.jpg\"><p></p><h1>Entrepreneur in Residence</h1><p></p><p></p><h2>Haider Khokhar</h2><p></p><ul class=\"social-icons\"><li><a href=\"mailto:haider@reroo.co.uk\" class=\"social-icon\"><i class=\"envelope fa fa-envelope\"></i></a></li><li><a href=\"https://www.facebook.com/haider.khokhar8\" class=\"social-icon\"><i class=\"fa fa-facebook\"></i></a></li><li><a href=\"https://www.linkedin.com/in/haider-khokhar-07a51248/\" class=\"social-icon\"><i class=\"fa fa-linkedin\"></i></a></li></ul></div></div><div class=\"pure-u-1 pure-u-md-1-3\"><div class=\"module team-module\"><img class=\"pure-img-team\" src=\"http://manchesterentrepreneurs.co.uk/wp-content/uploads/2015/08/myrto.jpg\"><p></p><h1>Programme Manager</h1><p></p><p></p><h2>Myrto Lalacos</h2><p></p><ul class=\"social-icons\"><li><a href=\"mailto:myrto@manchesterentrepreneurs.co.uk\" class=\"social-icon\"><i class=\"envelope fa fa-envelope\"></i></a></li><li><a href=\"https://www.facebook.com/myrto.lalacos\" class=\"social-icon\"><i class=\"fa fa-facebook\"></i></a></li><li><a href=\"https://www.linkedin.com/in/myrto-lalacos-972a7282/\" class=\"social-icon\"><i class=\"fa fa-linkedin\"></i></a></li></ul></div><div class=\"module team-module\"><img class=\"pure-img-team\" src=\"https://scontent-frt3-1.xx.fbcdn.net/v/t31.0-8/1518246_773091902704830_1960067299_o.jpg?oh=55f03ff212db13efbaec3be39067264e&oe=58FD2F86\"><p></p><h1>Technology Manager</h1><p></p><p></p><h2>Madalina Raicu</h2><p></p><ul class=\"social-icons\"><li><a href=\"mailto:madalina@manchesterentrepreneurs.co.uk\" class=\"social-icon\"><i class=\"envelope fa fa-envelope\"></i></a></li><li><a href=\"https://www.facebook.com/madalina.raicu\" class=\"social-icon\"><i class=\"fa fa-facebook\"></i></a></li><li><a href=\"https://www.linkedin.com/in/madalinaraicu\" class=\"social-icon\"><i class=\"fa fa-linkedin\"></i></a></li></ul></div></div></div></div></div></div>");
$templateCache.put("app/teams/teams-14-15.html","<div class=\"content-wrapper\"><div class=\"content-header\"><div class=\"inner-content\"><img class=\"logo\" src=\"assets/images/AME_logo(for_dark).png\"><h1>Cohort 2015</h1></div></div><div class=\"content content-row\"><h1 class=\"content-title text-center\">TEAMS 2015</h1><p class=\"text-center\">By taking part in the scheme you\'ll get to network with alumni past and present. Below you\'ll find the graduating cohort of 2015.</p><div class=\"pure-g\"><div class=\"pure-u-1 pure-u-md-1-2\"><div class=\"module team-module\"><a href=\"http://www.weraiseapp.com/\"><img class=\"pure-img\" src=\"assets/images/teams/team-first.jpeg\"></a><p>We Raise, formerly Team First were building a platform for teams and societies to raise money for their organisations. They provide members with benefits, brands with exposure and organisations with funding!</p></div><div class=\"module team-module\"><img class=\"pure-img\" src=\"assets/images/teams/popspot.jpg\"><p>Popspot is a super cool mobile app helping tourists, visitors &amp; locals discover, experience &amp; support original local independent cafes, bars, restaurants &amp; events uniquely special to each and every city around the world.</p></div><div class=\"module team-module\"><img class=\"pure-img\" src=\"assets/images/teams/ventry.png\"><p>Ventry are disrupting the nightlife industry – connecting socialites with promoters. They’re developing an app to help promote events, purchase tickets, share what’s trending and analyse data.</p></div></div><div class=\"pure-u-1 pure-u-md-1-2\"><div class=\"module team-module\"><a href=\"http://nowimpact.co.uk/\"><img class=\"pure-img\" src=\"assets/images/teams/impact.png\"></a><p>Impact are disrupting the charity sector by putting the ’cause’ back ahead of the ‘charity’. They are building a brand and inventing an online platform to make this happen.</p></div><div class=\"module team-module\"><img class=\"pure-img\" src=\"assets/images/teams/umbrello.png\"><p>Umbrello manages all of your warranties in the Cloud. Whether you have a TV, phone or games console, you can upload copies of their paper warranties to your Umbrello account, and retrieve them whenever you need to. Never again will you lose a warranty / receipt, and risk paying for the repair out of your own pocket. We’ll even remind you when your warranties are soon to expire, giving you the chance to extend your cover.</p></div></div></div></div></div>");
$templateCache.put("app/teams/teams-15-16.html","<div class=\"content-wrapper\"><div class=\"content-header\"><div class=\"inner-content\"><img class=\"logo\" src=\"assets/images/AME_logo(for_dark).png\"><h1>Cohort 2016</h1></div></div><div class=\"content content-row\"><h1 class=\"content-title text-center\">TEAMS 2016</h1><p class=\"text-center\">Stay tuned for more updates from this year\'s cohort. In the meantime here\'s a brief overview of the teams currently on the programme.</p><div class=\"pure-g\"><div class=\"pure-u-1 pure-u-md-1-2\"><div class=\"module team-module\"><img class=\"pure-img\" src=\"assets/images/teams/the-student-games.jpg\"><p>The Student Games is bringing the exciting world of obstacle course events to the student market. The first events will be taking place in Manchester but the team have ambitious plans to branch out nationwide.</p><p><b>Tom Richmond and Greg Pearson</b></p></div><div class=\"module team-module\"><img class=\"pure-img\" src=\"assets/images/teams/vital-voice.jpg\"><p>Vital Voice is a uniquely engineered phone case and innovative solution to preserving the confidentiality of private conversations. The phone case allows the user to even whisper while taking a call in the nosiest of environments and still provides clear communication.</p><p><b>Bilal El Sayed, Benedict Vardey, Francisco Ponce de Leon</b></p></div><div class=\"module team-module\"><a href=\"https://dentaliq.co.uk/\"><img class=\"pure-img\" src=\"assets/images/teams/dentaliq.jpeg\"></a><p>DentaliQ can cutomatically push your verifiable and non-verifiable CPD hours to the eGDC, saving you one less thing to think about.</p><p><b>Rajen Nagar</b></p></div></div><div class=\"pure-u-1 pure-u-md-1-2\"><div class=\"module team-module\"><img class=\"pure-img\" src=\"assets/images/teams/reroo.jpg\"><p>Skyscanner for trains - The Reroo app helps users find cheaper train tickets for long distance rail journeys via indirect routes.</p><p><b>Haider Khokar, Ulrich Boulon, Thomas Edwards, George McDonnell</b></p></div><div class=\"module team-module\"><img class=\"pure-img\" src=\"assets/images/teams/modelbook.jpg\"><p>Modelbook is a centralised model booking platform serving modelling agencies and clients. It aims to ease the process of booking models within the industry as well as hosting a bank of professional models for clients to choose from.</p><p><b>Rajen Nagar</b></p></div><div class=\"module team-module\"><a href=\"http://www.sexinabox.co.uk/\" \"=\"\"><h3>Sex in a Box</h3></a><p>Sex in a Box is the UK\'s first sex toy subscription box; packed with bedroom essentials, sex toys and adult games. Each box is customised to the couples preferences, enhancing their bedroom pleasure and experience.</p><p><b>Georgia Farrugia</b></p></div></div></div></div></div>");
$templateCache.put("app/teams/teams-16-17.html","<div class=\"content-wrapper\"><div class=\"content-header\"><div class=\"inner-content\"><img class=\"logo\" src=\"assets/images/AME_logo(for_dark).png\"><h1>Cohort 2017</h1></div></div><div class=\"content content-row\"><h1 class=\"content-title text-center\">TEAMS 2017</h1><p class=\"text-center\">By taking part in the scheme you\'ll get to network with alumni past and present. Below you\'ll find the graduating cohort of 2017.</p><div class=\"pure-g\"><div class=\"pure-u-1 pure-u-md-1-2\"><div class=\"module team-module\"><a href=\"http://unifiy.co.uk\"><img class=\"pure-img\" src=\"assets/images/teams/unifiy.jpg\"></a><p>Refinancing student loans in the UK</p><p><b>Nick Singh, Chuck Paiusi and Cameron Lee</b></p></div><div class=\"module team-module\"><a href=\"http://www.hiveurbanfarms.com\"><img class=\"pure-img\" src=\"assets/images/teams/HUF-resized.jpg\"></a><p>Creating sustainable food networks in cities across the world that bring people and food closer together</p><p><b>Dien Curtis and Garreth Williams</b></p></div><div class=\"module team-module\"><a href=\"http://etymo.io/\"><img class=\"pure-img\" src=\"assets/images/teams/etymo.jpg\"></a><p>An AI-based discovery engine for AI research</p><p><b>Weijian Zhang, Wiktor Komorowski and Jonathan Deakin</b></p></div></div><div class=\"pure-u-1 pure-u-md-1-2\"><div class=\"module team-module\"><a href=\"http://shutup.dance\"><img class=\"pure-img\" src=\"assets/images/teams/sud.jpg\"></a><p>Affordable Ballroom and Latin Dancewear platform</p><p><b>Maggie Chen, Daniel Ma and Lavika Sachdeva</b></p></div><div class=\"module team-module\"><a href=\"http://homefans.net\"><img class=\"pure-img\" src=\"assets/images/teams/homefans.jpg\"></a><p>Allowing you experience a football match like a local</p><p><b>Daniel Velasquez and Luke Verbeek</b></p></div><div class=\"module team-module\"><a href=\"http://www.shirthappens.eu\"><img class=\"pure-img\" src=\"assets/images/teams/shirt-happens.jpg\"></a><p>T-shirt brand with a twist</p><p><b>Kiran Arokiasamy</b></p></div></div></div></div></div>");
$templateCache.put("app/components/modals/application.html","<div class=\"standard-modal\"><div class=\"modal-content\"><h2>APPLY ONLINE</h2><p>Applications have closed for the 2015/16 batch. We will reopen applications later this year for our next cohort.</p><p>Submissions will only be disclosed to the ME Advisory Board. No third party will have access to your application.</p><form class=\"form pure-form pure-form-stacked\" action=\"http://sendy.manchesterentrepreneurs.co.uk/subscribe\" method=\"POST\" accept-charset=\"utf-8\"><fieldset><label for=\"name\">Name</label> <input type=\"text\" placeholder=\"Name\" name=\"name\" id=\"name\" required=\"\"></fieldset><fieldset><label for=\"email\">Email</label> <input type=\"email\" placeholder=\"Email\" name=\"email\" id=\"email\" required=\"\"></fieldset><fieldset><label for=\"Degree\">Degree</label> <input type=\"text\" placeholder=\"Your degree\" name=\"Degree\" id=\"Degree\" required=\"\"></fieldset><fieldset><label for=\"Year\">Current year</label><select name=\"Year\" id=\"Year\" required=\"\"><option>First</option><option>Second</option><option>Third</option><option>Fourth</option><option>Fifth</option></select></fieldset><fieldset><label for=\"Q1\">Tell us a little about yourself and any team members.</label> <textarea placeholder=\"Max 150 words.\" name=\"Q1\" id=\"Q1\" rows=\"10\" required=\"\"></textarea></fieldset><fieldset><label for=\"Q2\">What problem is your business trying to solve?</label> <textarea placeholder=\"Max 150 words.\" name=\"Q2\" id=\"Q2\" rows=\"10\" required=\"\"></textarea></fieldset><fieldset><label for=\"Q3\">If your business didn\'t exist, how would people cope (i.e. what is the current alternative)?</label> <textarea placeholder=\"Max 150 words.\" name=\"Q3\" id=\"Q3\" rows=\"10\" required=\"\"></textarea></fieldset><fieldset><label for=\"Q4\">What advantage do you have, if any, over someone else trying to start your business?</label> <textarea placeholder=\"Max 150 words.\" name=\"Q4\" id=\"Q4\" rows=\"10\" required=\"\"></textarea></fieldset><fieldset><label for=\"Q5\">What is the key challenge you face in starting the business?</label> <textarea placeholder=\"Max 150 words.\" name=\"Q5\" id=\"Q5\" rows=\"10\" required=\"\"></textarea></fieldset><fieldset><label for=\"Q6\">How do you know there is demand for the business (i.e. your market research)?</label> <textarea placeholder=\"Max 150 words.\" name=\"Q6\" id=\"Q6\" rows=\"10\" required=\"\"></textarea></fieldset><fieldset><label for=\"Q7\">How will having Manchester Entrepreneurs as an asset specifically help your business?</label> <textarea placeholder=\"Max 150 words.\" name=\"Q7\" id=\"Q7\" rows=\"10\" required=\"\"></textarea></fieldset><fieldset><label for=\"Q8\">We can provide £2000 in grant funding to help you get started, is this going to be enough?</label> <textarea placeholder=\"Max 150 words.\" name=\"Q8\" id=\"Q8\" rows=\"10\" required=\"\"></textarea></fieldset><fieldset><label for=\"Q9\">Where do you see this business in five years time? How is your business scalable?</label> <textarea placeholder=\"Max 150 words.\" name=\"Q9\" id=\"Q9\" rows=\"10\" required=\"\"></textarea></fieldset><input type=\"hidden\" name=\"list\" value=\"1p\"><div class=\"text-right\"><button type=\"submit\" class=\"pure-button button\" disabled=\"\">Submit application</button></div></form><a class=\"close\" href=\"\" ng-click=\"closeModal()\"><i class=\"fa fa-times-circle\"></i></a></div><div class=\"modal-fade\"></div></div>");}]);