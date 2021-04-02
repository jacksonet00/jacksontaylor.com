import { Box, Heading, Link, ListItem, UnorderedList } from '@chakra-ui/layout';
import fs from 'fs';
import { Footer } from '../components/Footer';
import { MenuBar } from '../components/MenuBar';

export default function Blog({ posts }) {
	return (
		<>
			<MenuBar />
			<Box
				minHeight="100vh"
				paddingY={24}
				paddingX={{ lg: 36, base: '10%' }}
			>
				<Heading fontSize="4xl" paddingBottom={6}>
					Blog
				</Heading>
				<UnorderedList>
					{posts.map((post, i) => (
						<ListItem key={i}>
							<Link href={`/blog/${post}`}>{post}</Link>
						</ListItem>
					))}
				</UnorderedList>
			</Box>
			<Footer />
		</>
	);
}

export const getStaticProps = async () => {
	const files = fs.readdirSync('src/posts');
	return {
		props: {
			posts: files.map((filename) => filename.replace('.md', '')),
		},
	};
};
