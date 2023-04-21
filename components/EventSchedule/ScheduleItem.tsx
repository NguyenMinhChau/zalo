import React from 'react';
import { ScheduleType } from '../../types/scheduleItem';

function ScheduleItem({ title, location, time }: ScheduleType) {
	return (
		<div className="">
			<h2 className="dark:text-black text-lg">{title}</h2>
			<p className="font-bold" style={{ color: '#000' }}>
				Location
			</p>
			<p style={{ color: 'rgba(0,0,0,0.6)' }}>{location}</p>
			<p className="font-bold" style={{ color: '#000' }}>
				Time
			</p>
			<p style={{ color: 'rgba(0,0,0,0.6)' }}>{time}</p>
		</div>
	);
}

export default ScheduleItem;
