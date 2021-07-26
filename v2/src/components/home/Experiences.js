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
	Wrap,
	Tag,
	TagLabel
} from '@chakra-ui/react';
import { HOME_PAGE_DATA as data } from '../../constants';

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
								tags={exp.tags}
							/>
						</TabPanel>
					);
				})}
			</TabPanels>
		</Tabs>
	);
};

const Experience = ({ bullets, role, date, tags }) => {
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
			<Wrap justifyContent="left" alignItems="start" paddingTop={6}>
					{tags.map((tag) => {
						return (
							<Tag colorScheme="red" key={tag} size="lg" borderRadius="none">
								<TagLabel>{tag}</TagLabel>
							</Tag>
						);
					})}
				</Wrap>
		</Box>
	);
};
