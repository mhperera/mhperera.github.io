import React from 'react';
import Button from './../UI/Button'
const HeroDetails = () => {
	return (
		<div className="HeroDetails">
			<h1>
				I am a <br/> React JS | PHP <br/>Software Engineer
			</h1>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam a
				earum maiores minima vitae dolorem.
			</p>
			<div className="button-group">
				<Button className='btn-secondary'>My Resume</Button>
				<Button className='btn-ghost-tertiary'>See my work</Button>
			</div>
		</div>
	);
};

export default HeroDetails;
