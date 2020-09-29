import React from 'react';

const Bio = ({ bio, contact }) => {
	return (
		<div className="bio-container">
			<div className="bio">
				{bio.map((paragraph, i) => {
					return (
						<React.Fragment key={i}>
							<p>{paragraph}</p>
							<br></br>
						</React.Fragment>
					);
				})}
				<br></br>
				<div className="contact">
					<p
						className="email"
						onClick={() =>
							window.open('mailto:jacksontaylor@hey.com')
						}
					>
						{contact[0]}
					</p>
					<p
						className="twitter"
						onClick={() =>
							window.open(
								'https://twitter.com/jacksonet00'
							)
						}
					>
						{contact[1]}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Bio;
