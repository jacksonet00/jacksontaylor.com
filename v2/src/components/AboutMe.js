import { Box, Center, VStack, Text, useMediaQuery } from '@chakra-ui/react';
import data from '../data/data';

export const AboutMe = () => {
	const [isGreaterThan625Width] = useMediaQuery('(min-width: 625px)');

	return (
		<Box w={isGreaterThan625Width ? 'xl' : '80vw'}>
			<Center>
				<VStack spacing={6}>
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
