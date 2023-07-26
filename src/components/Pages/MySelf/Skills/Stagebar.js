import React from 'react';

const Stagebar = ({ stage }) => {
	return (
		<div className="Stagebar">
			<span style={{"width" : `${stage}%` }} ></span>
		</div>
	);
};

export default Stagebar;
