import React from 'react';
import HeroDetails from './HeroDetails';
import HeroImage from './HeroImage';
import Container from './../UI/Container';

const Hero = (props) => {
	return (
		<Container>
			<header className="Hero">
				<HeroImage HeroImage={props.HeroImage} />
				<HeroDetails />
			</header>
		</Container>
	);
};

export default Hero;
