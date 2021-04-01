import React from 'react';

const SkillIcon = ({ skill, color }) => {
	return (
		<div
			className="skill-icon"
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<div
				className="skill-color"
				style={{
					backgroundColor: color,
					borderRadius: '50%',
					width: '1em',
					height: '1em',
				}}
			></div>
			<div
				className="skill-title"
				style={{
					paddingLeft: '0.25em',
					paddingRight: '0.75em',
				}}
			>
				{skill}
			</div>
		</div>
	);
};

export default SkillIcon;
