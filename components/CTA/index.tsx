'use client';
import React from 'react';
import { styled } from '@mui/material';
import BackgroundTN from '../../public/images/technologies/background.png';
import Image01 from '../../public/images/TellMore/image_01.png';
import Image from 'next/image';
import Link from 'next/link';
import routers from '../../routers/routers';

type ItemStylesContainerType = {
	theme?: any;
	cols?: any;
	spacing?: string;
};

const ItemStylesContainer: any = styled('div')(
	({ theme, cols, spacing }: ItemStylesContainerType) => ({
		display: 'flex',
		flexWrap: 'wrap',
		[theme.breakpoints.up('xs')]: {
			justifyContent: 'center',
		},
		// Tablet
		[theme.breakpoints.between('sm', 'md')]: {
			justifyContent: 'space-between',
		},
		// PC
		[theme.breakpoints.up('lg')]: {
			justifyContent: 'space-between',
		},
		[theme.breakpoints.between('md', 'lg')]: {
			justifyContent: 'space-between',
		},
		gap: '16px',
		width: '100%',
		height: '100%',
		'& .item_content': {
			// mobile
			[theme.breakpoints.up('xs')]: {
				// flex: `1 1 calc((100% / 1) - (${spacing} * 2))`,
				width: `calc((100% / 1) - (${spacing} * 2))`,
			},
			// Tablet
			[theme.breakpoints.between('sm', 'md')]: {
				// flex: `1 1 calc((100% / 2) - (${spacing} * 2))`,
				width: `calc((100% / 2) - (${spacing} * 2))`,
			},
			// PC
			[theme.breakpoints.up('lg')]: {
				// flex: `1 1 calc((100% / ${cols}) - (${spacing} * 2))`,
				width: `calc((100% / ${cols}) - (${spacing} * 2))`,
			},
			[theme.breakpoints.between('md', 'lg')]: {
				width: '48%',
			},
			borderRadius: '8px',
			display: 'flex',
			flexDirection: 'column',
			color: '#000',
			minHeight: '350px',
			overflow: 'hidden',
		},
	}),
);

export default function CTACP() {
	return (
		<div
			className="w-full h-full flex justify-center items-center py-[70px]"
			style={{
				backgroundImage: `url(${BackgroundTN?.src})`,
				backgroundSize: '100% 100%',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',
			}}
		>
			<div className="container lg:px-[69px] md:px-[50px]">
				<div className="font-bold text-[30px] lg:text-[45px] md:text-[35px] text-[#0142f8] mb-2">
					CTA
				</div>
				<ItemStylesContainer cols={2} spacing="8px">
					<div className="item_content flex flex-col justify-center items-start">
						<div className="text-black lg:text-[50px] md:text-[40px] text-[30px] font-bold">
							On click,
						</div>
						<div className="text-black lg:text-[35px] md:text-[25px] text-[20px] font-bold mb-5">
							ALL-IN-ONE SOLUTIONS
						</div>
						<div className="text-[#494949] lg:text-[16px] md:text-[14px] text-[12px] font-medium mb-2 ">
							We personalize solutions
						</div>
						<div className="text-[#494949] lg:text-[16px] md:text-[14px] text-[12px] font-medium mb-2 ">
							to match your current status and threshold of
							expectation.
						</div>
						<Link
							href={routers.contactUs}
							className="font-bold text-center lg:text-[18px] md:text-[16px] text-[14px] mt-3 text-white rounded-md bg-black w-[50%] py-2 uppercase"
						>
							Contact us
						</Link>
					</div>
					<div className="item_content">
						<div className="w-full h-[100%]">
							<Image
								src={Image01?.src}
								width={100}
								height={100}
								className="w-full h-full"
								alt="Image"
								sizes="fill"
							/>
						</div>
					</div>
				</ItemStylesContainer>
			</div>
		</div>
	);
}
