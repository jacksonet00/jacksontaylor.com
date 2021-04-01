import React from 'react';
import '../styles/app.css';

const Greeting = ({ greeting }) => {
	return (
		<div>
			<div className="greeting">{greeting}</div>
		</div>
	);
};

export default Greeting;
