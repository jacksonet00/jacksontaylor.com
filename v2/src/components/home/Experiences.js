import {
	Tabs,
	TabList,
	Tab,
	TabPanels,
	TabPanel,
	Box,
	UnorderedList,
	ListItem,
	HStack,
	Center,
	Text,
} from '@chakra-ui/react';
import data from '../../data';

export const Experiences = () => {
	return (
		<Tabs colorScheme="red" isFitted w={{ base: '80vw', lg: 'xl' }}>
			<TabList flexDirection={{ base: 'column', lg: 'row' }}>
				{data.experiences.map((exp) => {
					return (
						<Tab key={exp.company} fontSize="sm">
							{exp.company}
						</Tab>
					);
				})}
			</TabList>
			<TabPanels>
				{data.experiences.map((exp) => {
					return (
						<TabPanel key={exp.company}>
							<Experience
								bullets={exp.bullets}
								role={exp.role}
								date={exp.date}
							/>
						</TabPanel>
					);
				})}
			</TabPanels>
		</Tabs>
	);
};

const Experience = ({ bullets, role, date }) => {
	return (
		<Box>
			<Center paddingBottom={6}>
				<HStack spacing="auto" w="100%">
					<Text fontWeight="bold">{role}</Text>
					<Text fontWeight="bold">{date}</Text>
				</HStack>
			</Center>
			<UnorderedList spacing={6}>
				{bullets.map((bullet) => {
					return <ListItem key={bullet}>{bullet}</ListItem>;
				})}
			</UnorderedList>
		</Box>
	);
};
