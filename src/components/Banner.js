import React from 'react';
import '../styles/banner.css';

const Banner = ({ scroll }) => {
	return (
		<div className={`banner ${scroll ? 'scroll' : ''}`}>
			<div className="content-container">
				<div className="title-container">
					<div className="title">jackson taylor</div>
				</div>
				<div className="links-container">
					<div
						className="link"
						onClick={() =>
							window.open('https://github.com/jacksonet00')
						}
					>
						GitHub
					</div>
					<div
						className="link"
						onClick={() =>
							window.open(
								'https://www.linkedin.com/in/jacksonet00/'
							)
						}
					>
						LinkedIn
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
