'use client';
import React from 'react';
import CounterUp from './CounterUp';
import Image2022 from '../../public/images/discover/image_2022.png';
import Image from 'next/image';
import Link from 'next/link';

function DiscoverHome() {
	return (
		<div className="bg-white container p-10">
			<div
				className=" dark:text-black text-5xl font-bold"
				data-aos="fade-left"
			>
				Discover
			</div>
			<div className="flex flex-col lg:flex-row sm:flex-row xs:flex-row w-full">
				<div className="w-full lg:w-1/2 sm:w-1/2 xs:w-1/2 ml-2 flex-1">
					<div className="block lg:flex lg:flex-row xs:flex sm:flex lg:justify-around sm:justify-around xs:justify-around align-middle my-10 sm:flex-col sm:items-start">
						<CounterUp start={0} end={20} type="EXPOS" />
						<CounterUp start={0} end={40000} type="ATTENDEES" />
						<CounterUp start={0} end={1750} type="EXHIBITORS" />
					</div>
					<div className="flex flex-col">
						<div
							className="font-bold dark:text-black text-3xl mb-4"
							data-aos="fade-down"
						>
							EMPOWERING THE GLOBAL B2B FINTECH ECOSYSTEM
						</div>
						<p
							className="text-justify mb-2"
							data-aos="fade-left"
							style={{ color: '#000', lineHeight: '1.7' }}
						>
							Welcome to iFX EXPO, the world’s first and largest
							financial business to business exhibition. For over
							a decade we’ve been bringing professionals in online
							trading, financial services and fintech together
							across Europe, Asia, and the Middle East.
						</p>
						<p
							className="text-justify mb-2"
							data-aos="fade-left"
							style={{ color: '#000', lineHeight: '1.7' }}
						>
							iFX EXPO International is a 2+ days networking event
							that provides you with invaluable tools to grow your
							business successfully. It’s the industry meet up
							that everyone is talking about, with unlimited
							opportunities to connect with C-level executives
							from the most prominent international companies and
							engaging content from inspiring industry experts.
						</p>
						<p
							className="text-justify mb-2"
							data-aos="fade-left"
							style={{ color: '#000', lineHeight: '1.7' }}
						>
							Join us at iFX EXPO International 2022. Something
							big is coming.
						</p>
					</div>
				</div>
				<div className="ml-2 w-full lg:w-auto sm:w-auto xs:w-auto">
					<Image src={Image2022} alt="image_2022" />
				</div>
			</div>
			<div className="text-center mt-3">
				<Link href="/" className="dark:text-black font-bold underline">
					DISCOVER MORE →
				</Link>
			</div>
		</div>
	);
}

export default DiscoverHome;
