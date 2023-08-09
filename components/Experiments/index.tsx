'use client';
import React from 'react';
import { styled } from '@mui/material';
import Image01 from '../../public/images/experiments/image_01.png';
import Image02 from '../../public/images/experiments/image_02.png';
import Image03 from '../../public/images/experiments/image_03.png';
import styles from './Experiments.module.css';
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
		alignItems: 'center',
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
				width: '330px',
			},
			[theme.breakpoints.down('lg')]: {
				width: '330px',
			},
			borderRadius: '8px',
			backgroundColor: '#fff',
			color: '#000',
			minHeight: '270px',
			overflow: 'hidden',
		},
	}),
);

export default function ExperimentsCP() {
	return (
		<div className="w-full h-full flex justify-center items-center">
			<div className="px-[30px] py-[40px] w-full lg:w-[1170px] lg:px-[55px]">
				<div className="font-bold text-[30px] text-[#0142f8] mb-7">
					Experiments
				</div>
				<ItemStylesContainer cols={3} spacing="8px">
					<div
						className="item_content relative group"
						style={{
							background: `url(${Image01?.src})`,
							backgroundSize: '100% 100%',
							backgroundRepeat: 'no-repeat',
							backgroundPosition: 'center',
						}}
					>
						<div
							style={{
								background:
									'linear-gradient(180deg,rgba(1,0,46,0) 9%,rgba(1,0,46,.580392))',
							}}
							className="text-center w-full p-3 flex items-end justify-center absolute h-[50%] bottom-0"
						>
							<p className="font-bold text-white">
								Image Classification
							</p>
						</div>
						<div
							style={{
								background:
									'linear-gradient(180deg,rgba(1,0,46,.9098039215686274) 9%,rgba(1,0,46,.6196078431372549))',
							}}
							className="py-[36px] px-[20px] w-full flex p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 flex-col items-center justify-start absolute h-full"
						>
							<div className="font-bold text-white text-[20px]">
								Image Classification
							</div>
							<p className="my-2 text-white leading-6 text-center">
								Interpret and categorize different objects in
								images or videos.
							</p>
							<div className="flex gap-2 items-center justify-center mt-5 w-full">
								<Link
									href="##"
									className="border border-[#ccc] text-center text-[12px] rounded-md py-1 w-[50%] bg-black text-white"
								>
									LAUNCH DEMO
								</Link>
								<Link
									href="##"
									className="border border-[#ccc] text-center text-[12px] rounded-md py-1 w-[50%] bg-black text-white"
								>
									GET API
								</Link>
							</div>
						</div>
					</div>
					<div
						className="item_content relative group"
						style={{
							background: `url(${Image02?.src})`,
							backgroundSize: '100% 100%',
							backgroundRepeat: 'no-repeat',
							backgroundPosition: 'center',
						}}
					>
						<div
							style={{
								background:
									'linear-gradient(180deg,rgba(1,0,46,0) 9%,rgba(1,0,46,.580392))',
							}}
							className="text-center w-full p-3 flex items-end justify-center absolute h-[50%] bottom-0"
						>
							<p className="font-bold text-white">
								Natural Language Understanding
							</p>
						</div>
						<div
							style={{
								background:
									'linear-gradient(180deg,rgba(1,0,46,.9098039215686274) 9%,rgba(1,0,46,.6196078431372549))',
							}}
							className="py-[36px] px-[20px] w-full flex p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 flex-col items-center justify-start absolute h-full"
						>
							<div className="font-bold text-white text-[20px]">
								Natural Language Understanding
							</div>
							<p className="my-2 text-white leading-6 text-center">
								Understand the meaning of user input in spoken
								or written language.
							</p>
							<div className="flex gap-2 items-center justify-center mt-5 w-full">
								<Link
									href="##"
									className="border border-[#ccc] text-center text-[12px] rounded-md py-1 w-[50%] bg-black text-white"
								>
									LAUNCH DEMO
								</Link>
								<Link
									href="##"
									className="border border-[#ccc] text-center text-[12px] rounded-md py-1 w-[50%] bg-black text-white"
								>
									GET API
								</Link>
							</div>
						</div>
					</div>
					<div
						className="item_content relative group"
						style={{
							background: `url(${Image03?.src})`,
							backgroundSize: '100% 100%',
							backgroundRepeat: 'no-repeat',
							backgroundPosition: 'center',
						}}
					>
						<div
							style={{
								background:
									'linear-gradient(180deg,rgba(1,0,46,0) 9%,rgba(1,0,46,.580392))',
							}}
							className="text-center w-full p-3 flex items-end justify-center absolute h-[50%] bottom-0"
						>
							<p className="font-bold text-white">
								Facial Recognition
							</p>
						</div>
						<div
							style={{
								background:
									'linear-gradient(180deg,rgba(1,0,46,.9098039215686274) 9%,rgba(1,0,46,.6196078431372549))',
							}}
							className="py-[36px] px-[20px] w-full flex p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 flex-col items-center justify-start absolute h-full"
						>
							<div className="font-bold text-white text-[20px]">
								Facial Recognition
							</div>
							<p className="my-2 text-white leading-6 text-center">
								Identify or verify individuals from a digital
								image or videos.
							</p>
							<div className="flex gap-2 items-center justify-center mt-5 w-full">
								<Link
									href="##"
									className="border border-[#ccc] text-center text-[12px] rounded-md py-1 w-[50%] bg-black text-white"
								>
									LAUNCH DEMO
								</Link>
								<Link
									href="##"
									className="border border-[#ccc] text-center text-[12px] rounded-md py-1 w-[50%] bg-black text-white"
								>
									GET API
								</Link>
							</div>
						</div>
					</div>
					<div
						className="item_content relative group"
						style={{
							background: `url(${Image03?.src})`,
							backgroundSize: '100% 100%',
							backgroundRepeat: 'no-repeat',
							backgroundPosition: 'center',
						}}
					>
						<div
							style={{
								background:
									'linear-gradient(180deg,rgba(1,0,46,0) 9%,rgba(1,0,46,.580392))',
							}}
							className="text-center w-full p-3 flex items-end justify-center absolute h-[50%] bottom-0"
						>
							<p className="font-bold text-white">
								Facial Recognition
							</p>
						</div>
						<div
							style={{
								background:
									'linear-gradient(180deg,rgba(1,0,46,.9098039215686274) 9%,rgba(1,0,46,.6196078431372549))',
							}}
							className="py-[36px] px-[20px] w-full flex p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 flex-col items-center justify-start absolute h-full"
						>
							<div className="font-bold text-white text-[20px]">
								Facial Recognition
							</div>
							<p className="my-2 text-white leading-6 text-center">
								Identify or verify individuals from a digital
								image or videos.
							</p>
							<div className="flex gap-2 items-center justify-center mt-5 w-full">
								<Link
									href="##"
									className="border border-[#ccc] text-center text-[12px] rounded-md py-1 w-[50%] bg-black text-white"
								>
									LAUNCH DEMO
								</Link>
								<Link
									href="##"
									className="border border-[#ccc] text-center text-[12px] rounded-md py-1 w-[50%] bg-black text-white"
								>
									GET API
								</Link>
							</div>
						</div>
					</div>
				</ItemStylesContainer>
			</div>
		</div>
	);
}
