import React from 'react';
import { FaArrowDown } from 'react-icons/fa';

const HeroDetails = () => {
	return (
		<div className="HeroDetails">
			<h1>
				I am a <br /> React JS | PHP <br />
				Software Engineer
			</h1>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam a
				earum maiores minima vitae dolorem.
			</p>

			<div className='btn-circle-wrapper' >
				<div className="circle-border" ></div>
				<div className="circle-content"><FaArrowDown className='icon'/></div>
			</div>

		</div>
	);
};

export default HeroDetails;
