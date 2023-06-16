import React from 'react';

const HeadingWrapper = (props) => {
	return (
		<div
			className={`HeadingWrapper ${props.className}`}
			style={props.style}
		>
			{props.children}
		</div>
	);
};

export default HeadingWrapper;
