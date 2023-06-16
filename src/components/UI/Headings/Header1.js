import React from 'react';
import HeadingWrapper from './HeadingWrapper';

const Header1 = (props) => {
	return (
		<HeadingWrapper>
			<h1
				className={`Heading Heading1 ${props.className}`}
				style={props.style}
			>
				{props.children}
			</h1>
		</HeadingWrapper>
	);
};

export default Header1;
