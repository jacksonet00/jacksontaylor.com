import { Box, Center, Heading } from '@chakra-ui/react';

export const SectionHeader = ({ heading }) => {
	return (
		<Box w="100%">
			<Heading fontSize="x-large">{heading}</Heading>
		</Box>
	);
};
