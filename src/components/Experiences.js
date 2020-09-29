import React, { useState } from 'react';
import FreelanceLogo from '../images/freelance_logo.png';
import UCFLogo from '../images/ucf_logo.png';
import SNLLogo from '../images/snl_logo.png';
import '../styles/experience.css';
import '../styles/app.css';

const Experiences = ({ experiences }) => {
	const [selection, setSelection] = useState(0);

	const getImage = (i) => {
		if (i === 0) return FreelanceLogo;
		if (i === 1) return UCFLogo;
		if (i === 2) return SNLLogo;
	};
	return (
		<div className="component-container">
			<div className="component-header">Experience</div>
			<div className="my-selector">
				<div className="row-3">
					{experiences.map(({ company }, i) => {
						return (
							<div
								className={`row-option${
									selection === i ? ' choice' : ''
								}`}
								key={i}
							>
								<div
									className="row-option-txt"
									onClick={() => setSelection(i)}
								>
									{company}
								</div>
							</div>
						);
					})}
				</div>
			</div>
			<ExperienceView
				experience={experiences[selection]}
				image={getImage(selection)}
			/>
		</div>
	);
};

const ExperienceView = ({ experience, image }) => {
	return (
		<div className="experience-grid">
			<img
				src={image}
				alt={`${experience.company} logo`}
				className="logo"
			/>
			<div className="experience-descriptions">
				{experience.descriptions.map((desc, i) => {
					return (
						<p key={i} className="text-container">
							{desc}
						</p>
					);
				})}
			</div>
		</div>
	);
};

export default Experiences;

/*
<div className="component-container row">
				<img src={getImage(selection)} className="logo" />
				<ul>
					{experiences[selection].descriptions.map((desc, i) => {
						return (
							<li key={i} className="text-container">
								{desc}
							</li>
						);
					})}
				</ul>
			</div>


*/
