import React from 'react';
import '../styles/banner.css';
import analytics from '../config/analytics';

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
						onClick={() => {
							analytics.logEvent('view_github', {});
							window.open(
								'https://github.com/jacksonet00'
							);
						}}
					>
						GitHub
					</div>
					<div
						className="link"
						onClick={() => {
							analytics.logEvent('view_linkedin', {});
							window.open(
								'https://www.linkedin.com/in/jacksonet00/'
							);
						}}
					>
						LinkedIn
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
