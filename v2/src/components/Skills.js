import {
	Box,
	HStack,
	VStack,
	Heading,
	Text,
	Divider,
	useMediaQuery,
} from '@chakra-ui/react';
import data from '../data/data';

export const Skills = () => {
	const [isGreaterThan775Width] = useMediaQuery('(min-width: 775px)');

	return <>{isGreaterThan775Width ? <SkillsColumns /> : <SkillsStack />}</>;
};

const SkillsColumns = () => {
	return (
		<Box w="xl">
			<HStack spacing="auto">
				{data.skills.map((skillSet) => {
					return (
						<VStack key={skillSet.type} spacing={6}>
							<Box>
								<Heading
									fontSize="md"
									paddingBottom={2}
									textAlign="center"
								>
									{skillSet.type}
								</Heading>
								<Divider w={24} />
							</Box>
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

const SkillsStack = () => {
	return (
		<Box w="xl">
			<VStack justifyContent="start" alignItems="left" spacing={6}>
				{data.skills.map((skillSet) => {
					return (
						<VStack
							key={skillSet.type}
							spacing={6}
							justifyContent="start"
							alignItems="left"
						>
							<Box>
								<Heading
									fontSize="md"
									paddingBottom={2}
								>
									{skillSet.type}
								</Heading>
								<Divider w={24} />
							</Box>
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
			</VStack>
		</Box>
	);
};
