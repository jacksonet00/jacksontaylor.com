import { Box, Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react';
import data from '../data/data';
import { Experience } from './Experience';

export const Experiences = () => {
	return (
		<Box w="xl">
			<Tabs>
				<TabList>
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
		</Box>
	);
};
