import React from 'react';
import photos from '../../data';
import './style.scss';

export default function Featured() {
	const [firstImage, secondImage] = photos;
	return (
		<section className="featured-section" data-scroll-section>
			<div className="featured-row-layout">
				<h6>green</h6>
				<img src={firstImage} alt="Featured" data-scroll data-scroll-delay="5000" />
			</div>
			<div className="featured-column-layout">
				<h6>lily</h6>
				<img src={secondImage} alt="Featured" data-scroll data-scroll-delay="6000" />
			</div>
		</section>
	);
}
