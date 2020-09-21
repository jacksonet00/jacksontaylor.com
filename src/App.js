import React, { useState } from 'react';
import { ButtonGroup, Button } from '@material-ui/core';
import './App.css';

const projects = ['1', '2', '3', '4'];
const experiences = [
	{
		title: 'Freelance Software Developer',
		descriptions: ['1', '2', '3', '4', '5'],
	},
	{
		title: 'Bootcamp Teaching Assistant',
		descriptions: ['6', '7', '8', '9', '10'],
	},
	{
		title: 'Outgoing Shipping Lead',
		descriptions: ['11', '12', '13', '14'],
	},
];
const skills = {
	languages: ['1', '2', '3', '4', '5'],
	libraries: ['6', '7', '8', '9', '10'],
	tools: ['11', '12', '13', '14'],
};

const Banner = () => {
	return (
		<div className="banner">
			<div className="content-container">
				<div className="title-container">
					<div className="title">jackson taylor</div>
				</div>
				<div className="links-container">
					<div className="link" onClick={() => alert('Test')}>
						GitHub
					</div>
					<div className="link">LinkedIn</div>
				</div>
			</div>
		</div>
	);
};

const Greeting = () => {
	return <div className="greeting">Greeting Text :)</div>;
};

const Bio = () => {
	return (
		<div className="bio-container">
			<div className="bio">
				Quisque nec arcu eget lectus mattis dapibus. Mauris
				elementum lectus ut ligula bibendum auctor. Duis quis urna
				ac tortor gravida congue. Curabitur sed arcu ultrices mi
				vehicula finibus vitae at sem. Praesent vehicula interdum
				turpis id egestas. Phasellus cursus id lacus in posuere.
				Quisque vitae imperdiet purus.
			</div>
		</div>
	);
};

const Projects = () => {
	return (
		<div className="projects-container">
			<div className="projects-header">Projects</div>
			<ProjectsGrid />
		</div>
	);
};

const ProjectsGrid = () => {
	return (
		<div className="projects-grid">
			{projects.map((project, i) => {
				return <Project project={project} key={i} />;
			})}
		</div>
	);
};

const Project = ({ project }) => {
	return <div className="project">{`Project: ${project}`}</div>;
};

const Experiences = () => {
	return (
		<div className="experience-container">
			<div className="experience-header">Experience</div>
			<ExperienceDisplay experiences={experiences} />
		</div>
	);
};

const ExperienceDisplay = ({ experiences }) => {
	const [selection, setSelection] = useState(0);

	return (
		<div className="experience-display-container">
			<ExperienceSelect
				experiences={experiences}
				selection={selection}
				onSelect={(s) => setSelection(s)}
			/>
			<div className="experience-item-container">
				<div className="location"></div>
				<div className="date"></div>
				<div className="list">
					<ul>
						{experiences[selection].descriptions.map(
							(description, i) => {
								return <li key={i}>{description}</li>;
							}
						)}
					</ul>
				</div>
			</div>
		</div>
	);
};

const ExperienceSelect = (props) => {
	const { experiences, selection } = props;

	return (
		<div className="experience-selector">
			<div className="selector-container">
				<ButtonGroup
					orientation="vertical"
					color="primary"
					aria-label="vertical outlined primary button group"
				>
					{experiences.map(({ title }, i) => {
						return (
							<Button
								variant={
									selection === i
										? 'contained'
										: 'outlined'
								}
								onClick={() => props.onSelect(i)}
							>
								{' '}
								{title}
							</Button>
						);
					})}
				</ButtonGroup>
			</div>
		</div>
	);
};

const Skills = () => {
	return (
		<div className="skills-container">
			<div className="skills-header">Skills</div>
			<div className="skill-type-containers">
				<div className="skill-type-container">
					<div className="skill-type-header">Languages</div>
					<ul>
						{skills.languages.map((language, i) => {
							return <li key={i}>{language}</li>;
						})}
					</ul>
				</div>
				<div className="skill-type-container">
					<div className="skill-type-header">Libraries</div>
					<ul>
						{skills.libraries.map((libraries, i) => {
							return <li key={i}>{libraries}</li>;
						})}
					</ul>
				</div>
				<div className="skill-type-container">
					<div className="skill-type-header">Tools</div>
					<ul>
						{skills.tools.map((tools, i) => {
							return <li key={i}>{tools}</li>;
						})}
					</ul>
				</div>
			</div>
		</div>
	);
};

const App = () => {
	return (
		<div className="homepage">
			<Banner />
			<Greeting />
			<Bio />
			<Projects />
			<Experiences />
			<Skills />
		</div>
	);
};

export default App;
