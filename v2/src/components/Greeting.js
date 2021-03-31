import { VStack, Center, Box, Heading, Text } from '@chakra-ui/react';
import data from '../data/data';

export const Greeting = (props) => {
	return (
		<Box {...props}>
			<VStack spacing={24}>
				<Box>
					<Center>
						<Heading fontSize="xxx-large">
							{data.greeting.headline}
						</Heading>
					</Center>
				</Box>
				<Box>
					<Center>
						<Text fontSize="4xl" textAlign="center">
							{data.greeting.subText}
						</Text>
					</Center>
				</Box>
			</VStack>
		</Box>
	);
};
