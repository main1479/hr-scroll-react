/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import classNames from 'classnames';
import ScrollTrigger from 'gsap/ScrollTrigger';
import useOnScreen from '../../hooks/useOnScreen';
import './style.scss';
// gsap.registerPlugin(ScrollTrigger);

const images = [
	{
		src: 'https://images.unsplash.com/photo-1566204773863-cf63e6d4ab88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1345&q=100',
		title: 'Dracaena Trifasciata',
		subtitle: 'Live the Beauty',
		category: 'Shooting / Adv.Campaing',
	},
	{
		src: 'https://images.unsplash.com/photo-1558603668-6570496b66f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=100',
		title: 'Cereus Penuvianus',
		subtitle: 'Live the Beauty',
		category: 'Shooting / Adv.Campaing',
	},
	{
		src: 'https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=100',
		title: 'Calliope',
		subtitle: 'Live the Beauty',
		category: 'Shooting / Adv.Campaing',
	},
	{
		src: 'https://images.unsplash.com/photo-1611145367651-6303b46e4040?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2006&q=100',
		title: 'Golden Pothos',
		subtitle: 'Living Room',
		category: 'Shooting / Adv.Campaing',
	},
];

function GalleryItem({ src, title, subtitle, category, index, updateActiveImage }) {
	const ref = useRef(null);
	const onScreen = useOnScreen(ref, 0.5);
	useEffect(() => {
		if (onScreen) {
			updateActiveImage(index);
		}
	}, [onScreen, index]);
	return (
		<div className={classNames('gallery-item-wrapper', { 'is-reveal': onScreen })} ref={ref}>
			<div></div>
			<div className="gallery-item">
				<div className="gallery-item-info">
					<h2 className="gallery-info-title">{title}</h2>
					<h4 className="gallery-info-subtitle">{subtitle}</h4>
					<p className="gallery-info-category">{category}</p>
				</div>
				<div className="gallery-item-image" style={{ backgroundImage: `url(${src})` }}>
					&nbsp;
				</div>
			</div>
			<div></div>
		</div>
	);
}

export default function Gallery() {
	const [activeImage, setActiveImage] = useState(1);
	const ref = useRef(null);

	useEffect(() => {
		if (window.innerWidth >= 1025) {
			setTimeout(() => {
				const sections = gsap.utils.toArray('.gallery-item-wrapper');
				gsap.to(sections, {
					xPercent: -100 * (sections.length - 1),
					ease: 'none',
					scrollTrigger: {
						start: 'top top',
						trigger: ref.current,
						scroller: '#main-container',
						pin: true,
						scrub: 0.5,
						snap: 1 / (sections.length - 1),
						end: () => `+=${ref.current.offsetWidth}`,
					},
				});
				ScrollTrigger.refresh();
			});
		}
	}, []);
	const handleUpdateActiveImage = (index) => {
		setActiveImage(index + 1);
	};
	return (
		<section className="section-wrapper gallery-wrap" data-scroll-section>
			<div className="gallery" ref={ref}>
				<div className="gallery-counter">
					<span>{activeImage}</span>
					<span className="divider">&nbsp;</span>
					<span>{images.length}</span>
				</div>
				{images.map((img, index) => (
					<GalleryItem
						key={img.src}
						index={index}
						{...img}
						updateActiveImage={handleUpdateActiveImage}
					/>
				))}
			</div>
		</section>
	);
}
