import gsap from 'gsap';
import React, { useEffect } from 'react';

import './style.scss';

export default function Header() {
	useEffect(() => {
		gsap.from('#header-text .line span', 1, {
			y: 300,
			opacity: 0,
			delay: 1,
			skewY: 10,
			ease: 'power2',
			stagger: {
				amount: 0.4,
			},
		});
	}, []);

	return (
		<header className="header-container" data-scroll-section>
			<ul className="header-menu">
				<li>Intro</li>
				<li>About</li>
				<li>Featured</li>
			</ul>
			<h1 id="header-text">
				<div className="line">
					<span>!Noob</span>
				</div>
				<div className="line">
					<span>Developer</span>
				</div>
			</h1>
		</header>
	);
}
