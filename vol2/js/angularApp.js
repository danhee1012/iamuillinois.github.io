var app = angular.module('IAM', ['ui.router']);

app.config([
	'$stateProvider',
	'$urlRouterProvider',
	function ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('home', {
			url: '/home',
			templateUrl: '/home.html',
			controller: 'MainCtrl'
		})
			.state('about', {
			url: '/about',
			templateUrl: '/about.html',
			controller: 'MainCtrl'
		})
			.state('careers', {
			url: '/careers',
			templateUrl: '/careers.html',
			controller: 'MainCtrl'
		})
			.state('clients', {
			url: '/clients',
			templateUrl: '/clients.html',
			controller: 'MainCtrl'
		})
			.state('contact', {
			url: '/contact',
			templateUrl: '/contact.html',
			controller: 'MainCtrl'
		})
			.state('team', {
			url: '/team',
			templateUrl: '/team.html',
			controller: 'MainCtrl'
		});
		$urlRouterProvider.otherwise('home');
	}]);

app.controller('MainCtrl', [
	'$scope',
	function ($scope) {
		$scope.$on('$viewContentLoaded', function () {
			if($(window).width() <= 850) {
				console.log($(window).width())
				if (window.location.hash.substring(2) === "home") {
					$('#logo').css("display", "block");
					$('#logo').width("50%");
				}
				else {
					$('#logo').css("display", "none");
				}
			} else {
				if (window.location.hash.substring(2) === "home") {
					$('#logo').width("30%");
				} else {
					$('#logo').width("10%");
				}
			}

		});

		$scope.aboutus = [
			{
				id: 'aboutiam',
				name: 'YOU PRESENT, WE SOLVE.',
				content: [
					'International Advertising Mob consists of some of the brightest and most innovative minds on campus at the University of Illinois at Urbana-Champaign. IAM offers free advertising and marketing consulting to our local international stores, utilizing our knowledge and imagination to the full extent.',
					'We take a multidisciplinary approach to working on our clients\' business with our staff members coming from various scholarly backgrounds ranging from web designers to writers, psychologists, artists, mathematicians, and engineers. In our interactive environment, we work side by side, acquiring practical expertise in the field as projects continue. ',
					'You present your business, we present solutions—solutions to better the world. IAM not only provides solutions for your business but also helps out the community. Currently a World Vision child sponsor, IAM dedicates all profits from fund raisers and projects to children in need. At IAM, we present solutions to the world by participating in various charitable foundations.'
				]
			},
			{
				id: 'intro',
				name: 'Introduction',
				content: [
					'I am Ju Young Choi, founder and president of International Advertising Mob.',
					'It\' not about my intelligence,\nIt\'s not about my advertising background, and\n It\'s not about showcasing my pride.',
					'These are what I really stand for- values that define who IAM and what IAM.',
					'I influence.\nI provide solutions and contents that can lead the world.',
					'I contribute.\nI don’t stop at acquiring academic knowledge and contribute to the world.',
					'I don’t stagnate.\nI continue to face my problems and fix them through communicating with experts.',
					'I challenge.\nI challenge not for personal benefits, but for those in need.\nLast but not least, I challenge with those who share the warmth.',
					'IAM happy everyday.'
				]
			},
		];


		$scope.teams = [
			{
				id: 'ae',
				name: 'ACCOUNT EXECUTIVE',
				image: 'img/team_photo/ae.jpg'
			},
			{
				id: 'business',
				name: 'BUSINESS',
				image: 'img/team_photo/business.jpg'			
			},
			{
				id: 'creative',
				name: 'CREATIVE',
				image: 'img/team_photo/creative-graphic-designer.jpg'			
			},
			{
				id: 'internal',
				name: 'INTERNAL',
				image: 'img/team_photo/internal.jpg'		
			},
			{
				id: 'media',
				name: 'MEDIA',
				image: 'img/team_photo/media.jpg'		
			},
			{
				id: 'production',
				name: 'PRODUCTION',
				image: 'img/team_photo/creative-music.jpg'
			},
			{
				id: 'tech',
				name: 'TECH',
				image: 'img/team_photo/creative-developer.jpg'			
			},
			{
				id: 'china',
				name: 'CHINA',
				image: 'img/team_photo/china.jpg'		
			}
		];

		$scope.navs = [
			{
				id: "home",
				image: "img/nav/icon_iam.png",
				content: "About Us"
			},
			{
				id: "about",
				image: "img/nav/icon_about.png",
				content: "About Us"
			},
			{
				id: "team",
				image: "img/nav/icon_team.png",
				content: "The Team"
			},
			{
				id: "careers",
				image: "img/nav/icon_careers.png",
				content: "Careers"
			},
			{
				id: "clients",
				image: "img/nav/icon_clients.png",
				content: "Clients"
			},
			{
				id: "contact",
				image: "img/nav/icon_contact.png",
				content: "Contact"
			}
		];

		$scope.careers = [
			{
				id: 'ae',
				team_name: 'ACCOUNT EXECUTIVE',
				contents: [
					"Account Executive Team act as a link between client and the team. AE Team must understand the client's needs/objectives and liaise with the team throughout the projects.",
					"Team director and assistant-directors are responsible for reporting the project progress to both external and internal departments.",
					"Team members have to be able to communicate in daily basis, conduct extensive research and analyze the data according to the client\'s request."
				],
				positions: [
					{
						position_id: "ae_ae",
						position_name: "Account Executive",
						description: [
							"Understand clients\' business goals and assist to reach the goals",
							"Report progress and delays to both client and the president",
							"Watch for signs of trouble and make sure both client and the president are fully aware of the project status"
						],
						pre_req: [
							"Ability to set and handle multiple proximate goals",
							"Effective business communication skills between client and IAM",
							"Resilience, being able to deal with problems and constructive criticism"
						]
					},
					{
						position_id: "ae_ap",
						position_name: "Account Planner",
						description: [
							"Commission, conduct and analyze qualitative and quantitative research",
							"Analyze data, trends and reports relevant to the client’s business",
							"Monitoring the effectiveness of the campaign from customers' perspective"
						],
						pre_req: [
							"Highly sensitive in cultural/social trends",
							"Excellent research and analytical thinking skills",
							"Being able to evaluate audience response and understand sales figures from their perspective"
						]
					},
					{
						position_id: "ae_nb",
						position_name: "New Business",
						description: [
							"Identify and cultivate for new business opportunities",
							"Develops negotiating strategies and positions by studying company strategies and operations",
							"Analyze and examine the value of the business before becoming a client"
						],
						pre_req: [
							"Strong presentation and verbal communication skills",
							"Possessing confidence and good interpersonal skills",
							"Ability to work within certain constraints"
						]
					}
				]
			},
			{
				id: "business",
				team_name: "BUSINESS",
				contents: [
					"Business Team should come up with the right plans and events, according to the client’s needs.",
					"After having contacted the organization(s) or the client(s), Business Team plans out and execute effective business plans.",
					"In addition, Business Team must take actions in order to advertise client’s business or to maximize revenue to raise public awareness of the clients."
				],
				positions: [
					{
						position_id: "b_d",
						position_name: "Business Developer",
						description: [
							"Negotiating the terms of partnership deals",
							"Gather other company’s interest in a partnership from the beginning drafting and negotiating its terms",
							"Work with other departments of the company, such as product management, marketing, and operations to ensure successful meeting with the partner(s)"
						],
						pre_req: [
							"Experience dealing with local businesses",
							"Excellent communication skills when working with the client(s) and other department(s)",
							"Creative business ideas and ability to present the ideas",
							"Excellent Excel, PowerPoint, and Photoshop skills"
						]
					},
					{
						position_id: "b_s",
						position_name: "Business Strategist",
						description: [
							"Assist a company’s senior leadership and improve internal processes in operating activities",
							"Review economic trends and demand levels in order to find out potential sales of a product",
							"Gather information on rivals’ products, collect demographic data on potential customers, and measure the effectiveness marketing strategies"
						],
						pre_req: [
							"Able to use analytical, scientific, and project management software",
							"Clear communication skills and effective decision making skills",
							"Experience dealing with varieties of business management roles"

						]
					},
					{
						position_id: "b_p",
						position_name: "Business Planner",
						description: [
							"Collect and manage new business plans and business opportunities",
							"Manage business plans with time, place, and occasion",
							"Supervise the procedures that protect companies or clients from unexpected occurrence"
						],
						pre_req: [
							"Strong time management skills",
							"Excellent Microsoft Word skills for managing business plans",
							"Being able to handle unexpected occurrence"
						]
					}
				]
			},
			{
				id:"creative",
				team_name: "CREATIVE",
				contents: [
					"Creative Team has primary responsibility to create a desire among the public for products or services.",
					"The team members will have to create the ad copy and artwork for various media platforms under the Director and Assistance Director’s supervision. ",
					"Team Director and Assistance Director are responsible for presenting proofreading to produce accurate and high quality work to the clients or to the account mangers."
				],
				positions: [
					{
						position_id: "c_gd",
						position_name: "Graphic Designer",
						description: [
							"Build files for both print a digital using software packages",
							"Interpret the client’s business needs and develop a concept to suit their purpose",
							"Employ color, type, illustration, photography, animation and various print and layout techniques when designing projects"
						],
						pre_req: [
							"Up to date with industry leading software and technologies (i.e. Illustrator, Photoshop, and InDesign)",
							"Excellent typography and layout skills is a must",
							"Able to remain flexible through multiple revisions"
						]
					},
					{
						position_id: "c_cw",
						position_name: "Copywriter",
						description: [
							"Write well with proper tone, feeling, sentence structure and emotion",
							"Revise or redevelop projects in response to feedback from the Director",
							"Create original work and develop ideas around chosen concept"

						],
						pre_req: [
							"Understand the different language styles that appeal to various target markets ",
							"Have an interest in commerce, popular culture, and new advertising trends",
							"Excellent interpersonal and communication skills"
						]
					}
				]
			},
			{
				id:"internal",
				team_name: "INTERNAL MANAGEMENT",
				contents: [
					"Internal Management Team is responsible for keeping staffs informed about all issue on the projects, and mediates opinions from different departments.",
					"Internal Management Team has to have knowledge the needs of all other departments of IAM and objectives of projects that IAM works on.",
					"Internal Management Team supervises overall internal data in order to foster a good work environment and to help staff members cooperate efficiently."
				],
				positions: [
					{
						position_id: "i_ts",
						position_name: "Treasurer",
						description: [
							"Manage account book and school account precisely",
							"Audit and examine financial records and transactions",
							"Collect and organize all financial records including receipt, and report them to the President of IAM"
						],
						pre_req: [
							"Ability to analyze and handle multiple complex data",
							"Have a financial qualification and be able to do precise calculation",
							"Experience in dealing with large sums of money and budgets"
						]
					},
					{
						position_id: "i_hrs",
						position_name: "Human Resource Specialist",
						description: [
							"Investigate and mediate allegations of harassment and other raised issues, and evaluate and develop organizational policies to foster a good work environment",
							"Create relationships with various companies or organizations to create opportunities for IAM",
							"Contact the people to network with Alumni, to liaise for guest speakers, and to announce plans to all staff members that are on progress"
						],
						pre_req: [
							"Interpersonal skills to quickly develop good working relationships with others, resolve disputes, and understand the abilities and ambitions of other people",
							"Integrity, self-control, and discretion for handling sensitive personnel matters",
							"Oral and written communication skills to convey information and decisions unambiguously"
						]
					},
					{
						position_id: "i_pm",
						position_name: "Project Manager",
						description: [
							"Make sure all members are fully aware of the project status and encourage them to work efficiently",
							"Be able to achieve operational objectives by contributing information and recommendations to strategic plans and reviews",
							"Enhance work performance by mediating perspectives from each department"
						],
						pre_req: [
							"Excellent analytic skills and time managing skills",
							"Exercise independent and fair consensus building skills",
							"Exploring opportunities to add value to job accomplishments"
						]
					}
				]
			},
			{
				id:"media",
				team_name: "MEDIA",
				contents: [
					"Media Team is responsible for exposing advertisement to the audience via social media. ",
					"Team is responsible for weekly communications, event arrangements, and etc. ",
					"Thus, the team members expected be be fluent in popular social media, tools and applications."
				],
				positions: [
					{
						position_id: "m_mp",
						position_name: "Media Planner",
						description: [
							"Implement effective communication solutions to clients",
							"Provide attractive arrangement of brand / product advertisement",
							"Maintain records of campaigns for evaluating purposes"
						],
						pre_req: [
							"Excellent organization skills and negotiation skills",
							"Ability to think creatively with factual analysis to develop innovative strategies",
							"Technical knowledge of media and communication platforms to identify the client's brand"

						]
					},
					{
						position_id: "m_st",
						position_name: "Median Strategist",
						description: [
							"Develop campaigns for the clients to increase brand awareness",
							"Design mechanisms for achieving the requested objectives",
							"Innovate new marketing professionals"
						],
						pre_req: [
							"Strong practical skills to organize strategies for diversity of projects",
							"Excellent presentation and persuasive skills",
							"Excellent skills in outlining and brainstorming"
						]
					},
					{
						position_id: "m_cp",
						position_name: "Content Producer",
						description: [
							"Publish news and advertising contents on digital basis platforms ",
							"Create contents and make innovative ideas from updated news",
							"Provide information regarding project development"
						],
						pre_req: [
							"Strong written and verbal communication skills",
							"Experience using website management tools for publishing web content",
							"Ability to manage all sorts of creative ideas and combine it into a satisfying output"
						]
					}
				]
			},
			{
				id:"production",
				team_name: "PRODUCTION",
				contents: [
					"Production Team focuses on raising awareness of IAM as well as the brand identity. ",
					"The team always look for new ways to implement ideas using various methods and techniques. ",
					"The team members have to be able to come up with advertising ideas and bring those ideas into being.",
					"Also, create a desire among the public for products or services and work together to develop conceptual campaigns designed to stand apart from competitors."
				],
				positions: [
					{
						position_id: "p_vp",
						position_name: "Video Producer",
						description: [
							"Create, produce or edit videos for advertisements using software",
							"Experiment with styles and techniques using design elements",
							"Oversee the quality and progress of audio with the Music Producers"

						],
						pre_req: [
							"Previous experience with film editing",
							"Ability to meet tight deadlines",
							"Must be able to use video editing programs preferably: Adobe Premiere, Sony Vegas, Final Cut (Adobe After Effect is bonus)"
						]
					},
					{
						position_id: "p_mp",
						position_name: "Music Producer",
						description: [
							"Produce, select or edit music sources for video contents",
							"Manage every music sources",
							"Assist the Video Producer’s overall content flow with the music choice and vise-versa"
						],
						pre_req: [
							"Produce music using software or instrument",
							"Range over an extensive music genre",
							"Must demonstrate an understanding of music production in ads"
						]
					},
					{
						position_id: "p_pg",
						position_name: "Photographer",
						description: [
							"Take and select photographs / videos for marketing purposes",
							"Use an extensive range of technical equipment (i.e. cameras, lenses, lighting, and photo editing software)",
							"Communicate effectively with the Video Producers for directions of shots and camera effects when filming."
						],
						pre_req: [
							"Must use interchangeable lens camera, including mirror-less cameras",
							"Previous experience with Adobe Photoshop or Lightroom",
							"Knowledge of framing, color, and light to create a visually pleasing photograph"
						]
					}
				]
			},
			{
				id:"tech",
				team_name: "TECH",
				contents: [
					"Tech Team provides technological supports for other teams and clients.",
					"Tech Team must produce web and / or mobile application according to other team and client's needs / objectives in a timely manner.",
					"Team Director and Assistant Director are responsible for reporting the project progress to both external and internal departments.",
					"The team members must have a proven ability to help and/or teach other team members with various backgrounds to learn about their specialized field / programming language in the team."
				],
				positions: [
					{
						position_id: "t_sas",
						position_name: "SEO Analyst/Specialist",
						description: [
							"Provide SEO technology to client's website to be ranked in top parts of search engine results page for certain keyword queries",
							"Analyze and report traffic changes for the website before and after the SEO has been applied",
							"Report progress and delays to the project Team Director"
						],
						pre_req: [
							"Knowledge of SEO Technical aspects – HTML, URL, keyword analysis, search engine crawlers, website management, Java, CSS, iframes, etc.",
							"Understand digital marketing, the modern digital capabilities / technology stack, web content development processes",
							"Prior knowledge for either Google Analytics or Google AdWords is a plus"
						]
					},
					{
						position_id: "t_id",
						position_name: "iOS Developer",
						description: [
							"Develop frontend and backend of iOS application for the clients and IAM",
							"Find errors and fix them within frontend and backend of iOS application",
							"Report progress and delays to the project Team Director"
						],
						pre_req: [
							"1+ years of software development experience",
							"6+ months of iOS development with XCode",
							"Programming language: Objective-C, Cocoa Touch, or Swift"
						]
					},
					{
						position_id: "t_ad",
						position_name: "Android Developer",
						description: [
							"Develop frontend and backend of Android application for the clients and IAM",
							"Find errors and fix them within frontend and backend of Android application",
							"Report progress and delays to the project Team Director"
						],
						pre_req: [
							"1+ years of software development experience",
							"6+ months of Android development with Android SDK/NDK and Android Studio setting",
							"Programming languages: Java for Android"
						]
					},
					{
						position_id: "t_wd",
						position_name: "Web Developer",
						description: [
							"Develop frontend and/or backend of web application and/or website for the clients and/or IAM",
							"Find errors and fix it within frontend and backend of web application and/or website",
							"Report progress and delays to the project Team Director"
						],
						pre_req: [
							"6+ months of web development experience ",
							"Frontend: HTML, CSS, JavaScript, and jQuery",
							"Backend: LAMP stack, MEAN stack, Python Flask, Python Django, or Ruby on Rails "
						]
					},
					{
						position_id: "t_uxd",
						position_name: "User Experience Developer",
						description: [
							"Design a prototype and/or main version of web / mobile application",
							"Provide both user- and mobile-friendly design meeting other teams and client's expectation",
							"May join the meeting with clients to understand the specific design requirements from the clients"
						],
						pre_req: [
							"2+ years of graphic designing experience ",
							"Skilled with Photoshop, Illustrator, InDesign, Fireworks and associated design tools",
							"Programming language: HTML, CSS, JavaScript, jQuery, Objective-C (iOS), C++, or Java for Android is a plus"
						]
					}

				]
			}
		];

	}]);