import {
	Box,
	VStack,
	Heading,
	Text,
	Tag,
	TagLabel,
	Link,
	Wrap,
} from '@chakra-ui/react';
import data from '../data/data';

export const Projects = () => {
	return (
		<VStack spacing={12} alignItems="start" justifyContent="left">
			{data.projects.map((project) => {
				return (
					<Project
						key={project.title}
						title={project.title}
						description={project.description}
						tags={project.tags}
						link={project.link}
					/>
				);
			})}
		</VStack>
	);
};

const Project = ({ title, description, tags, link }) => {
	return (
		<Box justifyContent="left" w={{ base: '80vw', lg: 'xl' }}>
			<VStack justifyContent="left" alignItems="start">
				{link ? (
					<Link href={link} isExternal>
						<Heading fontSize="medium">{title}</Heading>
					</Link>
				) : (
					<Heading fontSize="medium">{title}</Heading>
				)}
				<Text fontSize="medium">{description}</Text>
				<Wrap justifyContent="left" alignItems="start">
					{tags.map((tag) => {
						return (
							<Tag
								colorScheme="red"
								key={tag}
								size="lg"
								borderRadius="none"
							>
								<TagLabel>{tag}</TagLabel>
							</Tag>
						);
					})}
				</Wrap>
			</VStack>
		</Box>
	);
};
