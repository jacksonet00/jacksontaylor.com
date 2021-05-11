import { Box, VStack, Heading, Text, Divider, Flex } from '@chakra-ui/react';
import { HOME_PAGE_DATA as data } from '../../constants';

export const Skills = () => {
	return (
		<Flex
			direction={{ lg: 'row', base: 'column' }}
			w="xl"
			align={{ base: 'start', lg: 'center' }}
			justify={{ lg: 'center' }}
		>
			{data.skills.map((skillSet) => {
				return (
					<VStack
						key={skillSet.type}
						spacing={6}
						paddingBottom={{ base: 6 }}
						align={{ base: 'start', lg: 'center' }}
						margin={{ lg: '0 auto' }}
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
	);
};
