import {
	Code,
	Heading,
	ListItem,
	OrderedList,
	Text,
	UnorderedList,
} from '@chakra-ui/react';

export const GITHUB_URL = 'https://github.com/jacksonet00';
export const LINKEDIN_URL = 'https://linkedin.com/in/jacksonet00';
export const SOURCE_CODE_URL =
	'https://github.com/jacksonet00/jacksontaylor.info';
export const CHAKRA_UI_MARKDOWN_OPTIONS = {
	overrides: {
		h1: {
			component: Heading,
			props: {
				fontSize: '4xl',
				paddingBottom: 6,
			},
		},
		h2: {
			component: Heading,
			props: {
				fontSize: '3xl',
				paddingBottom: 6,
			},
		},
		h3: {
			component: Heading,
			props: {
				fontSize: '2xl',
				paddingBottom: 6,
			},
		},
		h4: {
			component: Heading,
			props: {
				fontSize: 'xl',
				paddingBottom: 6,
			},
		},
		h5: {
			component: Heading,
			props: {
				fontSize: 'lg',
				paddingBottom: 6,
			},
		},
		h6: {
			component: Heading,
			props: {
				fontSize: 'md',
				paddingBottom: 6,
			},
		},
		p: {
			component: Text,
			props: {
				fontSize: 'lg',
				paddingBottom: 6,
			},
		},
		ul: {
			component: UnorderedList,
			props: {
				fontSize: 'lg',
				paddingBottom: 6,
			},
		},
		ol: {
			component: OrderedList,
			props: {
				fontSize: 'lg',
				paddingBottom: 6,
			},
		},
		li: {
			component: ListItem,
			props: {
				fontSize: 'lg',
				paddingBottom: 6,
			},
		},
		code: {
			component: Code,
			props: {
				fontSize: 'md',
			},
		},
	},
};
