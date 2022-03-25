import { Box, Center, VStack, Text, Link, Heading, Flex } from '@chakra-ui/react';
import { HOME_PAGE_DATA as data } from '../../constants';

export const AboutMe = () => {
	return (
		<Flex flexDir="column" gap={8}>
			<Heading fontSize="x-large">About me</Heading>
			<Center>
				<VStack spacing={6} align="left">
					{data.aboutMe.paragraphs.map((text, i) => {
						return (
							<Text fontSize="lg" key={i}>
								{text}
							</Text>
						);
					})}
					{/* <Link w="fit-content" href="/blog">
						Read my blog
					</Link> */}
				</VStack>
			</Center>
		</Flex>
	);
};
