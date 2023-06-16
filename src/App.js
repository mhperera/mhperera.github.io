import React, { useState } from 'react';
import HeroImage from './images/HeroImage.png';
import './App.css';
import Navigation from './components/Template/Navigation/Navigation';
import Myself from './components/Pages/MySelf/Myself';
import Container from './components/UI/Container';
// import { motion } from "framer-motion"

const List = [
	{ id: 1, title: 'My Self', active: true, path: '/' },
	{ id: 2, title: 'Portfolio', active: false, path: '/' },
	{ id: 3, title: 'Other', active: false, path: '/' },
	{ id: 4, title: 'Contact', active: false, path: '/' },
];

const PersonalDetails = [
	{ id: 0, title: 'Location', value: 'Maharagama | Colombo' },
	{ id: 1, title: 'Languages', value: 'English | Sinhala' },
	{ id: 2, title: 'Marital Status', value: 'Happily Married' },
	{ id: 3, title: 'Email', value: 'mhperera1995@gmail.com' },
	{ id: 4, title: 'Mobile', value: '+94 761 812 800 | +94 702 328 468' },
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

			<Myself HeroImage={HeroImage} PersonalDetails={PersonalDetails}/>
		</Container>
	);
}

export default App;
