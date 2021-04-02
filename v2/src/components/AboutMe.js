import { Box, Center, VStack, Text, Link } from '@chakra-ui/react';
import data from '../data/data';

export const AboutMe = () => {
	return (
		<Box w={{ base: '80vw', lg: 'xl' }}>
			<Center>
				<VStack spacing={6} align="left">
					{data.aboutMe.paragraphs.map((text, i) => {
						return (
							<Text fontSize="lg" key={i}>
								{text}
							</Text>
						);
					})}
					<Link href="/blog">Read my blog</Link>
				</VStack>
			</Center>
		</Box>
	);
};
