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
		justifyContent: 'center',
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
				width: '250px',
			},
			borderRadius: '8px',
			backgroundColor: '#fff',
			// padding: '12px',
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

export default function TechnologiesCP() {
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
			<div className="px-[30px] lg:px-[55px] lg:w-[1170px] py-[40px]">
				<div className="font-bold text-[30px] text-[#0142f8] mb-7">
					Technologies
				</div>
				<ItemStylesContainer cols={4} spacing="8px">
					<div className={`group item_content`}>
						<div className="w-full h-full flex flex-col justify-between group-hover:bg-[#4b7ffb] duration-500 p-3 transition-all group">
							<div
								className={`flex-1 flex flex-col items-center justify-start`}
							>
								<div
									className={`flex flex-col items-center justify-center group-hover:flex-row group-hover:items-center group-hover:justify-start group-hover:gap-3 duration-500 transition-all group-hover:mb-3`}
								>
									<Image
										src={ComputerVision?.src}
										width={60}
										height={60}
										alt="Image"
										className={`group-hover:w-[30px] group-hover:h-[30px]`}
									/>
									<div
										className={`font-bold text-center text-[18px] my-5 group-hover:text-white duration-500 transition-all group-hover:w-[30%]`}
									>
										Computer Vision
									</div>
								</div>
								<div
									className={`leading-6 w-[80%] text-center group-hover:text-white duration-500 transition-all group-hover:text-left`}
								>
									Understand meaningful information from
									digital images or videos.
								</div>
							</div>
							<div className="opacity-0 flex justify-start w-full group-hover:opacity-100 duration-500 transition-all">
								<Link
									href="##"
									className="font-bold text-[#76ffff] text-[18px] capitalize"
								>
									Learn more
								</Link>
							</div>
						</div>
					</div>
					<div className={`group item_content`}>
						<div className="w-full h-full flex flex-col justify-between group-hover:bg-[#4b7ffb] duration-500 p-3 transition-all group">
							<div
								className={`flex-1 flex flex-col items-center justify-start`}
							>
								<div
									className={`flex flex-col items-center justify-center group-hover:flex-row group-hover:items-center group-hover:justify-start group-hover:gap-3 duration-500 transition-all group-hover:mb-3`}
								>
									<Image
										src={SpeechProcessing?.src}
										width={60}
										height={60}
										alt="Image"
										className={`group-hover:w-[30px] group-hover:h-[30px]`}
									/>
									<div
										className={`font-bold text-center text-[18px] my-5 group-hover:text-white duration-500 transition-all group-hover:w-[30%]`}
									>
										Speech Processing
									</div>
								</div>
								<div
									className={`leading-6 w-[80%] text-center group-hover:text-white duration-500 transition-all group-hover:text-left`}
								>
									Enable voice communication between human and
									computers.
								</div>
							</div>
							<div className="opacity-0 flex justify-start w-full group-hover:opacity-100 duration-500 transition-all">
								<Link
									href="##"
									className="font-bold text-[#76ffff] text-[18px] capitalize"
								>
									Learn more
								</Link>
							</div>
						</div>
					</div>
					<div className={`group item_content`}>
						<div className="w-full h-full flex flex-col justify-between group-hover:bg-[#4b7ffb] duration-500 p-3 transition-all group">
							<div
								className={`flex-1 flex flex-col items-center justify-start`}
							>
								<div
									className={`flex flex-col items-center justify-center group-hover:flex-row group-hover:items-center group-hover:justify-start group-hover:gap-3 duration-500 transition-all group-hover:mb-3`}
								>
									<Image
										src={ComputerVision?.src}
										width={60}
										height={60}
										alt="Image"
										className={`group-hover:w-[30px] group-hover:h-[30px]`}
									/>
									<div
										className={`font-bold text-center text-[18px] my-5 group-hover:text-white duration-500 transition-all group-hover:w-[30%]`}
									>
										Computer Vision
									</div>
								</div>
								<div
									className={`leading-6 w-[80%] text-center group-hover:text-white duration-500 transition-all group-hover:text-left`}
								>
									Understand meaningful information from
									digital images or videos.
								</div>
							</div>
							<div className="opacity-0 flex justify-start w-full group-hover:opacity-100 duration-500 transition-all">
								<Link
									href="##"
									className="font-bold text-[#76ffff] text-[18px] capitalize"
								>
									Learn more
								</Link>
							</div>
						</div>
					</div>
					<div className={`group item_content`}>
						<div className="w-full h-full flex flex-col justify-between group-hover:bg-[#4b7ffb] duration-500 p-3 transition-all group">
							<div
								className={`flex-1 flex flex-col items-center justify-start`}
							>
								<div
									className={`flex flex-col items-center justify-center group-hover:flex-row group-hover:items-center group-hover:justify-start group-hover:gap-3 duration-500 transition-all group-hover:mb-3`}
								>
									<Image
										src={SpeechProcessing?.src}
										width={60}
										height={60}
										alt="Image"
										className={`group-hover:w-[30px] group-hover:h-[30px]`}
									/>
									<div
										className={`font-bold text-center text-[18px] my-5 group-hover:text-white duration-500 transition-all group-hover:w-[30%]`}
									>
										Speech Processing
									</div>
								</div>
								<div
									className={`leading-6 w-[80%] text-center group-hover:text-white duration-500 transition-all group-hover:text-left`}
								>
									Enable voice communication between human and
									computers.
								</div>
							</div>
							<div className="opacity-0 flex justify-start w-full group-hover:opacity-100 duration-500 transition-all">
								<Link
									href="##"
									className="font-bold text-[#76ffff] text-[18px] capitalize"
								>
									Learn more
								</Link>
							</div>
						</div>
					</div>
				</ItemStylesContainer>
			</div>
		</div>
	);
}
