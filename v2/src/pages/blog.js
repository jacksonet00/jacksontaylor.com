import { Heading, Link, ListItem, UnorderedList } from '@chakra-ui/layout';
import fs from 'fs';
import { UIWrapper } from '../components/wrappers/UIWrapper';

export default function Blog({ posts }) {
	return (
		<UIWrapper>
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
		</UIWrapper>
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
