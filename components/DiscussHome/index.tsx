import React from 'react';
import Link from 'next/link';
import ImageOwner01 from '../../public/images/discuss/owner_01.png';
import ImageOwner02 from '../../public/images/discuss/owner_02.png';
import ImageOwner03 from '../../public/images/discuss/owner_03.png';
import OwnerItem from './OwnerItem';

function DiscussHome() {
	return (
		<div className="my-5 container">
			<div
				data-aos="fade-right"
				className="font-bold text-2xl lg:text-4xl dark:text-white mb-3"
			>
				DISCUSS
			</div>
			<h1 className="text-xl" data-aos="fade-right">
				Knowledge is power.
			</h1>
			<p
				className="mt-3 mb-5 text-justify leading-7"
				data-aos="fade-right"
			>
				Listen to engaging content from inspiring industry experts.
				There will be important updates and hot topics up for
				discussion. World-class speakers that have taken the iFX EXPO
				stage:
			</p>
			<div
				className="flex lg:justify-start sm:justify-start flex-wrap lg:flex-wrap -mx-2"
				data-aos="zoom-in"
			>
				<OwnerItem
					imageUrl={ImageOwner01}
					nameOwner="Joe Li"
					positionOwner="Chairman & Group CEO"
					companyOwner="ATFX"
				/>
				<OwnerItem
					imageUrl={ImageOwner02}
					nameOwner="Dr George Theocharides"
					positionOwner="Chairman"
					companyOwner="Cyprus Securities & Exchange Commission"
				/>
				<OwnerItem
					imageUrl={ImageOwner01}
					nameOwner="Joe Li"
					positionOwner="Chairman & Group CEO"
					companyOwner="ATFX"
				/>
				<OwnerItem
					imageUrl={ImageOwner03}
					nameOwner="Andrew Ralich"
					positionOwner="CEO and Co-Founder of oneZero"
					companyOwner="oneZero"
				/>
				<OwnerItem
					imageUrl={ImageOwner01}
					nameOwner="Joe Li"
					positionOwner="Chairman & Group CEO"
					companyOwner="ATFX"
				/>
				<OwnerItem
					imageUrl={ImageOwner03}
					nameOwner="Andrew Ralich"
					positionOwner="CEO and Co-Founder of oneZero"
					companyOwner="oneZero"
				/>
				<OwnerItem
					imageUrl={ImageOwner02}
					nameOwner="Dr George Theocharides"
					positionOwner="Chairman"
					companyOwner="Cyprus Securities & Exchange Commission"
				/>
			</div>
			<div className="font-bold text-center my-3 dark:text-primarytext">
				<Link className="lg:text-2xl text-lg" href="/">
					Full Speaker Lineup & Agenda here →
				</Link>{' '}
			</div>
			<div className="flex items-center justify-center">
				<Link
					href="/signup"
					className="rounded-md bg-primary py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
				>
					Signup
				</Link>
			</div>
		</div>
	);
}

export default DiscussHome;
