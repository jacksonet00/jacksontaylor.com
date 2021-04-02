import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';
import Markdown from 'markdown-to-jsx';
import { MenuBar } from '../../components/MenuBar';
import { Footer } from '../../components/Footer';
import { CHAKRA_UI_MARKDOWN_OPTIONS } from '../../constants';
import { NavFooterWrapper } from '../../components/wrappers/NavFooterWrapper';
import { Box, Flex } from '@chakra-ui/react';

const Post = ({ contents, data }) => {
	return (
		<>
			<Head>
				<title>{data.title}</title>
				<meta
					title="description"
					content={data.description || ''}
				/>
			</Head>
			<MenuBar />
			<NavFooterWrapper>
				<Flex
					align={{ base: '', lg: 'center' }}
					justify={{ base: '', lg: 'center' }}
				>
					<Box w={{ base: '80vw', lg: 'xl' }}>
						<Markdown options={CHAKRA_UI_MARKDOWN_OPTIONS}>
							{contents}
						</Markdown>
					</Box>
				</Flex>
			</NavFooterWrapper>
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
