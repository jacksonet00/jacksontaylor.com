import React from 'react';

const Skills = ({ skills }) => {
	const skillTypes = Object.keys(skills);

	return (
		<div className="component-container">
			<div className="component-header">Skills</div>
			<div className="grid-3">
				{skillTypes.map((skillType, i) => {
					return (
						<div className="grid-3-item" key={i}>
							<div className="component-callout">
								{skillType}
							</div>
							{skills[skillType].map((skill, j) => {
								return (
									<p
										key={j}
										className="text-container"
									>
										{skill}
									</p>
								);
							})}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Skills;
