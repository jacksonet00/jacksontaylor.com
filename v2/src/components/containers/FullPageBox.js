import { Box } from '@chakra-ui/react';

export const FullPageBox = (props) => {
	return (
		<Box
			w="100%"
			minHeight="100vh"
			overflowX="hidden"
			paddingY={{ base: 36, lg: 24 }}
			paddingX={{ lg: 36, base: '10%' }}
		>
			{props.children}
		</Box>
	);
};
