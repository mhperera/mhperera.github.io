import React from 'react';

const Section = (props) => {
	return (
		<div className={`Section ${props.className}`} style={props.style}>
			{props.children}
		</div>
	);
};

export default Section;
