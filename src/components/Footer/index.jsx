import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import SectionHeader from '../SectionHeader';
import useOnScreen from '../../hooks/useOnScreen';

import './style.scss';

export default function Footer() {
	const ref = useRef(null);
	const [reveal, setReveal] = useState(false);
	const onScreen = useOnScreen(ref);

	useEffect(() => {
		if (onScreen) setReveal(onScreen);
	}, [onScreen]);
	useEffect(() => {
		gsap.to('#location-text', 0, { css: { opacity: 0 } });
		if (reveal) {
			gsap.to('#location-text', 0, { css: { opacity: 1 } });
			gsap.from('#location-text .line span', 1, {
				y: 300,
				opacity: 0,
				skewY: 10,
				ease: 'power2',
				stagger: {
					amount: 0.4,
				},
			});
		}
	}, [reveal]);
	return (
		<section className="footer" data-scroll-section>
			<SectionHeader title="Made in" />

			<h2 className="location" id="location-text" ref={ref}>
				<div className="line">
					<span>Dhaka,</span>
				</div>{' '}
				<div className="line">
					<span>Bangladesh</span>
				</div>
			</h2>
		</section>
	);
}
