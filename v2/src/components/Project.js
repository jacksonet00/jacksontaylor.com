import {
	Box,
	VStack,
	Heading,
	Text,
	HStack,
	Tag,
	TagLabel,
	Link,
	useMediaQuery,
	Wrap,
} from '@chakra-ui/react';

export const Project = ({ title, description, tags, link }) => {
	const [isGreaterThan625Width] = useMediaQuery('(min-width: 625px)');

	return (
		<Box justifyContent="left" w={isGreaterThan625Width ? 'xl' : '80vw'}>
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
