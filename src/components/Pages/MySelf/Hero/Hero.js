import React from 'react';
import HeroDetails from './HeroDetails';
import HeroImage from './HeroImage';

const Hero = (props) => {
	return (
		<header className="Hero">
			<HeroImage HeroImage={props.HeroImage} />
			<HeroDetails />
		</header>
	);
};

export default Hero;
