import React, { useState } from 'react';
import HeroImage from './images/HeroImage.png'
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
// import { motion } from "framer-motion"

const List = [
	{ id: 1, title: 'My Self', active: true, path: '/' },
	{ id: 2, title: 'Education', active: false, path: '/' },
	{ id: 3, title: 'Experience', active: false, path: '/' },
	{ id: 4, title: 'Projects', active: false, path: '/' },
	{ id: 5, title: 'Referees', active: false, path: '/' },
	{ id: 6, title: 'Contact', active: false, path: '/' },
];

function App() {
	const [isOpen, setOpen] = useState(false);
	const [menuItemList, setMenuItemList] = useState(List);

	const handleNavLink = (title) => {
		const newMenuItemList = menuItemList.map((link) => {
			return link.title === title
				? { ...link, active: true }
				: { ...link, active: false };
		});
		setMenuItemList(newMenuItemList);
	};

	return (
		<div className="App">
			<Navigation
				menuItemList={menuItemList}
				isOpen={isOpen}
				setOpen={setOpen}
				onClickNavLink={handleNavLink}
			/>

			<Hero HeroImage={HeroImage} />

		</div>
	);
}

export default App;
