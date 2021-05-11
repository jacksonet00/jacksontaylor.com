export default {
	greeting: {
		headline: 'Namasté',
		subText: `I'm Jackson, a software developer.`,
	},
	aboutMe: {
		paragraphs: [
			`I’m a computer science student studying at the
						University of Florida who loves building freelance
						applications for clients and personal projects.
						Currently, I'm interested in the impact of
						software in sectors slow to adopt new
						technologies.`,
			`When I’m not studying or writing code, I enjoy
						learning about technology in the developing world
						🌍, brewing chemex coffee ☕️, and practicing
						meditation 🧘.`,
		],
	},
	projects: [
		{
			title: 'Surge Inventory',
			link: null,
			description:
				'Manufacturing inventory software with auto report generation and multi-level relations between orders, products, and materials.',
			tags: ['Python', 'GraphQL 💜', 'AWS Serverless', 'React'],
		},
		{
			title: 'Reply Chef',
			link: 'https://github.com/jacksonet00/reply-chef',
			description:
				'An AI-driven creator engagement platform. Winner of the Accenture Prize @ Swamphacks 2021.',
			tags: ['Python', 'Google Cloud NLP', 'React'],
		},
		{
			title: 'TrendViz',
			link: 'https://github.com/jacksonet00/trendviz',
			description:
				'A data visualization tool for Twitter trends in the United States.',
			tags: ['Javascript', 'Node', 'React'],
		},
		{
			title: 'KNN from CSV',
			link: 'https://github.com/jacksonet00/KNN-from-CSV',
			description:
				'A command line tool for building classification models from spreadsheets.',
			tags: ['Python', 'Scikit Learn', 'Pandas'],
		},
	],
	experiences: [
		{
			company: 'JP Morgan Chase',
			role: 'Software Engineer Intern',
			date: 'Summer 2021',
			bullets: [
				`Joining the Tampa Office in June as a software engineer.`,
				`So excited for my first day!`,
			],
		},
		{
			company: 'University of Central Florida',
			role: 'Teaching Assistant',
			date: 'July 2020 - Present',
			bullets: [
				`Collaborated remotely with a team of instructors and teaching assistants via Slack and Zoom to effectively communicate concepts to students in an online environment.`,
				`Led sessions on data manipulation with Python, data storage in SQL, and many other key topics for data driven development.`,
			],
		},
		{
			company: 'Sawgrass Nutra Labs',
			role: 'Outgoing Shipping Lead',
			date: 'May 2020 - August 2020',
			bullets: [
				`Maintained a daily shipping schedule by coordinating with peers and delegating tasks.`,
				`Communicated with superiors while referencing internal data to plan for upcoming shipments.`,
				`Assisted in training new employees in the special services department.`,
			],
		},
	],
	skills: [
		{
			type: 'Languages',
			items: ['Python', 'Javascript', 'SQL'],
		},
		{
			type: 'Technologies',
			items: ['GraphQL', 'Node', 'Pandas'],
		},
		{
			type: 'Tools',
			items: ['AWS', 'GCP', 'GitHub'],
		},
	],
};
