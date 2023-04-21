'use client';
import Image from 'next/image';
import React, { useMemo } from 'react';
import ImageGroup from '../../public/images/engage/Group.png';
import BgMap from '../../public/images/engage/bg-map.png';
import MapSVG from '../../public/images/engage/image_map.svg';
import Link from 'next/link';
import styles from './styles.module.css';
import GoogleMapCP from '../GoogleMap';

function EngageHome() {
	return (
		<div className="bg-white container p-10 mt-3">
			<div
				className=" dark:text-black text-7xl font-bold"
				data-aos="fade-left"
			>
				Engage
			</div>
			<div
				className="flex flex-col lg:flex-row sm:flex-row xs:flex-row w-full mt-6"
				data-aos="fade-right"
			>
				<div className="mr-2 w-full lg:w-auto sm:w-auto xs:w-auto flex items-center justify-center">
					<Image
						src={ImageGroup}
						alt="image_group"
						width={450}
						height={324}
					/>
				</div>
				<div
					className="w-full lg:w-1/2 sm:w-1/2 xs:w-1/2 ml-2 fle"
					style={{ color: '#000' }}
				>
					<h1 className="font-bold text-2xl lg:text-4xl mb-6 dark:text-black">
						BIGGER FLOOR PLAN, BETTER OPPORTUNITIES
					</h1>
					<p className="leading-7 text-justify mb-4">
						This years’ iFX EXPO International will take place at
						the Palais de Sports, Spyros Kyprianou Athletic Centre –
						the largest indoor arena in Cyprus which means bigger
						and better opportunities. For 2 whole days, this
						impressive arena will host our attendees, exhibitors and
						sponsors which include successful start-ups, leading
						international brands, and industry giants.
					</p>
					<p className="leading-7 text-justify mb-4">
						Networking opportunities will be limitless, with two
						floors brimming with Branding, Booths, Sponsorships,
						Lounges, a Speaker Hall, an Idea Hub, Meeting Rooms and
						much more. Close deals in The Garden, at the Cocktail
						Bar, or even over lunch – there will be many places to
						meet and do business, so the choice is entirely yours!
					</p>
					<p className="leading-7 text-justify mb-4">
						Engage at the iFX EXPO International 2022, the ideal
						event to grow your business network successfully. View
						the full iFX EXPO Floor Plan to see what to expect from
						this year’s eagerly awaited show.
					</p>
					<div>
						<Link
							href="/"
							className="dark:text-primarytext font-bold"
						>
							View full iFX EXPO Floor Plan here →
						</Link>
					</div>
				</div>
			</div>
			<div className="w-full" data-aos="flip-left">
				<h1 className="font-bold text-2xl lg:text-4xl dark:text-black">
					VENUE
				</h1>
				<p className="font-bold leading-6" style={{ color: '#4e4c4c' }}>
					Palais des Sports – Spyros Kyprianou Athletic Center ,
					Limassol, Cyprus
				</p>
				<p className="leading-6" style={{ color: '#4e4c4c' }}>
					The Palais des Sports is the biggest and the most imposing
					multi dynamic indoor arena in Cyprus
				</p>
			</div>
			<div className="w-full my-5" data-aos="flip-right">
				<h1 className="font-bold text-2xl lg:text-4xl dark:text-black">
					Address
				</h1>
				<p className="leading-6" style={{ color: '#4e4c4c' }}>
					Polemidia, Limassol 3080, Cyprus
				</p>
			</div>
			<div className="flex items-center" data-aos="zoom-in">
				<Image src={MapSVG} alt="map_svg" width={30} height={30} />
				<Link
					className="underline dark:text-black font-bold ml-3"
					href="https://goo.gl/maps/TV2evBP85vuTXD6VA"
					target="_blank"
				>
					Google Map Link
				</Link>
			</div>
			<div className="w-full relative mt-3">
				<Image
					src={BgMap}
					alt="image_group"
					className="w-full h-full"
				/>
				<div
					className={`absolute bg-white ${styles.circle_map}`}
					data-aos="flip-down"
				>
					<div className={`w-full h-full ${styles.map_container}`}>
						{/* <GoogleMapCP borderRadius="50%" /> */}
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m17!1m8!1m3!1d419791.99864244746!2d32.9985781!3d34.7146375!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d34.714637499999995!2d32.998578099999996!5e0!3m2!1sen!2s!4v1682072433986!5m2!1sen!2s"
							width="100%"
							height="100%"
							allowFullScreen
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							title="map"
							style={{ borderRadius: '50%' }}
						></iframe>
					</div>
				</div>
			</div>
		</div>
	);
}

export default EngageHome;
