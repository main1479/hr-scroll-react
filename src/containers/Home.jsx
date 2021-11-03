import React, { useEffect, useState } from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CustomCursor from '../CustomCursor';
import Header from '../components/Header';
import Featured from '../components/Featured';
import About from '../components/About';
import Gallery from '../components/Gallery';

import '../styles/home.scss';
import Preloader from '../components/Preloader';
import useLocoScroll from '../hooks/useLocoScroll';

const Home = () => {
	const [preloader, setPreloader] = useState(true);

	const preload = () => {
		setPreloader(false);
	};
	useLocoScroll(!preloader);

	useEffect(() => {
		const timer = setTimeout(() => {
			preload();
		}, 3000);

		return () => clearTimeout(timer);
	}, []);

	return (
		<>
			<CustomCursor />

			{preloader ? (
				<Preloader />
			) : (
				<div className="main-container" id="main-container" data-scroll-container>
					<Navbar />
					<Header />
					<Featured />
					<About />
					<Gallery />
					<Footer />
				</div>
			)}
		</>
	);
};
export default Home;
