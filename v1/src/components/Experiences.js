import React, { useState } from 'react';
import PersonalBrandIcon from '../images/personal_brand_icon.png';
import UCFLogo from '../images/ucf_logo.png';
import SNLLogo from '../images/snl_logo.png';
import '../styles/experience.css';
import '../styles/app.css';

const Experiences = ({ experiences }) => {
	const [selection, setSelection] = useState(0);

	const getImage = (i) => {
		if (i === 0) return PersonalBrandIcon;
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
		<div className="exp-container">
			<div className="exp-logo-container">
				<img
					src={image}
					className="exp-logo"
					alt={`${experience.company} logo`}
				/>
			</div>
			<div className="exp-description">
				<ul>
					{experience.descriptions.map((desc, i) => {
						return <li key={i}>{desc}</li>;
					})}
				</ul>
			</div>
		</div>
	);
};

export default Experiences;
