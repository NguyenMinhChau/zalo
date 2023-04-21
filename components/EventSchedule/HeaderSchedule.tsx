import Image from 'next/image';
import React from 'react';
import ImageEventSchedule from '../../public/images/eventSchedule/image_event_schedule.svg';
import { HeaderScheduleType } from '../../types/scheduleItem';

function HeaderSchedule({ month, date }: HeaderScheduleType) {
	return (
		<>
			<h1 className="font-bold text-6xl">{month}</h1>
			<div className="flex justify-between mb-3">
				<p className="text-6xl font-bold dark:text-white">{date}</p>
				<Image
					src={ImageEventSchedule}
					alt="image"
					width={'60'}
					height={'60'}
				/>
			</div>
		</>
	);
}

export default HeaderSchedule;
