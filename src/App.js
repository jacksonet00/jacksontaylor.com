import React, { useEffect, useState } from 'react';
import Banner from './components/Banner';
import Greeting from './components/Greeting';
import Bio from './components/Bio';
import Projects from './components/Projects';
import Experiences from './components/Experiences';
import Skills from './components/Skills';
import experiences from './data/experiences';
import projects from './data/projects';
import skills from './data/skills';
import home from './data/home';
import './styles/app.css';

const Footer = () => {
	return (
		<div className="footer">
			<div className="socials-container"></div>
			<div className="info-container"></div>
			<div className="signature-container"></div>
		</div>
	);
};

const App = () => {
	const [scroll, setScroll] = useState(false);

	useEffect(() => {
		window.onscroll = function () {
			if (window.pageYOffset > 0) {
				setScroll(true);
			}
			if (window.pageYOffset === 0) {
				setScroll(false);
			}
		};
	}, []);

	return (
		<div className="homepage">
			<Banner scroll={scroll} />
			<div className="VStack">
				<Greeting greeting={home.greeting} />
				<Bio bio={home.bio} />
				<Projects projects={projects} />
				<Experiences experiences={experiences} />
				<Skills skills={skills} />
			</div>
			<Footer />
		</div>
	);
};

export default App;
