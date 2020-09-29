import React from 'react';
import SkillIcon from './SkillIcon';
import '../styles/app.css';
import colors from '../data/colors';

const Projects = ({ projects }) => {
	return (
		<div className="component-container">
			<div className="component-header">Projects</div>
			<div className="grid-2">
				{projects.map((project, i) => {
					return <ProjectCardView project={project} key={i} />;
				})}
			</div>
		</div>
	);
};

const ProjectCardView = ({ project }) => {
	const openLink = () => {
		if (project.link) {
			window.open(project.link);
		}
	};

	return (
		<div className="card">
			<div className="card-title" onClick={openLink}>
				{project.title}
			</div>
			<div className="card-desc" onClick={openLink}>
				{' '}
				{project.description}
			</div>
			<div className="card-tags HStack">
				{project.techstack &&
					project.techstack.map((tech, i) => {
						return (
							<SkillIcon
								skill={tech}
								color={colors[tech] || 'red'}
								key={i}
							/>
						);
					})}
			</div>
		</div>
	);
};

export default Projects;
