import React, { useState } from 'react';
import HeroImage from './images/HeroImage.png'
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import Container from './components/UI/Container';
// import { motion } from "framer-motion"

const List = [
	{ id: 1, title: 'My Self', active: true, path: '/' },
	{ id: 2, title: 'Portfolio', active: false, path: '/' },
	{ id: 3, title: 'Other', active: false, path: '/' },
	{ id: 4, title: 'Contact', active: false, path: '/' },
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
		<Container className="App">

			<Navigation
				menuItemList={menuItemList}
				isOpen={isOpen}
				setOpen={setOpen}
				onClickNavLink={handleNavLink}
			/>

			<Hero HeroImage={HeroImage} />

		</Container>
	);
}

export default App;
