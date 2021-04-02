import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';
import Markdown from 'markdown-to-jsx';
import {
	Box,
	Code,
	Heading,
	OrderedList,
	Text,
	UnorderedList,
} from '@chakra-ui/layout';
import { MenuBar } from '../../components/MenuBar';
import { Footer } from '../../components/Footer';

const Post = ({ contents, data }) => {
	console.log(data);
	return (
		<>
			<Head>
				<title>{data.title}</title>
				<meta title="description" content={data.description} />
			</Head>
			<MenuBar />
			<Box
				w="100%"
				overflowX="hidden"
				paddingY={{ base: 36, lg: 24 }}
				paddingX={{ lg: 36, base: '10%' }}
			>
				<Markdown
					options={{
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
					}}
				>
					{contents}
				</Markdown>
			</Box>
			<Footer />
		</>
	);
};

export const getStaticPaths = async () => {
	const files = fs.readdirSync('src/posts');
	console.log('files: ', files);

	const paths = files.map((filename) => ({
		params: {
			slug: filename.replace('.md', ''),
		},
	}));
	console.log('paths: ', paths);

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async ({ params: { slug } }) => {
	const markdownWithMetadata = fs
		.readFileSync(path.join('src', 'posts', slug + '.md'))
		.toString();

	const parsedMarkdown = matter(markdownWithMetadata);
	// const htmlString = marked(parsedMarkdown.content);

	return {
		props: {
			contents: parsedMarkdown.content,
			data: parsedMarkdown.data,
		},
	};
};

export default Post;
