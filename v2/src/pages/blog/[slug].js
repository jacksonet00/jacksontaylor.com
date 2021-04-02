import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';
import Markdown from 'markdown-to-jsx';
import { Box } from '@chakra-ui/layout';
import { MenuBar } from '../../components/MenuBar';
import { Footer } from '../../components/Footer';
import { CHAKRA_UI_MARKDOWN_OPTIONS } from '../../constants';

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
				minHeight="100vh"
				overflowX="hidden"
				paddingY={{ base: 36, lg: 24 }}
				paddingX={{ lg: 36, base: '10%' }}
			>
				<Markdown options={CHAKRA_UI_MARKDOWN_OPTIONS}>
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
