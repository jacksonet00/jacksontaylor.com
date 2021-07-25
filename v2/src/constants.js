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
			`👋🏼 I'm a third year student at the University of Florida 🐊 studying Computer Science with a minor in Math. During my first two years at UF, I've had the opportunity to participate in hackathons and build personal projects, serve as a Teaching Assistant, and intern full time as a Software Engineer.`,
			`I'm passionate about technology and excited by any opportunity to direct this passion towards making a positive impact in peoples' lives.`,
		],
	},
	projects: [
		{
			title: 'BRCA Screener',
			link: 'https://github.com/yvngaayush/brcascreener',
			description: 'A cross-platform cancer gene screening app created in partnership with medical researchers from Florida International University. Currently in use by a study group of 800+ doctors to evaluate the effectiveness of the technology.',
			tags: ['Flutter', 'Firebase', 'Google Cloud Platform']
		},
		{
			title: 'Surge Inventory',
			link: 'https://github.com/snl-dev-team/snl-inventory-app',
			description:
				'An inventory management tool with automated reporting and support for multi-level relations between orders, products, and materials.',
			tags: ['Flask', 'GraphQL', 'AWS Serverless', 'React'],
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
			date: 'June 2021 - Present',
			bullets: [
				`Created an internal tool used daily by 450 customer support agents with a REST API accessed by 150 developers.`,
				`Improved user experience by rewriting the merchant service application using a modern tech stack, enabling automatic authentication and faster navigation.`,
			],
		},
		{
			company: 'University of Central Florida',
			role: 'Teaching Assistant',
			date: 'July 2020 - June 2021',
			bullets: [
				`Led instructional sessions on data pipelining, API development, and database systems.`,
				`Aided instructor by hosting office hours, answering questions, and grading projects.`,
			],
		},
		{
			company: 'Sawgrass Nutra Labs',
			role: 'Outgoing Shipping Lead',
			date: 'May 2020 - August 2020',
			bullets: [
				`Improved inventory management workflow by developing scalable, user-friendly software which automated reporting and reduced the need for manual data entry.`,
				`Ensured fulfillment for 9,000+ units/week of product by coordinating with the operations team and planning the packaging schedule. `,
			],
		},
	],
	skills: [
		{
			type: 'Languages',
			items: ['Python', 'Typescript', 'Javascript', 'SQL', 'Java'],
		},
		{
			type: 'Libraries / Frameworks',
			items: ['React', 'React-Native', 'Flutter', 'Flask', 'Express'],
		},
		{
			type: 'Technologies',
			items: ['Node', 'GraphQL', 'Docker', 'Cloud/Serverless'],
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
