import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type ProductItemType = {
	title?: string;
	desc?: string;
	urlLink?: string;
	urlImage?: any;
};

export default function ProductItem({
	title = '-',
	desc = '-',
	urlLink = '##',
	urlImage,
}: ProductItemType) {
	return (
		<div className="item_content w-full">
			<div className="w-full h-[250px]">
				<Image
					src={urlImage}
					width={100}
					height={100}
					className="w-full h-full"
					alt="Image"
					sizes="fill"
				/>
			</div>
			<div className="flex-1 flex flex-col items-center justify-start p-3 min-h-[200px]">
				<div className="font-bold text-center text-[22px] my-2">
					{title}
				</div>
				<div className="leading-6 text-[18px] w-[80%] text-center">
					{desc}
				</div>
				<div className="flex flex-1 gap-2 items-end justify-center mt-5 w-[80%]">
					<Link
						href={urlLink}
						className="border border-[#ccc] text-center rounded-md py-2 w-[50%] hover:bg-black hover:text-white transition-all duration-200"
					>
						View more
					</Link>
				</div>
			</div>
		</div>
	);
}
