import React from 'react';
import NavLink from './NavLink';
import Hamburger from 'hamburger-react';

const Navigation = (props) => {
	return (
		<nav className="Navigation">
			<span className="logo">Manasha</span>
			<ul>
				{props.menuItemList.map((navLink) => (
					<NavLink
						key={navLink.id}
						title={navLink.title}
						active={navLink.active}
						path={navLink.path}
						onClickNavLink={props.onClickNavLink}
					/>
				))}
			</ul>
			<Hamburger
				duration={0.25}
				easing="ease-in"
				toggled={props.isOpen}
				toggle={props.setOpen}
			/>
		</nav>
	);
};

export default Navigation;
