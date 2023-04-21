'use client';
import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';
import styles from './style.module.css';
type SliderImageType = {
	URL_IMAGES: any;
};
function SliderImage({ URL_IMAGES }: SliderImageType) {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [loaded, setLoaded] = useState(false);
	const [sliderRef, instanceRef] = useKeenSlider(
		{
			initial: 0,
			slideChanged(slider) {
				setCurrentSlide(slider.track.details.rel);
			},
			created() {
				setLoaded(true);
			},
			slides: {
				perView: 5,
				spacing: 15,
			},
			loop: true,
			breakpoints: {
				'(max-width: 46.25rem)': {
					slides: {
						perView: 3,
						spacing: 20,
					},
				},
			},
		},
		[
			(slider) => {
				let timeout: any;
				let mouseOver = false;
				function clearNextTimeout() {
					clearTimeout(timeout);
				}
				function nextTimeout() {
					clearTimeout(timeout);
					if (mouseOver) return;
					timeout = setTimeout(() => {
						slider.next();
					}, 2000);
				}
				slider.on('created', () => {
					slider.container.addEventListener('mouseover', () => {
						mouseOver = true;
						clearNextTimeout();
					});
					slider.container.addEventListener('mouseout', () => {
						mouseOver = false;
						nextTimeout();
					});
					nextTimeout();
				});
				slider.on('dragStarted', clearNextTimeout);
				slider.on('animationEnded', nextTimeout);
				slider.on('updated', nextTimeout);
			},
		],
	);
	return (
		<>
			<div ref={sliderRef} className="keen-slider">
				{URL_IMAGES.map((item: any, index: number) => {
					return (
						<div
							className={`keen-slider__slide number-slide${index}`}
							key={index}
						>
							<Image
								src={item}
								alt="image"
								className={`${styles.image_slider}`}
							/>
						</div>
					);
				})}
			</div>
			{loaded && instanceRef.current && (
				<div className={`${styles.dots}`}>
					{URL_IMAGES.map((_: any, index: any) => {
						return (
							<div
								key={index}
								className={`${styles.dot} ${
									currentSlide === index ? styles.active : ''
								}`}
								onClick={() => {
									instanceRef.current?.moveToIdx(index);
								}}
							></div>
						);
					})}
				</div>
			)}
		</>
	);
}

export default SliderImage;
