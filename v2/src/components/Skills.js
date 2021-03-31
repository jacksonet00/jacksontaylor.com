import { Box, HStack, VStack, Heading, Text, Divider } from '@chakra-ui/react';
import data from '../data/data';

export const Skills = () => {
	return (
		<Box w="auto">
			<HStack spacing="auto">
				{data.skills.map((skillSet) => {
					return (
						<VStack key={skillSet.type} spacing={6}>
							<Heading fontSize="md">
								{skillSet.type}
							</Heading>
							<Divider />
							{skillSet.items.map((item) => {
								return (
									<Text key={item} fontSize="md">
										{item}
									</Text>
								);
							})}
						</VStack>
					);
				})}
			</HStack>
		</Box>
	);
};
