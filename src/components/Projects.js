import React, { useState } from 'react';
import SkillIcon from './SkillIcon';
import '../styles/app.css';
import colors from '../data/colors';

const Projects = ({ projects }) => {
	return (
		<div className="component-container">
			<div className="component-header">Projects</div>
			<div className="grid-2">
				{projects.map((project, i) => {
					return (
						<ProjectCardView
							project={project}
							index={i}
							key={i}
						/>
					);
				})}
			</div>
		</div>
	);
};

const ProjectCardView = ({ project, index }) => {
	const [underline, setUnderline] = useState(false);

	const openLink = () => {
		if (project.link) {
			window.open(project.link);
		}
	};

	const handleMouseEnter = () => {
		if (project.link) {
			setUnderline(true);
		}
	};

	return (
		<div className="card">
			<div
				className={`card-title${underline ? ' underline' : ''}`}
				onClick={openLink}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={() => setUnderline(false)}
			>
				{project.title}
			</div>
			<div
				className={`desktop card-desc${
					underline ? ' underline' : ''
				}`}
				onClick={openLink}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={() => setUnderline(false)}
			>
				{' '}
				{project.description}
			</div>
			<div
				className={`mobile card-desc${
					underline ? ' underline' : ''
				}`}
				onClick={openLink}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={() => setUnderline(false)}
			>
				{' '}
				{project.mobileDescription}
			</div>
			<div className="card-tags HStack desktop">
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
			<div className="card-tags HStack mobile">
				{project.mobileTechstack &&
					project.mobileTechstack.map((tech, i) => {
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
