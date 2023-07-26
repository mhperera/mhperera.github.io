import React from 'react';
import Introduction from './Introduction/Introduction';
import Hero from './Hero/Hero';
import GeneralDetails from './GeneralDetails/GeneralDetails';
import TechStack from './Skills/TechStack';

const Myself = (props) => {
	return (
		<>
			<Hero HeroImage={props.HeroImage} />
			<Introduction />
			<GeneralDetails PersonalDetails={props.PersonalDetails} />
			<TechStack TechStack={props.TechStack} />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
		</>
	);
};

export default Myself;
