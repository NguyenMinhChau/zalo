import React from 'react';
import ScheduleItem from './ScheduleItem';
import HeaderSchedule from './HeaderSchedule';
import Link from 'next/link';

function EventSchedule() {
	return (
		<div className="my-5 container">
			<div
				data-aos="fade-right"
				className="font-bold text-2xl lg:text-4xl text-[#000] mb-3"
			>
				EVENT SCHEDULE
			</div>
			<div className="flex lg:justify-start sm:justify-center flex-wrap lg:flex-wrap -mx-2">
				<div
					data-aos="zoom-in"
					className="w-full lg:w-1/4 sm:w-1/2 rounded-lg bg-primary p-3 mx-2 my-2 flex flex-col"
				>
					<HeaderSchedule month="JUNE" date={7} />
					<Link
						href="/"
						className="dark:bg-white rounded-lg p-3 flex-1"
					>
						<ScheduleItem
							title="WELCOME PARTY"
							location="Columbia Beach"
							time="17:00 - 21:00"
						/>
					</Link>
				</div>
				<div
					data-aos="zoom-in"
					className="w-full lg:w-1/4 sm:w-1/2 rounded-lg bg-primary p-3 mx-2 my-2 flex flex-col"
				>
					<HeaderSchedule month="JUNE" date={8} />
					<Link
						href="/"
						className="dark:bg-white rounded-lg p-3 flex-1"
					>
						<ScheduleItem
							title="EXPO DAY 1"
							location="Palais des Sports – Spyros Kyprianou"
							time="9:00 - 18:00"
						/>
						<ScheduleItem
							title="NIGHT PARTY"
							location="Theama Venue"
							time="21:00 - Late"
						/>
					</Link>
				</div>
				<div
					data-aos="zoom-in"
					className="w-full lg:w-1/4 sm:w-1/2 rounded-lg bg-primary p-3 mx-2 my-2 flex flex-col"
				>
					<HeaderSchedule month="JUNE" date={9} />
					<Link
						href="/"
						className="dark:bg-white rounded-lg p-3 flex-1"
					>
						<ScheduleItem
							title="EXPO DAY 2"
							location="Palais des Sports — Spyros Kyprianou"
							time="10:00 - 17:00"
						/>
						<ScheduleItem
							title="ULTIMATE FINTECH AWARDS EVENING & CEREMONY"
							location="Columbia Beach"
							time="17:30"
						/>
					</Link>
				</div>
			</div>
			<div className="font-bold text-center my-3 dark:text-primarytext">
				<Link className="lg:text-2xl text-lg" href="/">
					Full Event Schedule Breakdown here →
				</Link>{' '}
			</div>
		</div>
	);
}

export default EventSchedule;
