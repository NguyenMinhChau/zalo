import Image from 'next/image';
import React from 'react';
import styles from './styles.module.css';
import { BookItemType } from '../../types/bookItem';
function BookItem({
	title,
	desc,
	subtitle,
	LIST_CHECK,
	LIST_PRICE,
	bgc,
}: BookItemType) {
	return (
		<div className="w-full lg:w-1/3 sm:w-1/2 rounded-xl overflow-hidden mx-2 mb-2 flex flex-col">
			<div
				className="p-3"
				style={{
					backgroundColor: bgc ? bgc : '#4a78ed',
				}}
			>
				<h1 className="font-bold text-6xl">{title}</h1>
				<h3 className="text-lg">{desc}</h3>
				<div className="text-sm">{subtitle}</div>
			</div>
			<div
				className="pb-3 flex flex-col flex-1"
				style={{ backgroundColor: '#fff' }}
			>
				<ul className={`list-none ${styles.ul} flex-1 mb-2`}>
					{LIST_CHECK.map((item) => {
						return (
							<li
								className="flex items-center py-3 px-2"
								key={item.id}
							>
								<Image
									src={item.icon}
									alt="check"
									className="mr-3"
									width={15}
									height={15}
								/>
								<p className="italic" style={{ color: '#000' }}>
									{item.title}
								</p>
							</li>
						);
					})}
				</ul>
				<ul className="list-none px-2">
					{LIST_PRICE.map((item) => {
						return (
							<li
								key={item.id}
								className="p-2 rounded-lg mb-2"
								style={{
									backgroundColor: '#e6e6e6',
									color: '#999999',
								}}
							>
								<div className="flex justify-between items-center">
									<p>{item.type}</p>
									<p>{item.price}</p>
								</div>
								<div>
									<p className="text-justify text-xs">
										{item.desc}
									</p>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}

export default BookItem;
