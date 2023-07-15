import React from 'react';
import CheckSVG from '../../public/check.svg';
import BookItem from './BookItem';
import Link from 'next/link';
import { ListCheckType, ListPriceType } from '../../types/bookItem';

const LIST_CHECK: ListCheckType[] = [
	{
		id: 1,
		title: 'Entry to Expo Venue',
		icon: CheckSVG,
	},
	{
		id: 2,
		title: 'Access to Networking Event',
		icon: CheckSVG,
	},
	{
		id: 3,
		title: 'Speaker Hall Entry',
		icon: CheckSVG,
	},
	{
		id: 4,
		title: 'Access to Sponsored F&B Areas',
		icon: CheckSVG,
	},
	{
		id: 5,
		title: 'WIFI Access',
		icon: CheckSVG,
	},
];
const LIST_PRICE: ListPriceType[] = [
	{
		id: 1,
		type: 'Early Bird',
		price: 'FREE',
		desc: '* Valid until 10 May',
	},
	{
		id: 2,
		type: 'Regular',
		price: '€50 +vat',
		desc: '* Valid until 3 June',
	},
	{
		id: 3,
		type: 'On Spot',
		price: '€100 +vat',
		desc: '*Online registration closed, only available On Spot 8 & 9 June at Palais des Sports – Spyros Kyprianou',
	},
];
function BookYourSpot() {
	return (
		<div style={{ backgroundColor: '#000' }} className="pb-2">
			<div className="container">
				<h1
					className="text-center text-5xl lg:text-8xl font-bold"
					data-aos="fade-right"
				>
					Book Your Spot
				</h1>
				<div
					className="flex lg:flex-nowrap flex-wrap sm:flex-wrap justify-center my-5"
					data-aos="zoom-in-up"
				>
					<BookItem
						title="P1"
						desc="FX / CFD / Stock / Crypto RETAIL brokers"
						subtitle="(predominant main business of the registering company is accepting and dealing with retail customers)"
						LIST_CHECK={LIST_CHECK}
						LIST_PRICE={LIST_PRICE}
					/>
					<BookItem
						title="P2"
						desc="Affiliate / IB / Fund manager / Portfolio Manager / Family Office Pass"
						LIST_CHECK={LIST_CHECK}
						LIST_PRICE={LIST_PRICE}
						bgc="#009011"
					/>
					<BookItem
						title="P3"
						desc="Service Providers / Marketing Solutions / Payment Solutions / Technology Providers"
						LIST_CHECK={LIST_CHECK}
						LIST_PRICE={LIST_PRICE}
						bgc="#e87217"
					/>
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
		</div>
	);
}

export default BookYourSpot;
