'use client';
import React from 'react';
import { styled } from '@mui/material';
import BackgroundTN from '../../public/images/technologies/background.png';
import Image01 from '../../public/images/TellMore/image_01.png';
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
				width: '300px',
			},
			// PC
			[theme.breakpoints.up('lg')]: {
				width: '350px',
			},
			[theme.breakpoints.down('lg')]: {
				width: '350px',
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

export default function TellMeMoreCP() {
	return (
		<div
			className="w-full h-full flex justify-center items-center"
			style={{
				backgroundImage: `url(${BackgroundTN?.src})`,
				backgroundSize: '100% 100%',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',
			}}
		>
			<div className="container">
				<ItemStylesContainer cols={2} spacing="8px">
					<div className="item_content flex flex-col justify-center items-start">
						<div className="text-black text-[30px] font-bold mb-2">
							Electronic
						</div>
						<div className="text-black text-[28px] font-bold mb-5">
							KNOW YOUR CUSTOMER
						</div>
						<div className="text-[#494949] text-[16px] font-medium mb-2 ">
							AI-Powered techonogy
						</div>
						<div className="text-[#494949] text-[16px] font-medium mb-2 ">
							Securely and accurately identify your customer.
						</div>
						<Link
							href="##"
							className="font-bold text-center text-[18px] mt-3 text-white rounded-md bg-black w-[50%] py-2 uppercase"
						>
							Tell me more
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
