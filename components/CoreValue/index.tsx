'use client';
import React from 'react';
import { styled } from '@mui/material';
import BackgroundTN from '../../public/images/technologies/background.png';
import ComputerVision from '../../public/images/technologies/computer_vision.png';
import SpeechProcessing from '../../public/images/technologies/speech_processing.png';
import CoreValueItem from './CoreValueItem';
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
			backgroundColor: '#fff',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'space-between',
			color: '#000',
			overflow: 'hidden',
		},
	}),
);

export default function CoreValueCP() {
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
				<div className="font-bold text-[30px] lg:text-[45px] md:text-[35px] text-[#0142f8] mb-6">
					Core Values
				</div>
				<ItemStylesContainer cols={4} spacing="8px">
					<CoreValueItem
						title="Maximization"
						desc="Optimize the process and available resources with best practice"
						urlImage={ComputerVision?.src}
						urlLink={routers.aboutUs}
					/>
					<CoreValueItem
						title="Ecosystem"
						desc="Bring on the comprehensive ecosystem through bespoke solutions"
						urlImage={SpeechProcessing?.src}
						urlLink={routers.aboutUs}
					/>

					<CoreValueItem
						title="Growth"
						desc="Obtain the sustainability and clear roadmap of growth"
						urlImage={ComputerVision?.src}
						urlLink={routers.aboutUs}
					/>

					<CoreValueItem
						title="Accessibility"
						desc="Reach out connections in the community and diverse platforms"
						urlImage={SpeechProcessing?.src}
						urlLink={routers.aboutUs}
					/>
				</ItemStylesContainer>
			</div>
		</div>
	);
}
