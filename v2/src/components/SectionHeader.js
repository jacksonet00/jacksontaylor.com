import { Box, Center, Heading } from '@chakra-ui/react';

export const SectionHeader = ({ heading }) => {
	return (
		<Box w="100%">
			<Center>
				<Heading fontSize="x-large">{heading}</Heading>
			</Center>
		</Box>
	);
};
