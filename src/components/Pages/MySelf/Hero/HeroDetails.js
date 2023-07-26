import React from 'react';
import { FaArrowDown } from 'react-icons/fa';

const HeroDetails = () => {
	return (
		<div className="HeroDetails">
			<h1>
				Hi, I am a <br /> <span className='big-text'>Manasha</span> <br/> React JS | PHP <br />
				Software Engineer
			</h1>
			<p>
				I design and code beautifully simple things, and I love what I do
			</p>

			<div className='btn-circle-wrapper' >
				<div className="circle-border" ></div>
				<div className="circle-content"><FaArrowDown className='icon'/></div>
			</div>

		</div>
	);
};

export default HeroDetails;
