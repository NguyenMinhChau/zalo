'use client';
import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { CounterUpType } from '../../types/counterup';
function CounterUp({ start, end, type }: CounterUpType) {
	return (
		<div
			className="flex w-1/3 flex-row lg:flex-col sm:flex-row xs:flex-col items-end lg:items-center text-center"
			data-aos="fade-down"
		>
			<div className="font-bold text-5xl" style={{ color: '#000' }}>
				<CountUp start={start} decimal="," end={end} redraw={true}>
					{({ countUpRef, start }) => (
						<VisibilitySensor onChange={start} delayedCall>
							<span ref={countUpRef} />
						</VisibilitySensor>
					)}
				</CountUp>
				<span className="text-black">+</span>
			</div>
			<div style={{ color: '#000' }}>{type}</div>
		</div>
	);
}

export default CounterUp;
