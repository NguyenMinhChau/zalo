'use client';
import React from 'react';
import { styled } from '@mui/material';
import BackgroundTN from '../../public/images/technologies/background.png';
import ComputerVision from '../../public/images/technologies/computer_vision.png';
import SpeechProcessing from '../../public/images/technologies/speech_processing.png';
import styles from './Technologies.module.css';
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
		gap: '16px',
		width: '100%',
		height: '100%',
		'& .item_content': {
			// mobile
			[theme.breakpoints.up('xs')]: {
				flex: `1 1 calc((100% / 1) - (${spacing} * 2))`,
			},
			// Tablet
			[theme.breakpoints.between('sm', 'md')]: {
				flex: `1 1 calc((100% / 2) - (${spacing} * 2))`,
			},
			// PC
			[theme.breakpoints.up('lg')]: {
				flex: `1 1 calc((100% / ${cols}) - (${spacing} * 2))`,
			},
			borderRadius: '8px',
			backgroundColor: '#fff',
			padding: '12px',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'space-between',
			color: '#000',
			minHeight: '350px',
		},
	}),
);

export default function TechnologiesCP() {
	return (
		<div
			className="w-full h-full"
			style={{
				background: `url(${BackgroundTN?.src})`,
				backgroundSize: '100% 100%',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',
			}}
		>
			<div className="px-[30px] py-[40px]">
				<div className="font-bold text-[30px] text-[#0142f8] mb-7">
					Technologies
				</div>
				<ItemStylesContainer cols={4} spacing="8px">
					<div className="item_content w-full">
						<div className="flex-1 flex flex-col items-center justify-start">
							<Image
								src={ComputerVision?.src}
								width={60}
								height={60}
								alt="Image"
							/>
							<div className="font-bold text-center text-[18px] my-5">
								Computer Vision
							</div>
							<div className="leading-6 w-[80%] text-center">
								Understand meaningful information from digital
								images or videos.
							</div>
						</div>
						<Link
							href="##"
							className="font-bold text-black text-[18px] capitalize"
						>
							Learn more
						</Link>
					</div>
					<div className="item_content w-full">
						<div className="flex-1 flex flex-col items-center justify-start">
							<Image
								src={SpeechProcessing?.src}
								width={60}
								height={60}
								alt="Image"
							/>
							<div className="font-bold text-center text-[18px] my-5">
								Speech Processing
							</div>
							<div className="leading-6 w-[80%] text-center">
								Enable voice communication between human and
								computers.
							</div>
						</div>
						<Link
							href="##"
							className="font-bold text-black text-[18px] capitalize"
						>
							Learn more
						</Link>
					</div>
					<div className="item_content w-full">
						<div className="flex-1 flex flex-col items-center justify-start">
							<Image
								src={ComputerVision?.src}
								width={60}
								height={60}
								alt="Image"
							/>
							<div className="font-bold text-center text-[18px] my-5">
								Computer Vision
							</div>
							<div className="leading-6 w-[80%] text-center">
								Understand meaningful information from digital
								images or videos.
							</div>
						</div>
						<Link
							href="##"
							className="font-bold text-black text-[18px] capitalize"
						>
							Learn more
						</Link>
					</div>
					<div className="item_content w-full">
						<div className="flex-1 flex flex-col items-center justify-start">
							<Image
								src={SpeechProcessing?.src}
								width={60}
								height={60}
								alt="Image"
							/>
							<div className="font-bold text-center text-[18px] my-5">
								Speech Processing
							</div>

							<div className="leading-6 w-[80%] text-center">
								Enable voice communication between human and
								computers.
							</div>
						</div>
						<Link
							href="##"
							className="font-bold text-black text-[18px] capitalize"
						>
							Learn more
						</Link>
					</div>
				</ItemStylesContainer>
			</div>
		</div>
	);
}
