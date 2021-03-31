import { Box, Center, VStack, Text } from '@chakra-ui/react';
import data from '../data/data';

export const AboutMe = () => {
	return (
		<Box w="xl">
			<Center>
				<VStack spacing={5}>
					{data.aboutMe.paragraphs.map((text, i) => {
						return (
							<Text fontSize="lg" key={i}>
								{text}
							</Text>
						);
					})}
				</VStack>
			</Center>
		</Box>
	);
};
