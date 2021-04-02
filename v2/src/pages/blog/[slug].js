import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';
import Markdown from 'markdown-to-jsx';
import { MenuBar } from '../../components/MenuBar';
import { Footer } from '../../components/Footer';
import { CHAKRA_UI_MARKDOWN_OPTIONS } from '../../constants';
import { UIWrapper } from '../../components/wrappers/UIWrapper';
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
			<UIWrapper>
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
			</UIWrapper>
			<Footer />
		</>
	);
};

export const getStaticPaths = async () => {
	const files = fs.readdirSync('src/posts');
	const paths = files.map((filename) => ({
		params: {
			slug: filename.replace('.md', ''),
		},
	}));

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
