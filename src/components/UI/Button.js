import React from 'react';

const Button = (props) => {
	return (
		// <a href="/files/my-tax.pdf" download>Download Tax Data</a>
		<button className={`btn ${props.className}`} style={props.style}>
			{props.children}
		</button>
	);
};

export default Button;
