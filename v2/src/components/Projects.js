import { VStack } from '@chakra-ui/layout';
import data from '../data/data';
import { Project } from './Project';

export const Projects = () => {
	return (
		<VStack spacing={8} alignItems="start" justifyContent="left">
			{data.projects.map((project) => {
				return (
					<Project
						key={project.title}
						title={project.title}
						description={project.description}
						tags={project.tags}
						link={project.link}
					/>
				);
			})}
		</VStack>
	);
};
