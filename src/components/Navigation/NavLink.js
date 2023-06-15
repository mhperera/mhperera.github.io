import React from 'react';

const NavLink = (props) => {
	return (
		<li
			className={props.active ? 'active' : ''}
			onClick={() => props.onClickNavLink(props.title)}
		>
			{props.title}
		</li>
	);
};

export default NavLink;
