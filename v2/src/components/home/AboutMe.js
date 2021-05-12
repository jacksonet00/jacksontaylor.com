import { Box, Center, VStack, Text, Link } from '@chakra-ui/react';
import { HOME_PAGE_DATA as data } from '../../constants';

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
					<Link w="fit-content" href="/blog">
						Read my blog
					</Link>
				</VStack>
			</Center>
		</Box>
	);
};