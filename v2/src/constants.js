import {
	Heading,
	ListItem,
	OrderedList,
	Text,
	UnorderedList,
	Image,
	Link,
} from '@chakra-ui/react';
import { MyCodeBlock } from './components/MyCodeBlock';

export const GITHUB_URL = 'https://github.com/jacksonet00';
export const LINKEDIN_URL = 'https://linkedin.com/in/jacksonet00';
export const SOURCE_CODE_URL =
	'https://github.com/jacksonet00/jacksontaylor.info';
export const HOME_PAGE_DATA = {
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
			link: 'https://github.com/snl-dev-team/snl-inventory-app',
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

export const CHAKRA_UI_MARKDOWN_OPTIONS = {
	wrapper: 'article',
	overrides: {
		h1: {
			component: Heading,
			props: {
				fontSize: '4xl',
				marginBottom: 6,
			},
		},
		h2: {
			component: Heading,
			props: {
				fontSize: '3xl',
				marginBottom: 6,
			},
		},
		h3: {
			component: Heading,
			props: {
				fontSize: '2xl',
				marginBottom: 6,
			},
		},
		h4: {
			component: Heading,
			props: {
				fontSize: 'xl',
				marginBottom: 6,
			},
		},
		h5: {
			component: Heading,
			props: {
				fontSize: 'lg',
				marginBottom: 6,
			},
		},
		h6: {
			component: Heading,
			props: {
				fontSize: 'md',
				marginBottom: 6,
			},
		},
		p: {
			component: Text,
			props: {
				fontSize: 'lg',
				marginBottom: 6,
			},
		},
		ul: {
			component: UnorderedList,
			props: {
				fontSize: 'lg',
				marginBottom: 6,
			},
		},
		ol: {
			component: OrderedList,
			props: {
				fontSize: 'lg',
				marginBottom: 6,
			},
		},
		li: {
			component: ListItem,
			props: {
				fontSize: 'lg',
			},
		},
		code: {
			component: MyCodeBlock,
			props: {
				marginBottom: 6,
			},
		},
		img: {
			component: Image,
			props: {
				marginBottom: 6,
				marginTop: 6,
			},
		},
		a: {
			component: Link,
			props: {
				marginBottom: 6,
				textDecoration: 'underline',
				isExternal: true,
			},
		},
	},
};
