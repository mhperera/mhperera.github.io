import React from 'react';
import HeadingWrapper from './HeadingWrapper';

const H1 = (props) => {
	return (
		<HeadingWrapper>
			<h1
				className={`H1 ${props.className}`}
				style={props.style}
			>
				{props.children}
			</h1>
		</HeadingWrapper>
	);
};

export default H1;
