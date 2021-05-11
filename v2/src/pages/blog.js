import { Heading, Link, ListItem, UnorderedList } from '@chakra-ui/layout';
import fs from 'fs';
import matter from 'gray-matter';
import { useRouter } from 'next/router';
import { UIWrapper } from '../components/wrappers/UIWrapper';

export default function Blog({ posts }) {
	const router = useRouter();

	return (
		<UIWrapper>
			<Heading fontSize="4xl" paddingBottom={6}>
				Blog
			</Heading>
			<UnorderedList>
				{posts
					.sort((a, b) => new Date(b.dateCreated) - new Date(a.dateCreated))
					.map((post, i) => (
						<ListItem key={i}>
							<Link href={`/${post.filename}`}>{post.title}</Link>
						</ListItem>
					))}
			</UnorderedList>
		</UIWrapper>
	);
}

export const getStaticProps = async () => {
	const files = fs.readdirSync('src/blogPosts');
	const posts = [];

	files.forEach((filename) => {
		const file = fs.readFileSync(`src/blogPosts/${filename}`).toString();
		const parsedFile = matter(file);
		posts.push({
			title: parsedFile.data.title,
			dateCreated: parsedFile.data.dateCreated,
			filename: filename.replace('.md', ''),
		});
	});

	return {
		props: {
			posts,
		},
	};
};
