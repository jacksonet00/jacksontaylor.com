import {
	Code,
	Heading,
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
				paddingBottom: 5,
			},
		},
		h2: {
			component: Heading,
			props: {
				fontSize: '3xl',
				paddingBottom: 4,
			},
		},
		h3: {
			component: Heading,
			props: {
				fontSize: '2xl',
				paddingBottom: 3,
			},
		},
		h4: {
			component: Heading,
			props: {
				fontSize: 'xl',
				paddingBottom: 2,
			},
		},
		h5: {
			component: Heading,
			props: {
				fontSize: 'lg',
				paddingBottom: 2,
			},
		},
		h6: {
			component: Heading,
			props: {
				fontSize: 'md',
				paddingBottom: 2,
			},
		},
		p: {
			component: Text,
			props: {
				fontSize: 'md',
				paddingBottom: 2,
			},
		},
		ul: {
			component: UnorderedList,
			props: {
				fontSize: 'lg',
				paddingBottom: 2,
			},
		},
		ol: {
			component: OrderedList,
			props: {
				fontSize: 'lg',
				paddingBottom: 2,
			},
		},
		code: {
			component: Code,
			props: {
				fontSize: {
					base: 'sm',
					sm: 'md',
					md: 'lg',
				},
				paddingBottom: 2,
			},
		},
	},
};
