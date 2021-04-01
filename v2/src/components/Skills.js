import { Box, VStack, Heading, Text, Divider, Flex } from '@chakra-ui/react';
import data from '../data/data';

export const Skills = () => {
	return (
		<Box w="xl">
			<Flex
				direction={{ lg: 'row', base: 'column' }}
				spacing={{ base: 6, lg: 'auto' }}
				alignItems={{ base: 'start' }}
			>
				{data.skills.map((skillSet) => {
					return (
						<VStack
							key={skillSet.type}
							spacing={6}
							paddingBottom={{ base: 6 }}
							alignItems={{ base: 'start' }}
						>
							<Box>
								<Heading
									fontSize="md"
									paddingBottom={2}
									textAlign={{
										base: 'left',
										lg: 'center',
									}}
								>
									{skillSet.type}
								</Heading>
								<Divider w={36} />
							</Box>
							{skillSet.items.map((item) => {
								return (
									<Text
										key={item}
										fontSize="md"
										textAlign={{
											base: 'left',
											lg: 'center',
										}}
									>
										{item}
									</Text>
								);
							})}
						</VStack>
					);
				})}
			</Flex>
		</Box>
	);
};
