import { VStack, Center, Box, Heading, Text } from '@chakra-ui/react';
import data from '../../data';

export const Greeting = (props) => {
	return (
		<Box {...props}>
			<VStack spacing={{ base: 24, lg: 12 }}>
				<Box>
					<Center>
						<Heading fontSize="6xl" paddingTop={{ base: 24, lg: 0 }}>
							{data.greeting.headline}
						</Heading>
					</Center>
				</Box>
				<Box>
					<Center>
						<Text fontSize={{ base: '2xl', lg: '4xl' }} textAlign="center">
							{data.greeting.subText}
						</Text>
					</Center>
				</Box>
			</VStack>
		</Box>
	);
};
