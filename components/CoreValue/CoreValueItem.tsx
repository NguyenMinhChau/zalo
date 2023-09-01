import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type CoreValueItemType = {
	title?: string;
	desc?: string;
	urlImage?: any;
	urlLink?: any;
};

export default function CoreValueItem({
	title = '-',
	desc = '-',
	urlImage,
	urlLink = '##',
}: CoreValueItemType) {
	return (
		<div className={`group item_content`}>
			<div className="w-full h-full flex flex-col justify-between group-hover:bg-[#4b7ffb] duration-500 p-3 transition-all group">
				<div
					className={`flex-1 flex flex-col items-center justify-start mb-[35px]`}
				>
					<div
						className={`flex w-[80%] flex-col items-center justify-center group-hover:flex-row group-hover:items-center group-hover:justify-start group-hover:gap-3 duration-500 transition-all group-hover:mb-3`}
					>
						<Image
							src={urlImage}
							width={60}
							height={60}
							alt="Image"
							className={`group-hover:w-[30px] group-hover:h-[30px]`}
						/>
						<div
							className={`font-bold text-center text-[18px] my-5 group-hover:text-white duration-500 transition-all group-hover:w-[30%]`}
						>
							{title}
						</div>
					</div>
					<div
						className={`leading-6 w-[80%] text-center group-hover:text-white duration-500 transition-all group-hover:text-left`}
					>
						{desc}
					</div>
				</div>
				<div className="opacity-0 flex justify-start w-full group-hover:opacity-100 duration-500 transition-all">
					<Link
						href={urlLink}
						className="font-bold text-[#76ffff] text-[18px] capitalize"
					>
						Learn more
					</Link>
				</div>
			</div>
		</div>
	);
}
