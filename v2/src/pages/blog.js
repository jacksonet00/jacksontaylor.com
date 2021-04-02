import { Heading, Link, ListItem, UnorderedList } from '@chakra-ui/layout';
import fs from 'fs';
import matter from 'gray-matter';
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
						<Link href={`/blog/${post.filename}`}>
							{post.title}
						</Link>
					</ListItem>
				))}
			</UnorderedList>
		</UIWrapper>
	);
}

export const getStaticProps = async () => {
	const files = fs.readdirSync('src/posts');
	const posts = [];

	files.forEach((filename) => {
		const file = fs.readFileSync(`src/posts/${filename}`).toString();
		const parsedFile = matter(file);
		posts.push({
			title: parsedFile.data.title,
			filename: filename.replace('.md', ''),
		});
	});

	return {
		props: {
			posts,
		},
	};
};
