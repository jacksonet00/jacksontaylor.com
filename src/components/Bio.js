import React from 'react';

const Bio = ({ bio }) => {
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
			</div>
		</div>
	);
};

export default Bio;
