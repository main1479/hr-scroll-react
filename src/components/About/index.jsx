import SplitText from '../../utils/Split3.min.js';
import React, { useEffect, useRef, useState } from 'react';
import useOnScreen from '../../hooks/useOnScreen';
import SectionHeader from '../SectionHeader';

import './style.scss';
import gsap from 'gsap';

export default function About() {
	const ref = useRef(null);
	const [reveal, setReveal] = useState(false);
	const onScreen = useOnScreen(ref);

	useEffect(() => {
		if (onScreen) setReveal(onScreen);
	}, [onScreen]);
	useEffect(() => {
		gsap.to('#headline', 0, { css: { opacity: 0 } });
		if (reveal) {
			const split = new SplitText('#headline', {
				type: 'lines',
			});
			gsap.to('#headline', 0, { css: { opacity: 1 } });
			gsap.from(split.lines, {
				duration: 1,
				y: 20,
				opacity: 0,
				stagger: 0.1,
			});
		}
	}, [reveal]);
	return (
		<section className="about-section" data-scroll-section>
			<SectionHeader title="about" />
			<p id="headline" ref={ref}>
				Flirty Flowers is a blog about flowers and the floral designers who make them into art.
				Creativity and the art of ‘making’ require dialogue. The full purpose of the Flirty Flowers
				blog is to encourage and inspire. We value art, we value insight, and we value opinion.
			</p>
		</section>
	);
}
