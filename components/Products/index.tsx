'use client';
import React from 'react';
import { styled } from '@mui/material';
import Image01 from '../../public/images/products/image_01.png';
import Image02 from '../../public/images/products/image_02.png';
import Image03 from '../../public/images/products/image_03.png';
import Image from 'next/image';
import Link from 'next/link';

type ItemStylesContainerType = {
	theme?: any;
	cols?: any;
	spacing?: string;
};

const ItemStylesContainer: any = styled('div')(
	({ theme, cols, spacing }: ItemStylesContainerType) => ({
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		gap: '16px',
		width: '100%',
		height: '100%',
		'& .item_content': {
			// mobile
			[theme.breakpoints.up('xs')]: {
				width: '100%',
			},
			// Tablet
			[theme.breakpoints.between('sm', 'md')]: {
				width: '350px',
			},
			// PC
			[theme.breakpoints.up('lg')]: {
				width: '330px',
			},
			[theme.breakpoints.down('lg')]: {
				width: '330px',
			},
			borderRadius: '8px',
			backgroundColor: '#fff',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'space-between',
			color: '#000',
			minHeight: '350px',
			overflow: 'hidden',
		},
	}),
);

export default function ProductsCP() {
	return (
		<div className="w-full h-full flex justify-center items-center">
			<div className="container">
				<div className="font-bold text-[30px] text-[#0142f8] mb-2">
					Products
				</div>
				<div className="text-[20px] mb-7 text-[#494949]">
					Production API which currently serve millions user of Zalo
				</div>
				<ItemStylesContainer cols={3} spacing="8px">
					<div className="item_content w-full">
						<div className="w-full h-[250px]">
							<Image
								src={Image01?.src}
								width={100}
								height={100}
								className="w-full h-full"
								alt="Image"
								sizes="fill"
							/>
						</div>
						<div className="flex-1 flex flex-col items-center justify-start p-3 min-h-[200px]">
							<div className="font-bold text-center text-[22px] my-2">
								Computer Vision
							</div>
							<div className="leading-6 text-[18px] w-[80%] text-center">
								Understand meaningful information from digital
								images or videos.
							</div>
							<div className="flex gap-2 items-center justify-center mt-5 w-[80%]">
								<Link
									href="##"
									className="border border-[#ccc] text-center rounded-md py-2 w-[50%] hover:bg-black hover:text-white transition-all duration-200"
								>
									View more
								</Link>
							</div>
						</div>
					</div>
					<div className="item_content w-full">
						<div className="w-full h-[250px]">
							<Image
								src={Image02?.src}
								width={100}
								height={100}
								className="w-full h-full"
								alt="Image"
								sizes="fill"
							/>
						</div>
						<div className="flex-1 flex flex-col items-center justify-start p-3 min-h-[200px]">
							<div className="font-bold text-center text-[22px] my-2">
								Computer Vision
							</div>
							<div className="leading-6 text-[18px] w-[80%] text-center">
								Understand meaningful information from digital
								images or videos.
							</div>
							<div className="flex gap-2 items-center justify-center mt-5 w-[80%]">
								<Link
									href="##"
									className="border border-[#ccc] text-center rounded-md py-2 w-[50%] hover:bg-black hover:text-white transition-all duration-200"
								>
									View more
								</Link>
							</div>
						</div>
					</div>
					<div className="item_content w-full">
						<div className="w-full h-[250px]">
							<Image
								src={Image03?.src}
								width={100}
								height={100}
								className="w-full h-full"
								alt="Image"
								sizes="fill"
							/>
						</div>
						<div className="flex-1 flex flex-col items-center justify-start p-3 min-h-[200px]">
							<div className="font-bold text-center text-[22px] my-2">
								Computer Vision
							</div>
							<div className="leading-6 text-[18px] w-[80%] text-center">
								Understand meaningful information from digital
								images or videos.
							</div>
							<div className="flex gap-2 items-center justify-center mt-5 w-[80%]">
								<Link
									href="##"
									className="border border-[#ccc] text-center rounded-md py-2 w-[50%] hover:bg-black hover:text-white transition-all duration-200"
								>
									View more
								</Link>
							</div>
						</div>
					</div>
				</ItemStylesContainer>
			</div>
		</div>
	);
}
