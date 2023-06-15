import React from 'react';

const Button = (props) => {
	return (
		<button className={`btn ${props.className}`} style={props.style}>
			{props.children}
		</button>
	);
};

export default Button;
