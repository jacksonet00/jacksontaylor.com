import {
	Box,
	VStack,
	Heading,
	Text,
	HStack,
	Tag,
	TagLabel,
} from '@chakra-ui/react';

export const Project = ({ title, description, tags }) => {
	return (
		<Box justifyContent="left" maxW="xl">
			<VStack justifyContent="left" alignItems="start">
				<Heading fontSize="medium">{title}</Heading>
				<Text fontSize="medium">{description}</Text>
				<HStack justifyContent="left" alignItems="start">
					{tags.map((tag) => {
						return (
							<Tag key={tag} size="lg" borderRadius="none">
								<TagLabel>{tag}</TagLabel>
							</Tag>
						);
					})}
				</HStack>
			</VStack>
		</Box>
	);
};
