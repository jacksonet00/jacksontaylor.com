import { Box, HStack, VStack, Heading, Text, Divider } from '@chakra-ui/react';

export const Skills = () => {
	return (
		<Box w="xl">
			<HStack spacing="auto">
				<VStack spacing={4}>
					<Heading fontSize="md">Lanugages</Heading>
					<Divider />
					<Text fontSize="md">Python</Text>
					<Text fontSize="md">Javascript</Text>
					<Text fontSize="md">SQL</Text>
				</VStack>
				<VStack spacing={4}>
					<Heading fontSize="md">Technologies</Heading>
					<Divider />
					<Text fontSize="md">GraphQL</Text>
					<Text fontSize="md">Node</Text>
					<Text fontSize="md">Pandas</Text>
				</VStack>
				<VStack spacing={4}>
					<Heading fontSize="md">Tools</Heading>
					<Divider />
					<Text fontSize="md">AWS</Text>
					<Text fontSize="md">GCP</Text>
					<Text fontSize="md">GitHub</Text>
				</VStack>
			</HStack>
		</Box>
	);
};
