import {
	Code,
	Heading,
	ListItem,
	OrderedList,
	Text,
	UnorderedList,
	Image,
	Link,
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
			component: Code,
			props: {
				fontSize: { base: 'xs', sm: 'sm', md: 'md' },
				padding: 1,
				borderRadius: 2,
				w: { base: '80vw', lg: 'xl' },
				marginBottom: 6,
				colorScheme: 'facebook',
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
