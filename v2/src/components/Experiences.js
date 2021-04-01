import {
	Box,
	Tabs,
	TabList,
	Tab,
	TabPanels,
	TabPanel,
	useMediaQuery,
} from '@chakra-ui/react';
import data from '../data/data';
import { Experience } from './Experience';

export const Experiences = () => {
	const [isGreaterThan625Width] = useMediaQuery('(min-width: 625px)');

	return (
		<Tabs
			colorScheme="red"
			isFitted
			w={isGreaterThan625Width ? 'xl' : '80vw'}
		>
			<TabList flexDirection={!isGreaterThan625Width && 'column'}>
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
